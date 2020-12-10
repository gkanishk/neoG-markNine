import React from "react";
import "./styles.css";

export default function App() {
  const [category, setCategory] = React.useState("FourClover");
  const music = {
    FourClover: [
      {
        name: "Yellow",
        link:
          "https://open.spotify.com/track/3AJwUDP919kvQ9QcozQPxg?si=bUeNSPtzTZK6erukv50WNg"
      },
      {
        name: "Starving",
        link:
          "https://open.spotify.com/track/6DG2g1UhROp5pnM8fx7zH2?si=OpXCTLisToW0N0nO0TH_UA"
      },
      {
        name: "By Your Side",
        link:
          "https://open.spotify.com/track/6daQCZd6V1WqNBtvWOpByv?si=6I_BnnVjRJSx5Km-InN_VQ"
      },
      {
        name: "Lie Awake",
        link:
          "https://open.spotify.com/track/3QtKk9vCCoIyBGGcuSJLxD?si=ga_hex53Rn-t8MiSk_j5hQ"
      }
    ],

    Acoustics: [
      {
        name: "2014",
        link:
          "https://open.spotify.com/track/0F9qDydUs56EdJnIQABw21?si=salb1P-xSVqEO8Lvqwpbww"
      },
      {
        name: "Never let you go",
        link:
          "https://open.spotify.com/track/0hsEwB7RvpWOJYZnAF4j4E?si=iWxD_C3KTcmwxPzGX-1UvA"
      },
      {
        name: "Alive",
        link:
          "https://open.spotify.com/track/1eh4iPma8RQsu6sjKrMZ8p?si=tlMgxzSzQoylSukNnnI20w"
      },
      {
        name: "Behind the light",
        link:
          "https://open.spotify.com/track/58jpPPHU4CuFlL8lAYIOPx?si=Z_AMBbRdRxKCcvG2Fg1cEQ"
      }
    ],
    November: [
      {
        name: "At my worst",
        link:
          "https://open.spotify.com/track/0ri0Han4IRJhzvERHOZTMr?si=lXqr-2fNQn6uk0njjHdWjA"
      },
      {
        name: "that's just how it goes",
        link:
          "https://open.spotify.com/track/4J4rJEaVpgr2tHwX6Jd13H?si=aGIT14lORf2_kTZg1kX6Gg"
      },
      {
        name: "Lighting",
        link:
          "https://open.spotify.com/track/58mYapf9OjU4waibyphRhP?si=xQMpUiUMTeSGjl_paPUmGg"
      },
      {
        name: "Don't forget about me",
        link:
          "https://open.spotify.com/track/04Bb2zb6ZqVqGgUZCi39u8?si=KsdKA30xQE6zDCrPROkP6A"
      }
    ]
  };
  return (
    <div className="App">
      <h1>
        <img
          class="logo"
          src="https://digital.hbs.edu/platform-digit/wp-content/uploads/sites/2/2018/04/spotify.jpg"
          alt="spotify"
        />
        Playlists
      </h1>
      <p>Checkout my latest playlists here👇</p>
      <div class="button-container">
        {Object.keys(music).map((cat) => (
          <button onClick={() => setCategory(cat)}>{cat}</button>
        ))}
      </div>
      <h2>List:</h2>
      <div class="list-container">
        {music[category].map((songs) => (
          <div class="list-item">
            <h2>{songs.name}</h2>
            <a href={songs.link} target="_blank" rel="noreferrer">
              Listen
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
