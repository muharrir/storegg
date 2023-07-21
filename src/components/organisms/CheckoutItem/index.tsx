import React from "react";

function CheckoutItem() {
  const item = [
    { id: 1, item: "Your Game ID", text: "masayoshizero" },
    { id: 2, item: "Order ID", text: "#GG001" },
    { id: 3, item: "Item", text: "250 Diamonds" },
    { id: 4, item: "Price", text: "Rp 42.280.500" },
    { id: 5, item: "Tax (10%)", text: "Rp 4.228.000" },
    { id: 6, item: "Total", text: "Rp 55.000.600" },
  ];

  return (
    <div className="mt-[30px] lg:mt-[50px] text-_blue">
      <h2 className="font-bold text-xl">Purchase Details</h2>
      <div className="mt-5 space-y-5">
        {item.map((v, i) => (
          <div
            className="text-lg flex flex-col lg:flex-row justify-between"
            key={i}
          >
            <p>{v.item}</p>
            <p
              className={`font-semibold ${
                v.id == 6 ? "text-_blue2" : "text-_blue"
              }`}
            >
              {v.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CheckoutItem;
