"use client";
import { useState } from "react";
import Instructions from "@/components/instructions";

export default function Home() {
  const user = "exampleUser";
  const [showOtherComponent, setShowOtherComponent] = useState(false);
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between gap-8 sm:gap-40">
      <Instructions
        showOtherComponent={showOtherComponent}
        setShowOtherComponent={setShowOtherComponent}
        user={user}
      />
      </div>
    </>
  );
}
