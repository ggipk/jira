import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";

export default function Home() {
  return (
    <div>
      <Button variant="primary" size="lg">click me</Button>
        <Button variant="destructive" size="xs">click me</Button>
        <Button variant="secondary" size="sm">click me</Button>
        <Button variant="muted" size="sm">click me</Button>
        <Button variant="teritary" size="sm">click me</Button>
        <p className="text-red-200">test</p>
      <Input />
    </div>
  );
}
