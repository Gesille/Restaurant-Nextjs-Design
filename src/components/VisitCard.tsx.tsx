import Link from "next/link";
import { contact } from "@/data/site";

export default function VisitCard() {
  return (
    <div className="appointment-form">
      <h3 className="mb-3">Visit Us</h3>

      <p
        className="mb-3"
        style={{ color: "rgba(255,255,255,0.9)" }}
      >
        <span className="fa fa-clock-o mr-2" />
        {contact.hours}
      </p>

      <p
        className="mb-3"
        style={{ color: "rgba(255,255,255,0.9)" }}
      >
        <span className="fa fa-map-marker mr-2" />
        Near Caribbean Cinemas, Antigua
      </p>

      <p
        className="mb-3"
        style={{ color: "rgba(255,255,255,0.9)" }}
      >
        <span className="fa fa-phone mr-2" />
        <a
          href={`tel:${contact.phone}`}
          style={{ color: "inherit" }}
        >
          {contact.phone}
        </a>
      </p>

      <p
        className="mb-4"
        style={{ color: "rgba(255,255,255,0.9)" }}
      >
        <span className="fa fa-envelope mr-2" />
        <a
          href={`mailto:${contact.email}`}
          style={{ color: "inherit" }}
        >
          {contact.email}
        </a>
      </p>

      <div className="d-flex flex-wrap" style={{ gap: 10 }}>
        <Link href="/menu" className="btn btn-white py-3 px-4">
          View Menu
        </Link>

        <Link href="/contact" className="btn btn-white py-3 px-4">
          Contact Us
        </Link>
      </div>
    </div>
  );
}