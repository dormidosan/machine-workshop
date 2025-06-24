"use client";
import ReactGA from "react-ga4";
import Link from "next/link";
import { Instagram, Mail, MapPin, Phone, PenToolIcon as Tool } from "lucide-react";
import { FacebookIcon } from "@/app/icons";

export default function Footer() {
  const registerMailEventGA = () => {
    //Register when email link is clicked
    console.log("Email link clicked");
    ReactGA.event({
      category: "Email",
      action: "Email Link Clicked",
      label: "User clicked the email link",
    });
  };

  const registerPhoneEventGA = () => {
    // Register when phone link is clicked
    console.log("Phone link clicked");
    ReactGA.event({
      category: "Phone",
      action: "Phone Link Clicked",
      label: "User clicked the phone link",
    });
  };

  return (
    <footer className="bg-gray-800 text-white pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Tool className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Metalyplast
              </span>
            </div>
            <p className="text-gray-300 text-sm">
              Especialistas en trabajos de torno, fresa y CNC con más de 10 años de experiencia en el sector.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">Calle Principal, San Salvador, El Salvador</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">
                  <a href="tel:75187650" onClick={registerPhoneEventGA}>
                    (503) 7518-7650
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">
                  <a href="mailto:ventas@metalyplast.com" onClick={registerMailEventGA}>
                    ventas@metalyplast.com
                  </a>
                </span>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                <FacebookIcon className="h-5 w-5 " />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Taller Metalyplast. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
