import Band from "./Band";
import classes from "../../styles/components/line-up/BandList.module.sass";

function BandList(props) {
  const whatDay = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
  const scenes = ["Midgard", "Jotunheim", "Vanaheim"];

  return (
    <ul className={classes.BandList}>
      {props.bands.map((band) => {
        return (
          <Band
            key={band.name}
            name={band.name}
            genre={band.genre}
            logo={band.logo}
            logoCredits={band.logoCredits}
            members={band.members}
            actData={props.actData}></Band>
        );
      })}
    </ul>
  );
}

export default BandList;
