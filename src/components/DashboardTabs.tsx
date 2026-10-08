import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import { OverviewCards } from "@/components/OverviewCards";
import { CategoryCards } from "@/components/CategoryCards";

export function DashboardTabs() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="categories">By Category</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <OverviewCards />
      </TabsContent>
      <TabsContent value="categories">
        <CategoryCards />
      </TabsContent>
    </Tabs>
  );
}
