import React from "react";
import s from "../../styles/components/schedule/Act.module.sass";

function Act(props) {
  return (
    <ul className={s.ActList}>
      {props.day.map((act) => {
        return <li key={act.act + act.start + act.end}>{act.cancelled ? act.act : act.start + " " + act.act + " cancelled"}</li>;
      })}
    </ul>
  );
}

export default Act;
