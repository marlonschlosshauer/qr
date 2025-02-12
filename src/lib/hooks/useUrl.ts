import { useSearchParams } from "next/navigation";
import { getURL } from "../url";

export const useUrl = () => {
  const params = useSearchParams();

  const param = params.get("url");
  const url = Array.isArray(param) ? param[0] : param;

  return typeof url !== "string" ? getURL() : url;
};
