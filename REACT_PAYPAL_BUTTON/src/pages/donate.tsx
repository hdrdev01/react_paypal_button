import { FunctionComponent, useEffect, useState } from "react";
import { PayPalButton } from "react-paypal-button-v2";
export const DonationAmount: FunctionComponent<{
  amount: Number;
  value: Number;
  setAmount: Function;
}> = ({ amount, setAmount, value }) => {
  return (
    <span
      className={`px-4 py-2 text-lg cursor-pointer bg-gray-light ${
        amount === value ? "border-2 border-yellow" : ""
      } `}
      onClick={() => setAmount(value)}
    >
      {value}$
    </span>
  );
};

const donate = () => {
  const [amount, setAmount] = useState(10);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const addPaypalScript = () => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=Ac2BnP0HehdhBbD7jXEafZ8Je3FqEelFhpB1Tj4ew7RhezUyRh5Z3mHGOejepC3x49qr_w2Wo0SPUi1I`;
      script.async = true;

      script.onload = () => setScriptLoaded(true);

      document.body.appendChild(script);
    };
    addPaypalScript();
  }, []);

  return (
    <div className="grid h-full gap-2 p-6 lg:px-24 md:grid-cols-2">
      <div className="textBlock-wrapper">
        <h1 className="textBlock-title">
          You can
          <span className="font-bold text-yellow"> Help </span>
        </h1>
        <p className="textBlock-subtitle">
          To save please send your contribution to our fund & keep the series
          alive
        </p>
      </div>
      <div className="grid place-items-center">
        <div className="flex flex-col items-center px-4 py-6 mx-auto space-y-4 rounded-md md:w-10/12 bg-gray-dark">
          <h1 className="text-5xl textBlock-title">Donate Box</h1>
          <p className="textBlock-subtitle">Any amount will be appreciated</p>
          <div className="flex space-x-10">
            <DonationAmount value={1} setAmount={setAmount} amount={amount} />
            <DonationAmount value={5} setAmount={setAmount} amount={amount} />
            <DonationAmount value={10} setAmount={setAmount} amount={amount} />
          </div>
          {scriptLoaded ? (
            <PayPalButton
              amount={amount}
              onSuccess={(details, data) => {
                //save the transaction
                console.log(details);
              }}
            />
          ) : (
            <span>Loading...</span>
          )}{" "}
        </div>
      </div>
    </div>
  );
};

export default donate;




// CLIENT ID : Line 28
// Ac2BnP0HehdhBbD7jXEafZ8Je3FqEelFhpB1Tj4ew7RhezUyRh5Z3mHGOejepC3x49qr_w2Wo0SPUi1I


// HADI HYA SCRIPT DIALO
// <script src="https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID"></script>  


//INSTALLE PAYPAL BUTTON F TERMINAL BHAD COMMAND
// npm i react-paypal-button-v2


// hadchi kamlo ghatl9aaah fl code installe nta ghi paypal button !!



//INSTALLE LPACKAGE DIAL REACT W NEXT !!       !IMPORTANT