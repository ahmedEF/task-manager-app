"use client"

import { ColumnDef } from "@tanstack/react-table"
import { DataTableRowActions } from "./data-table-row-actions";
import { Badge } from "lucide-react";
import { statuses } from "@/shared/AppConst"
import { DataTableColumnHeader } from "./data-table-header";

export const columns: ColumnDef<any>[] = [
     
      {
        accessorKey: "title",
        enableSorting:true,
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Title" />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex space-x-2">
              <span className="max-w-[500px] truncate font-medium">
                {row.getValue("title")}
              </span>
            </div>
          )
        },
      },
      {
        accessorKey: "description",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Description" />
          ),
        cell: ({ row }) => {
    
          return (
            <div className="flex space-x-2">
              <span className="max-w-[500px] truncate font-medium">
                {row.getValue("description")}
              </span>
            </div>
          )
        },
      },
      {
        accessorKey: "status",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Status" />
        ),
        cell: ({ row }) => {
          const status = statuses.find(
            (status) => status.value === row.getValue("status")
          )
    
          if (!status) {
            return null
          }
    
          return (
            <div className="flex w-[100px] items-center">
              {status.icon && (
                <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
              )}
              <span>{status.label}</span>
            </div>
          )
        },
        filterFn: (row, id, value) => {
          return value.includes(row.getValue(id))
        },
      },
      {
        id: "actions",
        cell: ({ row }) => <DataTableRowActions row={row} />,
      },
  ]