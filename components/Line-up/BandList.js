import Band from "./Band";
import classes from "../../styles/components/line-up/BandList.module.sass";
// prettier-ignore
let alphabet = ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z"]

// prettier-ignore
function BandList(props) {
  return (
    /*     <><ul className={classes.BandList}> */

    <>
      { alphabet.forEach((letter)=> {props.bands.map((band) => {
        if (band.name[0] === letter)
          return (
            <>
              <h2>{letter}</h2>
              <ul className={classes.BandList}>
                <Band
                  key={band.name}
                  name={band.name}
                  genre={band.genre}
                  logo={band.logo}
                  logoCredits={band.logoCredits}
                  members={band.members}
                  actData={props.actData}></Band>
              </ul>
            </>
          );
      })})}
    </>
  );
}

export default BandList;
