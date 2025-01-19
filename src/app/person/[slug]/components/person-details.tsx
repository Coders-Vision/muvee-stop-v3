"use client";

import { useState } from "react";
import { Person } from "@/types/people/person";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getPosterImage } from "@/lib/get-image-path";
import ImageWithFallback from "@/components/image-with-fallback";

function PersonDetails({ person }: { person: Person }) {
  const [showMore, setShowMore] = useState(false);

  const {
    images,
    name,
    place_of_birth,
    gender,
    also_known_as,
    known_for_department,
    birthday,
    biography,
  } = person;

  return (
    <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-normal">
      <div className="flex-shrink-0">
        <ImageWithFallback
          src={getPosterImage(images.profiles[0]?.file_path)}
          alt={`${person.name}`}
          placeholder="empty"
          width="0"
          height="0"
          sizes="100vw"
          className="w-[200px] rounded-xl"
        />
      </div>
      <div className="mx-8 my-auto">
        <h1 className="text-4xl font-bold">{name}</h1>
        <h3 className="text-ms-gray-light">
          <span className="font-bold">Birthday: </span>
          {birthday}, {place_of_birth}
        </h3>
        <h3 className="text-ms-gray-light ">
          <span className="font-bold">Othernames: </span>
          {/* {person.also_known_as} */}

          {person.also_known_as.map(
            (name, index) =>
              `${name}${index < also_known_as.length ? "," : ""} `
          )}
        </h3>

        <h3 className="text-ms-gray-light ">
          <span className="font-bold">Known for: </span>
          {known_for_department}
        </h3>

        <h3 className="text-ms-gray-light ">
          <span className="font-bold">Height: </span>
          {gender === 1 ? "Female" : person.gender === 2 ? "Male" : "Other"}
        </h3>
        {biography && (
          <p>
            {showMore ? biography : `${biography.substring(0, 250)}`}
            <Button
              className="my-2 bg-transparent hover:bg-transparent text-white hover:underline"
              size={"sm"}
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show less" : "Show more"}
            </Button>
          </p>
        )}
      </div>
    </div>
  );
}

export default PersonDetails;
