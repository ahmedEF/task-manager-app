import { DiscIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import Header from "../../header";
import TaskCard from "./taskCard";
import { ListTitles, PopUpTitles, statuses } from "@/shared/AppConst";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FormField from "../form/FormFields";
import { api } from "@/utils/api";
import { formSchema } from "../form/schema";
import { z } from "zod";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import toast, { Toaster } from "react-hot-toast";
import { env } from "@/env.mjs";

export default function TaskView() {
  const [isOpen, setIsOpen] = useState(false);
  // fetch tasks data
  const { data: Tasks, isFetching } = api.listings.getTasksByUserId.useQuery();
  const utils = api.useUtils();
  const [status, setStatus] = useState("NOT_ASSIGNED");
  const createTask = api.addTask.create.useMutation();
// handle submition form
  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    return createTask.mutate(
      {
        ...values,
        status: status,
      },
      {
        onSuccess() {
          //invalidate cache
          utils.listings.getTasksByUserId.invalidate();
          toast.success("Your task have been added !");
          setIsOpen(false);
        },
        onError(error) {
          toast.error("Error try again later");
        },
      }
    );
  };

  return (
    <>
      <div>
        <Toaster position="bottom-right" reverseOrder={false} />
      </div>
      <main className="hidden h-full bg-zinc-50 border rounded-xl flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <Header
            SubTitle={ListTitles.SubTitle}
            Title={ListTitles.Title}
          />
          <div className="flex items-center space-x-2">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button
                  onClick={() => {
                    setIsOpen(true);
                  }}
                  className="border border-black border-solid font-family-inherit px-3 py-2 text-white bg-black hover:bg-white hover:text-black transition duration-300 ease-in-out --tw-border-opacity-1"
                >
                  Add New Task
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Task </DialogTitle>
                  <DialogDescription>
                    {PopUpTitles.popUpSubTitle}
                  </DialogDescription>
                </DialogHeader>
                <FormField
                  onSubmit={handleSubmit}
                  position={status}
                  setPosition={setStatus}
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* fetch Task data for each item card  */}
        <div className="flex space-x-4">
          {statuses.map((statusItem) => (
            <div key={statusItem.label} className="w-1/4">
              <h2 className="mb-4 text-sm font-medium text-black-400 dark:text-gray-300 flex items-center">
                {statusItem.value === "TO_DO" ? (
                  <DiscIcon className="mr-2 h-4 w-4" />
                ) : (
                  <statusItem.icon className="mr-2 h-4 w-4" />
                )}
                {statusItem.label}
              </h2>

              <ScrollArea className="h-[30rem] rounded-md border border-gray-200">
                <ScrollBar orientation="vertical" />
                <ScrollBar orientation="horizontal" />
                <div className="p-1">
                  {Tasks?.filter(
                    (item) => item.status === statusItem.value
                  ).map((item) => (
                    <TaskCard key={item.id} data={item} />
                  ))}
                </div>
              </ScrollArea>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
