"use client";
import Image from "next/image";

import { ChevronDown, ChevronDownIcon } from "lucide-react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// import { AddButton } from "./add-button";
// import { ActionButton } from "./action-button";
import React, { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { ActionButton } from "./actionsButton";

export type Type = {
    id: string;
    image: string;
    title: string;
    description: string;
    category: any;
    no_of_posts: number;
  };
  

export const columns: ColumnDef<Type>[] = [
    // {
    //   id: "select",
    //   header: ({ table }) => (
    //     <Checkbox
    //       checked={
    //         table.getIsAllPageRowsSelected() ||
    //         (table.getIsSomePageRowsSelected() && "indeterminate")
    //       }
    //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
    //       aria-label="Select all"
    //     />
    //   ),
    //   cell: ({ row }) => (
    //     <Checkbox
    //       checked={row.getIsSelected()}
    //       onCheckedChange={(value) => row.toggleSelected(!!value)}
    //       aria-label="Select row"
    //     />
    //   ),
    //   enableSorting: false,
    //   enableHiding: false,
    // },
    {
      accessorKey: "id",
      header: () => <div className="text-center">Id</div>,
      cell: ({ row }) => {
        return <div className="text-center ">{parseInt(row.id) + 1}</div>;
      },
    },
  
    {
      accessorKey: "imageUrl",
      header: "Image",
      cell: ({ row }) => (
        <Image
          id="image"
          width={80}
          height={40}
          src={row.getValue("imageUrl")}
          alt="cover image"
          className="drop-shadow-lg "
        />
      ),
    },
    {
      accessorKey: "title",
      header: ({ column }) => {
        return <div className="">Title</div>;
      },
      cell: ({ row }) => <div className="">{row.getValue("title")}</div>,
    },
    {
      accessorKey: "description",
      header: "Description",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("description")}</div>
      ),
    },
    {
      accessorKey: "category",
      header: "Category",
      cell: ({ row }) => {
        return (
          <div className="capitalize">
            <Badge>{row.original.category.title || "--"}</Badge>
          </div>
        );
      },
    },
    // {
    //   accessorKey: "postTags",
    //   header: ({ column }) => {
    //     return (
    //       <div className="text-right">
    //         <Button
    //           variant="ghost"
    //           onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    //         >
    //           Number of Tags
    //           <ChevronDown className="ml-2 h-4 w-4" />
    //         </Button>
    //       </div>
    //     );
    //   },
    //   cell: ({ row }) => {
    //     const tag = row.getValue("postTags") as number[];
    //     const tagLength = tag.length;
  
    //     return (
    //       <div className="lowercase text-right mr-4">
    //         <Badge variant={"secondary"}>{tagLength}</Badge>
    //       </div>
    //     );
    //   },
    // },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        return <ActionButton data={row.original} />;
      },
    },
  ];
  