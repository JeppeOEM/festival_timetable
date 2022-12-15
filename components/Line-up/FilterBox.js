export default function FilterBox({ filterList, setFilter }) {
  return (
    <>
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
