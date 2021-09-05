const playlist = [
  {
    music: "Pray On Sunday",
    artist: "PATEKO (파테코)",
  },
  {
    music: "HEAT",
    artist: "릴보이(lIlBOI) X 원슈타인(Wonstein) X 미란이(Mirani)",
  },
  {
    music: "Yellow Cab",
    artist: "DPR LIVE",
  },
  {
    music: "Celebration",
    artist: "BewhY (비와이)",
  },
  {
    music: "LIFTED",
    artist: "CL",
  },
  {
    music: "빌었어",
    artist: "창모 ",
  },
  {
    music: "하나,둘",
    artist: "김승민 ",
  },
  {
    music: "covid",
    artist: "범키 ",
  },
  {
    music: "A-O-K",
    artist: "Tai Verdes",
  },
  {
    music: "business boy",
    artist: "허성현(Huh!)",
  },
];

const music = document.querySelector("#music span:nth-child(3)");
const artist = document.querySelector("#music span:last-child");

const randomPlaylist = playlist[Math.floor(Math.random() * playlist.length)];

music.innerText = randomPlaylist.music;
artist.innerText = randomPlaylist.artist;
