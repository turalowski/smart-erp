import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Relations() {
  return (
    <Tabs defaultValue="overview" className="space-y-4">
      <TabsList>
        <TabsTrigger value="overview">Relations</TabsTrigger>
        <TabsTrigger value="analytics" disabled>
          Partners
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="space-y-4"></TabsContent>
    </Tabs>
  );
}
