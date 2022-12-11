import { useEffect } from "react";
import s from "../../styles/components/schedule/ActList.module.sass";

import Act from "./Act";

function ActList(props) {
  let midgard = props.actData[0].act["Midgard"];
  let jotunheim = props.actData[0].act["Jotunheim"];
  let vanaheim = props.actData[0].act["Vanaheim"];
  let acts = props.actData[0].act;

  const whatDay = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
  const scenes = ["Midgard", "Jotunheim", "Vanaheim"];

  function playingWhen(whatDay) {
    let arr = [];
    for (let y = 0; y < scenes.length; y++) {
      for (let x = 0; x < whatDay.length; x++) {
        for (let i = 0; i < acts[scenes[y]][whatDay[x]].length; i++) {
          if (acts[scenes[y]][whatDay[x]][i].act !== "break") {
            arr.push({ [whatDay[x]]: acts[scenes[y]][whatDay[x]][i].act, [scenes[y]]: scenes[y] });
          }
        }
      }
    }
    console.log("ARR", arr);
  }

  playingWhen(whatDay);

  return (
    <section className={s.actBox}>
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
