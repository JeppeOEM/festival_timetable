import React from "react";
import { useState } from "react";
import news from "../../styles/pages/Info.module.sass";

function ArticleLayout({ intro, title, children }) {
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
    <>
      <article className={news.article}>
        <h1>{title}</h1>
        <p>{intro}</p>
        {expand == true ? (
          <>
            <div>{children}</div>
          </>
        ) : null}
        <div
          onClick={() => {
            expandArticle(setExpand);
          }}>
          {!expand ? <p>Read More</p> : <p>Read Less</p>}
        </div>
      </article>
    </>
  );
}

export default ArticleLayout;
