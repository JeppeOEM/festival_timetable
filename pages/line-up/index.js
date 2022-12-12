import BandList from "../../components/Line-up/BandList";
import Dropdown from "../../components/Line-up/Dropdown";
import FilterBox from "../../components/Line-up/FilterBox";
import Alphabet from "../../components/Line-up/Alphabet";
import Test from "../../components/Line-up/Test";
import playingWhen from "../../js_functions/playingWhen";
import sortList from "../../js_functions/sortList";
import filterAllGenres from "../../js_functions/filterAllGenres";
import changeSortDir from "../../js_functions/changeSortDir";

import { useEffect, useState } from "react";

function LineUp({ bands, genres, playingWhenData }) {
  const [filterGenre, setFilterGenre] = useState([]);
  const [filterDay, setFilterDay] = useState([]);
  const [filterBand, setFilterBand] = useState([]);
  const [letter, setLetter] = useState();
  const [actData, setActData] = useState(playingWhenData);
  const [sortDir, setSortDir] = useState("1");
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  function filterLetter(bands) {
    const result = bands.filter((band) => {
      return band.name[0] === "A";
    });
  }

  function bandsPlayingPerDay(actData, bands, day) {
    function filterIt() {
      const result = actData.filter((act) => {
        act === day;
      });
    }
    const filterPerDay = filterIt();

    return filterPerDay;
  }

  function filterPerDay(day) {
    const dayList = actData.filter((act) => {
      if (act.day === day) {
        return act;
      }
    });

    function filterDaysCallback(actDay) {
      for (let i = 0; i < actData.length; i++) {
        const element = actData[i];
        console.log(element.day);
        if (actDay === actDay) {
          return actData[i];
        }
      }
    }

    let result = dayList.filter((band) => filterDaysCallback(band.day));
    return result;
  }

  console.log("TEST", filterPerDay("tue"));

  useEffect(() => {
    console.log("sortDIR", sortDir);
    let filterResult = filterAllGenres(bands, filterGenre);

    filterResult = sortList(filterResult, sortDir);

    setFilterBand(filterResult);
    /*     console.log(sortDir); */
  }, [filterGenre, filterDay, sortDir]);

  return (
    <section>
      <p>filter: {filterGenre}</p>
      <p>filter: {filterDay}</p>
      <button onClick={() => changeSortDir(sortDir)} setSortDir={setSortDir}>
        Change Direction
      </button>
      <Alphabet setLetter={setLetter} setFilterBand={setFilterBand} setFilterGenre={setFilterGenre} bands={filterBand}>
        filterList={filterGenre}
      </Alphabet>
      <Dropdown filterThis={genres} setFilter={setFilterGenre} filterList={filterGenre} type='Genres' />
      <Dropdown filterThis={days} setFilter={setFilterDay} filterList={filterDay} type='Days' />
      <FilterBox setFilter={setFilterGenre} filterList={filterGenre} msg='Filter by genre' />
      <FilterBox setFilter={setFilterDay} filterList={filterDay} msg='Filter by day' />
      <BandList bands={filterBand} filterBand={filterBand} actData={actData} />;
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

  const genres = [...new Set(genreData)]; // remove duplicates from the array

  const playingWhenData = playingWhen(dataSchedule);

  return {
    props: {
      bands: data,
      genres,
      playingWhenData,
    },
  };
}

export default LineUp;
