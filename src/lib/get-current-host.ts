import { headers } from "next/headers";

const IS_SERVER = typeof window === "undefined";

export default function getCurrentHost() {
  const headersList = headers();
  const activePath = headersList.get("host");
  const getDeployEnv =
    process.env.DEPOLY_ENV === "production" ? "https://" : "http://";

  const baseURL = IS_SERVER ? `${getDeployEnv}${activePath}` : window.location.origin;

  return baseURL;
}
