import { useState, useEffect } from "react";

import BandList from "../../components/Line-up/BandList";

function LineUp(props) {
  const [bands, setBands] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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

  let content = <p>No bands to show</p>;

  if (bands.length > 0) {
    content = <BandList bands={bands} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }
  return (
    <>
      <section>{content}</section>
    </>
  );
}

export async function getStaticProps() {
  {
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
  }
  return {
    props: {
      bands: bands,
    },
  };
}

export default LineUp;
