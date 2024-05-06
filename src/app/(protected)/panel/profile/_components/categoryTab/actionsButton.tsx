"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { EditButton } from "./editButton";
import { DeleteButton } from "./deleteButton";

export function ActionButton({ data }: { data: any }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <EditButton data={data} />
        <DropdownMenuSeparator />
        <DeleteButton id={data.id} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}