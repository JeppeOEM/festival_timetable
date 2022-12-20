import BandList from "../../components/Line-up/BandList";
import BandListGenres from "../../components/Line-up/BandListGenres";
import Dropdown from "../../components/Line-up/Dropdown";
import FilterBox from "../../components/Line-up/FilterBox";

import Test from "../../components/Line-up/Test";
import playingWhen from "../../js_functions/playingWhen";
import sortList from "../../js_functions/sortList";
import filterPerDay from "../../js_functions/filterPerDay";

import changeSortDir from "../../js_functions/changeSortDir";
import getRandomImage from "../../js_functions/getRandomImage";
import DropdownDay from "../../components/Line-up/DropdownDay";
import DaySelector from "../../components/Line-up/DaySelector.js";
import AlphabetSelector from "../../components/Line-up/AlphabetSelector.js";

import index from "../../styles/components/line-up/index.module.sass";

import { useEffect, useState } from "react";

function LineUp({ bands, genres, playingWhenData, bandsReset, imgData }) {
  const [filterGenre, setFilterGenre] = useState([]);
  const [filterDay, setFilterDay] = useState([]);
  const [filterBand, setFilterBand] = useState([]);
  const [letter, setLetter] = useState();
  const [genresDropdown, setGenresdropdown] = useState(genres);
  const [actData, setActData] = useState(playingWhenData);
  const [sortDir, setSortDir] = useState("1");
  const [filterSettings, setFilterSettings] = useState("alphabet");

  const [shownDays, setShownDays] = useState([]);
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const whatDay = ["all", "mon", "tue", "wed", "thu", "fri", "sat", "sun"];

  console.log(imgData);
  function daysShowed(result) {
    const getDays = result.map((band) => {
      return band.day;
    });
    const getDaysList = [...new Set(getDays)]; //removes duplicates
    console.log("getDaysList", getDaysList);
    setShownDays(getDaysList);
    return getDaysList;
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

    let filterResult = filterPerDay(bands, actData, filterDay, "band");
    setFilterBand(filterResult);
    filterResult = filterAllGenres(bands, filterGenre);

    //loads all bands on a new screen
    if (filterBand.length == 0 && filterDay.length == 0 && filterGenre == 0) {
      setFilterBand(bands);
    } else {
      setFilterBand(filterResult);
      daysShowed(filterResult);
    }
  }, [filterSettings, filterGenre, filterDay, sortDir]);

  function changeView(setFilterSettings, setFilterBand, bands, bool) {
    setFilterSettings("alphabet");
    setFilterGenre([]);
    setFilterBand(bands);
  }

  function changeView2(setFilterSettings, setFilterBand, bands, bool) {
    setFilterSettings("days");
    setFilterGenre([]);

    setFilterDay("all");
  }

  function changeView3(setFilterSettings, setFilterBand, bands, bool) {
    setFilterSettings("genres");
    setFilterDay("all");
  }

  return (
    <>
      <section className={index.entirePage}>
        <h1 className={index.big}>Line-up</h1>

        {/*       <p>filter: {filterGenre}</p>
      <p>filter: {filterDay}</p> */}
        {/*       <button onClick={() => changeSortDir(sortDir, setSortDir)}>Change Direction</button> */}
        <div className={index.selection}>
          <span
            className={`${index.selectorBtn} ${filterSettings === "alphabet" && index.active}`} //if filterSettings is true, add the active css class
            onClick={() => changeView(setFilterSettings, setFilterBand, bands)}>
            A-Z
          </span>
          <span className={index.selectorBtn}>|</span>
          <span
            className={`${index.selectorBtn} ${filterSettings === "days" && index.active}`}
            onClick={() => changeView2(setFilterSettings, setFilterBand, bands)}>
            DAYS
          </span>
          <span className={index.selectorBtn}>|</span>
          <span
            className={`${index.selectorBtn} ${filterSettings === "genres" && index.active}`}
            onClick={() => changeView3(setFilterSettings, setFilterBand, bands)}>
            GENRES
          </span>
        </div>
        <hr className={index.hr}></hr>
        {filterSettings === "alphabet" && <AlphabetSelector></AlphabetSelector>}
        {filterSettings === "days" && <DaySelector></DaySelector>}
        {filterSettings === "genres" && (
          <div className={index.drownDownBox}>
            <div className={index.dropDownItem}>
              <span className={index.filterText}>Genre:&nbsp; </span>
              <Dropdown filterThis={genresDropdown} setFilter={setFilterGenre} filterList={filterGenre} type='Genres' />
            </div>

            <div className={index.dropDownItem}>
              <span className={index.filterText}>&nbsp; Day:&nbsp; </span>
              <DropdownDay setFilter={setFilterDay} filterList={filterDay} whatDay={whatDay} type='Days' />
            </div>
          </div>
        )}
        <hr className={index.hr}></hr>
        <FilterBox setFilter={setFilterGenre} filterList={filterGenre} />
        {filterSettings === "alphabet" && (
          <BandList
            imgData={imgData}
            bands={filterBand}
            filterResult={filterBand}
            actData={actData}
            filterGenre={filterGenre}
          />
        )}

        {filterSettings === "days" && (
          <BandListGenres
            imgData={imgData}
            shownDays={shownDays}
            allBands={bands}
            bands={filterBand}
            filterResult={filterBand}
            filterDay={filterDay}
          />
        )}

        {filterSettings === "genres" && (
          <BandListGenres
            imgData={imgData}
            shownDays={shownDays}
            allBands={bands}
            bands={filterBand}
            filterResult={filterBand}
            filterDay={filterDay}
          />
        )}
      </section>
    </>
  );
}

export async function getStaticProps() {
  const api = "https://festivalapi.fly.dev/";
  const local = "http://localhost:8080/";

  const response = await fetch(api + "bands");
  const responseSchedule = await fetch(api + "schedule");
  const data = await response.json();
  const dataSchedule = await responseSchedule.json();
  /*  const randomImageList = await fetch("http://localhost:3000/api"); */
  /*   const imgData = await randomImageList.json(); */
  const imgData = {
    image: [
      "pexels-photo-164693.jpeg",
      "pexels-photo-164758.webp",
      "pexels-photo-167385.jpeg",
      "pexels-photo-167629.jpeg",
      "pexels-photo-167637.jpeg",
      "pexels-photo-210922.jpeg",
      "pexels-photo-922319.jpeg",
    ],
  };

  console.log(imgData.length);
  // remove duplicates from the array

  const playingWhenData = playingWhen(dataSchedule); // extracting information from the diffrent acts
  const combined = combineData(data, playingWhenData, imgData); // act data is added to the band data

  function combineData(data, playingWhenData) {
    const len = imgData.image.length;
    let randomNumber = Math.floor(Math.random() * len);
    const RandomGenre = [
      "Rock",
      "Adventure Metal",
      "Alternative Metal",
      "Post Metal",
      "Punk",
      "Hardcore Punk",
      "Speed Metal",
      "Heavy Metal",
      "Heavy Metal",
      "Black Metal",
      "Doom Metal",
      "Power Metal",
      "Power Metal",
      "Folk Metal",
      "Industrial Metal",
      "Funeral Doom",
      "Nu Metal",
      "Thrash Metal",
    ];
    let listLength = RandomGenre.length;
    console.log(RandomGenre[1]);

    let combinedList = data.map((band) => {
      for (let i = 0; i < playingWhenData.length; i++) {
        if (band.name == playingWhenData[i].id) {
          band.day = playingWhenData[i].day;
          band.scene = playingWhenData[i].scene;
          band.start = playingWhenData[i].start;
          band.end = playingWhenData[i].end;
          /*           band.logo = "img/"+ */

          const isHttp = band.logo.substring(0, 4);
          let logo = null; //Check if the logo is a link or a local image

          if (isHttp === "http") {
            band.genre = RandomGenre[Math.floor(Math.random() * listLength)];
            /*     logo = "/" + getRandomImage(); */
            let genre = RandomGenre[1];
            randomNumber = Math.floor(Math.random() * len);
            logo = "img/" + imgData.image[randomNumber];
          } else {
            logo = band.logo;
          }

          band.logo = logo;
        }
      }

      return band;
    });
    return combinedList;
  }
  const genreData = await data.map((genre) => {
    return genre.genre;
  });

  const genres = [...new Set(genreData)];
  return {
    props: {
      bands: combined,
      genres,
      playingWhenData,
      imgData,
    },
  };
}

export default LineUp;
