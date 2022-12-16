import Link from "next/link";
import Image from "next/image";

import kebabCase from "../../js_functions/kebabCase";
import BandGrid from "../../styles/components/line-up/BandGrid.module.sass";

function Band(props) {
  let logo = null;
  const isHttp = props.logo.substring(0, 4); //Check if the logo is a link or a local image
  if (isHttp === "http") {
    logo = props.logo; //images inside Public folder is accesed by / and the name of the image
  } else {
    logo = "/" + props.logo;
  }

  return (
    <article className={BandGrid.Band}>
      <Image src={logo} alt={logo} fill />

      <Link
        className={BandGrid.BandName}
        href={{ pathname: `/line-up/[band]` }}
        as={`line-up/${kebabCase(props.name)}`}>
        <h2>{props.name}</h2>
      </Link>
    </article>
  );
}

export default Band;
