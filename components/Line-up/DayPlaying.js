import React from "react";
import bandId from "../../styles/pages/bandId.module.sass";
function DayPlaying({ day }) {
  return (
    <>
      {day === "mon" && <h3 className={bandId.inline}>Playing Monday </h3>}
      {day === "tue" && <h3 className={bandId.inline}>Playing Tuesday </h3>}
      {day === "wed" && <h3 className={bandId.inline}>Playing Wednesday </h3>}
      {day === "thu" && <h3 className={bandId.inline}>Playing Thursday </h3>}
      {day === "fri" && <h3 className={bandId.inline}>Playing Friday </h3>}
      {day === "sat" && <h3 className={bandId.inline}>Playing Saturday </h3>}
      {day === "sun" && <h3 className={bandId.inline}>Playing Sunday </h3>}
    </>
  );
}

export default DayPlaying;
