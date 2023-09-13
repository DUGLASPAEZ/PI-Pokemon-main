import {
  ALL_POKEMONS,
  ALL_TYPES,
  POKEMON_NAME,
  ORDER_ATTACK,
  ORDER_NAME,
  ORDER_ORIGIN,
  ORDER_TYPES,
  FAILURE,
  SET_CURRENT_PAGE, // Nueva acción para cambiar la página actual
} from "../Actions/action-types";

const initialState = {
  Pokemons: [],
  Types: [],
  PokemonName: [],
  OrderAttack: [],
  OrderName: [],
  OrderOrigin: [],
  OrderTypes: [],
  Failure: "",
 
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_POKEMONS:
      return {
        ...state,
        Pokemons: action.payload,
      };

    case ALL_TYPES:
      return {
        ...state,
        Types: action.payload,
      };

    case POKEMON_NAME:
      return {
        ...state,
        PokemonName: action.payload,
      };

    case ORDER_NAME:
      // Lógica de ordenamiento por nombre...
      break;

    case ORDER_ATTACK:
      // Lógica de ordenamiento por ataque...
      break;

    case ORDER_ORIGIN:
      // Lógica de ordenamiento por origen...
      break;

    case ORDER_TYPES:
      // Lógica de ordenamiento por tipos...
      break;

    case FAILURE:
      if (action.payload === "Err") {
        return {
          ...state,
          Failure: "",
        };
      } else {
        return {
          ...state,
          Failure: action.payload,
        };
      }

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload, // Actualiza la página actual
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
