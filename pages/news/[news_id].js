import { useRouter } from "next/router";

function Detail() {
  const router = useRouter();
  const news_id = router.query.news_id; // whatever you type after news/ will be available here

  return <h1>d</h1>;
}

export default Detail;
