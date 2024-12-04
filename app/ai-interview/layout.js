import Image from "next/image";
import Navbar from "@/components/navbar";
import Instructions from "@/components/instructions";
import Video from "@/components/video";

export default function Home({children}) {
  return (
    <>
      <Navbar />
      <div className="bg-[#15162c] grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 overflow-hidden">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="flex flex-col sm:flex-row justify-between gap-8 sm:gap-40">
            <div>
              <Video />
            </div>
            {children}
          </div>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        </footer>
      </div>
    </>
  );
}
