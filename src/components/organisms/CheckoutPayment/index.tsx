import React from "react";

function CheckoutPayment() {
  const item = [
    { id: 1, item: "Your Account Name", text: "Masayoshi Angga Zero" },
    { id: 2, item: "Type", text: "Worldwide Transfer" },
    { id: 3, item: "Bank Name", text: "Mandiri" },
    { id: 4, item: "Bank Account Name", text: "PT Store GG Indonesia" },
    { id: 5, item: "Bank Number", text: "1800 - 9090 - 2021" },
  ];

  return (
    <div className="mt-[30px] lg:mt-[50px] text-_blue">
      <h2 className="font-bold text-xl">Payment Informations</h2>
      <div className="mt-5 space-y-5">
        {item.map((v, i) => (
          <div
            className="text-lg flex flex-col lg:flex-row justify-between"
            key={i}
          >
            <p>{v.item}</p>
            <p className="font-semibold">{v.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CheckoutPayment;
