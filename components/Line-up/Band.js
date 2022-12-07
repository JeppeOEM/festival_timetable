import Link from "next/link";
import classes from "./Band.module.sass";
import kebabCase from "../../js/kebabCase";

function Band(props) {
  return (
    <li className={classes.style}>
      {/*       <Link href={url}>
        <h2>{props.name}</h2>
      </Link> */}

      <Link href={{ pathname: `/line-up/[band]`, query: { bandname: props.name } }} as={`line-up/${kebabCase(props.name)}`}>
        <h2>{props.name}</h2>
      </Link>
    </li>
  );
}

export default Band;
