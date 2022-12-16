import Band from "./Band";
import BandGrid from "../../styles/components/line-up/BandGrid.module.sass";
import { useState } from "react";
/* import filterPerDay from "../../js_functions/filterPerDay"; */

function BandList({ shownDays, bands, filterDay, filterResult, filterGenre }) {
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
          {shownDays.includes("mon") && <h2 className={BandGrid.Header}>Monday</h2>}
          <DisplayBand day='mon' bands={bands}></DisplayBand>
        </>
      )}
      {isDayinList("tue", filterDay) && (
        <>
          {}
          {shownDays.includes("tue") && <h2 className={BandGrid.Header}>Tuesday</h2>}
          <DisplayBand day='tue' bands={bands}></DisplayBand>
        </>
      )}

      {isDayinList("wed", filterDay) && (
        <>
          {shownDays.includes("wed") && <h2 className={BandGrid.Header}>Wednesday</h2>}
          <DisplayBand day='wed' bands={bands}></DisplayBand>
        </>
      )}
      {isDayinList("thu", filterDay) && (
        <>
          {shownDays.includes("thu") && <h2 className={BandGrid.Header}>Thursday</h2>}
          <DisplayBand day='thu' bands={bands}></DisplayBand>
        </>
      )}

      {isDayinList("fri", filterDay) && (
        <>
          {shownDays.includes("fri") && <h2 className={BandGrid.Header}>Friday</h2>}
          <DisplayBand day='fri' bands={bands}></DisplayBand>
        </>
      )}

      {isDayinList("sat", filterDay) && (
        <>
          {shownDays.includes("sat") && <h2 className={BandGrid.Header}>Saturday</h2>}
          <DisplayBand day='sat' bands={bands}></DisplayBand>
        </>
      )}

      {isDayinList("sun", filterDay) && (
        <>
          {shownDays.includes("sun") && <h2 className={BandGrid.Header}>Sunday</h2>}
          <DisplayBand day='sun' bands={bands}></DisplayBand>
        </>
      )}
    </>
  );

  function DisplayBand({ day, bands, setDaysShowed, days }) {
    let resultArr = [];

    return (
      <>
        <section className={BandGrid.BandGrid}>
          {bands.map((band) => {
            if (day === band.day) {
              return (
                <Band
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
      <h2 className={BandGrid.letter}>{letter}</h2>
      <section className={BandGrid.BandGrid}>
        <BandAlphabet bands={bands} letter={letter}></BandAlphabet>
      </section>
    </>
  );
} */
