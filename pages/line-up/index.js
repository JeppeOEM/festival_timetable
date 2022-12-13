import BandList from "../../components/Line-up/BandList";
import Dropdown from "../../components/Line-up/Dropdown";
import FilterBox from "../../components/Line-up/FilterBox";
import Alphabet from "../../components/Line-up/Alphabet";
import Test from "../../components/Line-up/Test";
import playingWhen from "../../js_functions/playingWhen";
import sortList from "../../js_functions/sortList";
import filterAllGenres from "../../js_functions/filterAllGenres";
import changeSortDir from "../../js_functions/changeSortDir";
import DropdownDay from "../../components/Schedule/DropdownDay";

import { useEffect, useState } from "react";

function LineUp({ bands, genres, playingWhenData }) {
  const [filterGenre, setFilterGenre] = useState([]);
  const [filterDay, setFilterDay] = useState([]);
  const [filterBand, setFilterBand] = useState([]);
  const [letter, setLetter] = useState();
  const [genresDropdown, setGenresdropdown] = useState(genres);
  const [actData, setActData] = useState(playingWhenData);
  const [sortDir, setSortDir] = useState("1");
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  /*   bands = bands.map((band) => {
    for (let i = 0; i < playingWhenData.length; i++) {
      if (band.name === playingWhenData[i].id) {
        band.day = playingWhenData[i].day;
        band.scene = playingWhenData[i].scene;
        band.start = playingWhenData[i].start;
        band.end = playingWhenData[i].end;
        console.log("DDDDDDDDDD", band);
      }
    }
  });
  console.log("DDDDDDDDDD", bands); */
  /* 
  function getDay(playingData, day) {
    let arr = [];
    for (let i = 0; i < playingData.length; i++) {
      if (playingData[i].day === day) {
        console.log(playingData[i].id);
        arr.push(playingData[i]);
      }
    }
    return arr;
  }

  function bandScheduleInfo(p) {
    for (let i = 0; i < p.length; i++) {
      if (p[i].id === `${filterDay}`) {
        console.log(p[i].id);
        return p[i];
      }
    }
  }
 */
  /*   const getInfo = getDay(playingWhenData, "fri");
  const { day, scene, start, end } = getInfo;
  console.log(getInfo);
  bandScheduleInfo(getInfo);
 */
  function filterPerDay() {
    const dayList = actData.filter((act) => {
      if (act.day === filterDay) {
        return act;
      }
    });

    const getBands = bands.filter((band) => {
      for (let i = 0; i < dayList.length; i++) {
        if (band.name === dayList[i].id) {
          return band;
        }
      }
    });

    /*     let arr = [];
    dayList.forEach((act) => {
      for (let i = 0; i < bands.length; i++) {
        if (act.id === bands[i].name) {
          arr.push(bands[i]);
        }
      }
    }); */

    console.log(getBands);

    return getBands;
  }

  /*   console.log(filterPerDay("tue", bands)); */

  /*     let result = dayList.filter((act) => filterDaysCallback(act.id)); X
    return result;
  }
*/

  useEffect(() => {
    console.log("sortDIR", sortDir);
    let filterResult = filterPerDay("tue", bands);

    const genreData = filterResult.map((genre) => {
      return genre.genre;
    });
    const genres = [...new Set(genreData)];
    setGenresdropdown(genres);

    filterResult = filterAllGenres(filterResult, filterGenre);

    filterResult = sortList(filterResult, sortDir);

    setFilterBand(filterResult);
    /*     console.log(sortDir); */
  }, [filterGenre, filterDay, sortDir]);

  return (
    <section>
      <p>filter: {filterGenre}</p>
      <p>filter: {filterDay}</p>
      <button onClick={() => changeSortDir(sortDir, setSortDir)}>Change Direction</button>
      <Alphabet setLetter={setLetter} setFilterBand={setFilterBand} setFilterGenre={setFilterGenre} bands={filterBand}>
        filterList={filterGenre}
      </Alphabet>
      <DropdownDay setFilter={setFilterDay} filterList={filterDay} type='Days' />
      <Dropdown filterThis={genresDropdown} setFilter={setFilterGenre} filterList={filterGenre} type='Genres' />
      <FilterBox setFilter={setFilterGenre} filterList={filterGenre} msg='Filter by genre' />
      {/*       <FilterBox setFilter={setFilterDay} filterList={filterDay} msg='Filter by day' /> */}
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
