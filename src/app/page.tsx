"use client";
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

      {/* Introduction Section */}
      <section className="text-center max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">
          Bienvenidos a{" "}
          <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
            Metalyplast
          </span>
        </h1>
        <p className="text-xl mb-8">
          Somos especialistas en trabajos de precisión en torno, fresa y CNC, ofreciendo soluciones integrales
          para la industria de moldes de inyección y componentes mecánicos de alta precisión.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <DefaultButton asChild size="lg" className="px-8">
            <Link href="/services">Nuestros Servicios</Link>
          </DefaultButton>
          <OutlineButton asChild size="lg" className="px-8">
            <Link href="/contact">Contáctanos</Link>
          </OutlineButton>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Nuestras Especialidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-t-4 border-t-blue-500">
              <CardHeader className="pb-2">
                <Tool className="h-10 w-10 text-blue-500 mb-2" />
                <CardTitle>Servicios de Torno</CardTitle>
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

            <Card className="border-t-4 border-t-teal-500">
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

            <Card className="border-t-4 border-t-purple-500">
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
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
          <DefaultButton asChild size="lg" className="px-8">
            <Link href="/contact">Solicitar Cotización</Link>
          </DefaultButton>
        </div>
      </section>
    </div>
  );
}
