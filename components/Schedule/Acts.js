import React from "react";
import s from "../../styles/components/schedule/Acts.module.sass";
import Link from "next/link";
import kebabCase from "../../js_functions/kebabCase";

function Acts(props) {
  return (
    <section className={s.acts}>
      <h1>{props.filterDay}</h1>
      <ul className={s.ActList}>
        {props.day.map((act) => {
          return (
            <li key={act.act + act.start + act.end}>
              {act.act === "break" ? (
                <h2>{act.start} Break</h2>
              ) : (
                <Link href={{ pathname: `/line-up/[band]` }} as={`line-up/${kebabCase(act.act)}`}>
                  <h2>{act.cancelled ? act.act : act.start + " " + act.act + " cancelled"}</h2>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Acts;
