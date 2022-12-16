import Image from "next/image";

function randomimg({ img }) {
  img = `img/${img}`;

  return (
    <>
      <img src={img} alt='lol' />

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
