let filters = [];

function Dropdown(props) {
  const { setFilter, filterList } = props;
  const optionChangeHandler = (event) => {
    setFilter([...filterList, "ss"]); // add event to the end of the array
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
