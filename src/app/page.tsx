"use client";
import ReactGA from "react-ga4";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Settings, PenToolIcon as Tool, Cog, Factory, Award, Clock } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { DefaultButton, OutlineButton } from "@/components/buttons/DefaultButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/Card";
import { homeCarouselImages } from "@/app/resources/home-images";

export default function Home() {
  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));
  const [emblaRef] = useEmblaCarousel({ loop: true }, [autoplay.current]);

  const registerEventGA = () => {
    // Register when Whatsapp button is clicked
    console.log("Whatsapp button clicked");
    ReactGA.event({
      category: "click",
      action: "Whatsapp Button Clicked",
      label: "Home clicked the Whatsapp button",
    });
  };

  return (
    <div className="space-y-12">
      {/* Hero Carousel */}
      <div className="w-full h-[65vh] mx-auto overflow-hidden relative rounded-sm " ref={emblaRef}>
        <div className="flex h-full ">
          {homeCarouselImages.map((src, index) => (
            <div className="flex-[0_0_100%] min-w-0 h-full" key={index}>
              <div className="relative w-full h-full">
                <Image
                  className=""
                  src={src || "/placeholder.svg"}
                  alt={`taller maquinaria ${src}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h2 className="text-2xl md:text-4xl font-bold mb-2">
                    Taller de Torno, Fresa y CNC. Fabricacion de Moldes de Inyección y Soplado.
                  </h2>
                  <p className="text-lg md:text-xl max-w-2xl">
                    Soluciones de alta precisión para la industria manufacturera
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Introduction Section */}
      <section className="text-center max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">
          Bienvenidos al taller de torno, fresa y CNC{" "}
          <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
            Metalyplast
          </span>
        </h1>
        <p className="text-xl mb-8">
          Taller de torno, fresa y CNC, ofreciendo soluciones integrales para la industria de moldes de
          inyección y componentes mecánicos de alta precisión.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <DefaultButton asChild size="lg" className="px-8">
            <Link href="/servicios">Nuestros Servicios</Link>
          </DefaultButton>
          <OutlineButton asChild size="lg" className="px-8 bg-gray-100 hover:bg-gray-200">
            <Link href="/contacto">Contáctanos</Link>
          </OutlineButton>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Nuestras Especialidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-1 border-gray-200 rounded-md shadow-xl border-t-4 border-t-blue-500 py-8 rounded-t-md">
              <CardHeader className="pb-2">
                <Tool className="h-10 w-10 text-blue-500 mb-2" />
                <CardTitle className="text-lg">Servicios de Torno</CardTitle>
                <CardDescription>Precisión en piezas cilíndricas</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Fabricación de ejes, bujes y casquillos de precisión</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Roscado en diferentes tipos: americanas, métricas, NPT</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Fabricación de tornillos sin fin y componentes especiales</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-1 border-gray-200 rounded-md shadow-xl border-t-4 border-t-teal-500 py-8 rounded-t-md">
              <CardHeader className="pb-2">
                <Settings className="h-10 w-10 text-teal-500 mb-2" />
                <CardTitle>Servicios de Fresadora</CardTitle>
                <CardDescription>Mecanizado de superficies planas y perfiles</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Fabricación de piñones, cremalleras y engranajes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Mecanizado de piezas en aceros especiales y aleaciones</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Producción de componentes para maquinaria industrial</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-1 border-gray-200 rounded-md shadow-xl border-t-4 border-t-purple-500 py-8 rounded-t-md">
              <CardHeader className="pb-2">
                <Cog className="h-10 w-10 text-purple-500 mb-2" />
                <CardTitle>Servicios de CNC</CardTitle>
                <CardDescription>Alta precisión con tecnología computarizada</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Mecanizado de piezas complejas con tolerancias mínimas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Diseño y fabricación de grabados en aceros</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Producción de moldes e insertos con geometrías complejas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Molding Expertise */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Especialistas en Moldes de Inyección</h2>
              <p className="text-lg mb-6">
                En Metalyplast nos especializamos en el diseño y fabricación de moldes de inyección de alta
                calidad para la industria del plástico. Nuestro equipo cuenta con amplia experiencia en:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" />
                  <span>Moldes de inyección de colada caliente y fría</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" />
                  <span>Moldes de soplado para preformas y envases</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" />
                  <span>Mantenimiento y reparación de moldes existentes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 shrink-0 mt-0.5" />
                  <span>Diseño y fabricación de insertos intercambiables</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/rotate-1136053_1280.webp"
                alt="Molde de inyección"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">¿Por qué elegirnos?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Calidad Garantizada</h3>
              <p>Todos nuestros trabajos cumplen con los más altos estándares de calidad y precisión.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Entregas Puntuales</h3>
              <p>Nos comprometemos a cumplir con los plazos de entrega acordados con nuestros clientes.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Tool className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Tecnología Avanzada</h3>
              <p>Contamos con maquinaria de última generación para garantizar la precisión en cada pieza.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Factory className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Experiencia Industrial</h3>
              <p>Más de 10 años de experiencia trabajando con las principales industrias del sector.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">¿Necesitas un servicio de mecanizado de precisión?</h2>
          <p className="text-xl mb-8">
            Contáctanos hoy mismo para discutir tu proyecto y obtener una cotización personalizada. Nuestro
            equipo de expertos está listo para ayudarte.
          </p>
          <DefaultButton asChild size="lg" className="px-8 m-2">
            <Link href="/contacto">Solicitar Cotización</Link>
          </DefaultButton>
          <a
            href="https://wa.me/50375187650?text=Hola%2C%20me%20gustaria%20realizar%20una%20cotizacion..."
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="inline-flex items-center justify-center gap-2 text-[#fafafa] rounded-md text-sm font-medium transition-all h-10 px-6 has-[>svg]:px-4 bg-[#25D366] hover:bg-[#00a000]"
              onClick={registerEventGA}
            >
              <div>Contáctanos por WhatsApp</div>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
