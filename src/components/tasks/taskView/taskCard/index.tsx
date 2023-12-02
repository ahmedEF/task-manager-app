import { Button } from "@/components/ui/button";
import { Pencil, Terminal, Trash2 } from "lucide-react";
import { DialogHeader, DialogFooter } from "@/components/ui/dialog";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { api } from "@/utils/api";
import toast from "react-hot-toast";
import { useEffect, useRef, useState } from "react";
import Form from "../../form";
import { formSchema } from "../../form/schema";
import { z } from "zod";

export default function TaskCard({ data }:any) {
  
  const [idTask,setIdTask]=useState<number>(data.id);
  const [status, setStatus] = useState("NOT_ASSIGNED");
  const deleteTaskMutation = api.deleteTask.delete.useMutation();
  const createTask = api.addTask.create.useMutation();
  const Task = api.listings.getTasksById.useQuery({id:idTask});
  const updateTask = api.updateTask.update.useMutation();
  
  const utils = api.useUtils();
  // Handle delete task
  const handleDeleteTask = () => {
    deleteTaskMutation.mutate({ id: idTask }, {
      onSuccess () {
        // invalidate cache
      utils.listings.getTasksByUserId.invalidate();
      toast.success('Your task have been deleted !');
    },
    onError (error){
      toast.error('Error try again later');
    }
  });
};
//initialise the object to be used in edit form 
const [obj, setObj] = useState(Task);
const handleSubmit = (values: z.infer<typeof formSchema>) => {
    if(!idTask){
      createTask
      .mutateAsync({
        ...values,
        status: status,
      },{
        onSuccess:()=>{
          utils.listings.getTasksByUserId.invalidate();
          toast.success('Task created successfully')
        },
        onError (error){
          toast.error('Error try again later');
        }
      })
    }else{
        updateTask.mutateAsync({
          id:idTask,
          ...values,
          status: status,
        },{
          onSuccess:()=>{
            utils.listings.getTasksByUserId.invalidate();
            toast.success('Task updated successfully')
          },
          onError (error){
            toast.error('Error try again later');
          }
        })
    }
    
    return data;
  };
  return (
    <div className="bg-white shadow-xl p-3 rounded-lg  mb-4 ">
      <h3 className="text-sm font-semibold mb-1">{data.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        {data.description}
      </p>
      
      {/*EDITE POP UP */}
      <div className="flex justify-between space-x-4">
      <Dialog>
        <DialogTrigger  asChild>
        <Button variant="outline" size="icon" onClick={(e)=>{
          setIdTask(data.id);
          setObj(Task);
          }}>
            <Pencil className="h-4 w-4" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update your task</DialogTitle>
            <DialogDescription>
              Update your task by editing this form
            </DialogDescription>
          </DialogHeader>
          <Form handleSubmit={handleSubmit} status={status} setStatus={setStatus} obj={obj}/>
        </DialogContent>
      </Dialog>
        {/* DELETE CONFIRMATION POP-UP */}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="icon" onClick={()=>setIdTask(data.id)}>
              <Trash2 className="h-4 w-4" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Delete</DialogTitle>
              <DialogDescription>
                Are you sure to delete this task !.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="sm:justify-end">
              <DialogClose asChild>
                <Button type="button" variant="default" onClick={handleDeleteTask}>
                  Confirme
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
