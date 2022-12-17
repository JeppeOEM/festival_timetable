import actList from "../../styles/components/schedule/ActList.module.sass";

function TimeBar({ day }) {
  return (
    <div className={actList.timeDiv}>
      <h2 className={actList.timeHeader}>{day}</h2>
      <ul className={actList.timeUl}>
        <li className={actList.time}>
          <p>00:00</p>
        </li>
        <li className={actList.time}>
          <p>02:00</p>
        </li>
        <li className={actList.time}>
          <p>04:00</p>
        </li>
        <li className={actList.time}>
          <p>06:00</p>
        </li>
        <li className={actList.time}>
          <p>08:00</p>
        </li>
        <li className={actList.time}>
          <p>10:00</p>
        </li>
        <li className={actList.time}>
          <p>12:00</p>
        </li>
        <li className={actList.time}>
          <p>14:00</p>
        </li>
        <li className={actList.time}>
          <p>16:00</p>
        </li>
        <li className={actList.time}>
          <p>18:00</p>
        </li>
        <li className={actList.time}>
          <p>20:00</p>
        </li>
        <li className={actList.time}>
          <p>22:00</p>
        </li>
      </ul>
    </div>
  );
}

export default TimeBar;
