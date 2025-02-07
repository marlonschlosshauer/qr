import { useSearchParams } from "next/navigation";

export const useUrl = () => {
  const params = useSearchParams();

  const param = params.get("url");
  const url = Array.isArray(param) ? param[0] : param;

  return typeof url !== "string"
    ? (process.env.NEXT_PUBLIC_VERCEL_URL ?? "")
    : url;
};
