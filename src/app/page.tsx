import SettingComponent from "@/components/SettingComponent";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Hello!! home</h1>
      <Link href={"/search"}>go search</Link>
      <SettingComponent />
    </div>
  );
};

export default Home;
