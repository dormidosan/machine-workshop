import Image from "next/image";
import { DefaultButton } from "@/components/buttons/DefaultButton";
import { Textarea } from "@/components/TextArea";

export const metadata = {
  title: "Contacto | Taller de Torno, Fresa y CNC en San Salvador",
  description:
    "Contáctanos para servicios de torno, fresa y CNC en San Salvador. Mecanizado de precisión y atención personalizada. Llámanos o escríbenos para más información.",
};

export default function Contact() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Encuéntranos</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="aspect-square w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.6595449629837!2d-89.19103112414496!3d13.690955986633591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQxJzI3LjQiTiA4OcKwMTEnMTkuOCJX!5e0!3m2!1sen!2sus!4v1636129615976!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        <div className="space-y-6">
          {/* IMAGE SECTION */}
          <div className="relative w-full h-64 overflow-hidden rounded-2xl">
            <div className="absolute inset-0">
              <Image
                src="/images/direccion-3.webp"
                alt="Entrada principal del taller Metalyplast"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* TEXT SECTIONS */}
          <div className="text-sm space-y-6">
            <div>
              <h2 className="text-2xl font-semibold py-2">Nuestra ubicación</h2>
              <p>Barrio la Vega, calle Argentina #141, San Salvador, El Salvador</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold py-2">Información de contacto</h2>
              <p className="text-lg text-[#2563eb] font-extrabold">
                <a href="tel:75187650">(503) 7518-7650</a>
              </p>
              <p className="text-lg text-[#2563eb] font-extrabold">
                <a href="mailto:ventas@metalyplast.com">ventas@metalyplast.com</a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold py-2">Horario de atención</h2>
              <p>Lunes a viernes: 8:00 a. m. - 12:00 m. d., 1:00 p. m. - 5:00 p. m.</p>
              <p>Sábado: 8:00 a. m. - 12:00 m. d.</p>
              <p>Domingo: Cerrado</p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-8" style={{ display: "none" }}>
        Envíanos un mensaje
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ display: "none" }}>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nombre
            </label>

            <input id="name" type="text" placeholder="Tu nombre" />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Correo electrónico
            </label>

            <input id="email" type="email" placeholder="tu@correo.com" />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Mensaje
            </label>

            <Textarea id="message" placeholder="Escribe tu mensaje aquí..." />
          </div>

          <DefaultButton type="submit">Enviar mensaje</DefaultButton>
        </form>
      </div>
    </div>
  );
}
