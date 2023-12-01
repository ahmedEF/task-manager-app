"use client"
 
// import { ITaskData } from "@/app/models"
import * as z from "zod"
export const  initialValues= {
    title: "",
    description: "",
}
export const formSchema = z.object({
    title: z.string().min(3).max(50),
    description: z.string().min(8).max(100),
})