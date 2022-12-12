function filterAllGenres(bands, filterGenre) {
  const result = bands.filter((band) => {
    if (filterGenre.length !== 0) {
      return filterGenre.some((filt) => {
        //some = does the callback for any element in the array?
        return band.genre.includes(filt);
      });
    } else {
      return band;
    }
  });

  return result;
}

export default filterAllGenres;
