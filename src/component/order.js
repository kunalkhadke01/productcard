export default function Order({ value }) {
  const mybutton = {
    width: "341px",
    height: "48px",
    borderRadius: "4px 4px 4px 0px",
    background: "#007F61",
    margin: "auto"
  };
  return (
    <main>
      <div style={{ display: "flex", gap: 60, justifyContent: "center" }}>
        <h4>Free 2 Day Shipping</h4>
        <h4>Total : DKK {value}</h4>
      </div>
      <div style={mybutton}>
        <button style={mybutton}>+ Add to Cart</button>
      </div>
    </main>
  );
}
