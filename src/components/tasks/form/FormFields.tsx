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
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FormField as FormInputs } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Status, statuses } from "@/shared/AppConst";
import React from "react";

export default function FormField({
  onSubmit,
  position,
  setPosition,
  values,
}: any) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues,
  });
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

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  {statuses.find((item) => item.value === position)?.label}
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Panel Status</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {statuses.map((item) => {
                  return (
                    <DropdownMenuRadioGroup
                      value={position}
                      onValueChange={() => {
                        setPosition(item.value);
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
            </DropdownMenu>
            <FormDescription>
              By default the status is '❌ No Status'.
            </FormDescription>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </div>
      </form>
    </Form>
  );
}
