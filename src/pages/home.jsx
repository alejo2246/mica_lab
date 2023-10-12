import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <p className="title-text title-bold">this is the home page.</p>
      <p className="title-text">this is the home page.</p>
    </div>
  );
};

export default HomePage;
