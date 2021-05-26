export const getAllPizzasReducer = (state = { pizzas: [] }, action) => {
  switch (action.type) {
    case "GET_PIZZAS_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_PIZZAS_SUCCESS":
      return {
        loading: false,
        pizzas: action.payload,
      };
    case "GET_PIZZAS_FAILED":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const addPizzasReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_PIZZA_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "ADD_PIZZA_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "ADD_PIZZA_FAILED":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const getPizzaByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_PIZZABYID_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_PIZZABYID_SUCCESS":
      return {
        loading: false,
        pizza: action.payload,
      };
    case "GET_PIZZABYID_FAILED":
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const editPizzasReducer = (state = {}, action) => {
  switch (action.type) {
    case "EDIT_PIZZA_REQUEST":
      return {
        editloading: true,
        ...state,
      };
    case "EDIT_PIZZA_SUCCESS":
      return {
        editloading: false,
        editsuccess: true,
      };
    case "EDIT_PIZZA_FAILED":
      return {
        editloading: false,
        editerror: action.payload,
      };

    default:
      return state;
  }
};
