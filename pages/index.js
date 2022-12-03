import { useState, useEffect } from "react";

function Timetable() {
  const [bands, setBands] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function getData() {
    try {
      const response = await fetch("http://localhost:8080/bands");

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      /*       const transformedData = data.map((bandData) => {
        return {
          name: bandData.name,
          genre: bandData.genre,
          logo: bandData.logo,
          credits: bandData.logoCredits,
          bio: bandData.bio,
          members: bandData.members,
        };
      }); */
      setBands(data);

      setIsLoading(true);
      setBands(data);
      console.log("results", data);
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  let content = <p>Found no movies.</p>;

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

function BandList(props) {
  return (
    <ul>
      {props.bands.map((band) => {
        return <Band key={band.name} name={band.name}></Band>;
      })}
    </ul>
  );
}

function Band(props) {
  return (
    <li>
      <h2>{props.name}</h2>
    </li>
  );
}

export default Timetable;
