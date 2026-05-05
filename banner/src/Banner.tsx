export default function Banner() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #ff6b6b, #feca57)",
        color: "white",
        padding: "1rem 2rem",
        textAlign: "center",
        fontSize: "1.2rem",
        fontWeight: "bold",
      }}
    >
      🔥 Скидка 20% на всё сегодня! Используй код:{" "}
      <span
        style={{
          background: "rgba(0,0,0,0.2)",
          padding: "2px 8px",
          borderRadius: 4,
        }}
      >
        SAVE30
      </span>
    </div>
  );
}
