"use client";

import { useUrl } from "@/lib/useUrl";
import React from "react";

export const Forge: React.FC = () => {
  const url = useUrl();
  return (
    <form action="/" method="GET" className="flex flex-col gap-2 items-center">
      <label htmlFor="url">URL for your QR code:</label>
      <input autoFocus type="text" name="url" placeholder={url} required />
      <button type="submit" className="bg-gray-800 px-4 py-2">
        Generate QR code 🔄
      </button>
    </form>
  );
};
