import Band from "./Band";
import classes from "../../styles/components/line-up/BandList.module.sass";

function BandList(props) {
  let acts = props.actData[0]; //SO WEIRD IT DOES NOT NEED .ACT
  console.log("ACTS", acts);
  const whatDay = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
  const scenes = ["Midgard", "Jotunheim", "Vanaheim"];

  /*  for (let y = 0; y < whatDay.length; y++) {
    for (let i = i )
  }
 */

  /*   function playingWhen(whatDay) {
    let arr = [];
    for (let y = 0; y < scenes.length; y++) {
      for (let x = 0; x < whatDay.length; x++) {
        for (let i = 0; i < acts[scenes[y]][whatDay[x]].length; i++) {
          if (acts[scenes[y]][whatDay[x]][i].act !== "break") {
            arr.push({ [whatDay[x]]: acts[scenes[y]][whatDay[x]][i].act, [scenes[y]]: scenes[y] });
          }
        }
      }
    }
    console.log("ARR", arr);
  } */

  /*  playingWhen("playingWhen", whatDay); */
  return (
    <ul className={classes.BandList}>
      {props.bands.map((band) => {
        return <Band key={band.name} name={band.name} genre={band.genre} logo={band.logo} logoCredits={band.logoCredits} members={band.members}></Band>;
      })}
    </ul>
  );
}

export default BandList;
