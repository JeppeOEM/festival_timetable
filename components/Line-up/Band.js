import Link from "next/link";
import Image from "next/image";
import s from "../../styles/components/line-up/Band.module.sass";
import kebabCase from "../../js_functions/kebabCase";

function Band(props) {
  return (
    <>
      <li className={s.style}>
        {/*       <Link href={url}>
        <h2>{props.name}</h2>
      </Link> */}

        <Link href={{ pathname: `/line-up/[band]` }} as={`line-up/${kebabCase(props.name)}`}>
          <h2>{props.name}</h2>
        </Link>
      </li>
    </>
  );
}

export default Band;
