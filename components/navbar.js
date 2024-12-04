"use client"
import Image from "next/image";
import { Button } from "./ui/button";
import Modal from "./Modal";
import { useState } from "react";


export default function Navbar() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  return (
    <div className="border border-sky-500 px-4 py-2">
      <div className="flex justify-between items-center">
        <div className="p-3">
          <Image
            className=""
            src="/logo.webp"
            alt="logo"
            width={120}
            height={10}
          />
        </div>
        <Button onClick={handleOpenModal}>login/signup</Button>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Are you ready to start working towards your career goals!
          </h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4 w-full">
            Login with Google
          </button>
          <div className="text-center my-2">OR</div>
          <input
            type="email"
            placeholder="e.g., abkiran@gmail.com"
            className="border w-full p-2 rounded-lg mb-4"
          />
          <button className="bg-purple-500 text-white px-4 py-2 rounded-lg w-full">
            Continue
          </button>
          <p className="text-sm text-center text-gray-600 mt-4">
            By going forward, you agree to our{" "}
            <a href="#" className="text-blue-500">
              Terms of Use
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-500">
              Privacy Policy
            </a>.
          </p>
        </div>
      </Modal>
      </div>
    </div>
  );
}
