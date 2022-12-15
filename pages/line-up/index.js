import BandList from "../../components/Line-up/BandList";
import BandListGenres from "../../components/Line-up/BandListGenres";
import Dropdown from "../../components/Line-up/Dropdown";
import FilterBox from "../../components/Line-up/FilterBox";

import Test from "../../components/Line-up/Test";
import playingWhen from "../../js_functions/playingWhen";
import sortList from "../../js_functions/sortList";
import filterPerDay from "../../js_functions/filterPerDay";
import combineData from "../../js_functions/combineData";
import changeSortDir from "../../js_functions/changeSortDir";
import getRandomImage from "../../js_functions/getRandomImage";

import DropdownDay from "../../components/Line-up/DropdownDay";

import { useEffect, useState } from "react";

function LineUp({ bands, genres, playingWhenData, bandsReset }) {
  const [filterGenre, setFilterGenre] = useState([]);
  const [filterDay, setFilterDay] = useState([]);
  const [filterBand, setFilterBand] = useState([]);
  const [letter, setLetter] = useState();
  const [genresDropdown, setGenresdropdown] = useState(genres);
  const [actData, setActData] = useState(playingWhenData);
  const [sortDir, setSortDir] = useState("1");
  const [filterSettings, setFilterSettings] = useState(true);
  const [resetData, setResetData] = useState(bandsReset);
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const whatDay = ["all", "mon", "tue", "wed", "thu", "fri", "sat", "sun"];

  function filterAllGenres(bands, filterGenre) {
    const result = bands.filter((band) => {
      if (filterGenre.length !== 0) {
        return filterGenre.some((filt) => {
          //some = does the callback for any element in the array?
          return band.genre.includes(filt);
        });
      } else {
        return band;
      }
    });

    return result;
  }

  useEffect(() => {
    console.log(filterGenre);
    setFilterBand(bands);
    let filterResult = filterAllGenres(bands, filterGenre);
    console.log("sortDIR", sortDir);

    filterResult = filterPerDay(filterResult, actData, filterDay, "band");

    setFilterBand(filterResult);

    console.log(filterBand);
    console.log(filterDay);
    console.log(filterGenre);

    if (filterBand.length == 0 && filterDay.length == 0 && filterGenre == 0) {
      //loads all bands on a new sreenn
      setFilterBand(bands);
    }
  }, [filterGenre, filterDay, sortDir]);

  function changeView(setFilterSettings, setFilterBand, resetData) {
    setFilterSettings(true);
    setFilterDay([]);
    setFilterGenre([]);
    console.log(resetData);
    setFilterBand(resetData);
    console.log(filterSettings);
    console.log("FUCK");
  }

  return (
    <section>
      <button onClick={() => changeView(setFilterSettings, setFilterBand, resetData)}>A-Z</button>
      <p>filter: {filterGenre}</p>
      <p>filter: {filterDay}</p>
      <img src='public\img\AdobeStock_97778068.jpeg' alt='' width='300px' height='200px' />
      <button onClick={() => changeSortDir(sortDir, setSortDir)}>Change Direction</button>
      w
      <DropdownDay
        changeView={setFilterSettings}
        setFilter={setFilterDay}
        filterList={filterDay}
        whatDay={whatDay}
        type='Days'
      />
      <Dropdown
        changeView={setFilterSettings}
        filterThis={genresDropdown}
        setFilter={setFilterGenre}
        filterList={filterGenre}
        type='Genres'
      />
      <FilterBox setFilter={setFilterGenre} filterList={filterGenre} msg='Filter by genre' />
      {/*       <FilterBox setFilter={setFilterDay} filterList={filterDay} msg='Filter by day' /> */}
      {filterSettings && <BandList bands={filterBand} filterBand={filterBand} actData={actData} />}
      {!filterSettings && (
        <BandListGenres
          allBands={bands}
          bands={bands}
          filterBand={filterBand}
          actData={actData}
          filterDay={filterDay}
        />
      )}
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
  const combined = combineData(data, playingWhenData);

  return {
    props: {
      bands: combined,

      genres,
      playingWhenData,
    },
  };
}

export default LineUp;
