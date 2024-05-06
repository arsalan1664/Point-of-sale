
import { TooltipProvider } from '@/components/ui/tooltip'
import React from 'react'
import Sidebar from './_components/sidebar'

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <TooltipProvider>
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <Sidebar/>
            {children}
        </div>
        </TooltipProvider>
    )
}

export default Layout