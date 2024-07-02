import React from 'react'
import DeleteUser from './delete-user'
import SettingCard from './setting-card'
import type { Session } from 'next-auth'
import { HeartCrackIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default async function AccountSetting({ session }: { session: Session }) {
    if (!session) return null

    return (
        <SettingCard title="Account" description="Your account settings:">
            <div className="flex w-52 flex-col space-y-2">
                <p>Delete account:</p>
                <DeleteUser
                    email={session.user.email!}
                    trigger={
                        <Button variant="default">Delete Account</Button>
                    }
                />
            </div>
        </SettingCard>
    )
}
