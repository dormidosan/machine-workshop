"use client";
import { useRef } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { homeCarouselImages } from "@/app/resources/home-images";

export default function Home() {
  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));
  const [emblaRef] = useEmblaCarousel({ loop: true }, [autoplay.current]);

  return (
    <div className="space-y-12">
      {/* Hero Carousel */}
      <div className="w-full h-[65vh] mx-auto overflow-hidden relative" ref={emblaRef}>
        <div className="flex h-full">
          {homeCarouselImages.map((src, index) => (
            <div className="flex-[0_0_100%] min-w-0 h-full" key={index}>
              <div className="relative w-full h-full">
                <Image
                  src={src || "/placeholder.svg"}
                  alt={`Workshop image ${index + 1}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h2 className="text-2xl md:text-4xl font-bold mb-2">Precisión y Calidad en Mecanizado</h2>
                  <p className="text-lg md:text-xl max-w-2xl">
                    Soluciones de alta precisión para la industria manufacturera
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
