/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require('../data/songs');
// Do not change the line above.

/***********************************************************************/

/**
 * getSongTitles()
 * Returns an array of all of the song titles.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {string[]} An array of strings, all of which are song titles.
 */

function getSongTitles(exampleSongData) {
const titles = exampleSongData.reduce((accu, song) => {
  accu.push(song.title)
  return accu
}, [])
return titles

}
// console.log(getSongTitles(exampleSongData))

/***********************************************************************/

/**
 * getSongDetails()
 * Returns an array of all of the song titles with the artist.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {string[]} An array of strings, all of which are in the format "<TITLE> by <ARTIST>".
 *
 * EXAMPLE:
 *  getSongDetails(songs);
 *  //> [ "Berlin Tsukin by Taiyo Ky", "Up by Sebastian Kamae", ... ]
 */

function getSongDetails(exampleSongData) {
const details = exampleSongData.reduce((accu, song) => {
  accu.push(`${song.title} by ${song.artist}`)
  return accu
}, [])
return details
}

// console.log(getSongDetails(exampleSongData))
/***********************************************************************/

/**
 * getTitleAndArtist()
 * Returns an array of objects, where each object has a key that is the song title and has a value that is the song artist.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]} An array of objects.
 *
 * EXAMPLE:
 *  getTitleAndArtist(songs);
 *  //> [ { "Berlin Tsukin": "Taiyo Ky" }, { Up: "Sebastian Kamae" }, ... ]
 */

function getTitleAndArtist(exampleSongData) {
const titleAndArtist = exampleSongData.reduce((accu, song) =>{
  let obj = {}
  obj[song.title] = song.artist
  accu.push(obj)
  return accu
}, [])
return titleAndArtist
}

// console.log(getTitleAndArtist(exampleSongData))

module.exports = {
  getSongTitles,
  getSongDetails,
  getTitleAndArtist
};
