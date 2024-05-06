import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { DataTable } from '@/components/ui/data-table'
import { columns } from './columnsDefs'
import GetAllItems from '@/app/(backend)/actions/profile/itemsProfileActions/getAllItems'
async function SupplierCard() {
  const data = await GetAllItems()
  return (
    <Card>
      <CardHeader>
        <CardTitle>Supplier Profile</CardTitle>
        <CardDescription>
          Manage your Salesmen and view their detail.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* table */}
        <DataTable columns={columns} data={data} />
      </CardContent>
    </Card>
  )
}

export default SupplierCard