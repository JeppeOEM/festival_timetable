import Link from "next/link";
import Image from "next/image";

import kebabCase from "../../js_functions/kebabCase";
import BandGrid from "../../styles/components/line-up/BandGrid.module.sass";

function Band(props) {
  return (
    <article className={BandGrid.Band}>
      <Link href={{ pathname: `/line-up/[band]` }} as={`line-up/${kebabCase(props.name)}`}>
        <h2>{props.name}</h2>
      </Link>
    </article>
  );
}

export default Band;
