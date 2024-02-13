'use client';

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import {
  CandlestickChart,
  ClipboardMinus,
  Contact,
  PackageSearch,
  Plus,
  User,
  Warehouse,
} from 'lucide-react';
import { useState } from 'react';

import { Nav } from './_components/navbar';
import TeamSwitcher from './_components/company-switcher';
import { UserNav } from './_components/user-nav';
import Relations from './_components/relations';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full h-16 flex items-center justify-between py-3 px-6">
        <TeamSwitcher />
        <div className="flex items-center gap-3">
          <p className="text-sm">thajiyev9@outlook.com</p>
          <UserNav />
        </div>
      </div>
      <ResizablePanelGroup
        direction="horizontal"
        className="grow w-full rounded-lg border"
      >
        <ResizablePanel
          minSize={15}
          maxSize={15}
          defaultSize={15}
          collapsedSize={4}
          collapsible={true}
          onCollapse={() => {
            setIsCollapsed(true);
            document.cookie = 'react-resizable-panels:collapsed=true';
          }}
          onExpand={() => {
            setIsCollapsed(false);
            document.cookie = 'react-resizable-panels:collapsed=false';
          }}
        >
          <Nav
            isCollapsed={isCollapsed}
            links={[
              {
                title: 'Relations',
                label: '128',
                icon: Contact,
                variant: 'default',
              },
              {
                title: 'Stocks',
                label: '9',
                icon: Warehouse,
                variant: 'ghost',
              },
              {
                title: 'Products',
                label: '43',
                icon: PackageSearch,
                variant: 'ghost',
              },
              {
                title: 'Trade',
                label: '23',
                icon: CandlestickChart,
                variant: 'ghost',
              },
              {
                title: 'Reports',
                label: '',
                icon: ClipboardMinus,
                variant: 'ghost',
              },
            ]}
          />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={85}>
          <div className="flex justify-between items-center p-3">
            <Relations />
            <Button className="flex items-center gap-1" size="sm">
              New Relation
              <User className="w-4 h-4" />
            </Button>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
}
