import Band from "./Band";
import classes from "./BandList.module.sass";

function BandList(props) {
  return (
    <ul className={classes.BandList}>
      {props.bands.map((band) => {
        return <Band key={band.name} name={band.name} genre={band.genre} logo={band.logo} logoCredits={band.logoCredits} members={band.members}></Band>;
      })}
    </ul>
  );
}

export default BandList;
