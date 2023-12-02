"use client";
import { Pencil } from "lucide-react";
import {
  Dialog,
  DialogClose,
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
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FormField from "./FormFields";
import { api } from "@/utils/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
export default function FormSave({ data,setIsOpen }: any) {
  const [status, setStatus] = useState("NOT_ASSIGNED");
  const createTask = api.addTask.create.useMutation();
  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    createTask
      .mutateAsync({
        ...values,
        status: status,
      })
      .then(() => {
        setIsOpen(false)
      })
    return data;
  };

  return (
    <FormField
      onSubmit={handleSubmit}
      position={status}
      setPosition={setStatus}
    />
  );
}
