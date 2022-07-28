const {
  getSongsBySaib,
  getSongsOverThreeMinutes,
  getTitleTracks
} = require('../src/03-filter');

describe('getSongsBySaib()', () => {
  let songs;
  beforeEach(() => {
    jest.resetModules();
    songs = require('../data/songs');
  });

  test('should use the `.reduce()` method', () => {
    const hasReduce = !!getSongsBySaib.toString().match(/\.reduce(\s*\(|\()/g);
    expect(hasReduce).toBeTruthy();
  });

  test('should return all songs by the artist Saib', () => {
    const actual = getSongsBySaib(songs);
    const expected = [
      {
        title: 'Pineapple Jam',
        album: 'Bluewerks Vol. 1: Up Down Left Right',
        artist: 'Saib',
        runtimeInSeconds: 186
      },
      {
        title: 'Samui Sunrise',
        album: 'Samui Sunrise',
        artist: 'Saib',
        runtimeInSeconds: 204
      }
    ];
    expect(actual).toEqual(expected);
  });
});

describe('getSongsOverThreeMinutes()', () => {
  let songs;
  beforeEach(() => {
    jest.resetModules();
    songs = require('../data/songs');
  });

  test('should use the `.reduce()` method', () => {
    const hasReduce = !!getSongsOverThreeMinutes
      .toString()
      .match(/\.reduce(\s*\(|\()/g);
    expect(hasReduce).toBeTruthy();
  });

  test('should return all songs over three minutes (180 seconds)', () => {
    const actual = getSongsOverThreeMinutes(songs);
    const expected = [
      {
        title: 'Berlin Tsukin',
        album: 'Bi-To Te-Pu',
        artist: 'Taiyo Ky',
        runtimeInSeconds: 193
      },
      {
        title: 'Pineapple Jam',
        album: 'Bluewerks Vol. 1: Up Down Left Right',
        artist: 'Saib',
        runtimeInSeconds: 186
      },
      {
        title: 'Samui Sunrise',
        album: 'Samui Sunrise',
        artist: 'Saib',
        runtimeInSeconds: 204
      },
      {
        title: 'Regular Guy',
        album: 'Regular Guy',
        artist: 'Peanut',
        runtimeInSeconds: 215
      },
      {
        title: 'Kyona',
        album: 'Kyona',
        artist: 'Two Sleepy',
        runtimeInSeconds: 188
      }
    ];
    expect(actual).toEqual(expected);
  });
});

describe('getTitleTracks()', () => {
  let songs;
  beforeEach(() => {
    jest.resetModules();
    songs = require('../data/songs');
  });

  test('should use the `.reduce()` method', () => {
    const hasReduce = !!getTitleTracks.toString().match(/\.reduce(\s*\(|\()/g);
    expect(hasReduce).toBeTruthy();
  });

  test('should return all songs where the title matches the album', () => {
    const actual = getTitleTracks(songs);
    const expected = [
      {
        title: 'Dormancy',
        album: 'Dormancy',
        artist: 'Arcade Portal',
        runtimeInSeconds: 126
      },
      {
        title: 'Samui Sunrise',
        album: 'Samui Sunrise',
        artist: 'Saib',
        runtimeInSeconds: 204
      },
      {
        title: 'Regular Guy',
        album: 'Regular Guy',
        artist: 'Peanut',
        runtimeInSeconds: 215
      },
      {
        title: 'Kyona',
        album: 'Kyona',
        artist: 'Two Sleepy',
        runtimeInSeconds: 188
      }
    ];
    expect(actual).toEqual(expected);
  });
});
