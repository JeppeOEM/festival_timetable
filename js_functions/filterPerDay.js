function filterPerDay(currentList, actData, filterDay, returnActOrBand) {
  let getBands = [];

  const dayList = actData.filter((act) => {
    if (filterDay === "allDays") {
      return act;
    }
    if (act.day === filterDay) {
      return act;
    }
  });

  getBands = currentList.filter((band) => {
    for (let i = 0; i < dayList.length; i++) {
      console.log(returnActOrBand);
      if (band.name === dayList[i].id && returnActOrBand === "band") {
        //return band without info on days
        return band;
      } else if (band.name === dayList[i].id && returnActOrBand === "act") {
        return dayList[i];
      }
    }
  });

  console.log(getBands);

  return getBands;
}

export default filterPerDay;
