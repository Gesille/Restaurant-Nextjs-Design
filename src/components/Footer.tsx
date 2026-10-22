import { instagram, lorem, openHours } from "@/data/site";
import NewsletterForm from "./NewsletterForm";
import Link from "next/dist/client/link";
import Image from "next/image";
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="ftco-footer ftco-no-pb ftco-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-6 col-lg-3">
            <div className="ftco-footer-widget mb-4">
                   <Link className="navbar-brand d-flex align-items-center" href="/" aria-label="Ashtar Mishoo - Home">
  <Image
    src="/images/logo/logo.png"
    alt="Ashtar Mishoo"
    width={85}
    height={85}
    priority
    className="navbar-logo"
  />
</Link>
              <p>{lorem.footer}</p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
                <li>
                  <a href="#" aria-label="Twitter">
                    <span className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Facebook">
                    <span className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Instagram">
                    <span className="fa fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Open Hours</h2>
              <ul className="list-unstyled open-hours">
                {openHours.map(([day, hours]) => (
                  <li className="d-flex" key={day}>
                    <span>{day}</span>
                    <span>{hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Instagram</h2>
              <div className="thumb d-sm-flex">
                {instagram.slice(0, 3).map((image) => (
                  <a
                    href="#"
                    key={image}
                    className="thumb-menu img"
                    style={{ backgroundImage: `url(/images/${image})` }}
                    aria-label="View on Instagram"
                  />
                ))}
              </div>
              <div className="thumb d-flex">
                {instagram.slice(3).map((image) => (
                  <a
                    href="#"
                    key={image}
                    className="thumb-menu img"
                    style={{ backgroundImage: `url(/images/${image})` }}
                    aria-label="View on Instagram"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Newsletter</h2>
              <p>Far far away, behind the word mountains, far from the countries.</p>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid px-0 bg-primary py-3">
        <div className="row no-gutters">
          <div className="col-md-12 text-center">
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            <p className="mb-0">
  &copy; {year} Ashtar Mishoo. All rights reserved.
</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
