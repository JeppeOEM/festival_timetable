import { useRouter } from "next/router";

function BandInfo(props) {
  const router = useRouter();
  /*   const band = router.query.band; */
  return <h1>{props.bandname}</h1>;
}

export async function getServerSideProps(context) {
  console.log("contex", context.query);
  return {
    props: {
      bandname: context.query.bandname,
    },
  };
}

export default BandInfo;
