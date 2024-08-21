import React from "react";
import Image from "next/image";

export default function Phone({ handleClick, tapsRegistered }) {
  return (
    <div
      className="w-[300px] h-[650px] relative rounded-[30px] border-[10px] border-zinc-700"
      onClick={handleClick}
    >
      <Image
        width={300}
        height={650}
        alt="DM Highlight Design"
        src="/app-design/dmHighlight.png"
        className="rounded-[20px] absolute inset-0 w-[300px] h-[630px] object-cover"
        onClick={handleClick}
      />
      <Image
        width={300}
        height={650}
        alt="Unresponded DM Design"
        src="/app-design/unrespondedDM.png"
        className={`absolute rounded-[20px] top-0 left-0 ${
          tapsRegistered >= 1 ? "opacity-1" : "opacity-0"
        } transition-opacity duration-1000 ease-in-out w-[300px] h-[630px] object-cover`}
        onClick={handleClick}
      />
      <Image
        width={300}
        height={650}
        alt="Video Play Design"
        src="/app-design/dmPage.png"
        className={`absolute rounded-[20px] top-0 left-0 ${
          tapsRegistered >= 2 ? "opacity-1" : "opacity-0"
        } transition-opacity duration-1000 ease-in-out w-[300px] h-[630px] object-cover`}
        onClick={handleClick}
      />
    </div>
  );
}
