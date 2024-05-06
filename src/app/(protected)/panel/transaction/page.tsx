import React from 'react'
import Header from "../_components/header"
import TransactionTabs from './_components/TransactionTabs'

function TransactionPage() {
    return (
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <Header HeaderTitle='Transaction' />
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <TransactionTabs />
            </main>
        </div>)
}

export default TransactionPage




