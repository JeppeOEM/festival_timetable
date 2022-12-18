import Image from "next/image";
import kebabCase from "../../js_functions/kebabCase";
import classes from "./BandId.module.sass";
import playingWhen from "../../js_functions/playingWhen";
import DayPlaying from "../../components/Line-up/DayPlaying";

import bandId from "../../styles/pages/bandId.module.sass";

import { useState } from "react";

//WEIRD NAMING ALERT
// p = data from /schedule I CANNOT NAME IT DIFFERENTLY BECAUSE IT GIVES ME UNDEFINED
//IF I USE LONGER WORD (not because of mispelling)  ?????
function BandId({ p, genre, name, logo, logoCredits, members, bio }) {
  function bandScheduleInfo(p) {
    for (let i = 0; i < p.length; i++) {
      if (p[i].id === `${name}`) {
        console.log(p[i].id);
        return p[i];
      }
    }
  }
  const getInfo = bandScheduleInfo(p);
  const { day, scene, start, end } = getInfo;
  console.log(getInfo);

  const membersMapped = members.map((member) => {
    return member + " ";
  });

  return (
    <section className={bandId.section}>
      <h1 className={bandId.header}>{name}</h1>
      {
        <>
          <figure className={bandId.logo}>
            {/*            <Image src='http://localhost:3000/random-img' alt='some' fill></Image> */}
            <Image src={logo} alt={name} fill />
          </figure>
          <p className={bandId.italic}>{logoCredits}</p>
        </>
      }
      <h3>Genre: {genre}</h3>
      <h3>Scene: {scene} </h3>
      <div className={bandId.inline}>
        <DayPlaying day={day}></DayPlaying>{" "}
        <h3 className={bandId.inline}>
          {start} : {end}
        </h3>
        <h3>Members: {membersMapped}</h3>
      </div>

      <p className={bandId.fontSize}>{bio}</p>
    </section>
  );
}

/* export async function getStaticPaths() {
  return {
    paths: [{ params: { bandId: "Tool" } }, { params: { bandId: "Queen" } }],
    fallback: true, // will allow us to generate pages on demand Other than Tool or Queen
  };
} */

export async function getServerSideProps(content) {
  const bandId = content.params.bandId; // taken from the file name
  const response = await fetch("http://localhost:8080/bands");
  const responseSchedule = await fetch("http://localhost:8080/schedule");
  const data = await response.json();
  const dataSchedule = await responseSchedule.json();

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

  const isHttp = bandData[0].logo.substring(0, 4); //Check if the logo is a link or a local image
  if (isHttp === "http") {
    logo = bandData[0].logo; //images inside Public folder is accesed by / and the name of the image
  } else {
    logo = "/" + bandData[0].logo;
  }

  const playingWhenResult = playingWhen(dataSchedule); // remaps the schedule data for the scenes to one list, proud of this function :D

  /*   console.log(result); */

  return {
    props: {
      name: bandData[0].name,
      members: bandData[0].members,
      genre: bandData[0].genre,
      logo,
      bio: bandData[0].bio,
      logoCredits,
      p: playingWhenResult,
    },
  };
}

export default BandId;
