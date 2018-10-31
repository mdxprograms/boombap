import bap from "bap";

export const compressor = bap.compressor({
  threshold: -30,
  gain: 110
});

export const reverb = bap.reverb({
  filter: "notch",
  cutoff: 1000,
  wet: 5,
  dry: 80
});
