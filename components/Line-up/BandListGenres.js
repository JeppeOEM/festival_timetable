import Band from "./Band";
import BandGrid from "../../styles/components/line-up/BandGrid.module.sass";

function BandList(props) {
  return (
    <section className={BandGrid.BandGrid}>
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
    </section>
  );
}

export default BandList;
