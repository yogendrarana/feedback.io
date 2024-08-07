import React from 'react';
import { auth } from '@/auth';
import { cn } from '@/lib/utils';
import ProfileInfo from './_components/profile-info';
import { getUserByEmail } from '@/server/actions/user';
import ProfileUpdate from './_components/profile-update';
import AccountSetting from './_components/account-setting';

export default async function ProfilePage() {
  let user;
  const session = await auth();
  if (!session) return null;

  if (session?.user && session?.user?.email) {
    const res = await getUserByEmail(session.user.email);

    if (!res) return null;

    user = {
      name: res.name,
      email: res.email,
      clientId: res.clientId
    }
  }

  return (
    <div className={cn("h-full overflow-y-auto rounded-md flex flex-col gap-2")}>
      {user && <ProfileInfo user={user} />}
      {user && <ProfileUpdate user={user} />}
      {session && <AccountSetting session={session} />}
    </div>
  )
}