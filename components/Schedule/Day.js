import React from "react";
import bandId from "../../styles/pages/bandId.module.sass";
import actList from "../../styles/components/schedule/ActList.module.sass";
function Day({ day }) {
  return (
    <>
      {day === "mon" && (
        <>
          <h3 className={` ${actList.timeHeader}`}>Mon</h3>
          <p className={` ${actList.date}`}>2.Aug</p>
        </>
      )}
      {day === "tue" && (
        <>
          <h3 className={` ${actList.timeHeader}`}>Tue</h3>
          <p className={` ${actList.date}`}>3.Aug</p>
        </>
      )}

      {day === "wed" && (
        <>
          <h3 className={` ${actList.timeHeader}`}>Wed</h3>
          <p className={` ${actList.date}`}>4.Aug</p>
        </>
      )}
      {day === "thu" && (
        <>
          <h3 className={` ${actList.timeHeader}`}>Thu</h3>
          <p className={` ${actList.date}`}>5.Aug</p>
        </>
      )}
      {day === "fri" && (
        <>
          <h3 className={` ${actList.timeHeader}`}>Fri</h3>
          <p className={` ${actList.date}`}>6.Aug</p>
        </>
      )}
      {day === "sat" && (
        <>
          <h3 className={` ${actList.timeHeader}`}>Sat</h3>
          <p className={` ${actList.date}`}>7.Aug</p>
        </>
      )}
      {day === "sun" && (
        <>
          <h3 className={` ${actList.timeHeader}`}>Sun</h3>
          <p className={` ${actList.date}`}>8.Aug</p>
        </>
      )}
    </>
  );
}

export default Day;
