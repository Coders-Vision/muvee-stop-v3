"use client";

import React from "react";
import IconButton from "@/components/ui/icon-button";
import { PlayCircle } from "lucide-react";

function SeasonPlayer() {
  return (
    <IconButton
      icon={<PlayCircle size={50} color="#6ebf8a" />}
      onClick={() => console.log("s")}
      className="bg-transparent flex items-center justify-center hover:ms-green hover:bg-transparent  transition"
    />
  );
}

export default SeasonPlayer;
