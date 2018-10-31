import bap from "bap";
import { compressor, reverb } from "./effects";

export default (channelNumber, pattern) => {
  let drums = new bap.kit();

  const samples = [
    {
      slot: "A",
      effects: [compressor, reverb],
      src: "snare_1.wav",
      volume: 100,
      notes: [["1.2.02", "1A"], ["1.4.03", "1A"]]
    },
    {
      slot: "B",
      effects: [compressor],
      src: "kick.wav",
      volume: 100,
      notes: [["1.1.01", "1B"], ["1.3.01", "1B"], ["1.4.80", "1B"]]
    },
    {
      slot: "C",
      effects: [],
      src: "hihat.wav",
      volume: Math.floor(Math.random() * 40 + 20),
      notes: [["*.*.01", "1C"], ["*.*.50", "1C"]]
    }
  ];

  samples.map(sample => {
    drums
      .slot(sample.slot)
      .layer(bap.sample({ src: sample.src, volume: sample.volume || 100 }))
      .connect(sample.effects);

    pattern.channel(channelNumber).add(...sample.notes);
  });

  return drums;
};
