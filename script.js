const drumSounds = {
  q: "clap",
  w: "hihat",
  e: "kick",
  r: "openhat",
  u: "ride",
  i: "snare",
  o: "tink",
  p: "tom",
};

function playSound(drumPadKey) {
  const soundElement = new Audio(`sound/${drumPadKey}.wav`);
  soundElement.play();
}

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "q":
      playSound("clap");
    case "w":
      playSound("hihat");
      break;
    case "e":
      playSound("kick");
    case "r":
      playSound("openhat");
      break;
    case "u":
      playSound("ride");
      break;
    case "i":
      playSound("snare");
      break;
    case "o":
      playSound("tink");
      break;
    case "p":
      playSound("tom");
      break;
    default:
      console.log("NA key");
      break;
  }
});

const drumPads = document.querySelectorAll(".drum-pad");

drumPads.forEach((pad) => {
  pad.addEventListener("click", () => {
    const drumPadKey = pad.id;
    playSound(drumPadKey);
  });
});
