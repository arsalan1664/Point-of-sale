import React from 'react'


import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Dummytable from '../../_components/dummytable'
import { DataTable } from '@/components/ui/data-table'
import { columns } from './itemsProfileTab/columnsDefs'
import ItemCard from './itemsProfileTab/card'
import CategoryCard from './categoryTab/card'
import WarehouseCard from './warehouseTab/card'
import SalesmenCard from './salesmenTab/card'
import SupplierCard from './supplierTab/card'
import ClientCard from './clientTab/card'

function ProfileTabs() {

  return (
    <Tabs defaultValue="item-profile">
      <div className="flex items-center">
        <TabsList>
          <TabsTrigger value="item-profile">Item Profile</TabsTrigger>
          <TabsTrigger value="category">Category / Subcategory</TabsTrigger>
          <TabsTrigger value="warehouse">Warehouse Profile</TabsTrigger>
          <TabsTrigger value="salesman" className="hidden sm:flex">
            Salesman Profile
          </TabsTrigger>
          <TabsTrigger value="supplier" className="hidden sm:flex">
            Supplier Profile
          </TabsTrigger>
          <TabsTrigger value="client" className="hidden sm:flex">
            Client Profile
          </TabsTrigger>
        </TabsList>
        {/* <div className="ml-auto flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="h-8 gap-1">
              <ListFilter className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Filter
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Filter by</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem checked>
              Active
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>
              Archived
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button size="sm" variant="outline" className="h-8 gap-1">
          <File className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Export
          </span>
        </Button>
        <Button size="sm" className="h-8 gap-1">
          <PlusCircle className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Add Product
          </span>
        </Button>
      </div> */}
      </div>
      <TabsContent value="item-profile">
        <ItemCard />
      </TabsContent>
      <TabsContent value="category">
        <CategoryCard />
      </TabsContent>
      <TabsContent value="warehouse">
        <WarehouseCard />
      </TabsContent>
      <TabsContent value="salesman">
        <SalesmenCard />
      </TabsContent>
      <TabsContent value="supplier">
        <SupplierCard />
      </TabsContent>
      <TabsContent value="client">
        <ClientCard />
      </TabsContent>
      
    </Tabs>)
}

export default ProfileTabs