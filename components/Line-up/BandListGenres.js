import Band from "./Band";
import BandGrid from "../../styles/components/line-up/BandGrid.module.sass";
import filterPerDay from "../../js_functions/filterPerDay";

function BandList({ bands, filterDay, actData, filterGenre }) {
  /*   const getLetters = bands.map((band) => {
    return band.name[0];
  });

  const firstLetterList = [...new Set(getLetters)];
 */
  console.log("BAND DAAAAAAAAAAY", bands);
  const dayList = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

  console.log("Bandssss", bands);
  const test = filterPerDay(bands, actData, filterDay);
  console.log("TEST", test);

  function isDayinList(day) {
    return filterDay === day;
  }

  return (
    <>
      {isDayinList("mon") && <Band bands={bands}></Band>}
      {/*       {isDayinList("tue") && <AlphabetLetter bands={bands} day={"Tuesday"}></AlphabetLetter>}
      {isDayinList("wed") && <AlphabetLetter bands={bands} day={"Wednesday"}></AlphabetLetter>}
      {isDayinList("thu") && <AlphabetLetter bands={bands} day={"Thursday"}></AlphabetLetter>}
      {isDayinList("fri") && <AlphabetLetter bands={bands} day={"Friday"}></AlphabetLetter>}
      {isDayinList("sat") && <AlphabetLetter bands={bands} day={"Saturday"}></AlphabetLetter>}
      {isDayinList("sun") && <AlphabetLetter bands={bands} day={"Sunday"}></AlphabetLetter>} */}
    </>
  );

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
