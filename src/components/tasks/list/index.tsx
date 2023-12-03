"use client";
import { ListTitles } from "@/shared/AppConst";
// import { ITaskData } from "@/app/models"
import { columns } from "./Columns";
import { DataTable } from "./Table";
// import Header from "../header"
// import { trpc } from "@/app/_trpc/client"
// import { api } from "@/utils/api"
import { useUser } from "@clerk/nextjs";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { api } from "@/utils/api";
import { ITaskData } from "@/models";
import { Toaster } from "react-hot-toast";
import { env } from "@/env.mjs";

export default function List() {
  const {
    data: Tasks,
    isFetching,
    isSuccess,
  } = api.listings.getTasksByUserId.useQuery<ITaskData[]>();
  return (
    <div className="hidden h-full bg-zinc-50 border rounded-xl flex-1 flex-col space-y-8 p-8 md:flex">
      <div>
        <Toaster position="bottom-right" reverseOrder={false} />
      </div>
      <div className="flex items-center justify-between space-y-2">
        <Header SubTitle={ListTitles.SubTitle} Title={ListTitles.Title} />
        {/* <Button className="border border-black border-solid font-family-inherit px-3 py-2 text-white bg-black hover:bg-white hover:text-black transition duration-300 ease-in-out --tw-border-opacity-1">
          Add New Task
        </Button> */}
        
      </div>
      <DataTable data={Tasks ?? []} columns={columns} />
    </div>
  );
}
