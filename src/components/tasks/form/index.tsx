"use client";
import { Pencil } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { IoColorFill } from "react-icons/io5";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { formSchema, initialValues } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";
import { FormControl, FormDescription,  FormItem, FormLabel, FormMessage } from "@/components/ui/form";

import { count } from "console";
import FormField from "./FormFields";
export default function FormSave({data,setOpen,open}:any) {
  const [position, setPosition] = useState("NOT_ASSIGNED");

const handleSubmit =(values: z.infer<typeof formSchema>) =>{
  console.log(data);
  data = {...data,id:data.id, status: position, description:values.description,title:values.title};

return data
}

  return (
    
    <Dialog open={open} >
        <DialogTrigger  asChild>
          <Button variant="outline" size="icon">
            <Pencil className="h-4 w-4" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure absolutely sure?</DialogTitle>
            <DialogDescription>
              Modify your task by editing this form
            </DialogDescription>
          </DialogHeader>
          <FormField onSubmit={handleSubmit} position={position} setPosition={setPosition} />
        </DialogContent>
      </Dialog>
  );
}
