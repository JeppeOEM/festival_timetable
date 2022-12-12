let filters = [];

function DropdownSchedule(props) {
  const optionChangeHandler = (event) => {
    props.setFilter(event.target.value);
  };

  return (
    <>
      <select /* className={s.dropdownSchedule} */ onChange={optionChangeHandler}>
        {props.filterThis.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
    </>
  );
}

export default DropdownSchedule;
