import { useEffect } from "react";
import s from "../../styles/components/schedule/ActList.module.sass";

import Act from "./Act";
import DropdownSchedule from "./DropdownSchedule";

function ActList(props) {
  console.log("ACTLISL CHECKING", props.actData[0]);
  let midgard = props.actData[0].act["Midgard"];
  let jotunheim = props.actData[0].act["Jotunheim"];
  let vanaheim = props.actData[0].act["Vanaheim"];
  let acts = props.actData[0].act; // this is the starting point for the loop

  const whatDay = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
  const scenes = ["Midgard", "Jotunheim", "Vanaheim"];

  function playingWhen(whatDay) {
    let arr = [];
    //  per scene
    for (let y = 0; y < scenes.length; y++) {
      // per each day
      for (let x = 0; x < whatDay.length; x++) {
        // per bands in a day //accesinng object properties [scenes[y]] with values from array
        for (let i = 0; i < acts[scenes[y]][whatDay[x]].length; i++) {
          // Translated: acts["midgard"].mon[0].act
          if (acts[scenes[y]][whatDay[x]][i].act !== "break") {
            // save it as array of objects {day: act, scene: scene}
            arr.push({ [whatDay[x]]: acts[scenes[y]][whatDay[x]][i].act, scene: scenes[y] });
          }
        }
      }
    }
    console.log("ARR actlist", arr);
  }

  playingWhen(whatDay);

  return (
    <section className={s.actBox}>
      <DropdownSchedule filterThis={props.days} setFilter={setFilterDay} filterList={filterDay} type='Days' />
      <h1>Midgaard Monday</h1>
      <Act day={midgard.mon}></Act>
      <Act day={midgard.tue}></Act>
      <Act day={midgard.wed}></Act>
      <Act day={midgard.thu}></Act>
      <Act day={midgard.fri}></Act>
      <Act day={midgard.sat}></Act>
      <Act day={midgard.sun}></Act>
    </section>
  );
}

export default ActList;
