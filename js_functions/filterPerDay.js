function filterPerDay(filterDay, bands, actData) {
  const dayList = actData.filter((act) => {
    if (act.day === filterDay) {
      return act;
    }
  });

  const getBands = bands.filter((band) => {
    for (let i = 0; i < dayList.length; i++) {
      if (band.name === dayList[i].id) {
        return band;
      }
    }
  });

  /*     let arr = [];
    dayList.forEach((act) => {
      for (let i = 0; i < bands.length; i++) {
        if (act.id === bands[i].name) {
          arr.push(bands[i]);
        }
      }
    }); */

  console.log(getBands);

  return getBands;
}
export default filterPerDay;
