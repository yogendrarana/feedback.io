import { TypographyH4 } from '@/components/ui/typography';
import React from 'react'

interface GeneralInfoProps {
  user: {
    name: string;
    email: string;
    accountId: string;
  }
}

const ProfileInfo = ({ user }: GeneralInfoProps) => {
  return (
    <div className="flex w-full flex-col bg-white border border-neutral-200 dark:border-neutral-800 p-4 rounded-md">
      <div className="mb-4">
        <TypographyH4 className="my-0">Profile</TypographyH4>
        <p className="text-sm opacity-70">Your general information</p>
      </div>

      <div className='space-y-6'>
        <div className='space-y-1'>
          <p className='font-medium'>Your Name:</p>
          <p className='text-sm opacity-50'>{user.name}</p>
        </div>

        <div className='space-y-1'>
          <p className='font-medium'>Your Email:</p>
          <p className='text-sm opacity-50'>{user.email}</p>
        </div>

        <div className='space-y-1'>
          <p className='font-medium'>Your Account ID:</p>
          <p className='text-sm opacity-50'>{user.accountId}</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo