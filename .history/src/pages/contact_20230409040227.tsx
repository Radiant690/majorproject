import Head from "next/head";
import ResearcherList from "../components/ResearcherList";
import { getResearchers } from "lib/api.js";
lib\api.js
export default function contact({ researchers }) {
  return (
    <div className="container mx-auto my-8">
      <Head>
        <title>Research and Development Team | My University</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl font-bold mb-8">
        Meet Our Research and Development Team
      </h1>

      <ResearcherList researchers={researchers} />
    </div>
  );
}

export async function getStaticProps() {
  const researchers = await getResearchers();
  return {
    props: {
      researchers,
    },
  };
}
