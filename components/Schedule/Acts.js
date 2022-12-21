import React from "react";
import actList from "../../styles/components/schedule/ActList.module.sass";
import Link from "next/link";
import kebabCase from "../../js_functions/kebabCase";

function Acts({ stage, day }) {
  return (
    <section>
      <h2 className={actList.sceneName}>{stage}</h2>
      <ul className={actList.ActList}>
        {day.map((act) => {
          return (
            <>
              {act.act !== "break" ? (
                <Link href={{ pathname: `/line-up/[band]` }} as={`line-up/${kebabCase(act.act)}`}>
                  <li key={act.act + act.start + act.end}>
                    <h2>{act.act}</h2>
                  </li>
                </Link>
              ) : (
                <li>
                  <h2>Break</h2>
                </li>
              )}
            </>
          );
        })}
      </ul>
    </section>
  );
}

export default Acts;
