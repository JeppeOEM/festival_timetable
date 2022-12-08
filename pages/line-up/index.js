import { useState, useEffect } from "react";

import BandList from "../../components/Line-up/BandList";

function LineUp(props) {
  /*   const [bands, setBands] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); */

  /* async function getData() {
    try {
      const response = await fetch("http://localhost:8080/bands");

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      setIsLoading(true);
      setBands(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  } */

  /*   useEffect(() => {
    getData();
  }, []); */

  return (
    <section>
      <BandList bands={props.bands} />;
    </section>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:8080/bands");

  const data = await response.json();

  return {
    props: {
      bands: data,
    },
  };
}

export default LineUp;
