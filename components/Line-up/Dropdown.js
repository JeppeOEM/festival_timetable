let filters = [];

function Dropdown(props) {
  const optionChangeHandler = (event) => {
    if (props.filterList.lenght === 0) {
      props.setFilter([event.target.value]);
    } else {
      props.setFilter([...props.filterList, event.target.value]);
      console.log("FILTERLIST", props.filterList);
    }
  };

  return (
    <>
      <select onChange={optionChangeHandler} name={props.type} id={props.type}>
        {props.filterThis.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
      </select>
    </>
  );
}

export default Dropdown;
