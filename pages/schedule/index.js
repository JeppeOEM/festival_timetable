import ActList from "../../components/Schedule/ActList";
import schedule from "../../styles/components/schedule/Schedule.module.sass";

import { useState, useEffect } from "react";

function Schedule(props) {
  const [acts, setActs] = useState([props]);

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
  const api = "https://festivalapi.fly.dev/";
  const local = "http://localhost:8080/";
  const response = await fetch(api + "schedule");
  const data = await response.json();

  console.log(data);

  return {
    props: {
      act: data,
    },
  };
}

export default Schedule;
