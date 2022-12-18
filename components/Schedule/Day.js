import React from "react";
import bandId from "../../styles/pages/bandId.module.sass";
import actList from "../../styles/components/schedule/ActList.module.sass";
function Day({ day }) {
  return (
    <>
      {day === "mon" && (
        <>
          <h3 className={`${bandId.inline} ${actList.timeHeader}`}>Mon</h3>
          <p className={` ${actList.date}`}>2.Aug</p>
        </>
      )}
      {day === "tue" && (
        <>
          <h3 className={bandId.inline}>Tue </h3>
          <p>3.Aug</p>
        </>
      )}

      {day === "wed" && (
        <>
          <h3 className={bandId.inline}>Wed </h3>
          <p>4.Aug</p>
        </>
      )}
      {day === "thu" && (
        <>
          <h3 className={bandId.inline}>Thu </h3>
          <p>5.Aug</p>
        </>
      )}
      {day === "fri" && (
        <>
          <h3 className={bandId.inline}>Fri </h3>
          <p>6.Aug</p>
        </>
      )}
      {day === "sat" && (
        <>
          <h3 className={bandId.inline}>Sat </h3>
          <p>7.Aug</p>
        </>
      )}
      {day === "sun" && (
        <>
          <h3 className={bandId.inline}>Sun </h3>
          <p>8.Aug</p>
        </>
      )}
    </>
  );
}

export default Day;
