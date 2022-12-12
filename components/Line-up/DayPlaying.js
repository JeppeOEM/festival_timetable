import React from "react";

function DayPlaying({ day }) {
  return (
    <>
      {day === "mon" && <p>playing Monday</p>}
      {day === "tue" && <p>playing Tuesday</p>}
      {day === "wed" && <p>playing Wednesday</p>}
      {day === "thu" && <p>playing Thursday</p>}
      {day === "fri" && <p>playing Friday</p>}
      {day === "sat" && <p>playing Saturday</p>}
      {day === "sun" && <p>playing Sunday</p>}
    </>
  );
}

export default DayPlaying;
