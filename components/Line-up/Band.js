import Link from "next/link";
import Image from "next/image";

import kebabCase from "../../js_functions/kebabCase";
import BandGrid from "../../styles/components/line-up/BandGrid.module.sass";

function Band(props) {
  let logo = null;
  console.log("WHAT THEACTUAL FUCK");
  const isHttp = props.logo.substring(0, 4); //Check if the logo is a link or a local image
  if (isHttp === "http") {
    /*     logo = "/" + getRandomImage(); */
    logo = props.logo; //images inside Public folder is accesed by / and the name of the image
  } else {
    logo = "/" + props.logo;
  }

  return (
    <article className={BandGrid.Band}>
      <div class={BandGrid.gradient}> </div>
      <figure classname={BandGrid.img}>
        <Image class src={logo} alt={logo} fill />
      </figure>

      <Link
        className={BandGrid.BandName}
        href={{ pathname: `/line-up/[band]` }}
        as={`line-up/${kebabCase(props.name)}`}>
        <div className={BandGrid.nameBox}>
          <h2>{props.name}</h2>
          <p className={BandGrid.genreTitle}>{props.genre}</p>
        </div>
      </Link>
    </article>
  );
}

export default Band;
