import { useRouter } from "next/router";

function BandInfo(props) {
  const router = useRouter();
  const band = router.query.band;

  return (
    <>
      <img src={props.logo} alt="" />
      <h1>{props.bandname}</h1>;
    </>
  );
}

export async function getServerSideProps(context) {
  console.log("contex", context.query);

  return {
    props: {
      bandname: context.query.bandname,
      logo: context.query.logo,
    },
  };
}

/* export async function getStaticProps() {
  const response = await fetch("http://localhost:8080/bands/");
}
 */
export default BandInfo;
