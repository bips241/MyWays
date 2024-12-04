"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Toast } from "@radix-ui/react-toast";
import { useRouter } from "next/navigation";
import SystemCheck from "./SystemCheck";

const Instructions = ({ showOtherComponent, setShowOtherComponent }) => {
  const user = 'trainee';
  const router = useRouter();

  const handleClick = () => {
    setShowOtherComponent(true);
    router.push(`/ai-interview/`);
  };

  return (
    <div className="flex justify-center items-center">
      {showOtherComponent ? (
        <SystemCheck user={user} />
      ) : (
        <div className="max-w-2xl bg-transparent flex flex-col items-center">
          <h1 className="font-bold text-3xl text-white p-4">Instructions</h1>
          <div className="text-white p-4">
            <p>1. Ensure stable internet and choose a clean, quiet location.</p>
            <p>2. Permission for access of camera, microphone, entire screen sharing is required.</p>
            <p>3. Be in professional attire and avoid distractions.</p>
            <p>4. Give a detailed response, providing as much information as you can.</p>
            <p>5. Answer the question with examples and projects you’ve worked on.</p>
            <p>6. To try a mock interview with Avya, our AI interviewer, and build your confidence before the main interview!</p>
          </div>
          <div className="bg-white/15 rounded-lg p-4 w-full mb-4 text-white">
            <p className="text-xl">To try a mock interview with Avya our AI interviewer, and build your confidence before the main interview</p>
          </div>
          <Button className="font-bold text-xl text-white p-4 bg-purple-600 hover:bg-purple-700 rounded-lg w-full bottom-0 align-bottom" onClick={handleClick}>Start</Button>
        </div>
      )}
    </div>
  );
};

export default Instructions;