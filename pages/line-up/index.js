import BandList from "../../components/Line-up/BandList";
import BandListGenres from "../../components/Line-up/BandListGenres";
import Dropdown from "../../components/Line-up/Dropdown";
import FilterBox from "../../components/Line-up/FilterBox";

import Test from "../../components/Line-up/Test";
import playingWhen from "../../js_functions/playingWhen";
import sortList from "../../js_functions/sortList";

import changeSortDir from "../../js_functions/changeSortDir";
import getRandomImage from "../../js_functions/getRandomImage";

import DropdownDay from "../../components/Schedule/DropdownDay";

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

  function filterPerDay(currentList) {
    const dayList = actData.filter((act) => {
      if (act.day === filterDay) {
        return act;
      }
    });

    const getBands = currentList.filter((band) => {
      for (let i = 0; i < dayList.length; i++) {
        if (band.name === dayList[i].id) {
          return band;
        }
      }
    });

    console.log(getBands);

    return getBands;
  }

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
    filterResult = filterPerDay(filterResult);

    setFilterBand(filterResult);
    /* 


    /*     const genreData = filterResult.map((genre) => {
      return genre.genre;
    });
    const genres = [...new Set(genreData)];
    setGenresdropdown(genres); */

    /*     filterResult = sortList(filterResult, sortDir); */

    /*     if (filterGenre == 0) {
      console.log("MONSTER");
      console.log(filterDay);
    }

    if (filterDay > 0) {
      setFilterBand(filterResult);
    } else {
      setFilterBand(bands);
    } */
    /*     console.log(sortDir); */
  }, [filterGenre, filterDay, sortDir]);

  function changeView(setFilterSettings, setFilterBand, bands) {
    setFilterSettings(true);
    setFilterDay([]);
    setFilterGenre([]);

    setFilterBand(bands);
    console.log("FUCK");
  }

  return (
    <section>
      <button onClick={() => changeView(setFilterSettings, setFilterBand, bands)}>A-Z</button>
      <p>filter: {filterGenre}</p>
      <p>filter: {filterDay}</p>
      <img src='public\img\AdobeStock_97778068.jpeg' alt='' width='300px' height='200px' />
      <button onClick={() => changeSortDir(sortDir, setSortDir)}>Change Direction</button>
      w
      <DropdownDay changeView={setFilterSettings} setFilter={setFilterDay} filterList={filterDay} type='Days' />
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
      {!filterSettings && <BandListGenres bands={filterBand} filterBand={filterBand} actData={actData} />}
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
      bandsReset: data,
      genres,
      playingWhenData,
    },
  };
}

export default LineUp;
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
