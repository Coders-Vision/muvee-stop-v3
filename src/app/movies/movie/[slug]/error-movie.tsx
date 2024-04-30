"use client";

import React from "react";
import Container from "@/layout/container";

function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col items-center justify-center my-36 px-10">
          <div className="text-center">
            <h4 className="text-3xl font-extralight"> Error</h4>
            <h1 className="text-9xl font-thin"> 500</h1>
            <p className="text-xl font-mono">
              Oh No! Seems like something broke!
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ErrorBoundary;
