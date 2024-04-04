"use client";

import {
  PayPalScriptProvider,
  PayPalCardFieldsProvider,
  PayPalNameField,
  PayPalNumberField,
  PayPalExpiryField,
  PayPalCVVField,
  PayPalButtons,
  PayPalHostedField,
  PayPalHostedFieldsProvider,
  usePayPalHostedFields,
  usePayPalCardFields,
} from "@paypal/react-paypal-js";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [clientToken, setClientToken] = useState(null);

  const [style, setStyle] = useState({
    height: "20px",
  });

  useEffect(() => {
    (async () => {
      const response = await (
        await fetch(
          "https://react-paypal-js-storybook.fly.dev/api/paypal/generate-client-token",
          { method: "POST" }
        )
      ).json();
      console.log({ token: response?.client_token || response?.clientToken });
      setClientToken(response?.client_token || response?.clientToken);
    })();
  }, []);

  function changeStyle() {
    setStyle(() => {
      if (style.height === "20px") {
        return { height: "10px" };
      }
      return {
        height: "20px",
      };
    });
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {clientToken ? (
        <PayPalScriptProvider
          options={{
            clientId:
              "CLIENT_ID",
            components: "buttons,card-fields,hosted-fields",
            dataClientToken: clientToken ?? "",
            intent: "capture",
            vault: false,
          }}
        >
          {/* <PayPalButtons /> */}

          <button
            onClick={changeStyle}
            className="border p-2 rounded-sm border-blue-500"
          >
            rerender and change style
          </button>

          <PayPalCardFieldsProvider>
            <PayPalNameField
              placeholder="nombre"
              style={style}
              key={style.height + "name"}
            />
            <PayPalNumberField
              placeholder="numero"
              style={style}
              key={style.height + "number"}
            />
            <PayPalExpiryField
              placeholder="expiry"
              style={style}
              key={style.height + "expiry"}
            />
            <PayPalCVVField
              placeholder="cvv"
              style={style}
              key={style.height + "cvv"}
            />
            <SubmitCardFields/>
          </PayPalCardFieldsProvider>
          {/* <PayPalHostedFieldsProvider
            createOrder={async () => {
              return "";
            }}
            

          >
            <label htmlFor="card-number">
              Card Number
              <span style={{ color: "red" }}>*</span>
            </label>
            <PayPalHostedField
              id="card-number"
              className="card-field"
              hostedFieldType="number"
              options={{
                selector: "#card-number",
                placeholder: "4111 1111 1111 1111",
              }}
              key={style.height + "hosted-number"}
            />
            <label htmlFor="cvv">
              CVV<span style={{ color: "red" }}>*</span>
            </label>
            <PayPalHostedField
              id="cvv"
              className="card-field"
              hostedFieldType="cvv"
              options={{
                selector: "#cvv",
                placeholder: "123",
                maskInput: true,
              }}
              key={style.height + "hosted-cvv"}
            />
            <label htmlFor="expiration-date">
              Expiration Date
              <span style={{ color: "red" }}>*</span>
            </label>
            <PayPalHostedField
              id="expiration-date"
              className="card-field"
              hostedFieldType="expirationDate"
              options={{
                selector: "#expiration-date",
                placeholder: "MM/YYYY",
              }}
              key={style.height + "hosted-expiry"}
            />
          </PayPalHostedFieldsProvider> */}
        </PayPalScriptProvider>
      ) : (
        <div>Loading...</div>
      )}
    </main>
  );
}

const SubmitCardFields = () => {
  const { cardFields } = usePayPalCardFields();
  return <button onClick={() => cardFields.submit()}>submit</button>;
};
