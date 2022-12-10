import BandList from "../../components/Line-up/BandList";
import Dropdown from "../../components/Line-up/Dropdown";
import FilterBox from "../../components/Line-up/FilterBox";
import Test from "../../components/Line-up/Test";

import { useEffect, useState } from "react";

function LineUp(props) {
  const [filterGenre, setFilterGenre] = useState([""]);
  const [filterDay, setFilterDay] = useState([""]);
  const [filterBand, setFilterBand] = useState([]);

  const arr = ["Metal", "Rock"];
  function test(bands) {
    console.log(bands);
    const result = bands.filter((band) => {
      return arr.some((filt) => {
        return band.genre.includes(filt);
      });
    });

    /*     const result = bands.genre.filter((ad) => filterData.every((fd) => ad !== fd)); */
    return result;
  }

  function filterBands(bandData) {
    // Avoid filter for empty string
    if (!filterGenre) {
      return filterResult;
    }

    const filterData = bandData.filter((band) => !band.genre.includes(filterGenre));
    console.log(filterGenre);

    return filterData;
  }

  /*   function filterAll(filterBand){
  for (let i = 0; i < filterBand.length; i++) {
    let filterResult = filterBands(props.bands);
    setFilterBand(filterResult);
  }
  return result
  }
 */

  useEffect(() => {
    console.log("TESTING", test(props.bands));

    let filterResult = filterBands(props.bands);
    setFilterBand(filterResult);
  }, [filterGenre, filterDay]);

  return (
    <section>
      <p>filter: {filterGenre}</p>
      <p>filter: {filterDay}</p>
      <Dropdown filterThis={props.genres} setFilter={setFilterGenre} filterList={filterGenre} type="Genres" />
      <Dropdown filterThis={props.days} setFilter={setFilterDay} filterList={filterDay} type="Days" />
      <FilterBox setFilter={setFilterGenre} filterList={filterGenre} />
      <FilterBox setFilter={setFilterDay} filterList={filterDay} />
      <BandList bands={filterBand} filterBand={filterBand} />;
    </section>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:8080/bands");
  const data = await response.json();
  const genreData = await data.map((genre) => {
    return genre.genre;
  });

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const genres = [...new Set(genreData)]; // remove duplicates from the array

  console.log(genres);
  return {
    props: {
      bands: data,
      genres,
      days,
    },
  };
}

export default LineUp;
