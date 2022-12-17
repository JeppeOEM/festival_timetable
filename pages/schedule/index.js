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

      <div className={schedule.days}>
        <a href='#Monday'>
          <span>Monday</span>
        </a>
        <a href='#Tuesday'>
          <span>Tuesday</span>
        </a>
        <a href='#Wednesday'>
          <span>Wednesday</span>
        </a>
        <a href='#Thursday'>
          <span>Thursday</span>
        </a>
        <a href='#Friday'>
          <span>Friday</span>
        </a>
        <a href='#Saturday'>
          <span>Saturday</span>
        </a>
        <a href='#Sunday'>
          <span>Sunday</span>
        </a>
      </div>

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
