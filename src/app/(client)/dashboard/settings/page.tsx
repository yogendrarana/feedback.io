import React from 'react';
import { auth } from '@/auth';
import { cn } from '@/lib/utils';
import ProfileSetting from './_components/profile-setting';

export default async function SettingsPage() {
  const session = await auth();

  if (!session) return null;

  return (
    <div className={cn("h-full overflow-y-auto rounded-md flex flex-col gap-2")}>
      <ProfileSetting
        name={session.user.name!}
        email={session.user.email!}
      />
    </div>
  )
}