import React from 'react';
import { auth } from '@/auth';
import { cn } from '@/lib/utils';
import ProfileInfo from './_components/profile-info';
import { getUserByEmail } from '@/server/actions/user';
import ProfileUpdate from './_components/profile-update';
import AccountSetting from './_components/account-setting';

export default async function SettingsPage() {
  let user;
  const session = await auth();

  if (!session) return null;

  if (session?.user && session.user.email) {
    const res = await getUserByEmail(session.user.email);
    user = {
      name: res.name,
      email: res.email,
      accountId: res.accountId
    }
  }

  return (
    <div className={cn("h-full overflow-y-auto rounded-md flex flex-col gap-2")}>
      {user && <ProfileInfo user={user} />}
      {user && <ProfileUpdate name={user.name} email={user.email} />}
      {session && <AccountSetting session={session} />}
    </div>
  )
}