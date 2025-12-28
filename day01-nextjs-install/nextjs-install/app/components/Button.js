"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Button = ({ children }) => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/");
  };

  return (
    <button
      onClick={handleNavigate}
      className="bg-blue-500 text-white px-3 py-2 rounded-xl mt-4"
    >
      {children}
    </button>
  );
};

export default Button;
