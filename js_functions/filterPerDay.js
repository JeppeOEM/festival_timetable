function filterPerDay(currentList, actData, filterDay) {
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
      if (band.name === dayList[i].id) {
        return band;
      }
    }
  });

  console.log(getBands);

  return getBands;
}

export default filterPerDay;
