import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { contact } from "@/data/site";

export const metadata: Metadata = { title: "Contact us" };

const details = [
  { label: "Address:", text: contact.address, href: contact.mapQuery },
  { label: "Phone:", text: contact.phone, href: contact.phoneHref },
  { label: "Email:", text: contact.email, href: `mailto:${contact.email}` },
  { label: "Hours:", text: contact.hours },
];
export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact us" crumbs={[{ label: "Home", href: "/" }, { label: "Contact us" }]} />

      <section className="ftco-section contact-section bg-light">
        <div className="container">
          <div className="row d-flex contact-info">
            <div className="col-md-12">
              <h2 className="h4 font-weight-bold">Contact Information</h2>
            </div>
            <div className="w-100" />
            {details.map((item, i) => (
              <Reveal className="col-md-3 d-flex" key={item.label} delay={i * 0.08} y={24}>
                <div className="dbox">
                  <p>
                    <span>{item.label}</span>{" "}
                    {item.href ? <a href={item.href}>{item.text}</a> : item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-no-pt contact-section">
        <div className="container">
          <div className="row d-flex align-items-stretch no-gutters">
            <div className="col-md-6 p-5 order-md-last">
              <h2 className="h4 mb-5 font-weight-bold">Send Us a Message</h2>
              <ContactForm />
            </div>
            <div className="col-md-6 d-flex align-items-stretch">
              <div id="map">
                <iframe
  title="Ashtar Mishoo location"
  src={`https://maps.google.com/maps?q=${encodeURIComponent(contact.mapQuery)}&z=17&output=embed`}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  allowFullScreen
/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}