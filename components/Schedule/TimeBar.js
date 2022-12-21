import actList from "../../styles/components/schedule/ActList.module.sass";
import Day from "./Day";
import DropdownDayScene from "./DropdownDayScene";

function TimeBar({ day, setFilterDay }) {
  return (
    <>
      <div className={actList.timeDiv}>
        <div className={actList.hide}>
          <Day day={day} />
        </div>
        <ul className={actList.timeUl}>
          <li className={actList.time}>
            <p>00:00</p>
            <hr className={actList.hr}></hr>
          </li>

          <li className={actList.time}>
            <p>02:00</p>
            <hr className={actList.hr}></hr>
          </li>
          <li className={actList.time}>
            <p>04:00</p>
            <hr className={actList.hr}></hr>
          </li>
          <li className={actList.time}>
            <p>06:00</p>
            <hr className={actList.hr}></hr>
          </li>
          <li className={actList.time}>
            <p>08:00</p>
            <hr class={actList.hr}></hr>
          </li>
          <li className={actList.time}>
            <p>10:00</p>
            <hr className={actList.hr}></hr>
          </li>
          <li className={actList.time}>
            <p>12:00</p>
            <hr className={actList.hr}></hr>
          </li>
          <li className={actList.time}>
            <p>14:00</p>
            <hr className={actList.hr}></hr>
          </li>
          <li className={actList.time}>
            <p>16:00</p>
            <hr className={actList.hr}></hr>
          </li>
          <li className={actList.time}>
            <p>18:00</p>
            <hr className={actList.hr}></hr>
          </li>
          <li className={actList.time}>
            <p>20:00</p>
            <hr className={actList.hr}></hr>
          </li>
          <li className={actList.time}>
            <p>22:00</p>
            <hr className={actList.hr}></hr>
          </li>
        </ul>
      </div>
    </>
  );
}

export default TimeBar;
