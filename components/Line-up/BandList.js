import Band from "./Band";
import classes from "../../styles/components/line-up/BandList.module.sass";
// prettier-ignore
let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// prettier-ignore
function BandList({bands}) {
  
  const letter = "a";
  
  return (
    /*     <><ul className={classes.BandList}> */

    <>
      {
        <>
          <AlphabetLetter bands={bands} letter={"A"}></AlphabetLetter>
          <AlphabetLetter bands={bands} letter={"B"}></AlphabetLetter>
          <AlphabetLetter bands={bands} letter={"C"}></AlphabetLetter>
          <AlphabetLetter bands={bands} letter={"D"}></AlphabetLetter>
          <AlphabetLetter bands={bands} letter={"E"}></AlphabetLetter>
          <AlphabetLetter bands={bands} letter={"F"}></AlphabetLetter>
          <AlphabetLetter bands={bands} letter={"G"}></AlphabetLetter>
          <AlphabetLetter bands={bands} letter={"H"}></AlphabetLetter>
          <AlphabetLetter bands={bands} letter={"I"}></AlphabetLetter>
          <AlphabetLetter bands={bands} letter={"J"}></AlphabetLetter>
          <AlphabetLetter bands={bands} letter={"K"}></AlphabetLetter>
          <AlphabetLetter bands={bands} letter={"L"}></AlphabetLetter>
          <AlphabetLetter bands={bands} letter={"M"}></AlphabetLetter>
          <AlphabetLetter bands={bands} letter={"N"}></AlphabetLetter>
          <AlphabetLetter bands={bands} letter={"O"}></AlphabetLetter>
          <AlphabetLetter bands={bands} letter={"P"}></AlphabetLetter>
          <AlphabetLetter bands={bands} letter={"Q"}></AlphabetLetter>
          <AlphabetLetter bands={bands} letter={"R"}></AlphabetLetter>
          <AlphabetLetter bands={bands} letter={"S"}></AlphabetLetter>
          <AlphabetLetter bands={bands} letter={"T"}></AlphabetLetter>
          <AlphabetLetter bands={bands} letter={"U"}></AlphabetLetter>
          <AlphabetLetter bands={bands} letter={"V"}></AlphabetLetter>
          <AlphabetLetter bands={bands} letter={"W"}></AlphabetLetter>
          <AlphabetLetter bands={bands} letter={"X"}></AlphabetLetter>
          <AlphabetLetter bands={bands} letter={"Y"}></AlphabetLetter>
          <AlphabetLetter bands={bands} letter={"Z"}></AlphabetLetter>
        </>
      }
    </>
  );
}

function BandAlphabet({ bands, letter }) {
  return bands.map((band) => {
    if (letter === band.name[0].toUpperCase()) {
      return (
        <>
          <ul className={classes.BandList}>
            <Band
              key={band.name}
              name={band.name}
              genre={band.genre}
              logo={band.logo}
              logoCredits={band.logoCredits}
              members={band.members}></Band>
          </ul>
        </>
      );
    }
  });
}

function AlphabetLetter({ bands, letter }) {
  return (
    <>
      <h2>{letter}</h2>
      <BandAlphabet bands={bands} letter={letter}></BandAlphabet>
    </>
  );
}

export default BandList;
