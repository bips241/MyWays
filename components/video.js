"use client"
import React, { useEffect, useRef, useState } from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

export default function Video() {
  const videoRef = useRef(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const getCameraAccess = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        setError("Unable to access camera. Please check permissions.");
      }
    };

    getCameraAccess();
    return () => {
      if (videoRef.current?.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

return (
    <>
        <Card className='flex'>
            <CardContent className='p-4'>
                {error ? (
                    <p className="text-red-500">{error}</p>
                ) : (
                    <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        muted
                        className="rounded-lg w-full h-full"
                    ></video>
                )}
            </CardContent>
        </Card>
    </>
);
}
