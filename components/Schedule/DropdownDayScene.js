import style from "../../styles/components/schedule/DropdownSchedule.module.sass";
function DropdownDayScene({ setFilter }) {
  const whatDay = ["Choose Day", "Monday", "Thuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const optionChangeHandler = (event) => {
    const daySelected = event.target.value.substring(0, 3).toLowerCase();
    if (daySelected === "cho") return;
    setFilter(daySelected);
  };

  return (
    <>
      <select className={style.dropdownSchedule} onChange={optionChangeHandler}>
        <optgroup>
          {whatDay.map((option, index) => {
            return <option key={index}>{option}</option>;
          })}
        </optgroup>
      </select>
    </>
  );
}

export default DropdownDayScene;
