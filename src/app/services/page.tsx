import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/Card";

export const metadata = {
  title: "Servicios de Mecanizado de Torno, Fresa y CNC",
  description:
    "Visítanos en nuestro taller de Torno, fresa y CNC mecanizado de precisión en San Salvador. Ofrecemos servicios de fabricación de moldes, torneado, fresado y CNC para satisfacer todas tus necesidades de matricería.",
};

export default function servicios() {
  const servicios = [
    {
      title: "Fabricación de Moldes",

      description: [
        "Diseño y fabricación de moldes de inyección de colada caliente.",

        "Diseño y fabricación de moldes de soplado de preformas.",

        "Calzado y mantenimiento de moldes de inyección y soplado.",

        "Mecanizado de insertos y componentes para moldes.",
      ],

      image: "/images/servicios/milling_2.webp",
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

      image: "/images/servicios/lathe2.webp",
    },

    {
      title: "Servicios de Fresadora",

      description: [
        "Fabricación de juegos de piñones y cremalleras.",

        "Producción de piñones helicoidales.",

        "Mecanizado de piezas en aceros y diferentes tipos de materiales.",

        "Mecanizado de piezas e insertos para moldes. ",
      ],

      image: "/images/servicios/milling3.webp",
    },

    {
      title: "Servicios de Fresa CNC",

      description: [
        "Diseño y fabricación de grabados en aceros.",

        "Mecanizado de piezas de alta precisión.",

        "Mecanizado de moldes e insertos con grabados en ángulos y formas.",
      ],

      image: "/images/servicios/cnc2.webp",
    },

    {
      title: "Desarrollo de Prototipos",

      description: [
        "Diseño de piezas en software AutoCAD.",

        "Modelado y simulación de moldes de inyección y soplado.",

        "Fabricación de muestras y figuras de molde.",
      ],

      image: "/images/servicios/tools.webp",
    },

    {
      title: "Otros Servicios",

      description: ["Soldadura eléctrica.", "Afilado de cuchillas.", "Rectificado de piezas."],

      image: "/images/servicios/tools2.webp",
    },
  ];

  return (
    <div className="space-y-2">
      <h1 className="text-4xl font-bold">Nuestros Servicios</h1>

      <p className="text-xl">
        Ofrecemos un amplio rango de servicios de matriceria que suplen tus necesidades a la medida.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {servicios.map((service, index) => (
          <Card
            key={index}
            className=" gap-6 rounded-xl border-2 py-6 shadow-xl border-[#e5e5e5]  overflow-hidden "
          >
            <div className="relative h-70 mx-20 rounded-sm overflow-hidden">
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            <CardHeader>
              <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
            </CardHeader>

            <CardContent className="text-ms">
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
