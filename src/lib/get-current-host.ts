// import { headers, type UnsafeUnwrappedHeaders } from "next/headers";

// const IS_SERVER = typeof window === "undefined";

// export default function getCurrentHost() {
//   const headersList = (headers() as unknown as UnsafeUnwrappedHeaders);
//   const activePath = headersList.get("host");
//   const getDeployEnv =
//     process.env.DEPOLY_ENV === "production" ? "https://" : "http://";

//   const baseURL = IS_SERVER ? `${getDeployEnv}${activePath}` : window.location.origin;

//   return baseURL;
// }



import { headers } from "next/headers";

const IS_SERVER = typeof window === "undefined";
const DEPLOY_ENV = process.env.DEPOLY_ENV; // Assuming this is correct, you might want to verify the typo 'DEPOLY_ENV' instead of 'DEPLOY_ENV'


export default async function getCurrentHost() {
  if (IS_SERVER) {
    // Server-side: get the 'host' header directly
    const headersList = await headers();
    const host = headersList.get("host");

    // Handle missing host value gracefully
    if (!host) {
      throw new Error("Host header not found");
    }

    const protocol = DEPLOY_ENV === "production" ? "https://" : "http://";
    return `${protocol}${host}`;
  }

  // Client-side: use window.location.origin
  return window.location.origin;
}

