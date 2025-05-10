import { useState } from "react";

const sampleProducts = [
  {
    id: 1,
    name_en: "Elegant Leather Sandal",
    name_he: "סנדל עור אלגנטי",
    description_en: "Handcrafted leather sandal with a sleek minimalist design.",
    description_he: "סנדל עור בעבודת יד בעיצוב מינימליסטי ואלגנטי.",
    image: "/samples/sandal1.jpg",
    price: 240,
  },
  {
    id: 2,
    name_en: "Chunky Street Boot",
    name_he: "מגף רחוב עבה",
    description_en: "Trendy and durable boot perfect for autumn outfits.",
    description_he: "מגף אופנתי ועמיד שמתאים בדיוק לעונת הסתיו.",
    image: "/samples/boot1.jpg",
    price: 390,
  },
  {
    id: 3,
    name_en: "Classic Nude Pump",
    name_he: "נעלי עקב קלאסיות בגוון ניוד",
    description_en: "Perfect for both office wear and elegant evenings.",
    description_he: "מתאימות למשרד ולערבים אלגנטיים כאחד.",
    image: "/samples/sandal2.jpg",
    price: 310,
  },
];

export default function Home() {
  const [lang, setLang] = useState("en");

  const t = (product, key) => product[`${key}_${lang}`];

  return (
    <div style={{ fontFamily: "Arial", padding: "2rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>
          {lang === "en" ? "Grazia Donna Collection" : "קולקציית גרציה דונה"}
        </h1>
        <button onClick={() => setLang(lang === "en" ? "he" : "en")}>
          {lang === "en" ? "עברית" : "English"}
        </button>
      </div>

      <div
        style={{
          marginTop: "2rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {sampleProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "1rem",
              overflow: "hidden",
              boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
              background: "#fff",
            }}
          >
            <img
              src={product.image}
              alt={t(product, "name")}
              style={{ width: "100%", height: "250px", objectFit: "cover" }}
            />
            <div style={{ padding: "1rem" }}>
              <h2 style={{ fontSize: "1.2rem", fontWeight: "600" }}>{t(product, "name")}</h2>
              <p style={{ color: "#555", marginBottom: "0.5rem" }}>{t(product, "description")}</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontWeight: "bold" }}>₪{product.price}</span>
                <button style={{ padding: "0.4rem 1rem", background: "#000", color: "#fff", borderRadius: "8px" }}>
                  {lang === "en" ? "Add to Cart" : "הוסף לעגלה"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
