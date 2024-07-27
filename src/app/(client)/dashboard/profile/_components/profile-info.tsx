import React from 'react'
import SettingCard from './setting-card';
import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import CopyBtn from '@/components/action/copy-btn';

interface GeneralInfoProps {
  user: {
    name: string;
    email: string;
    clientId: string;
  }
}

export default function ProfileInfo({ user }: GeneralInfoProps) {
  return (
    <SettingCard
      title="Profile"
      description="Your profile info:"
    >
      <div className='space-y-1'>
        <p className='font-medium'>Client ID:</p>
        <div className='flex items-center'>
          <p className='text-sm opacity-50'>{user.clientId}</p>
          <CopyBtn text={JSON.stringify(user.clientId)} className='ml-2' />
        </div>
      </div>
    </SettingCard>
  )
}
