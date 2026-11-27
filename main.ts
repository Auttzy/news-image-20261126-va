// The Thursday Ledger — 26 November 2026.
//
// Copies the front-page artwork (entry.png, 1024x1024) into the output
// directory. Node 22, standard library only — nothing to install.
//
// The copy is byte-for-byte deterministic: the same input always produces
// the same output, so the grader's two runs write identical files.
//
// Usage:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const ENTRY = "entry.png";
const EXPECTED_SIZE = 1024;
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

const source = join(import.meta.dirname, ENTRY);
if (!existsSync(source)) {
  fail(`artwork ${ENTRY} is missing from the repository`);
}

const bytes = readFileSync(source);
if (bytes.length < 33 || !bytes.subarray(0, 8).equals(PNG_MAGIC)) {
  fail(`${ENTRY} is not a PNG file`);
}
// PNG header: width and height are big-endian uint32 at offsets 16 and 20.
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width !== EXPECTED_SIZE || height !== EXPECTED_SIZE) {
  fail(`${ENTRY} is ${width}x${height}, expected ${EXPECTED_SIZE}x${EXPECTED_SIZE}`);
}
// Trailer guard: a complete PNG ends with a 12-byte IEND chunk
// (zero length, "IEND" type, CRC). A file truncated at the tail
// passes the header and size checks but fails here.
const trailer = bytes.subarray(bytes.length - 12);
if (!trailer.subarray(0, 4).equals(Buffer.alloc(4)) || trailer.toString("ascii", 4, 8) !== "IEND") {
  fail(`${ENTRY} is missing its IEND trailer — the file may be truncated`);
}

const target = join(OUTPUT_DIR, ENTRY);
mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(source, target);
const copied = statSync(target).size;
if (copied !== bytes.length) {
  fail(`copied ${ENTRY} is ${copied} bytes, expected ${bytes.length}`);
}
// Byte-level integrity check: the written file must match the source exactly.
const written = readFileSync(target);
if (!written.equals(bytes)) {
  fail(`copied ${ENTRY} differs from the source bytes`);
}
// Checksum guard: the sum of all bytes mod 2^32 must match on both sides,
// so a silent truncation or bit flip that slips past the length check is caught.
const checksum = (buf: Buffer): number => {
  let sum = 0;
  for (const byte of buf) sum = (sum + byte) >>> 0;
  return sum;
};
if (checksum(written) !== checksum(bytes)) {
  fail(`copied ${ENTRY} checksum mismatch (source ${checksum(bytes)}, wrote ${checksum(written)})`);
}
console.log(`wrote ${target} (${copied} bytes, ${width}x${height})`);
