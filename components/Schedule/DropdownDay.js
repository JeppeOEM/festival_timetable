function DropdownDay(props) {
  const optionChangeHandler = (event) => {
    props.setFilter(event.target.value);
    props.changeView(false);
  };

  return (
    <>
      <select /* className={s.dropdownSchedule} */ onChange={optionChangeHandler}>
        {props.whatDay.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
    </>
  );
}

export default DropdownDay;
