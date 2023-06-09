import react from 'react'
import Player from '@madzadev/audio-player';
////Play List////
const tracks = [
    {
      url: 'https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3',
      title: 'Madza - Chords of Life',
      tags: ['house']
    },
    {
      url: 'https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3',
      title: 'Madza - Late Night Drive',
      tags: ['dnb']
    },
    {
      url: 'https://audioplayer.madza.dev/Madza-Persistence.mp3',
      title: 'Madza - Persistence',
      tags: ['dubstep']
    },
    {
      url: 'https://github.com/Digilaser/Reproductor/raw/main/music-1.mp3',
      title: 'Harley Bird - Home',
      tags: ['electronic']
    },
    {
      url: 'https://github.com/Digilaser/Reproductor/raw/main/music-2.mp3',
      title: 'Ikson Anywhere – Ikson',
      tags: ['electronic']
    },
    {
      url: 'https://github.com/Digilaser/Reproductor/raw/main/music-3.mp3',
      title: 'Beauz & Jvna - Crazy',
      tags: ['eurodance']
    },
    {
      url: 'https://github.com/Digilaser/Reproductor/raw/main/music-4.mp3',
      title: 'Hardwind - Want Me',
      tags: ['latin']
    },
    {
      url: 'https://github.com/Digilaser/Reproductor/raw/main/music-5.mp3',
      title: 'Jim - Sun Goes Down capturad',
      tags: ['cumbia']
    },
    {
      url: 'https://github.com/Digilaser/Reproductor/raw/main/music-6.mp3',
      title: 'NCS Release',
      tags: ['cuarteto']
    },
  ]

const colors = `html {
    --tagsBackground: #9440f3;
    --tagsText: #ffffff;
    --tagsBackgroundHoverActive: #2cc0a0;
    --tagsTextHoverActive: #ffffff;
    --searchBackground: #18191f;
    --searchText: #ffffff;
    --searchPlaceHolder: #575a77;
    --playerBackground: #18191f;
    --titleColor: #ffffff; 
    --timeColor: #ffffff;
    --progressSlider: #9440f3;
    --progressUsed: #ffffff;
    --progressLeft: #151616;
    --volumeSlider: #9440f3;
    --volumeUsed: #ffffff;
    --volumeLeft:  #151616;
    --playlistBackground: #18191f;
    --playlistText: #575a77;
    --playlistBackgroundHoverActive:  #18191f;
    --playlistTextHoverActive: #ffffff;
}`
  
const Player1 = () => {
 return (
  <div>
    <Player
      trackList={tracks}
      includeTags={true}
      includeSearch={true}
      showPlaylist={true}
      autoPlayNextTrack={true}
      customColorScheme={colors}
     />
  </div>
 )
}

export default Player1