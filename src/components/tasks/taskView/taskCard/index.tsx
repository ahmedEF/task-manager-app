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
import FormSave from "../../form";
import { api } from "@/utils/api";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import toast from "react-hot-toast";

//TODO:USE TYPE OR INTERFACES
export default function TaskCard({ data }: { data: any }) {
  const deleteTaskMutation = api.deleteTask.delete.useMutation();
  
  const { id, title, description } = data;
  const utils = api.useUtils();
  const handleDeleteTask = () => {
    deleteTaskMutation.mutate({ id: id }, {
      onSuccess () {
      utils.listings.getTasksByUserId.invalidate();
      toast.success('Your task have been deleted !');
      },
      onError (error){
        toast.error('Error try again later');
      }
    });
  };
  return (
    <div className="bg-white shadow-xl p-3 rounded-lg  mb-4 ">
      <h3 className="text-sm font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        {description}
      </p>
      
      {/*TODO : PASS THE ID TO THE EDITFORM*/}
      <div className="flex justify-between space-x-4">
      <Dialog>
        <DialogTrigger  asChild>
        <Button variant="outline" size="icon">
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
          <FormSave />
        </DialogContent>
      </Dialog>
        {/* DELETE CONFIRMATION POP-UP */}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="icon">
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
