import news from "../styles/pages/news.module.sass";
import { useState } from "react";

import Image from "next/image";
import ArticleLayout from "../components/Info/InfoLayout";

function Index() {
  const articleOne =
    "There has been a recent change to the line-up. Queen has resurected Freddie Mercury and he will be performing on the main stage.";
  const articleTwo = "This year we will provide a free shuttle service to and from the festival.";
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
          <ArticleLayout intro={articleOne} title='Freddie is Back'>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate unde illum ullam. Tempore maiores eum
              ipsum deleniti, reprehenderit qui optio! Optio mollitia blanditiis repudiandae. Eligendi tempora numquam
              magni dignissimos nihil!
            </p>
          </ArticleLayout>
          <ArticleLayout intro={articleTwo} title='Shuttle Busses to the people'>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate unde illum ullam. Tempore maiores eum
              ipsum deleniti, reprehenderit qui optio! Optio mollitia blanditiis repudiandae. Eligendi tempora numquam
              magni dignissimos nihil!
            </p>
          </ArticleLayout>
        </section>
      </div>
    </>
  );
}

export default Index;
