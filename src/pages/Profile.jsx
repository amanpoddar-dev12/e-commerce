import { useContext } from "react";
import { FireBaseContext } from "../context/authentication/UserContext";

function Profile() {
  const { user } = useContext(FireBaseContext);
  console.log(user);
  return (
    <div className="bg-gray-200 dark:bg-slate-900  font-sans h-screen w-full flex flex-row justify-center items-center">
      <div className="card w-96 mx-auto bg-white  shadow-xl hover:shadow ">
        {user?.photoURL ? (
          <img
            className="w-32 mx-auto rounded-full -mt-20 border-8 border-white "
            src={user?.photoURL}
            alt=""
          />
        ) : (
          <div className="relative w-32  mx-auto rounded-full -mt-20 border-8 border-white  h-32 overflow-hidden bg-gray-100  dark:bg-gray-600">
            <svg
              className="absolute w-32 h-32 text-gray-400 -left-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        )}
        <div className="text-center mt-2 text-3xl font-medium">
          {user?.displayName ? user.displayName : "Unknown"}
        </div>
        <div className="text-center mt-2 font-light text-sm">
          {user?.email ? user.email : "@unknwon.com"}
        </div>
        <div className="text-center font-normal text-lg">
          {user?.location ? user.location : "India"}
        </div>
        <div className="px-6 text-center mt-2 font-light text-sm">
          <p>
            Front end Developer, avid reader. Love to take a long walk, swim
          </p>
        </div>
        <hr className="mt-8" />
        <div className="flex p-4">
          <div className="w-1/2 text-center">
            <span className="font-bold">1.8 k</span> Followers
          </div>
          <div className="w-0 border border-gray-300"></div>
          <div className="w-1/2 text-center">
            <span className="font-bold">2.0 k</span> Following
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
