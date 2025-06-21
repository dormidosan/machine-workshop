"use client";

import { useRef, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { aboutCarouselImages } from "../resources/about-images";
import { OutlineButton } from "@/components/buttons/DefaultButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/Card";

export default function About() {
  const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, slidesToScroll: 1, align: "start" }, [
    autoplay.current,
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Sobre nosotros</h1>
      <p className="text-xl">
        Taller de mecanizado que ha proveído trabajos de alta precisión por los últimos 10 años.
      </p>

      <div className="relative w-full max-w-5xl mx-auto">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {aboutCarouselImages.map((src, index) => (
              <div className="flex-[0_0_33.33%] min-w-0 pl-1" key={index}>
                <div className="p-1 aspect-[4/3] relative">
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`Workshop image ${index + 1}`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <OutlineButton
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/75 rounded-full"
          onClick={scrollPrev}
        >
          <ChevronLeft className="h-6 w-6" />
        </OutlineButton>
        <OutlineButton
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/75 rounded-full"
          onClick={scrollNext}
        >
          <ChevronRight className="h-6 w-6" />
        </OutlineButton>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === selectedIndex ? "bg-gray-800" : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Nuestra Historia</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Metalplast es una empresa dedicada a la fabricación y mantenimiento de moldes de inyección y
              soplado de alta producción mediante la implementación de máquinas herramientas como torno,
              fresadoras y fresadora CNC. Como empresa, contamos con una experiencia sólida y un compromiso
              inquebrantable con la excelencia, y hemos establecido un estándar de referencia en la industria.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Nuestro Equipo</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Contamos con un equipo altamente capacitado en el manejo de máquinas herramientas convencionales
              como tornos y fresadoras, dominando una amplia gama de técnicas que nos diferencia en el sector.
              Además, nos mantenemos a la vanguardia tecnológica al integrar maquinaria CNC en nuestros
              procesos, lo que nos permite optimizar la precisión, eficiencia y calidad en cada proyecto.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
