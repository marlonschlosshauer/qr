"use client";

import React, { useRef } from "react";
import { Code } from "./Code";
import { useUrl } from "@/lib/useUrl";
import { saveAs } from "file-saver";

export const Mirror: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const url = useUrl();

  const onDownload = () => {
    const image = ref.current?.firstChild;
    if (url.length > 0 && image) {
      saveAs(
        new Blob(
          [new XMLSerializer().serializeToString(image.cloneNode(true))],
          { type: "image/svg+xml;charset=utf-8" },
        ),
        `${Date.now()}.svg`,
      );
    }
  };

  return (
    <div className="flex flex-col gap-2 items-center">
      <Code ref={ref} url={url} />
      <p className="text-gray-400 text-center">
        (
        <a href={url} target="_blank" rel="noopener">
          {url}
        </a>
        )
      </p>
      <button className="bg-gray-800 px-4 py-2" onClick={onDownload}>
        Download as .svg ⬇️
      </button>
    </div>
  );
};
