import BandList from "../../components/Line-up/BandList";
import Dropdown from "../../components/Line-up/Dropdown";
import FilterBox from "../../components/Line-up/FilterBox";
import Test from "../../components/Line-up/Test";

import { useState } from "react";

function LineUp(props) {
  const [filter, setFilter] = useState([]);
  const pull_data = (data) => {
    console.log(data); // LOGS DATA FROM CHILD
  };

  return (
    <section>
      <p>filter: {filter}</p>
      <Test></Test>
      <Dropdown filterThis={props.genres} setFilter={setFilter} filterList={filter} type="Genres" />
      <FilterBox setFilter={setFilter} filterList={filter} />
      <Dropdown filterThis={props.days} filter={setFilter} filterList={filter} type="Days" />
      <BandList bands={props.bands} />;
    </section>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:8080/bands");
  const data = await response.json();

  const genreData = await data.map((genre) => {
    return genre.genre; // convert the band name to kebab case and compare it to the bandId
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
