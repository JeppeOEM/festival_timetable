function DropdownDayScene({ setFilter, whatDay }) {
  const optionChangeHandler = (event) => {
    setFilter(event.target.value);
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

export default DropdownDayScene;
