let filters = [];

function Dropdown(props) {
  const optionChangeHandler = (event) => {
    if (props.filterList.length === 0) {
      props.setFilter([event.target.value]);
    } else {
      props.setFilter([...props.filterList, event.target.value]);
    }
    /*     props.changeView(false); */
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
