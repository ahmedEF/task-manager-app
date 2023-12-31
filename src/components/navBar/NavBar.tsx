import { FaHome, FaTasks } from "react-icons/fa";
import { IoListOutline, IoSettingsOutline } from "react-icons/io5";
import { MdOutlineManageAccounts } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";

import {
  SignOutButton,
  UserButton,
  auth,
  clerkClient,
  currentUser,
  useUser,
} from "@clerk/nextjs";
import router, { useRouter } from "next/router";
import { ThreeDots } from "react-loader-spinner";
import Link from "next/link";
import { ReactNode, useEffect } from "react";
import { AppProps } from "next/app";
import { Home } from "lucide-react";
import { BallBeat } from "react-pure-loaders";
import Image from "next/image";
type Props = {
  children: React.ReactNode;
};
export default function NavBar(props: Props) {
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <>
      {user ? (
        <div className="flex">
          <aside className="h-screen rounded-r-2xl w-72 bg-gray-50 text-gray-800 p-4">
            <div className="flex items-center mb-4 space-x-1">
            <picture>
              <img
                src={user?.imageUrl}
                alt={"Profile"}
                height="30"
                style={{
                  aspectRatio: "30/30",
                  objectFit: "cover",
                }}
                className="rounded-full"
                width="30"
              />
              </picture>
              <h1 className="text-md font-medium"> 👋 Hi, {user?.username}</h1>
            </div>
            <nav className="space-y-2 ">
              <Link
                href={"/dashboard"}
                className={`w-full flex items-center space-x-2 ${
                  currentPath === "/dashboard"
                    ? "bg-gray-200"
                    : "hover:bg-gray-200"
                } variant-ghost active:bg-gray-300 py-2 px-2 rounded-lg text-black-500`}
              >
                <Home className="h-4 w-4" />
                <span className="text-sm font-medium">Home</span>
              </Link>
              <Link
                href={"/dashboard/tasksList"}
                className={`w-full flex items-center space-x-2 ${
                  currentPath === "/dashboard/tasksList"
                    ? "bg-gray-200"
                    : "hover:bg-gray-200"
                } variant-ghost active:bg-gray-300 py-2 px-2 rounded-lg text-black-500`}
              >
                <IoListOutline className="h-5 w-5" />
                <span className="text-sm font-medium">List</span>
              </Link>

              <Link
                href={"/dashboard/tasksView"}
                className={`w-full flex items-center space-x-2 ${
                  currentPath === "/dashboard/tasksView"
                    ? "bg-gray-200"
                    : "hover:bg-gray-200"
                } variant-ghost active:bg-gray-300 py-2 px-2 rounded-lg text-black-500`}
              >
                <IoSettingsOutline />
                <span className="text-sm font-medium">Task View</span>
              </Link>
              <Link
                href={"/coming-soon"}
                className={`w-full flex items-center space-x-2 ${
                  currentPath === "/coming-soon"
                    ? "bg-gray-200"
                    : "hover:bg-gray-200"
                } variant-ghost active:bg-gray-300 py-2 px-2 rounded-lg text-black-500`}
              >
                <MdOutlineManageAccounts />
                <span className="text-sm font-medium">Account</span>
              </Link>
              <SignOutButton>
                <button className="w-full flex items-center space-x-2 hover:bg-red-100 active:bg-red-300 py-2 px-2 rounded-lg text-red-500">
                  <IoLogOutOutline />
                  <span className="text-sm font-medium">Logout</span>
                </button>
              </SignOutButton>
            </nav>
            <div className="text-sm font-medium grid justify-items-center mt-80">
              v0.1.1 (Beta)
            </div>
          </aside>
          <main className="flex-1 p-4">
            <>{props.children}</>
          </main>
        </div>
      ) : !isLoaded ? (
        <h1>loading...</h1>
      ) : (
        <>{props.children}</>
      )}
    </>
  );
}
