import ActList from "../../components/Schedule/ActList";
import schedule from "../../styles/components/schedule/Schedule.module.sass";

import { useState, useEffect } from "react";

function Schedule(props) {
  const [acts, setActs] = useState([props]);

  console.log(props);

  return (
    <section>
      {/* 
      return <Act key={act.name} name={act.name} start={act.start} end={act.end} act={act.act}></Act>;
       */}

      <ActList actData={acts}></ActList>
    </section>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:8080/schedule");
  const data = await response.json();

  console.log(data);
  return {
    props: {
      act: data,
    },
  };
}

export default Schedule;
