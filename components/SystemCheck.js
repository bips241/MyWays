import React, { useState, useEffect } from "react";
import { Loader } from "@/components/ui/loader";

const SystemCheck = ({user}) => {
  const [cameraStatus, setCameraStatus] = useState("loading");
  const [audioStatus, setAudioStatus] = useState("loading");
  const [speakerStatus, setSpeakerStatus] = useState("loading");
  const [screenSharingStatus, setScreenSharingStatus] = useState("loading");
  const [isSoundPlayed, setIsSoundPlayed] = useState(false);

  useEffect(() => {
    const checkCamera = async () => {
      try {
        await navigator.mediaDevices.getUserMedia({ video: true });
        setCameraStatus("success");
        checkAudio();
      } catch (error) {
        setCameraStatus("error");
        checkAudio();
      }
    };

    const checkAudio = async () => {
      try {
        await navigator.mediaDevices.getUserMedia({ audio: true });
        setAudioStatus("success");
        checkSpeaker();
      } catch (error) {
        setAudioStatus("error");
        checkSpeaker();
      }
    };

    const checkSpeaker = async () => {
      const audio = new Audio("/demo.mp3");
      audio.play();
      audio.onended = () => {
        setIsSoundPlayed(true);
      };
    };

    checkCamera();
  }, []);

  const checkScreenSharing = async () => {
    try {
      await navigator.mediaDevices.getDisplayMedia();
      setScreenSharingStatus("success");
    } catch (error) {
      setScreenSharingStatus("error");
    }
  };

  const handleSpeakerConfirmation = (heard) => {
    setSpeakerStatus(heard ? "success" : "error");
    if(heard) {
      checkScreenSharing();
    }
  };

  const renderStatus = (status) => {
    if (status === "loading") {
      return <Loader />;
    } else if (status === "success") {
      return <span className="text-green-500 text-xl font-bold">✔</span>;
    } else {
      return <span className="text-red-500 text-xl font-bold">✘</span>;
    }
  };

  return (
    <div className="p-6 min-h-screen flex flex-col items-center">
      <div className="max-w-md w-full text-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Ready to join?</h2>
        <p className="text-gray-400 mb-6">
          Please make sure your device is properly configured.
        </p>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
            <span className="flex items-center">
              <span className="material-icons mr-2">videocam</span>
              Check Camera
            </span>
            {renderStatus(cameraStatus)}
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
            <span className="flex items-center">
              <span className="material-icons mr-2">mic</span>
              Check Microphone
            </span>
            {renderStatus(audioStatus)}
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
            <span className="flex items-center">
              {speakerStatus === "success" ? (
                <>
                  <span className="material-icons mr-2">volume_up</span>
                  Speaker
                </>
              ) : (
                "Did you hear the sound?"
              )}
            </span>
            {isSoundPlayed && speakerStatus !== "success" ? (
              <div>
                <button
                  className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded-lg mr-2"
                  onClick={() => handleSpeakerConfirmation(true)}
                >
                  Yes
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-lg"
                  onClick={() => handleSpeakerConfirmation(false)}
                >
                  No
                </button>
              </div>
            ) : (
              renderStatus(speakerStatus)
            )}
          </div>
          <div className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
            <span className="flex items-center">
              <span className="material-icons mr-2">screen_share</span>
              Enable Screen Share
            </span>
            {renderStatus(screenSharingStatus)}
          </div>
        </div>
        <button className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg">
          Start Interview
        </button>
      </div>
    </div>
  );
};

export default SystemCheck;
