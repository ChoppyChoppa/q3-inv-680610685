import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function StudentInfo() {
  return (
    // Use Drawer component to display student information
    <Drawer swipeDirection={"right"}>
      <DrawerTrigger>
        <Button className="border border-gray-300 rounded-md px-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
          Nontanun Hinmalai
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-xl font-bold">
            ข้อมูลนักศึกษา
          </DrawerTitle>
          <DrawerDescription>student information</DrawerDescription>
        </DrawerHeader>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Nontanun Hinmalai</CardTitle>
          </CardHeader>
          <CardContent>
            <Badge variant="outline">Hobbies</Badge>
            <p>ดูหนัง, ฟังเพลง, ขี่มอไซค์เที่ยว</p>
            <Badge variant="outline">Email</Badge>
            <p>nontanun_h@cmu.ac.th</p>
            <Badge variant="outline">Social</Badge>
            <p>Facebook: Nontanun Hinmalai</p>
            <CardFooter>รหัสนักศึกษา: 680610685</CardFooter>
          </CardContent>
        </Card>
        <DrawerFooter>
          <DrawerClose render={<Button variant="outline" />}>Close</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
