import Link from "next/link";
import BarsMark from "./BarsMark";

const servicesLinks = [
  { href: "/services", label: "Création de site" },
  { href: "/services", label: "Référencement local" },
  { href: "/services", label: "Maintenance" },
];

const allycoreLinks = [
  { href: "/projects", label: "Réalisations" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-ac">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <BarsMark size="lg" light />
              <span
                className="font-display font-bold"
                style={{ fontSize: 24, letterSpacing: "-0.04em" }}
              >
                Allycore
              </span>
            </div>
            <p
              className="mb-6"
              style={{ fontSize: 14, opacity: 0.75, lineHeight: 1.55, maxWidth: 320 }}
            >
              Sites web et référencement local pour les artisans du bâtiment.
              Indépendant, basé en France.
            </p>
            <Link href="/contact" className="btn btn--primary">
              Demander un devis
              <span className="arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </div>

          {/* Services */}
          <div>
            <h5>Services</h5>
            <ul>
              {servicesLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Allycore */}
          <div>
            <h5>Allycore</h5>
            <ul>
              {allycoreLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5>Contact</h5>
            <ul>
              <li>
                <a href="mailto:allycore.service@gmail.com">allycore.service@gmail.com</a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/allycore-service-2997ab409/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61590192987262"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li style={{ opacity: 0.6, fontSize: 13 }}>Réponse sous 24 h ouvrées</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Allycore — Tous droits réservés.</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <span
              style={{
                display: "inline-flex",
                height: 10,
                borderRadius: 2,
                overflow: "hidden",
                border: "1px solid rgba(246,244,236,.2)",
              }}
            >
              <span style={{ width: 6, height: "100%", background: "#0055A4" }} />
              <span style={{ width: 6, height: "100%", background: "#FFFFFF" }} />
              <span style={{ width: 6, height: "100%", background: "#EF4135" }} />
            </span>
            Made in France
          </span>
        </div>
      </div>
    </footer>
  );
}
