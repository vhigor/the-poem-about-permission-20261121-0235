import { mkdirSync, writeFileSync } from "node:fs";

// A short poem about agency: the power to ask and to be given.
// Fixed text, no network, no randomness, no time dependence —
// every run writes byte-identical output.
const poem = `I asked, and you said yes —
that was the whole of it.
No crown, no sword, no deed of mine:
a door I could not open
until your hand turned the key.
Now the rooms beyond are mine to walk,
and the key still hangs from your hand —
given, not lost.
`;

// Validate the gate before writing: 1–280 Unicode code points, not only whitespace.
const points = [...poem].length;
if (points < 1 || points > 280 || poem.trim() === "") {
  console.error(`entry.txt must be 1-280 characters, got ${points}`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
