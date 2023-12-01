import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faHourglassStart } from "@fortawesome/free-solid-svg-icons";
// import { ITaskData } from "@/app/models";
import {
  QuestionMarkCircledIcon,
  StopwatchIcon,
  CheckCircledIcon,
  DiscIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Header from "../../header";
import TaskCard from "./taskCard";
import { ListTitles } from "@/shared/AppConst";
import FormSave from "../form";
import { useState } from "react";


export default function TaskView() {
  const [open,setOpen]=useState(false);
  const mockTaskCard = [
    {
      id: 1,
      title: "Complete Project Report",
      description:
        "Finish the quarterly project report and submit it by Friday.",
      status: "NOT_ASSIGNED",
    },
    {
      id: 2,
      title: "Add fetch Api",
      description:
        "Finish the quarterly project report and submit it by Friday.",
      status: "TO_DO",

    },
    {
      id: 3,
      title: "Add Trpc",
      description:
        "Finish the quarterly project report and submit it by Friday.",
      status: "IN_PROGRESS",
    },
    {
      id: 4,
      title: "Add fetch Api",
      description:
        "Finish the quarterly project report and submit it by Friday.",
      status: "COMPLETED",

    },
  ];

  return (
    <main className="hidden h-full bg-zinc-50 border rounded-xl flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <Header Description={ListTitles.Description} Title={ListTitles.Title}/>
        <div className="flex items-center space-x-2">
        <Button onClick={()=>{setOpen(true)}} className="border border-black border-solid font-family-inherit px-3 py-2 text-white bg-black hover:bg-white hover:text-black transition duration-300 ease-in-out --tw-border-opacity-1">
          Add New Task
        </Button>
        <FormSave open={open} setOpen={setOpen}/>
      </div>
      </div>
      <div className="flex space-x-4">
        {/* Status: NOT_ASSIGNED */}
        <div className="w-1/4">
          <h2 className="mb-4 text-sm font-medium text-black-400 dark:text-gray-100 flex items-center">
            <QuestionMarkCircledIcon className="mr-2 h-4 w-4" />
            No Status
          </h2>

          {mockTaskCard
            .filter((item) => item.status === "NOT_ASSIGNED")
            .map((item) => (
              <TaskCard key={item.id} data={item} />
            ))}
        </div>

        {/* Status: TO_DO */}
        <div className="w-1/4">
          <h2 className="mb-4 text-sm font-medium text-black-400 dark:text-gray-300 flex items-center">
            <DiscIcon className="mr-2 h-4 w-4" />
            To Do
          </h2>
          {mockTaskCard
            .filter((item) => item.status === "TO_DO")
            .map((item) => (
              <TaskCard key={item.id} data={item} />
            ))}
        </div>
        <div className="w-1/4">
          <h2 className="mb-4 text-sm font-medium text-black-400 dark:text-gray-300 flex items-center">
            <StopwatchIcon className="mr-2 h-4 w-4" />
            In Progress
          </h2>
          {mockTaskCard
            .filter((item) => item.status === "IN_PROGRESS")
            .map((item) => (
              <TaskCard key={item.id} data={item} />
            ))}
        </div>
        <div className="w-1/4">
          <h2 className="mb-4 text-sm font-medium text-black-400 dark:text-gray-300 flex items-center">
            <CheckCircledIcon className="mr-2 h-4 w-4" />
            Done
          </h2>
          {mockTaskCard
            .filter((item) => item.status === "COMPLETED")
            .map((item) => (
              <TaskCard key={item.id} data={item} />
            ))}
        </div>
      </div>
    </main>
  );
}
