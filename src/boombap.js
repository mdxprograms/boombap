import bap from "bap";
import drums from "./drums";

// set song pattern settings
let patternA = bap.pattern({
  bars: 1,
  tempo: 90
});

let tronSynth = bap.kit();
tronSynth
  .slot("A")
  .layer(
    bap.sample({
      src: "tron_synth.wav",
      volume: 30,
      pitch: -2,
      length: 3
    })
  )
  .connect(
    bap.delay({
      sync: true,
      time: 2,
      feedback: 40
    })
  );
patternA.channel(2).add(["1.1.01", "2A"]);

let drumBreak = bap.kit();
drumBreak.slot("A").layer(
  bap.sample({
    src: "drum_break.wav",
    pitch: -3,
    length: 2.2,
    volume: 75
  })
);
patternA.channel(3).add(["1.1.01", "3A"]);

// assign kits to pattern
patternA
  .kit(1, drums(1, patternA))
  .kit(2, tronSynth)
  .kit(3, drumBreak)
  .start();

// start
// console.log(patternA);
