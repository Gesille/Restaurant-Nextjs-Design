import { combos } from "@/data/Combos data";
import { contact } from "@/data/site";

export default function ComboSection() {
  return (
    <section className="ftco-section combo-section">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-7 text-center heading-section">
            <span className="subheading">Save more</span>
            <h2 className="mb-2">Combo Deals</h2>
          </div>
        </div>

        <div className="combo-grid">
          {combos.map((combo) => {
            const saving =
              combo.regular && combo.regular > combo.price
                ? combo.regular - combo.price
                : 0;

            return (
              <article className="combo-card" key={combo.name}>
                <div
                  className="combo-img"
                  style={{ backgroundImage: `url(/images/${combo.image})` }}
                  role="img"
                  aria-label={combo.name}
                >
                  {combo.badge && <span className="combo-badge">{combo.badge}</span>}
                </div>

                <div className="combo-body">
                  <h3>{combo.name}</h3>

                  <ul className="combo-list">
                    {combo.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <div className="combo-price-row">
                    <div className="combo-price">
                      <strong>${combo.price}</strong>
                      {combo.regular && combo.regular > combo.price && (
                        <s>${combo.regular}</s>
                      )}
                    </div>
                    {saving > 0 && <span className="combo-save">Save ${saving}</span>}
                  </div>

                 
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}