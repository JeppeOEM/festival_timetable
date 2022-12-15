import Band from "./Band";
import BandGrid from "../../styles/components/line-up/BandGrid.module.sass";
/* import filterPerDay from "../../js_functions/filterPerDay"; */

function DisplayBand({ day, bands }) {
  return (
    <>
      <h1>{day}</h1>
      <ul className={BandGrid.BandList}>
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
      </ul>
    </>
  );
}

function BandList({ bands, filterDay, actData, filterGenre }) {
  /*    const getDays = bands.map((band) => {
      return band.day;
    });

    const listOfDays = [...new Set(getLetters)];

    function isDayInList(letter) {
      return firstLetterList.some((letterFromList) => letterFromList.toUpperCase() === letter);
    }

   */

  function isDayinList(day, filterDay) {
    console.log(filterDay === day);
    if (filterDay == "all") {
      console.log("whataaaaaaaaaaaaaaaaaa");
      return true;
    } else {
      return filterDay === day;
    }
  }
  return (
    <>
      {/*       {isDayinList("all", filterDay) && <DisplayBand day='all' bands={bands}></DisplayBand>} */}
      {isDayinList("mon", filterDay) && <DisplayBand day='mon' bands={bands}></DisplayBand>}
      {isDayinList("tue", filterDay) && <DisplayBand day='tue' bands={bands}></DisplayBand>}
      {isDayinList("wed", filterDay) && <DisplayBand day='wed' bands={bands}></DisplayBand>}
      {isDayinList("thu", filterDay) && <DisplayBand day='thu' bands={bands}></DisplayBand>}
      {isDayinList("fri", filterDay) && <DisplayBand day='fri' bands={bands}></DisplayBand>}
      {isDayinList("sat", filterDay) && <DisplayBand day='sat' bands={bands}></DisplayBand>}
      {isDayinList("sun", filterDay) && <DisplayBand day='sun' bands={bands}></DisplayBand>}
    </>
  );

  /* <DisplayDay bands={bands}></DisplayDay> */

  /*       {isDayinList("tue") && <AlphabetLetter bands={bands} day={"Tuesday"}></AlphabetLetter>}
      {isDayinList("wed") && <AlphabetLetter bands={bands} day={"Wednesday"}></AlphabetLetter>}
      {isDayinList("thu") && <AlphabetLetter bands={bands} day={"Thursday"}></AlphabetLetter>}
      {isDayinList("fri") && <AlphabetLetter bands={bands} day={"Friday"}></AlphabetLetter>}
      {isDayinList("sat") && <AlphabetLetter bands={bands} day={"Saturday"}></AlphabetLetter>}
      {isDayinList("sun") && <AlphabetLetter bands={bands} day={"Sunday"}></AlphabetLetter>} */

  /*   function BandAlphabet({ bands, day }) {
    return bands.map((band) => {
      if (day === band.day) {
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

  function AlphabetLetter({ bands, day }) {
    return (
      <>
        <h2 className={BandGrid.letter}>{day}</h2>
        <section className={BandGrid.BandGrid}>
          <BandAlphabet bands={bands} day={day}></BandAlphabet>
        </section>
      </>
    );
  }
} */
}
export default BandList;

function DisplayDay(bands) {
  <ul className={BandGrid.BandList}>
    {bands.map((band) => {
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
    })}
  </ul>;
}

function filterPerDay(currentList, actData, filterDay, returnActOrBand) {
  let getBands = [];

  const dayList = actData.filter((act) => {
    if (filterDay === "allDays") {
      return act;
    }
    if (act.day === filterDay) {
      return act;
    }
  });

  getBands = currentList.filter((band) => {
    for (let i = 0; i < dayList.length; i++) {
      console.log(returnActOrBand);
      if (band.name === dayList[i].id && returnActOrBand === "band") {
        //return band without info on days
        return band;
      } else if (band.name === dayList[i].id && returnActOrBand === "act") {
        return dayList[i];
      }
    }
  });

  console.log(getBands);

  return getBands;
}
