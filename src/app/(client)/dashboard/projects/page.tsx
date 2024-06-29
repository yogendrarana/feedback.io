import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectTrigger, SelectValue, SelectItem, SelectContent } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { Cog, Settings, Copy, Ellipsis, Grid, LayoutGrid, List, Menu, Plus, Delete, Trash } from 'lucide-react';
import React from 'react'
import ProjectCard from './_components/project-card';
import ProjectsHeader from './_components/projects-header';

const ProjectsPage = () => {
  return (
    <div className={cn("w-full space-y-2")}>

      <ProjectsHeader />

      <div className='grid grid-cols-1 gap-2 md:grid-cols-3'>
        {Array.from({ length: 20 }).map((_, index) => (
          <ProjectCard key={index} project={{ id: index }} />
        ))}
      </div>
    </div>
  )
}

export default ProjectsPage;