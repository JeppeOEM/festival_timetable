import Band from "./Band";
import BandGrid from "../../styles/components/line-up/BandGrid.module.sass";
import { useState } from "react";
/* import filterPerDay from "../../js_functions/filterPerDay"; */

function BandList({ imgData, shownDays, bands, filterDay, filterResult, filterGenre }) {
  shownDays.includes();

  function isDayinList(day, filterDay) {
    console.log(filterDay === day);
    if (filterDay == "all") {
      return true;
    } else {
      return filterDay === day;
    }
  }
  return (
    <>
      {isDayinList("mon", filterDay) && (
        <>
          {shownDays.includes("mon") && (
            <h2 id='Monday' className={BandGrid.info}>
              Monday
            </h2>
          )}
          <DisplayBand imgData={imgData} day='mon' bands={bands}></DisplayBand>
        </>
      )}
      {isDayinList("tue", filterDay) && (
        <>
          {}
          {shownDays.includes("tue") && (
            <h2 id='Tuesday' className={BandGrid.info}>
              Tuesday
            </h2>
          )}
          <DisplayBand imgData={imgData} day='tue' bands={bands}></DisplayBand>
        </>
      )}

      {isDayinList("wed", filterDay) && (
        <>
          {shownDays.includes("wed") && (
            <h2 id='Wednesday' className={BandGrid.info}>
              Wednesday
            </h2>
          )}
          <DisplayBand imgData={imgData} day='wed' bands={bands}></DisplayBand>
        </>
      )}
      {isDayinList("thu", filterDay) && (
        <>
          {shownDays.includes("thu") && (
            <h2 id='Thursday' className={BandGrid.info}>
              Thursday
            </h2>
          )}
          <DisplayBand imgData={imgData} day='thu' bands={bands}></DisplayBand>
        </>
      )}

      {isDayinList("fri", filterDay) && (
        <>
          {shownDays.includes("fri") && (
            <h2 id='Friday' className={BandGrid.info}>
              Friday
            </h2>
          )}
          <DisplayBand imgData={imgData} day='fri' bands={bands}></DisplayBand>
        </>
      )}

      {isDayinList("sat", filterDay) && (
        <>
          {shownDays.includes("sat") && (
            <h2 id='Saturday' className={BandGrid.info}>
              Saturday
            </h2>
          )}
          <DisplayBand imgData={imgData} day='sat' bands={bands}></DisplayBand>
        </>
      )}

      {isDayinList("sun", filterDay) && (
        <>
          {shownDays.includes("sun") && (
            <h2 id='Sunday' className={BandGrid.info}>
              Sunday
            </h2>
          )}
          <DisplayBand imgData={imgData} day='sun' bands={bands}></DisplayBand>
        </>
      )}
    </>
  );

  function DisplayBand({ day, bands, imgData }) {
    let resultArr = [];

    return (
      <>
        <section className={BandGrid.BandGrid}>
          {bands.map((band) => {
            if (day === band.day) {
              return (
                <Band
                  imgData={imgData}
                  key={band.name}
                  name={band.name}
                  genre={band.genre}
                  logo={band.logo}
                  logoCredits={band.logoCredits}
                  members={band.members}
                  /*  actData={actData} */
                ></Band>
              );
            }
          })}
        </section>
      </>
    );
  }
}
export default BandList;
/* function BandAlphabet({ bands, letter }) {
  return bands.map((band) => {
    if (letter === band.name[0].toUpperCase()) {
      return (
        <>
          <Band
            key={band.name}
            name={band.name}
            genre={band.genre}
            logo={band.logo}
            logoCredits={band.logoCredits}
            members={band.members}></Band>
        </>
      );
    }
  });
}

function AlphabetLetter({ bands, letter }) {
  return (
    <>
      <h2 id=""className={BandGrid.letter}>{letter}</h2>
      <section className={BandGrid.BandGrid}>
        <BandAlphabet bands={bands} letter={letter}></BandAlphabet>
      </section>
    </>
  );
} */
