export default function FilterBox({ msg, filterList, setFilter }) {
  return (
    <>
      <h1>{msg}</h1>
      <ul>
        {filterList.map((artist, index) => (
          <li key={index}>
            {artist}
            <button
              onClick={() => {
                setFilter(filterList.filter((a) => a !== artist));
              }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
