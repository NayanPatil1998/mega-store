import Footer from "../../Layout/Footer/Footer.layout";
import Header from "../../Layout/Header/header.layout";
import NumberFormat from "react-number-format";
import { IinitialState, totalFun } from "../../Redux/Reducers";
import { useSelector } from "react-redux";
import {
  useStripe,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useElements,
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { addOrder, baseUrl } from "../../axios/axios.services";
import { PaymentIntentResult } from "@stripe/stripe-js";
import { useHistory } from "react-router";

const Checkout: React.FC = () => {
  const state = useSelector((state: IinitialState) => state);

  const getTotal = () => state.cart.reduce(totalFun, 0);

  const history = useHistory();
  const ELEMENT_OPTIONS = {
    style: {
      base: {
        fontSize: "18px",

        color: "#424770",
        letterSpacing: "0.045em",

        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#9e2146",
      },
    },
  };
  const [name, setName] = useState(state.user?.displayName);
  const [email, setEmail] = useState(state.user?.email);
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [stateName, setStateName] = useState("");
  const [zip, setZip] = useState(0);
  const [error, setError] = useState(null);
  const [disable, setDisable] = useState(true);
  const [processing, setProcessing] = useState(false);

  const [clientSecret, setClientSecret] = useState("");

  const fullAddress = `${address} + ${address2} + ${stateName} + ${zip}`;

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `${baseUrl}/payment/create?amount=${getTotal()}&email=${email}`,
      });
      setClientSecret(response.data.secret_id);
    };
    getClientSecret();
    console.log(clientSecret);
  }, [state.cart]);

  const handleChange = (e: any) => {
    setDisable(e.empty);
    setError(e.error ? e.error.message : "");
  };

  const handleSubmit = async (e: any) => {
    console.log("working");

    e.preventDefault();
    setProcessing(true);
    const payload:
      | PaymentIntentResult
      | undefined = await stripe?.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements?.getElement(CardNumberElement)!,
      },
    });
    console.log(payload?.paymentIntent?.id);
    const response: AxiosResponse = await addOrder(
      payload?.paymentIntent?.id!,
      payload?.paymentIntent?.status!,
      state.cart,
      fullAddress,
      Date.now(),
      getTotal().toString(),
      state.user?.uid!
    );
    if (response?.status == 200) {
      setError(null);
      setProcessing(false);
    }
  };

  return (
    <div>
      <Header />
      <div className="container">
        <main>
          <div className="py-5 text-center">
            <h2>Checkout</h2>
          </div>

          <div className="row g-5">
            <div className="col-md-5 col-lg-4 order-md-last">
              <h4 className=" align-items-center mb-3">
                <span className="text-dark">Your cart</span>
              </h4>
              <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <h6 className="my-0">Subtotal</h6>

                  <span className="text-muted">
                    <NumberFormat
                      renderText={(value) => <h4>{value}</h4>}
                      decimalScale={2}
                      value={getTotal()}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₹"}
                    />
                  </span>
                </li>

                <li className="list-group-item d-flex justify-content-between">
                  <span>Total (INR)</span>
                  <strong>
                    <NumberFormat
                      renderText={(value) => <h4>{value}</h4>}
                      decimalScale={2}
                      value={getTotal()}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₹"}
                    />
                  </strong>
                </li>
              </ul>
            </div>
            <div className="col-md-7 col-lg-8">
              <h4 className="mb-3">Billing address</h4>
              <form className="needs-validation" onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-12">
                    <label htmlFor="firstName" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder=""
                      value={name!}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                    <div className="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>

                  <div className="col-12">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      value={email!}
                    />
                    <div className="invalid-feedback">
                      Please enter a valid email address for shipping updates.
                    </div>
                  </div>

                  <div className="col-12">
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="1234 Main St"
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter your shipping address.
                    </div>
                  </div>

                  <div className="col-12">
                    <label htmlFor="address2" className="form-label">
                      Address 2 <span className="text-muted">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      onChange={(e) => setAddress2(e.target.value)}
                      className="form-control"
                      id="address2"
                      placeholder="Apartment or suite"
                    />
                  </div>

                  <div className="col-md-3">
                    <label htmlFor="state" className="form-label">
                      State
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="state"
                      onChange={(e) => setStateName(e.target.value)}
                      placeholder="Enter State"
                      required
                    />
                    <div className="invalid-feedback">State required.</div>
                  </div>

                  <div className="col-md-3">
                    <label htmlFor="zip" className="form-label">
                      Zip
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => setZip(+e.target.value)}
                      id="zip"
                      placeholder=""
                      required
                    />
                    <div className="invalid-feedback">Zip code required.</div>
                  </div>
                </div>

                <hr className="my-4" />

                <h4 className="mb-3">Payment</h4>
                <label htmlFor="cardNumber" className="my-2">
                  Card Number
                </label>
                <CardNumberElement
                  id="cardNumber"
                  onChange={handleChange}
                  options={ELEMENT_OPTIONS}
                />
                <label className="my-2" htmlFor="expiry">
                  Card Expiration
                </label>
                <CardExpiryElement
                  id="expiry"
                  onChange={handleChange}
                  options={ELEMENT_OPTIONS}
                />
                <label className="my-2" htmlFor="cvc">
                  CVC
                </label>
                <CardCvcElement
                  onChange={handleChange}
                  id="cvc"
                  options={ELEMENT_OPTIONS}
                />

                {error && (
                  <div className="alert alert-danger my-2" role="alert">
                    {error}
                  </div>
                )}

                <hr className="my-4" />

                <button
                  disabled={processing || disable}
                  className="w-100 btn btn-dark btn-lg"
                  type="submit"
                >
                  {processing ? (
                    <div className="spinner-border text-light" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  ) : (
                    "Proceed to Payment"
                  )}
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
