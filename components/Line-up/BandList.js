import Band from "./Band";
import BandGrid from "../../styles/components/line-up/BandGrid.module.sass";
import { useEffect, useState } from "react";

// prettier-ignore
let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// prettier-ignore
function BandList({bands, filterGenre}) {

const [hideLetters, setHideLetters] = useState(true);  


useEffect(() => {

if(filterGenre == 0){
setHideLetters(true)
console.log("HIDELETTERS", hideLetters);
console.log("FILTER GENRE", filterGenre);
}
else{
  setHideLetters(false)
  console.log("HIDELETTERS", hideLetters);
  console.log("FILTER GENRE", filterGenre);
}




}, [filterGenre]);

  return (
    <>
      {hideLetters === true ? (
        <CompleteListWithLetters bands={bands} filterGenre={filterGenre} />
      ) : (
        <CompleteList bands={bands} filterGenre={filterGenre} />
      )}
    </>
  );
}

export default BandList;
/*  <ul className={classes.BandList} */

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

///////// Sorted in blocks according to Letter //////////

function CompleteListWithLetters({ bands, filterGenre }) {
  const getLetters = bands.map((band) => {
    return band.name[0];
  });

  const firstLetterList = [...new Set(getLetters)];

  function isLetterInList(letter) {
    return firstLetterList.some((letterFromList) => letterFromList.toUpperCase() === letter);
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

////// Is listed in one section without big letters /////

function CompleteList({ bands, filterGenre }) {
  const getLetters = bands.map((band) => {
    return band.name[0];
  });

  const firstLetterList = [...new Set(getLetters)];

  function isLetterInList(letter) {
    return firstLetterList.some((letterFromList) => letterFromList.toUpperCase() === letter);
  }

  return (
    <>
      <section className={BandGrid.BandGrid}>
        {isLetterInList("A") && <Alphabet bands={bands} letter={"A"}></Alphabet>}
        {isLetterInList("B") && <Alphabet bands={bands} letter={"B"}></Alphabet>}
        {isLetterInList("C") && <Alphabet bands={bands} letter={"C"}></Alphabet>}
        {isLetterInList("D") && <Alphabet bands={bands} letter={"D"}></Alphabet>}
        {isLetterInList("E") && <Alphabet bands={bands} letter={"E"}></Alphabet>}
        {isLetterInList("F") && <Alphabet bands={bands} letter={"F"}></Alphabet>}
        {isLetterInList("G") && <Alphabet bands={bands} letter={"G"}></Alphabet>}
        {isLetterInList("H") && <Alphabet bands={bands} letter={"H"}></Alphabet>}
        {isLetterInList("I") && <Alphabet bands={bands} letter={"I"}></Alphabet>}
        {isLetterInList("J") && <Alphabet bands={bands} letter={"J"}></Alphabet>}
        {isLetterInList("K") && <Alphabet bands={bands} letter={"K"}></Alphabet>}
        {isLetterInList("L") && <Alphabet bands={bands} letter={"L"}></Alphabet>}
        {isLetterInList("M") && <Alphabet bands={bands} letter={"M"}></Alphabet>}
        {isLetterInList("N") && <Alphabet bands={bands} letter={"N"}></Alphabet>}
        {isLetterInList("O") && <Alphabet bands={bands} letter={"O"}></Alphabet>}
        {isLetterInList("P") && <Alphabet bands={bands} letter={"P"}></Alphabet>}
        {isLetterInList("Q") && <Alphabet bands={bands} letter={"Q"}></Alphabet>}
        {isLetterInList("R") && <Alphabet bands={bands} letter={"R"}></Alphabet>}
        {isLetterInList("S") && <Alphabet bands={bands} letter={"S"}></Alphabet>}
        {isLetterInList("T") && <Alphabet bands={bands} letter={"T"}></Alphabet>}
        {isLetterInList("U") && <Alphabet bands={bands} letter={"U"}></Alphabet>}
        {isLetterInList("V") && <Alphabet bands={bands} letter={"V"}></Alphabet>}
        {isLetterInList("W") && <Alphabet bands={bands} letter={"W"}></Alphabet>}
        {isLetterInList("X") && <Alphabet bands={bands} letter={"X"}></Alphabet>}
        {isLetterInList("Y") && <Alphabet bands={bands} letter={"Y"}></Alphabet>}
        {isLetterInList("Z") && <Alphabet bands={bands} letter={"Z"}></Alphabet>}
      </section>
    </>
  );
}

function Alphabet({ bands, letter }) {
  return (
    <>
      <BandAlphabet bands={bands} letter={letter}></BandAlphabet>
    </>
  );
}
