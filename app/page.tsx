"use client";

import {
  PayPalScriptProvider,
  PayPalCardFieldsProvider,
  PayPalNameField,
  PayPalNumberField,
  PayPalExpiryField,
  PayPalCVVField,
  PayPalCardFieldsForm,
  usePayPalCardFields,
} from "@paypal/react-paypal-js";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PayPalScriptProvider
        options={{
          clientId: "CLIENT-ID",
          components: "card-fields",
        }}
      >
        <PayPalCardFieldsProvider
          createOrder={() => Promise.resolve("some-id")}
          onApprove={() => {}}
          onError={() => {}}
        >
          {/* <PayPalNameField />
          <PayPalNumberField />
          <PayPalExpiryField />
          <PayPalCVVField /> */}

          <PayPalCardFieldsForm />

          <SubmitCardFields />
        </PayPalCardFieldsProvider>
      </PayPalScriptProvider>
    </main>
  );
}

const SubmitCardFields = () => {
  const { cardFieldsForm, fields } = usePayPalCardFields();

  return <button onClick={() => fields.CVVField.focus()}>Submit</button>;
};
