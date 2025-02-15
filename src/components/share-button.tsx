"use client";
import React from "react";
// import { Button } from "@/components/ui/button";
import { createUrlSLug } from "@/lib/slugify";
import { Share2 } from "lucide-react";
import EventButton from "./analytics/event-button";

interface ShareButtonProps {
  id: string | number;
  title: string;
  overview: string;
  baseUrl?: string;
  url: string;
}

function ShareButton({ id, overview, title, baseUrl, url }: ShareButtonProps) {
  const openShareDrawer = () => {
    const base_url = `${baseUrl ?? process.env.NEXT_PUBLIC_DEPOLY_URL}`;

    const dataShare = {
      title: title,
      text: overview,
      url: `${base_url}/${url}/${createUrlSLug(`${id}`, title)}`,
    };
    if (navigator.share && navigator.canShare(dataShare)) {
      navigator.share(dataShare);
    } else {
      alert("Sharing not supported in this browser");
    }
  };

  return !!navigator.canShare ? (
    <EventButton
      event="share"
      value={title}
      onClick={openShareDrawer}
      className="flex item-center gap-x-2 bg-transparent border-2 border-white rounded-full text-white"
    >
      <Share2 />
      Share
    </EventButton>
  ) : (
    <></>
  );
}

export default ShareButton;
