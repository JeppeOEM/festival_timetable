import { useEffect, useState } from "react";
import s from "../../styles/components/schedule/ActList.module.sass";

import Acts from "./Acts";
import DropdownSchedule from "./DropdownSchedule";

function ActList(props) {
  const [filterDay, setFilterDay] = useState("mon");

  console.log("ACTLISL CHECKING", props.actData[0]);
  let midgard = props.actData[0].act["Midgard"];
  let jotunheim = props.actData[0].act["Jotunheim"];
  let vanaheim = props.actData[0].act["Vanaheim"];
  let acts = props.actData[0].act; // this is the starting point for the loop
  const whatDay2 = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

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
    <>
      <DropdownSchedule filterThis={whatDay2} setFilter={setFilterDay} />
      <section className={s.actBox}>
        {/*       MIDGARD */}
        {filterDay === "mon" && <Acts filterDay={filterDay} day={midgard.mon}></Acts>}
        {filterDay === "tue" && <Acts filterDay={filterDay} day={midgard.tue}></Acts>}
        {filterDay === "wed" && <Acts filterDay={filterDay} day={midgard.wed}></Acts>}
        {filterDay === "thu" && <Acts filterDay={filterDay} day={midgard.thu}></Acts>}
        {filterDay === "fri" && <Acts filterDay={filterDay} day={midgard.fri}></Acts>}
        {filterDay === "sat" && <Acts filterDay={filterDay} day={midgard.sat}></Acts>}
        {filterDay === "sun" && <Acts filterDay={filterDay} day={midgard.sun}></Acts>}
        {/* VANAHEIM */}
        {filterDay === "mon" && <Acts filterDay={filterDay} day={vanaheim.mon}></Acts>}
        {filterDay === "tue" && <Acts filterDay={filterDay} day={vanaheim.tue}></Acts>}
        {filterDay === "wed" && <Acts filterDay={filterDay} day={vanaheim.wed}></Acts>}
        {filterDay === "thu" && <Acts filterDay={filterDay} day={vanaheim.thu}></Acts>}
        {filterDay === "fri" && <Acts filterDay={filterDay} day={vanaheim.fri}></Acts>}
        {filterDay === "sat" && <Acts filterDay={filterDay} day={vanaheim.sat}></Acts>}
        {filterDay === "sun" && <Acts filterDay={filterDay} day={vanaheim.sun}></Acts>}
        {/*    JOTUNHEIM  */}
        {filterDay === "mon" && <Acts filterDay={filterDay} day={jotunheim.mon}></Acts>}
        {filterDay === "tue" && <Acts filterDay={filterDay} day={jotunheim.tue}></Acts>}
        {filterDay === "wed" && <Acts filterDay={filterDay} day={jotunheim.wed}></Acts>}
        {filterDay === "thu" && <Acts filterDay={filterDay} day={jotunheim.thu}></Acts>}
        {filterDay === "fri" && <Acts filterDay={filterDay} day={jotunheim.fri}></Acts>}
        {filterDay === "sat" && <Acts filterDay={filterDay} day={jotunheim.sat}></Acts>}
        {filterDay === "sun" && <Acts filterDay={filterDay} day={jotunheim.sun}></Acts>}
      </section>
    </>
  );
}

export default ActList;
