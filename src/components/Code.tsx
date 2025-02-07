import { QRCodeSVG } from "qrcode.react";
import React from "react";

export interface CodeProps {
  url: string;
  size?: number | undefined;
  ref?: React.RefObject<HTMLDivElement | null>;
}

export const Code: React.FC<CodeProps> = ({ url, size, ref }) =>
  url && (
    <div ref={ref}>
      <QRCodeSVG fgColor="white" bgColor="black" value={url} size={size} />
    </div>
  );
