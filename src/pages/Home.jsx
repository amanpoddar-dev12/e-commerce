import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="h-[700px]">
      <div className=" dark:text-white  md:text-5xl  text-3xl text-center flex flex-col justify-center md:mt-14 lg:mt-26 mt-20 gap-10 font-bold">
        <p className="md:text-9xl text-7xl mr-0 ">Jestify</p>
        <p className="">"Where Every Click Adds Spark to Your Style!"</p>
      </div>
      <div className="flex flex-wrap gap-3 mt-16 items-center justify-center text-3xl md:text-5xl">
        <div>👔</div>
        <div>👗</div>
        <div>⌚</div>
        <div>🍅</div>
        <div>👠</div>
      </div>
      <center>
        <div
          className={
            "bg-blue-500 px-3 py-3 w-72 rounded-md text-4xl font-bold dark:text-white mt-32 "
          }
        >
          <Link to={"/store"}>Shop now 👜</Link>
        </div>
      </center>
    </div>
  );
}

export default Home;
