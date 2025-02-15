"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import { Button, ButtonProps } from "../ui/button";

type EventButtonProps = {
  event: string;
  value: string;
} & ButtonProps;

function EventButton({ event, value, ...props }: EventButtonProps) {
  return (
    <Button
      {...props}
      onClick={(e) => {
        event && value && sendGTMEvent({ event, value });
        props.onClick?.(e);
      }}
    />
  );
}
export default EventButton;
