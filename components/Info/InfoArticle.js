import { useState } from "react";
import infoArticle from "../../styles/components/info/InfoArticle.module.sass";
import Image from "next/image";

function InfoArticle({ title, children }) {
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
    <article>
      <h1>{title}</h1>
      <div className={infoArticle.flex}>
        <div
          onClick={() => {
            expandArticle(setExpand);
          }}>
          {!expand ? (
            <div>
              <figure>
                <Image src='/arrow.svg' width='50' height='50'></Image>
              </figure>
            </div>
          ) : (
            <figure>
              <Image src='/arrow.svg' width='50' height='50'></Image>
            </figure>
          )}
        </div>
      </div>
      {expand == true ? <div className=''>{children}</div> : null}
    </article>
  );
}

export default InfoArticle;