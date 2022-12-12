export default function List(props) {
  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <ul>
        {props.filterList.map((artist, index) => (
          <li key={index}>
            {artist}
            <button
              onClick={() => {
                props.setFilter(props.filterList.filter((a) => a !== artist));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
