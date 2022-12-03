//import { Fragment } from "react"; fragment component is same as <></>
import Link from "next/link";
function News() {
  return (
    <>
      {/*  fragement same as <></> */}
      <h1>News</h1>;
      <ui>
        <li>
          <Link href="/news/great">111111111</Link> {/* site internal link */}
        </li>
        <li>22222222222222</li>
      </ui>
    </>
  );
}

export default News;
