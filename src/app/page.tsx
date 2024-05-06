import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Hello!! home</h1>
      <Link href={"/search"}>go search</Link>
    </div>
  );
};

export default Home;
