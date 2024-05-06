import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { DataTable } from '@/components/ui/data-table'
import { columns } from './columnsDefs'
import GetAllItems from '@/app/(backend)/actions/profile/itemsProfileActions/getAllItems'
async function ItemCard() {
  const data = await GetAllItems()
  return (
    <Card>
      <CardHeader>
        <CardTitle>Item Profile</CardTitle>
        <CardDescription>
          Manage your Item and view their detail.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* table */}
        <DataTable columns={columns} data={data} />
      </CardContent>
    </Card>
  )
}

export default ItemCard