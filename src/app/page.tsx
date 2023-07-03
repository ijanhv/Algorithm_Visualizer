import Bars from "@/components/Bars";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="grid grid-rows-[repeat(10,_1fr)] bg-slate-800 w-screen h-screen ">
              <Navbar />

      <Bars />
    </main>
  );
}
