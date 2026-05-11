import Link from "next/link";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/allycore-service-2997ab409/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:allycore.service@gmail.com", label: "Email" },
];

const footerLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projets" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/8 bg-secondary/60">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/allycore-icon.svg"
                alt="Allycore"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-bold text-lg text-navy">Allycore</span>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              Des sites web professionnels pour les artisans qui veulent être trouvés sur Google.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-navy font-semibold mb-4 text-sm uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2">
              {footerLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-muted text-sm hover:text-accent transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-navy font-semibold mb-4 text-sm uppercase tracking-wider">
              Réseaux
            </h3>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-muted hover:text-accent transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-black/8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted text-xs">
            © {new Date().getFullYear()} Allycore. Tous droits réservés.
          </p>
          <p className="text-muted text-xs">
            Construit avec{" "}
            <span className="text-accent">Next.js</span> &{" "}
            <span className="text-accent">Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
