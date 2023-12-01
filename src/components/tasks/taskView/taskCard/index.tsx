import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
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

export default function TaskCard(data: any) {
  return (
    <div className="bg-white p-3 rounded-lg shadow-sm mb-4 ">
      <h3 className="text-sm font-semibold mb-1">{data.data.title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        {data.data.description}
      </p>
      {/*TODO : PASS THE ID THE EDITFORM*/}
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
        {/* TODO : refactor this code  */}
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
                <Button type="button" variant="default">
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
