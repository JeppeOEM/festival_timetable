import news from "../styles/pages/news.module.sass";
import { useState } from "react";
import NewsArticle from "../components/index/NewsArticle";
import Image from "next/image";

function Index() {
  return (
    <>
      <header className={news.hero}>
        {/*         <figure className={news.heroPic}>
       
          <Image src='/img/pexels-photo-164693.jpeg' alt='Ragnarock Festival' fill />
        </figure> */}
        <h1 className={news.festivalTitle}>Ragnarock</h1>
      </header>
      <div classsName={news.body}>
        <h1 className={news.anouncements}>Anouncements</h1>
        <section className={news.section}>
          <NewsArticle></NewsArticle>
          <NewsArticle></NewsArticle>
          <NewsArticle></NewsArticle>
        </section>
      </div>
    </>
  );
}

export default Index;
