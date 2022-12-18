import news from "../styles/pages/news.module.sass";

function Index() {
  return (
    <>
      <div className={news.hero}>
        {" "}
        <h1 className={news.festivalTitle}>Ragnarock</h1>
      </div>
    </>
  );
}

export default Index;
