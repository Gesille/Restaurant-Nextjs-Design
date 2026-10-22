import { contact } from "@/data/site";

const socials = [
  { icon: "fa-facebook", label: "Facebook" },
  { icon: "fa-twitter", label: "Twitter" },
  { icon: "fa-instagram", label: "Instagram" },
  { icon: "fa-dribbble", label: "Dribbble" },
];

export default function Topbar() {
  return (
    <div className="wrap">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-md d-flex align-items-center">
            <p className="mb-0 phone">
              <span className="mailus">Phone no:</span> <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a> or{" "}
              <span className="mailus">email us:</span> <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </p>
          </div>
          <div className="col-12 col-md d-flex justify-content-md-end">
            <p className="mb-0">{contact.hours}</p>
            <div className="social-media">
              <p className="mb-0 d-flex">
                {socials.map((social) => (
                  <a
                    href="#"
                    key={social.label}
                    className="d-flex align-items-center justify-content-center"
                  >
                    <span className={`fa ${social.icon}`}>
                      <i className="sr-only">{social.label}</i>
                    </span>
                  </a>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
