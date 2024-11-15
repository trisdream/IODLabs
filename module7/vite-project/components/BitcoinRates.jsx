import { useState, useEffect, useReducer, useRef } from "react";
import { useEmoji } from "./EmojiContext";

// Action Types for the Reducer
const ACTIONS = {
  FETCH_START: "fetch_start",
  FETCH_SUCCESS: "fetch_success",
  FETCH_ERROR: "fetch_error",
};

// Reducer function to manage the state
function priceReducer(state, action) {
  switch (action.type) {
    case ACTIONS.FETCH_START:
      return { ...state, loading: true, error: null };
    case ACTIONS.FETCH_SUCCESS:
      return { ...state, loading: false, price: action.payload };
    case ACTIONS.FETCH_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

// Custom hook to fetch the Bitcoin price
function useBitcoinPrice(currency) {
  const [state, dispatch] = useReducer(priceReducer, {
    price: null,
    loading: false,
    error: null,
  });

  const cancelRequest = useRef(false); // To handle cleanup on unmount

  useEffect(() => {
    if (!currency) return;

    const fetchPrice = async () => {
      dispatch({ type: ACTIONS.FETCH_START });

      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
        );

        // If the request is cancelled, don't set the state
        if (cancelRequest.current) return;

        const data = await response.json();
        const price = data?.bitcoin?.[currency]; // Ensure this exists before setting

        if (price) {
          dispatch({ type: ACTIONS.FETCH_SUCCESS, payload: price });
        } else {
          throw new Error("Price data is unavailable.");
        }
      } catch (error) {
        if (!cancelRequest.current) {
          dispatch({
            type: ACTIONS.FETCH_ERROR,
            payload: error?.message || "An unknown error occurred.",
          });
        }
      }
    };

    fetchPrice();

    // Cleanup function to prevent setting state after unmount or if currency changes
    return () => {
      cancelRequest.current = true;
    };
  }, [currency]);

  return state;
}

export function BitcoinRates() {
  const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];
  const [currency, setCurrency] = useState(currencies[0]);

  const { price, loading, error } = useBitcoinPrice(currency);
  const { emoji, changeEmoji } = useEmoji();

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      <p>
        {loading ? (
          "Loading..." // You could replace this with a spinner if desired
        ) : error ? (
          <span style={{ color: "red" }}>Error: {error}</span>
        ) : (
          `Current Bitcoin Price: ${price} ${currency}`
        )}
      </p>
      <div>
        <p>Current Mood: {emoji}</p>
        <button className="bg-purple-900 rounded-xl" onClick={changeEmoji}>
          Change Mood
        </button>
      </div>
    </div>
  );
}
