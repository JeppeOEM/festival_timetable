import filterBox from "../../styles/components/line-up/FilterBox.module.sass";
export default function FilterBox({ filterList, setFilter }) {
  return (
    <>
      <div className={filterBox.flexbox}>
        {filterList.map((artist, index) => (
          <div className={filterBox.filterBox} key={index}>
            {artist}
            <span
              className={filterBox.item}
              onClick={() => {
                setFilter(filterList.filter((a) => a !== artist));
              }}>
              &nbsp; x&nbsp;
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
