import { useState } from "react";
import info from "../../styles/components/info/Info.module.sass";

function InfoArticle() {
  const [expand, setExpand] = useState(false);
  function expandArticle(setExpand) {
    console.log(expand);
    if (expand == false) {
      setExpand(true);
    } else {
      setExpand(false);
    }
  }

  return (
    <article className={info.article}>
      <h1>News Title</h1>
      <p>
        lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
        facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
        facilisi. Nulla facilisi. Nulla
      </p>

      {expand == true ? (
        <>
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla
          facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi. Nulla facilisi.
          Nulla facilisi. Nulla facilisi. Nulla
          <h2>LOL</h2>{" "}
        </>
      ) : null}
      <div
        onClick={() => {
          expandArticle(setExpand);
        }}>
        {!expand ? <p>Read More</p> : <p>Read Less</p>}
      </div>
    </article>
  );
}

export default InfoArticle;
