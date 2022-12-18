import { useEffect, useState } from "react";
import actList from "../../styles/components/schedule/ActList.module.sass";
import TimeBar from "./TimeBar";
/* import schedule from "../../styles/components/schedule/Schedule.module.sass"; */

import Acts from "./Acts";

import DropdownDayScene from "../Schedule/DropdownDayScene";

function ActList(props) {
  const [filterDay, setFilterDay] = useState("mon");

  let midgard = props.actData[0].act["Midgard"];
  let jotunheim = props.actData[0].act["Jotunheim"];
  let vanaheim = props.actData[0].act["Vanaheim"];

  function changeDay(day) {
    setFilterDay(day);
  }
  return (
    <>
      <div className={actList.days}>
        <span onClick={() => changeDay("mon")}>Monday</span>

        <span onClick={() => changeDay("tue")}>Tuesday</span>

        <span onClick={() => changeDay("wed")}>Wednesday</span>

        <span onClick={() => changeDay("thu")}>Thursday</span>

        <span onClick={() => changeDay("fri")}>Friday</span>

        <span onClick={() => changeDay("sat")}>Saturday</span>

        <span onClick={() => changeDay("sun")}>Sunday</span>
      </div>

      <section className={actList.actBox}>
        <div className={actList.dateBox}>
          {<DropdownDayScene setFilter={setFilterDay} />}
          <TimeBar day={filterDay}></TimeBar>
        </div>

        {/*       MIDGARD */}
        <div className={actList.scenes}>
          {filterDay === "mon" && (
            <Acts stage='Midgard' className={actList.act} filterDay={filterDay} day={midgard.mon}></Acts>
          )}
          {filterDay === "tue" && (
            <Acts stage='Midgard' className={actList.act} filterDay={filterDay} day={midgard.tue}></Acts>
          )}
          {filterDay === "wed" && (
            <Acts stage='Midgard' className={actList.act} filterDay={filterDay} day={midgard.wed}></Acts>
          )}
          {filterDay === "thu" && (
            <Acts stage='Midgard' className={actList.act} filterDay={filterDay} day={midgard.thu}></Acts>
          )}
          {filterDay === "fri" && (
            <Acts stage='Midgard' className={actList.act} filterDay={filterDay} day={midgard.fri}></Acts>
          )}
          {filterDay === "sat" && (
            <Acts stage='Midgard' className={actList.act} filterDay={filterDay} day={midgard.sat}></Acts>
          )}
          {filterDay === "sun" && (
            <Acts stage='Midgard' className={actList.act} filterDay={filterDay} day={midgard.sun}></Acts>
          )}
          {/*           </div> */}
          {/* VANAHEIM */}
          {/*           <div className={actList.scene}> */}
          {filterDay === "mon" && (
            <Acts stage='Vanaheim' className={actList.act} filterDay={filterDay} day={vanaheim.mon}></Acts>
          )}
          {filterDay === "tue" && (
            <Acts stage='Vanaheim' className={actList.act} filterDay={filterDay} day={vanaheim.tue}></Acts>
          )}
          {filterDay === "wed" && (
            <Acts stage='Vanaheim' className={actList.act} filterDay={filterDay} day={vanaheim.wed}></Acts>
          )}
          {filterDay === "thu" && (
            <Acts stage='Vanaheim' className={actList.act} filterDay={filterDay} day={vanaheim.thu}></Acts>
          )}
          {filterDay === "fri" && (
            <Acts stage='Vanaheim' className={actList.act} filterDay={filterDay} day={vanaheim.fri}></Acts>
          )}
          {filterDay === "sat" && (
            <Acts stage='Vanaheim' className={actList.act} filterDay={filterDay} day={vanaheim.sat}></Acts>
          )}
          {filterDay === "sun" && (
            <Acts stage='Vanaheim' className={actList.act} filterDay={filterDay} day={vanaheim.sun}></Acts>
          )}
          {/*           </div> */}
          {/*    JOTUNHEIM  */}
          {/*            <div className={actList.scene}>  */}
          {filterDay === "mon" && (
            <Acts stage='Jotunheim' className={actList.act} filterDay={filterDay} day={jotunheim.mon}></Acts>
          )}
          {filterDay === "tue" && (
            <Acts stage='Jotunheim' className={actList.act} filterDay={filterDay} day={jotunheim.tue}></Acts>
          )}
          {filterDay === "wed" && (
            <Acts stage='Jotunheim' className={actList.act} filterDay={filterDay} day={jotunheim.wed}></Acts>
          )}
          {filterDay === "thu" && (
            <Acts stage='Jotunheim' className={actList.act} filterDay={filterDay} day={jotunheim.thu}></Acts>
          )}
          {filterDay === "fri" && (
            <Acts stage='Jotunheim' className={actList.act} filterDay={filterDay} day={jotunheim.fri}></Acts>
          )}
          {filterDay === "sat" && (
            <Acts stage='Jotunheim' className={actList.act} filterDay={filterDay} day={jotunheim.sat}></Acts>
          )}
          {filterDay === "sun" && (
            <Acts stage='Jotunheim' className={actList.act} filterDay={filterDay} day={jotunheim.sun}></Acts>
          )}
        </div>
      </section>
    </>
  );
}

export default ActList;
