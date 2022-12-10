function Test(props) {
  console.log("PROPS SPOTS", props.spots);

  return (
    <>
      <h1>HER</h1>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:8080/available-spots");
  const data = await response.json();

  console.log("DSSS", data);
  return {
    props: {
      spots: data,
    },
  };
}

export default Test;
