import { headingsFont } from "./layout";
import { cn } from "@/utils/cn";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <video
          src="/video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className=""
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover", // Ensures the video covers the area without stretching
          }}
        />
      </div>
      {/* Add your content here */}
      <div className="relative z-10 p-8">
        <h1
          className={cn(
            "text-4xl font-bold text-white",
            headingsFont.className,
          )}
        >
          Welcome to My Landing Page
        </h1>
        {/* Add more content */}
      </div>
    </div>
  );
}
