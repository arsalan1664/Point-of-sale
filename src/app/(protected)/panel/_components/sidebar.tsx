"use client"
import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Factory, FileSpreadsheet, Home, LineChart, Package, Package2, PieChart, Settings, ShoppingCart, Users2, Wallet } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Sidebar() {
    const pathname = usePathname()
    console.log("pathname",pathname)
    const sidebar = [{
        title: "Dashboard",
        icon:  <PieChart  className="h-5 w-5" />,
        link: "/panel/dashboard"

    }, {
        title: "Porfile",
        icon:  <Factory  className="h-5 w-5" />,
        link: "/panel/profile"

    }, {
        title: "Transaction",
        icon: <Wallet  className="h-5 w-5" />,
        link: "/panel/transaction"

    }, {
        title: "Report",
        icon:  <FileSpreadsheet   className="h-5 w-5" />,
        link: "/panel/report"

    }]
    return (
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                <Link
                    href="#"
                    className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                >
                    <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
                    <span className="sr-only">Acme Inc</span>
                </Link>
                {sidebar.map((item,i)=>(
                    <Tooltip key={i}>
                    <TooltipTrigger asChild>
                        <Link
                            href={item.link}
                            className={`${pathname === item.link && "bg-accent" }   flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8`}
                        >
                            {item.icon}
                            <span className="sr-only">{item.title}</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">{item.title}</TooltipContent>
                </Tooltip>
                ))}
                {/* <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href="#"
                            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                            <Home className="h-5 w-5" />
                            <span className="sr-only">Dashboard</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Dashboard</TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href="#"
                            className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                            <ShoppingCart className="h-5 w-5" />
                            <span className="sr-only">Orders</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Orders</TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href="#"
                            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                            <Package className="h-5 w-5" />
                            <span className="sr-only">Products</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Products</TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href="#"
                            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                            <Users2 className="h-5 w-5" />
                            <span className="sr-only">Customers</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Customers</TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href="#"
                            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                            <LineChart className="h-5 w-5" />
                            <span className="sr-only">Analytics</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Analytics</TooltipContent>
                </Tooltip> */}
            </nav>
            <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Link
                            href="/panel/setting"
                            className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                        >
                            <Settings className="h-5 w-5" />
                            <span className="sr-only">Settings</span>
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">Settings</TooltipContent>
                </Tooltip>
            </nav>
        </aside>
    )
}

export default Sidebar