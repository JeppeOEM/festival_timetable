const whatDay = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

function DropdownDay(props) {
  const optionChangeHandler = (event) => {
    props.setFilter(event.target.value);
  };

  return (
    <>
      <select /* className={s.dropdownSchedule} */ onChange={optionChangeHandler}>
        {whatDay.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
    </>
  );
}

export default DropdownDay;
