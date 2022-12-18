import React from "react";
import bandId from "../../styles/pages/bandId.module.sass";
function DayPlaying({ day }) {
  return (
    <>
      {day === "mon" && (
        <div className={bandId.bandInfo}>
          <h2 className={bandId.inline}>Playing:&nbsp;</h2>
          <p>Monday </p>
        </div>
      )}
      {day === "tue" && (
        <div className={bandId.bandInfo}>
          <h2 className={bandId.inline}>Playing:&nbsp;</h2>
          <p> Tuesday</p>
        </div>
      )}
      {day === "wed" && (
        <div className={bandId.bandInfo}>
          <h2 className={bandId.inline}>Playing:&nbsp;</h2>
          <p>Wednesday</p>
        </div>
      )}
      {day === "thu" && (
        <div className={bandId.bandInfo}>
          <h2 className={bandId.inline}>Playing:&nbsp;</h2>
          <p>Thursday</p>
        </div>
      )}
      {day === "fri" && (
        <div className={bandId.bandInfo}>
          <h2 className={bandId.bandInfo}>Playing:&nbsp;</h2>
          <p>Friday</p>
        </div>
      )}
      {day === "sat" && (
        <div className={bandId.bandInfo}>
          <h2 className={bandId.inline}>Playing: &nbsp; </h2>
          <p>Saturday</p>
        </div>
      )}
      {day === "sun" && (
        <div className={bandId.bandInfo}>
          <h2 className={bandId.inline}>Playing: &nbsp; </h2>
          <p>Sunday</p>
        </div>
      )}
    </>
  );
}

export default DayPlaying;
