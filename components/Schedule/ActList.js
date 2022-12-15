import { useEffect, useState } from "react";
import s from "../../styles/components/schedule/ActList.module.sass";

import Acts from "./Acts";
import DropdownDayScene from "../Schedule/DropdownDayScene";

function ActList(props) {
  const [filterDay, setFilterDay] = useState("mon");

  let midgard = props.actData[0].act["Midgard"];
  let jotunheim = props.actData[0].act["Jotunheim"];
  let vanaheim = props.actData[0].act["Vanaheim"];
  const whatDay = ["all", "mon", "tue", "wed", "thu", "fri", "sat", "sun"];

  return (
    <>
      {<DropdownDayScene setFilter={setFilterDay} whatDay={whatDay} />}
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
