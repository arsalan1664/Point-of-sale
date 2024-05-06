import React from 'react'
import Header from "../_components/header"
import PorfileTabs from './_components/ProfileTabs'

function ProfilePage() {
    return (
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <Header HeaderTitle='Profile' />
            <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                <PorfileTabs />
            </main>
        </div>)
}

export default ProfilePage




