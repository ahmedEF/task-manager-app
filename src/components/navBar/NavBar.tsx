import { FaTasks } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineManageAccounts } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { MdDone } from "react-icons/md";
import {TbProgress } from "react-icons/tb";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faHourglass, faHourglassStart, faPen } from '@fortawesome/free-solid-svg-icons'
import { SignOutButton, UserButton, auth, clerkClient, currentUser, useUser } from "@clerk/nextjs";
import { redirect, usePathname } from "next/navigation";
import { RiLoader5Line } from "react-icons/ri";
import { useRouter } from "next/router";

import Link from "next/link";
import { ReactNode, useEffect } from "react";
import { AppProps } from "next/app";

export default function NavBar() {
    const { isLoaded, isSignedIn, user } = useUser();
    if (!user) {
    // redirect("/sign-up");
  }
  // // Get the user data
//   const userData = clerkClient.users.getUser(user);
  // mock test object

  return (
    <>
    {user ?(
      <div className="flex">
      <aside className="h-screen rounded-r-2xl w-72 bg-gray-50 text-gray-800 p-4">
        <div className="flex items-center mb-4 space-x-1">
          <img
            alt="Profile"
            height="30"
            src={user?.imageUrl}
            style={{
              aspectRatio: "30/30",
              objectFit: "cover",
            }}
            className="rounded-full"
            width="30" />
          {/* <div className="w-30 h-30">
    <UserButton afterSignOutUrl="/"  /></div> */}

          <h1 className="text-md font-medium">  👋 Hi, {user?.username}</h1>
        </div>
        <nav className="space-y-2">
          <Link href={'/Tasks/List'} className="w-full flex items-center space-x-2 hover:bg-gray-200 variant-ghost active:bg-gray-300 py-2 px-2 rounded-lg text-black-500">
            <FaTasks />
            <span className="text-sm font-medium">Tasks</span>
          </Link>
          <button className="w-full flex items-center space-x-2 active:bg-gray-300 variant-ghost py-2 px-2 rounded-lg text-black-800">
            <IoSettingsOutline />
            <Link href={'/Tasks/TaskView'} className="text-sm font-medium">Handle Tasks</Link>
          </button>
          <button className="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 variant-ghost py-2 px-2 rounded-lg text-black-500">
            <MdOutlineManageAccounts />
            <span className="text-sm font-medium">Accounts</span>
          </button>
          {!user?.id ? (
            <RiLoader5Line />
          ) : (
            <SignOutButton>
              <button className="w-full flex items-center space-x-2 hover:bg-red-100 active:bg-red-300 py-2 px-2 rounded-lg text-red-500">
                <IoLogOutOutline />
                <span className="text-sm font-medium">Logout</span>
              </button>
            </SignOutButton>
          )}
          <div className="flex flex-col items-center mt-80">hi</div>
        </nav>

      </aside>
      <main className="flex-1 p-4">
        
      </main>
    </div>
    ):(
      <main >
        
      </main>
    )
    }
    
      </>
  );
}
