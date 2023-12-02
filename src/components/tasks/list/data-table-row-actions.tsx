import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { api } from "@/utils/api"
import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Row } from "@tanstack/react-table"
import toast from "react-hot-toast"
interface DataTableRowActionsProps<TData> {
    row: Row<TData>
  }
  
export function DataTableRowActions<TData>({
    row
  }: DataTableRowActionsProps<TData>) {
  const deleteTaskMutation = api.deleteTask.delete.useMutation();
  
  const utils = api.useUtils();
  // Handle delete task
  const handleDeleteTask = (idTask: any) => {
    deleteTaskMutation.mutate({ id: idTask }, {
      onSuccess () {
        // invalidate cache
      utils.listings.getTasksByUserId.invalidate();
      toast.success('Your task have been deleted !');
    },
    onError (){
      toast.error('Error try again later');
    }
  });
};
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            <DotsHorizontalIcon className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          <DropdownMenuItem onClick={()=>{
           handleDeleteTask(parseInt(row.getValue("id")))
          }}>Delete</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }