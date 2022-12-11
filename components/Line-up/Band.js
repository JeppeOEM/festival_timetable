import Link from "next/link";
import Image from "next/image";
import s from "../../styles/components/line-up/Band.module.sass";
import kebabCase from "../../js/kebabCase";

function Band(props) {
  return (
    <>
      <li className={s.style}>
        {/*       <Link href={url}>
        <h2>{props.name}</h2>
      </Link> */}

        <Link href={{ pathname: `/line-up/[band]`, query: { bandname: props.name, genre: props.genre, members: props.members, logo: props.logo, logoCredits: props.logoCredits } }} as={`line-up/${kebabCase(props.name)}`}>
          <h2>{props.name}</h2>
        </Link>
      </li>
    </>
  );
}

export default Band;
