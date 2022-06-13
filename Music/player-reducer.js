import track1 from "./../assets/music/AL-90 - Black Sapphire.mp3";
import track2 from "./../assets/music/Autechre - Further.mp3";
import track3 from "./../assets/music/Balladur - Time Is A Killing Machine.mp3";
import track4 from "./../assets/music/Blue October - All That We Are.mp3";
import track5 from "./../assets/music/Bluestaeb - Just A Staeb Ahead (Feat. Anthony Drawn).mp3";
import track6 from "./../assets/music/BLVCK CEILING - End of Time.mp3";
import track7 from "./../assets/music/Boards of Canada - An Eagle In Your Mind.mp3";
import track8 from "./../assets/music/Bowery Electric - Coming Down.mp3";
import track9 from "./../assets/music/Burial - Pirates.mp3";
import track10 from "./../assets/music/Cremation Lily - Lovers Against the Rocks.mp3";
import track11 from "./../assets/music/CU - 2020.mp3";
import track12 from "./../assets/music/Doja Cat - 4 mordant.mp3";
import track13 from "./../assets/music/Fraunhofer Diffraction - Bloodlust.mp3";
import track14 from "./../assets/music/Fuel - Halos Of The Sun.mp3";
import track15 from "./../assets/music/Grimes - Flesh without Blood.mp3";
import track16 from "./../assets/music/Jamie xx - Far Nearer.mp3";
import track17 from "./../assets/music/Jazzpospolita - Czerwona Flaga (Ale Ja Sie Kapie).mp3";
import track18 from "./../assets/music/Lissy Trullie - Madeleine (Jewellers R).mp3";
import track19 from "./../assets/music/Lorn - PERFEKT DARK.mp3";
import track20 from "./../assets/music/Nadja - Long Dark Twenties.mp3";
import track21 from "./../assets/music/Natalie Merchant - San Andreas Fault.mp3";
import track22 from "./../assets/music/P E A C E A N D T R A N Q U I L I T Y - A Hat In Time (Seal The Deal DLC).mp3";
import track23 from "./../assets/music/Pale Saints - Porpoise.mp3";
import track24 from "./../assets/music/Pastel Ghost - Pulse.mp3";
import track25 from "./../assets/music/Psychonaut 4 - How Much for the Hope.mp3";
import track26 from "./../assets/music/Sendelica - It's the Neu Kosmiche Disko.mp3";
import track27 from "./../assets/music/Shlohmo - We Sat in the Car.mp3";
import track28 from "./../assets/music/Whirr - Sway.mp3";
import track29 from "./../assets/music/Yves Tumor feat. James K - Licking An Orchid (feat. James K).mp3";
import track30 from "./../assets/music/Планета Плутон - Тишина.mp3";

const PLAY_MUSIC = "player/PLAY_MUSIC";

let initialState = {
  isPlaying: false,
  url: 0,
  music: [
    { title: "AL-90 - Black Sapphire", url: track1 },
    { title: "Autechre - Further", url: track2 },
    { title: "Balladur - Time Is A Killing Machine", url: track3 },
    { title: "Blue October - All That We Are", url: track4 },
    { title: "Bluestaeb - Just A Staeb Ahead (Feat. Anthony Drawn)", url: track5 },
    { title: "BLVCK CEILING - End of Time", url: track6 },
    { title: "Boards of Canada - An Eagle In Your Mind", url: track7 },
    { title: "Bowery Electric - Coming Down", url: track8 },
    { title: "Burial - Pirates", url: track9 },
    { title: "Cremation Lily - Lovers Against the Rocks", url: track10 },
    { title: "CU - 2020", url: track11 },
    { title: "Doja Cat - 4 mordant", url: track12 },
    { title: "Fraunhofer Diffraction - Bloodlust", url: track13 },
    { title: "Fuel - Halos Of The Sun", url: track14 },
    { title: "Grimes - Flesh without Blood", url: track15 },
    { title: "Jamie xx - Far Nearer", url: track16 },
    { title: "Jazzpospolita - Czerwona Flaga (Ale Ja Sie Kapie)", url: track17 },
    { title: "Lissy Trullie - Madeleine (Jewellers R)", url: track18 },
    { title: "Lorn - PERFEKT DARK", url: track19 },
    { title: "Nadja - Long Dark Twenties", url: track20 },
    { title: "Natalie Merchant - San Andreas Fault", url: track21 },
    { title: "P E A C E A N D T R A N Q U I L I T Y - A Hat In Time (Seal The Deal DLC)", url: track22 },
    { title: "Pale Saints - Porpoise", url: track23 },
    { title: "Pastel Ghost - Pulse", url: track24 },
    { title: "Psychonaut 4 - How Much for the Hope", url: track25 },
    { title: "Sendelica - It's the Neu! Kosmiche Disko", url: track26 },
    { title: "Shlohmo - We Sat in the Car", url: track27 },
    { title: "Whirr - Sway", url: track28 },
    { title: "Yves Tumor feat. James K - Licking An Orchid (feat. James K)", url: track29 },
    { title: "Планета Плутон - Тишина", url: track30 },
  ],
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAY_MUSIC:
      if (state.isPlaying && state.url !== action.url) state.isPlaying = false;
      return {
        ...state,
        url: action.url,
        isPlaying: !state.isPlaying,
      };
    default:
      return state;
  }
};

export const playMusicActionCreator = (url) => ({
  type: PLAY_MUSIC,
  url,
});

export default playerReducer;
