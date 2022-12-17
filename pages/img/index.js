import Image from "next/image";
import ReactDOM from "react-dom";

function randomimg({ img }) {
  /*   let url = document.getElementById("api_img").getAttribute("src"); */
  img = `img/${img}`;

  console.log(img);

  return (
    <>
      <img src='https://placeimg.com/720/480' alt='' />

      <img id='api_img' src={img} alt='lol' />
      {/*       <img src={img2} alt='lol' /> */}
    </>
  );
}

export async function getServerSideProps() {
  const getImg = await fetch("http://localhost:3000/api/");
  const imgName = await getImg.json();

  return {
    props: {
      img: imgName.image,
    },
  };
}

export default randomimg;
