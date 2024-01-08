import Head from "next/head";

const Seo = ({ title }: Ititle) => {
  return (
    <div>
      <Head>
        <title>{title} | Next Movies</title>
      </Head>
    </div>
  );
};

export default Seo;

interface Ititle {
  title: string;
}
