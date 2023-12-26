type DeviceType = "pc" | "tablet" | "mobile" | "bot";
type OS = "ios" | "android" | "other" | "bot";
type Browser =
  | "chrome"
  | "firefox"
  | "safari"
  | "edge"
  | "ie"
  | "other"
  | "bot";

interface DeviceInfo {
  deviceType: DeviceType;
  os: OS;
  browser: Browser;
  width?: number;
  height?: number;
}

import { useEffect, useState } from "react";

function useDeviceInfo(): DeviceInfo {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    deviceType: "pc",
    os: "other",
    browser: "other",
  });
  useEffect(() => {
    const handleResize = () => {
      const { userAgent } = window.navigator;

      const width =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

      const height =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;

      const isBot = /bot|googlebot|crawler|spider|robot|crawling/i.test(
        userAgent
      );

      let os: OS = "other";
      if (isBot) {
        os = "bot";
      } else if (/iPad|iPhone|iPod/.test(userAgent)) {
        os = "ios";
      } else if (/Android/.test(userAgent)) {
        os = "android";
      }

      let browser: Browser = "other";

      if (isBot) {
        browser = "bot";
      } else if (/Chrome/.test(userAgent)) {
        browser = "chrome";
      } else if (/Firefox/.test(userAgent)) {
        browser = "firefox";
      } else if (/Safari/.test(userAgent)) {
        browser = "safari";
      } else if (/Edge/.test(userAgent)) {
        browser = "edge";
      } else if (/Trident/.test(userAgent)) {
        browser = "ie";
      }

      let deviceType: DeviceType = "pc";

      const isTablet = /iPad|Android(?!.*Mobile)|Tablet|Silk/i.test(userAgent);
      const isMobile =
        /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          userAgent
        );

      if (isBot) {
        deviceType = "bot";
      } else if (isTablet) {
        deviceType = "tablet";
      } else if (isMobile) {
        deviceType = "mobile";
      } else {
        deviceType = "pc";
      }

      setDeviceInfo({
        deviceType,
        os,
        browser,
        width,
        height,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return deviceInfo;
}

export default useDeviceInfo;
