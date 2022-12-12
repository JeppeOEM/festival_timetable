import s from "../../styles/components/line-up/Alphabet.module.sass";
import { useState, useEffect } from "react";

function Alphabet({ setLetter, setFilterBands, bands, filterListGenre }) {
  function filterLetter(letter) {
    const result = bands.filter((band) => {
      return band.name[0].toLowerCase() === letter;
    });
    setLetter(letter);
    setFilterBands(result);
  }

  useEffect(() => {
    console.log("bands", bands[0]);
    console.log("filterListGenre", filterListGenre);
  }, [bands, filterListGenre]);

  //destructuring same as props.filterLetter
  return (
    <div className={s.alphabet}>
      <p
        onClick={() => {
          filterLetter("a");
        }}
        className='letter'>
        A
      </p>

      <p
        onClick={() => {
          filterLetter("b");
        }}
        className='letter'>
        B
      </p>
      {/*       
      <p onClick={() => {filterLetter}("c")} className="letter">
        C
      </p>
      <p onClick={() => {filterLetter}("d")} className="letter">
        D
      </p>
      <p onClick={() => {filterLetter}("e")} className="letter">
        E
      </p>
      <p onClick={() => {filterLetter}("f")} className="letter">
        F
      </p>
      <p onClick={() => {filterLetter}("g")} className="letter">
        G
      </p>
      <p onClick={() => {filterLetter}("h")} className="letter">
        H
      </p>
      <p onClick={() => {filterLetter}("i")} className="letter">
        I
      </p>
      <p onClick={() => {filterLetter}("j")} className="letter">
        J
      </p>
      <p onClick={() => {filterLetter}("k")} className="letter">
        K
      </p>
      <p onClick={() => {filterLetter}("l")} className="letter">
        L
      </p>
      <p onClick={() => {filterLetter}("m")} className="letter">
        M
      </p>
      <p onClick={() => {filterLetter}("n")} className="letter">
        N
      </p>
      <p onClick={() => {filterLetter}("o")} className="letter">
        O
      </p>
      <p onClick={() => {filterLetter}("p")} className="letter">
        P
      </p>
      <p onClick={() => {filterLetter}("q")} className="letter">
        Q
      </p>
      <p onClick={() => {filterLetter}("r")} className="letter">
        R
      </p>
      <p onClick={() => {filterLetter}("s")} className="letter">
        S
      </p>
      <p onClick={() => {filterLetter}("t")} className="letter">
        T
      </p>
      <p onClick={() => {filterLetter}("u")} className="letter">
        U
      </p>
      <p onClick={() => {filterLetter}("v")} className="letter">
        V
      </p>
      <p onClick={() => {filterLetter}("w")} className="letter">
        W
      </p>
      <p onClick={() => {filterLetter}("x")} className="letter">
        X
      </p>
      <p onClick={() => {filterLetter}("y")} className="letter">
        Y
      </p> */}
      <p
        onClick={() => {
          filterLetter("z");
        }}
        className='letter'>
        Z
      </p>
    </div>
  );
}

export default Alphabet;
