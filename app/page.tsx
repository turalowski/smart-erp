'use client';

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import {
  Archive,
  ArchiveX,
  CandlestickChart,
  ClipboardMinus,
  Contact,
  Contact2,
  File,
  Inbox,
  PackageSearch,
  Send,
  Trash2,
  Warehouse,
} from 'lucide-react';
import { useState } from 'react';
import { Nav } from './_components/navbar';

export default function Home() {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="h-12">Header</div>
      <ResizablePanelGroup
        direction="horizontal"
        className="grow w-full rounded-lg border"
      >
        <ResizablePanel
          minSize={15}
          maxSize={20}
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
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Content</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
}
