import Band from "./Band";
import s from "../../styles/components/line-up/BandGrid.module.sass";

function BandList(props) {
  return (
    <>
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
    </>
  );
}

export default BandList;
