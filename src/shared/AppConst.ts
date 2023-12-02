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
  Description: string;
};

export const HomeTitles: Props = {
  Title: "Welcome to Task Manager App!",
  Description:
    "Stay organized and boost your productivity with our intuitive Task Manager App. Effortlessly manage your tasks lists, set smart reminders",
};
export const ListTitles: Props = {
  Title: "Welcome back!",
  Description:
    "Here's a list of your tasks for this month!",
};
