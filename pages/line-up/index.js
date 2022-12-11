import BandList from "../../components/Line-up/BandList";
import Dropdown from "../../components/Line-up/Dropdown";
import FilterBox from "../../components/Line-up/FilterBox";
import Alphabet from "../../components/Line-up/Alphabet";
import Test from "../../components/Line-up/Test";

import { useEffect, useState } from "react";

function LineUp(props) {
  const [filterGenre, setFilterGenre] = useState([""]);
  const [filterDay, setFilterDay] = useState([]);
  const [filterBand, setFilterBand] = useState([]);
  const [letter, setLetter] = useState();
  const [actInfo, setActInfo] = useState([props.schedule]);

  function filterAllGenres(bands) {
    console.log(bands);
    const result = bands.filter((band) => {
      return filterGenre.some((filt) => {
        return band.genre.includes(filt);
      });
    });

    return result;
  }

  function filterLetter(bands) {
    const result = bands.filter((band) => {
      return band.name[0] === "A";
    });
  }

  useEffect(() => {
    let filterResult = filterAllGenres(props.bands);
    console.log("filter RESLT", filterResult);
    setFilterBand(filterResult);
  }, [filterGenre, filterDay]);

  return (
    <section>
      <p>filter: {filterGenre}</p>
      <p>filter: {filterDay}</p>
      <Alphabet setFilter={setFilterBand} bands={filterBand}></Alphabet>
      <Dropdown filterThis={props.genres} setFilter={setFilterGenre} filterList={filterGenre} type="Genres" />
      <Dropdown filterThis={props.days} setFilter={setFilterDay} filterList={filterDay} type="Days" />
      <FilterBox setFilter={setFilterGenre} filterList={filterGenre} msg="Filter by genre" />
      <FilterBox setFilter={setFilterDay} filterList={filterDay} msg="Filter by day" />
      <BandList bands={filterBand} filterBand={filterBand} actData={actInfo} />;
    </section>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:8080/bands");
  const responseSchedule = await fetch("http://localhost:8080/schedule");
  const data = await response.json();
  const dataSchedule = await responseSchedule.json();
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
      schedule: dataSchedule,
    },
  };
}

export default LineUp;
