import { useRouter } from "next/router";
import Image from "next/image";

import kebabCase from "../../js/kebabCase";
import classes from "./BandId.module.sass";

function BandId(props) {
  /*   const router = useRouter();
  const band = router.query.bandId; */
  /*   let text = props.bandData.toString(); */
  return (
    <section>
      <h1>{props.name}</h1>;<h2>{props.genre}</h2>;<p>{props.bio}</p>
      {
        <figure className={classes.logo}>
          <Image src={props.logo} alt={props.name} fill />
        </figure>
      }
      <h1>{props.logo}</h1>
    </section>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { bandId: "Tool" } }, { params: { bandId: "Queen" } }],
    fallback: true, // will allow us to generate pages on demand Other than Tool or Queen
  };
}

export async function getStaticProps(content) {
  const bandId = content.params.bandId; // taken from the file name
  const response = await fetch("http://localhost:8080/bands");
  const data = await response.json();
  let bandData = data.filter((band) => {
    return kebabCase(band.name) === bandId; // convert the band name to kebab case and compare it to the bandId
  });

  let logoCredits = null;
  let logo = null;
  if (!bandData[0].logoCredits) {
    console.log("no logo credits");
  } else {
    logoCredits = bandData[0].logoCredits;
  }
  const isHttp = bandData[0].logo.substring(0, 4);
  console.log("WHAAAAAAAAAAAAAAAAAAT IS IT", isHttp);
  if (isHttp === "http") {
    /*     logo = bandData[0].logo; */
    logo = "/620px-Black_Sabbath_(Iommi,_Osbourne,_Ward_and_Butler).JPG"; //images inside Public folder is accesed by / and the name of the image
  } else {
    logo = "/" + bandData[0].logo;
  }

  console.log("found", bandData);
  console.log("name " + bandData[0].name);

  return {
    props: {
      name: bandData[0].name,
      members: bandData[0].members,
      genre: bandData[0].genre,
      logo,
      bio: bandData[0].bio,
      logoCredits,
    },
  };
}

export default BandId;
/* {
  "bandData": [
    {
      "name": "Tool",
      "members": [
        "Danny Carey",
        "Adam Jones",
        "Maynard James Keenan",
        "Justin Chancellor"
      ],
      "genre": "Alternative Metal",
      "logoCredits": "By Shisma 11:13, 11 August 2013 (UTC) - Vectorised by Shisma. Originally appeared on the Album 10.000 Days in 2006, Public Domain, https://commons.wikimedia.org/w/index.php?curid=27660583",
      "logo": "Tool_logo_2006.svg",
      "bio": "Tool is an American rock band from Los Angeles. Formed in 1990, the group's line-up includes drummer Danny Carey, guitarist Adam Jones, and vocalist Maynard James Keenan. Justin Chancellor has been the band's bassist since 1995, replacing their original bassist Paul D'Amour. Tool has won four Grammy Awards, performed worldwide tours, and produced albums topping the charts in several countries. "
    }
  ]
}
 */
/* export async function getServerSideProps(context) {
  console.log("contex", context.query);

  return {
    props: {
      bandname: context.query.bandname,
      logo: context.query.logo,
    },
  };
}
 */
/* export async function getStaticProps() {
  const response = await fetch("http://localhost:8080/bands/");
}
 */
