// TODO: edit these to match your restaurant
const features = [
  { icon: "fa-leaf", title: "Fresh Ingredients", text: "Everything is prepared daily from fresh, quality ingredients." },
  { icon: "fa-fire", title: "Made to Order", text: "Each dish is cooked hot and served right when it is ready." },
  { icon: "fa-heart", title: "Made with Love", text: "Recipes crafted with care so every bite tastes like home." },
  { icon: "fa-smile-o", title: "Friendly Service", text: "A warm welcome and quick service every time you visit." },
];

export default function FeaturesSection() {
  return (
    <section className="ftco-section bg-light">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-2">
          <div className="col-md-7 text-center heading-section">
            <span className="subheading">Why Us</span>
            <h2 className="mb-4">Why Choose ASHTAR MISHOO</h2>
          </div>
        </div>
        <div className="row">
          {features.map((f) => (
            <div className="col-md-6 col-lg-3 mb-4" key={f.title}>
              <div
                className="text-center bg-white p-4 h-100"
                style={{ borderRadius: 8, boxShadow: "0 5px 20px rgba(0,0,0,0.06)" }}
              >
                <div
                  className="d-flex align-items-center justify-content-center mx-auto mb-3 bg-primary"
                  style={{ width: 80, height: 80, borderRadius: "50%" }}
                >
                  <span className={`fa ${f.icon}`} style={{ color: "#fff", fontSize: 32 }} />
                </div>
                <h3 style={{ fontSize: 20 }}>{f.title}</h3>
                <p className="mb-0">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}