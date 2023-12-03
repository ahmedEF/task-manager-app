import {
  QuestionMarkCircledIcon,
  StopwatchIcon,
  CheckCircledIcon,
  CrossCircledIcon,
} from "@radix-ui/react-icons";
import { CircleIcon } from "lucide-react";

export const statuses = [
  {
    value: "NOT_ASSIGNED",
    label: "No Status",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: "TO_DO",
    label: "To Do",
    icon: CircleIcon,
  },
  {
    value: "IN_PROGRESS",
    label: "In Progress",
    icon: StopwatchIcon,
  },
  {
    value: "COMPLETED",
    label: "Done",
    icon: CheckCircledIcon,
  },
];

export type Props = {
  Title: string;
  Description?: string;
  SubTitle: string;
};
// titles
export const HomeTitles: Props = {
  Title: "Welcome to Task Manager App!",
  SubTitle:
    "Stay organized and boost your productivity with our intuitive Task Manager App. Effortlessly manage your tasks lists, set smart reminders",
  Description: "Let's make every day a productive day together!",
};
export const ListTitles: Props = {
  Title: "Welcome back!",
  SubTitle: "Here's a list of your tasks for this month!",
  Description: "",
};
export const Soon = {
  Title: "Coming Soon!, Account Manager",
  Description:
    "Introducing the User Account Manager - Seamlessly manage your account settings, preferences, and security features in one centralized hub.",
};
export const PopUpTitles = {
  popUpStatusNotice: "By default the status is '❌ No Status'.",
  popUpSubTitle: "Quickly add a new task to your list. Let's get started !",
  popUpAddTitle: "Add a new task",
  popUpEditTitle: "Edit task",
};
