import Charts from "@/components/Chart";
import Image from "next/image";
import "./globals.css"
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/portfolio/Portfolio";

export default function Home() {
  return (
    <div> 
      <Navbar />
      {/* <Charts /> */}
      <div className="flex justify-between items items-center max-w-[1800px]">
        <div className="m-5 w-1/2 items-center ml-16">
            <Portfolio />
        </div>
        <div>
          heloo tehere
        </div>
      </div>
    </div>
  );
}
