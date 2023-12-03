import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DropdownMenuRadioItem } from "@radix-ui/react-dropdown-menu";
import { formSchema, initialValues } from "./schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormItem,
  FormField as FormSelect,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FormField as FormInputs } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PopUpTitles, statuses } from "@/shared/AppConst";
import React, { useEffect, useState } from "react";

export default function FormField({
  onSubmit,
  position,
  setPosition,
  obj,
}: any) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: !obj ? initialValues : obj?.data, //check the exist of data form
  });
  //useState to set the value of dropDownMenu when the form is on mode update
  const [dropDownValueSelected,setDropDownValueSelected]=useState(obj?.data?.status);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-4 py-4">
          <div className="grid w-full items-center gap-4">
            <FormInputs
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid w-full items-center gap-4">
            <FormInputs
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Descibe your task here."
                      id="message"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid w-full items-center gap-4 ">
            <Label htmlFor="username">Status</Label>
            <FormSelect
              control={form.control}
              name="status"
              render={({ field }) => (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      {!obj
                        ? statuses.find((item) => item.value === position)?.label
                        : statuses.find(
                            (item) => item.value === dropDownValueSelected
                          )?.label}
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Panel Status</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {statuses.map((item,key) => {
                      return (
                        <DropdownMenuRadioGroup
                        key={key}
                          value={position}
                          onValueChange={() => {
                            setPosition(item.value);
                            setDropDownValueSelected(item.value)
                          }}
                        >
                          <DropdownMenuRadioItem
                            key={item.value}
                            value={item.value}
                          >
                            <div className="flex items-center">
                              <item.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                              {item.label}
                            </div>
                          </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                      );
                    })}
                  </DropdownMenuContent>
                  <FormDescription>
                  {PopUpTitles.popUpStatusNotice}
                  </FormDescription>
                </DropdownMenu>
              )}
            />
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </div>
      </form>
    </Form>
  );
}
