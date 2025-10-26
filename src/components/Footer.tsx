import React from "react";
import { Link } from "react-router-dom";
import {FaBus, FaInstagram, FaFacebook } from "react-icons/fa";
import {FaTrainTram } from "react-icons/fa6"
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/kronsj/?hl=en",
    icon: <FaInstagram className="h-6 w-6" />,
    label: "Instagram"
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100057302994175&locale=nb_NO",
    icon: <FaFacebook className="h-6 w-6" />,
    label: "Facebook"
  }
];

const navLinks = [
  { name: "Hjem", to: "/" },
  { name: "Om Oss", to: "/om-oss" },
  { name: "Priser", to: "/priser" },
  { name: "Timeplan", to: "/timeplan" },
  { name: "Kontakt", to: "/kontakt" }
];

export const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white pt-12 pb-8 mt-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
        {/* Brand and Page Links */}
        <div>
          <div className="mb-4 text-2xl font-bold text-primary-400">Krønsj</div>
          <ul className="space-y-1 mb-6">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-gray-400 hover:text-primary-400 transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Address & Transport */}
        <div>
          <h3 className="mb-3 text-lg font-semibold">Adresse</h3>
          <a
            href="https://maps.google.com/?q=Torggata+34,+0183+Oslo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-400 hover:text-primary-400 transition-colors mb-2"
          >
            <MdLocationOn className="mr-2 h-5 w-5" />
            Torggata 34, 0183 Oslo
          </a>
          <div className="flex items-center space-x-4 mb-4">
            <span title="Trikk til Storgata" className="text-gray-300"><FaTrainTram className="h-6 w-6" /></span>
            <span title="Buss til Storgata" className="text-gray-300"><FaBus className="h-6 w-6" /></span>
            <span className="text-gray-400 text-sm">Storgata</span>
          </div>
        </div>
        {/* Kontakt */}
        <div>
          <h3 className="mb-3 text-lg font-semibold">Kontakt</h3>
          <div className="flex items-center text-gray-400 mb-2">
            <MdEmail className="mr-2 h-5 w-5" />
            <a href="mailto:christina@kronsj.no" className="hover:text-primary-400 transition-colors">christina@kronsj.no</a>
          </div>
          <div className="flex items-center text-gray-400">
            <MdPhone className="mr-2 h-5 w-5" />
            <a href="tel:+47291909" className="hover:text-primary-400 transition-colors">+47 291909</a>
          </div>
        </div>
        {/* Socials */}
        <div>
          <h3 className="mb-3 text-lg font-semibold">Følg oss</h3>
          <div className="flex space-x-4 mb-4">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-12 flex flex-col items-center justify-between border-t border-gray-800 pt-8 md:flex-row">
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} Krønsj Training Studio. Alle rettigheter reservert.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
