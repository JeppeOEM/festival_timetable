import Band from "./Band";
import BandGrid from "../../styles/components/line-up/BandGrid.module.sass";

// prettier-ignore
let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// prettier-ignore
function BandList({bands}) {

  const getLetters = bands.map((band) => {
  return band.name[0]
  })
  
  const firstLetterList = [...new Set(getLetters)];
  
  function isLetterInList(letter){
    return firstLetterList.some((letterFromList )=> letterFromList.toUpperCase() === letter)
  }



  return (
    <>
      {isLetterInList("A") && <AlphabetLetter bands={bands} letter={"A"}></AlphabetLetter>}
      {isLetterInList("B") && <AlphabetLetter bands={bands} letter={"B"}></AlphabetLetter>}
      {isLetterInList("C") && <AlphabetLetter bands={bands} letter={"C"}></AlphabetLetter>}
      {isLetterInList("D") && <AlphabetLetter bands={bands} letter={"D"}></AlphabetLetter>}
      {isLetterInList("E") && <AlphabetLetter bands={bands} letter={"E"}></AlphabetLetter>}
      {isLetterInList("F") && <AlphabetLetter bands={bands} letter={"F"}></AlphabetLetter>}
      {isLetterInList("G") && <AlphabetLetter bands={bands} letter={"G"}></AlphabetLetter>}
      {isLetterInList("H") && <AlphabetLetter bands={bands} letter={"H"}></AlphabetLetter>}
      {isLetterInList("I") && <AlphabetLetter bands={bands} letter={"I"}></AlphabetLetter>}
      {isLetterInList("J") && <AlphabetLetter bands={bands} letter={"J"}></AlphabetLetter>}
      {isLetterInList("K") && <AlphabetLetter bands={bands} letter={"K"}></AlphabetLetter>}
      {isLetterInList("L") && <AlphabetLetter bands={bands} letter={"L"}></AlphabetLetter>}
      {isLetterInList("M") && <AlphabetLetter bands={bands} letter={"M"}></AlphabetLetter>}
      {isLetterInList("N") && <AlphabetLetter bands={bands} letter={"N"}></AlphabetLetter>}
      {isLetterInList("O") && <AlphabetLetter bands={bands} letter={"O"}></AlphabetLetter>}
      {isLetterInList("P") && <AlphabetLetter bands={bands} letter={"P"}></AlphabetLetter>}
      {isLetterInList("Q") && <AlphabetLetter bands={bands} letter={"Q"}></AlphabetLetter>}
      {isLetterInList("R") && <AlphabetLetter bands={bands} letter={"R"}></AlphabetLetter>}
      {isLetterInList("S") && <AlphabetLetter bands={bands} letter={"S"}></AlphabetLetter>}
      {isLetterInList("T") && <AlphabetLetter bands={bands} letter={"T"}></AlphabetLetter>}
      {isLetterInList("U") && <AlphabetLetter bands={bands} letter={"U"}></AlphabetLetter>}
      {isLetterInList("V") && <AlphabetLetter bands={bands} letter={"V"}></AlphabetLetter>}
      {isLetterInList("W") && <AlphabetLetter bands={bands} letter={"W"}></AlphabetLetter>}
      {isLetterInList("X") && <AlphabetLetter bands={bands} letter={"X"}></AlphabetLetter>}
      {isLetterInList("Y") && <AlphabetLetter bands={bands} letter={"Y"}></AlphabetLetter>}
      {isLetterInList("Z") && <AlphabetLetter bands={bands} letter={"Z"}></AlphabetLetter>}
    </>
  );
}

function BandAlphabet({ bands, letter }) {
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
}

export default BandList;
/*  <ul className={classes.BandList} */
