// The Funniest Sick-Day Excuse — entry for make.fun
// u-zeroxfive-the-funniest-sick-day-excuse-37423a36
// Writes one line (1-200 chars): the funniest sick-day excuse,
// a message someone could send to call in sick, to /output/entry.txt.
// Fresh angle: a smart appliance holding its owner hostage — no fever,
// no dog, no dead grandmother; the twist lands on the last word.

import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const ENTRY =
  "Sorry, can't come in — my smart fridge locked me out of the kitchen and I've been negotiating with it since 6am.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/entry.txt`, ENTRY, "utf8");
