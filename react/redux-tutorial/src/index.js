import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore } from "redux";

const initialState = {
  count: 0,
  clicks: 0,
  house: {
    name: "Ravenclaw",
    points: 17
  },
  school: {
    name: "Hogwarts",
    house: {
      name: "Card'house",
      points: 17
    }
  },
  clans: {
    "Red beaver": {
      points: 15
    },
    "Mistic musical": {
      points: 18
    },
    "Rude vegetable": {
      points: 7
    },
    "Green bus": {
      points: 5
    }
  },
  array: [1, 2, 3],
  array_map: [1, 2, "X", 4],
  array_object: [
    {
      id: 1,
      email: "nattanonyanil@gmail.com"
    },
    {
      id: 2,
      email: "nattanonyanil2@gmail.com"
    }
  ],
  array_middle: [1, 2, 3, 4, 5, 6]
};

const store = createStore(reducer);

function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1
      };
    case "CLICK":
      return {
        ...state,
        clicks: state.clicks + 1
      };
    case "HOUSE":
      return {
        ...state,
        house: {
          ...state.house,
          points: state.house.points + 2
        }
      };
    case "SCHOOL":
      return {
        ...state,
        school: {
          ...state.school,
          house: {
            ...state.school.house,
            points: state.school.house.points + 2
          }
        }
      };
    case "CLANS":
      const key = "Rude vegetable";
      return {
        ...state,
        clans: {
          ...state.clans,
          [key]: {
            ...state.clans[key],
            points: state.clans[key].points + 3
          }
        }
      };
    case "ARRAY_ADD":
      const newItem = 0;
      return {
        ...state,
        array: [...state.array, newItem]
      };
    case "ARRAY_MAP":
      return {
        ...state,
        array_map: state.array_map.map((item, index) => {
          if (item === "X") {
            return 3;
          }
          return item;
        })
      };
    case "UPDATE_EMAIL":
      const payload = {
        userId: 2,
        newEmail: "nattanonyanilnew@gmail.com"
      };
      return {
        ...state,
        array_object: state.array_object.map((item, index) => {
          return {
            ...item,
            email: payload.newEmail
          };
        })
      };
    case "ARRAY_MIDDLE":
      const newItem2 = 112;
      const newState = state.array_middle.slice();
      newState.splice(3, 0, newItem2);
      return {
        ...state,
        array_middle: newState
      };

    default:
      return state;
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
