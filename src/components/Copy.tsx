"use client";

import { useUrl } from "@/lib/useUrl";
import React, { useEffect, useState } from "react";

export const Copy: React.FC = () => {
  const url = useUrl();
  const [hasCopied, setHasCopied] = useState(false);

  const onCopy = () =>
    navigator.clipboard
      .writeText(window.location.href)
      .finally(() => setHasCopied(true));

  useEffect(() => setHasCopied(false), [url]);

  return (
    <button onClick={onCopy} type="button">
      {hasCopied ? "Copied URL ✅" : "Copy URL"}
    </button>
  );
};
