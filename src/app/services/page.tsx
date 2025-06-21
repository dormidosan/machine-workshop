import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/Card";

export default function Services() {
  const services = [
    {
      title: "Fabricación de Moldes",

      description: [
        "Diseño y fabricación de moldes de inyección de colada caliente.",

        "Diseño y fabricación de moldes de soplado de preformas.",

        "Calzado y mantenimiento de moldes de inyección y soplado.",

        "Mecanizado de insertos y componentes para moldes.",
      ],

      image:
        "https://plus.unsplash.com/premium_photo-1682144572574-2305752c0f63?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      title: "Servicios de Torno",

      description: [
        "Fabricación de casquillos y bujes.",

        "Roscado en diferentes tipos: americanas, métricas, NPT y cuadradas.",

        "Fabricación de tornillos sin fin.",

        "Producción de pines botadores y pines jaladores.",

        "Fabricación de boquillas para inyectoras y aros centradores.",

        "Rectificado de agujeros y discos de freno.",
      ],

      image:
        "https://plus.unsplash.com/premium_photo-1682144932026-f5ea5364757a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      title: "Servicios de Fresadora",

      description: [
        "Fabricación de juegos de piñones y cremalleras.",

        "Producción de piñones helicoidales.",

        "Mecanizado de piezas en aceros y diferentes tipos de materiales.",

        "Mecanizado de piezas e insertos para moldes. ",
      ],

      image:
        "https://plus.unsplash.com/premium_photo-1661963276567-44f7b173be9d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      title: "Servicios de Fresa CNC",

      description: [
        "Diseño y fabricación de grabados en aceros.",

        "Mecanizado de piezas de alta precisión.",

        "Mecanizado de moldes e insertos con grabados en ángulos y formas.",
      ],

      image:
        "https://images.unsplash.com/photo-1611117775350-ac3950990985?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      title: "Desarrollo de Prototipos",

      description: [
        "Diseño de piezas en software AutoCAD.",

        "Modelado y simulación de moldes de inyección y soplado.",

        "Fabricación de muestras y figuras de molde.",
      ],

      image:
        "https://images.unsplash.com/photo-1611117775350-ac3950990985?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      title: "Otros Servicios",

      description: ["Soldadura eléctrica.", "Afilado de cuchillas.", "Rectificado de piezas."],

      image:
        "https://images.unsplash.com/photo-1611117775350-ac3950990985?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="space-y-2">
      <h1 className="text-4xl font-bold">Nuestros Servicios</h1>

      <p className="text-xl">
        Ofrecemos un amplio rango de servicios de matriceria que suplen tus necesidades a la medida.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                layout="fill"
                objectFit="cover"
              />
            </div>

            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>

            <CardContent>
              <p>
                {service.description.map((desc, index) => (
                  <span key={index}>
                    &#x2022; {desc} <br />
                  </span>
                ))}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
