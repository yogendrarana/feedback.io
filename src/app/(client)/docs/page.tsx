import React from 'react'
import { cn } from '@/lib/utils'
import Footer from '@/components/layout/footer'
import ManualUsage from './_components/manual.mdx'
import PackageUsage from './_components/package.mdx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MdxProvider from '@/components/providers/mdx-provider'

const DocPage = () => {
    return (
        <div className={cn("mt-10")}>
            <Tabs defaultValue="manual" className='w-full flex flex-col'>
                <TabsList className='self-center'>
                    <TabsTrigger value="manual">Using Manually</TabsTrigger>
                    <TabsTrigger value="package">Using package</TabsTrigger>
                </TabsList>
                <TabsContent value="manual" className={cn("mt-10")}>
                    <MdxProvider className='max-w-none'>
                        <ManualUsage />
                    </MdxProvider>
                    <Footer />
                </TabsContent>
                <TabsContent value="package" className='mt-10'>
                    <PackageUsage />
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default DocPage;