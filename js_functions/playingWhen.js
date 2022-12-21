function playingWhen(scenes) {
  const whatDay = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
  const sceneList = ["Midgard", "Jotunheim", "Vanaheim"];
  let arr = [];
  //  per scene
  for (let y = 0; y < sceneList.length; y++) {
    // per each day
    for (let x = 0; x < whatDay.length; x++) {
      // per bands in a day //accesinng object properties [sceneList[y]] with values from array
      for (let i = 0; i < scenes[sceneList[y]][whatDay[x]].length; i++) {
        // Translated: scenes["midgard"].mon[0].act
        if (scenes[sceneList[y]][whatDay[x]][i].act !== "break") {
          // save it as array of objects {day: day, scene: scene, start: start, end: end}
          arr.push({
            day: whatDay[x],
            id: scenes[sceneList[y]][whatDay[x]][i].act,
            scene: sceneList[y],
            start: scenes[sceneList[y]][whatDay[x]][i].start,
            end: scenes[sceneList[y]][whatDay[x]][i].end,
          });
        }
      }
    }
  }
  return arr;
}

export default playingWhen;
