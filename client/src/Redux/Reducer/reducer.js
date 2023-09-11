import { ALL_POKEMONS, ALL_TYPES, POKEMON_NAME, ORDER_ATTACK, ORDER_NAME, ORDER_ORIGIN, ORDER_TYPES,FAILURE } from "../Actions/action-types"

const initialState={
    Pokemons: [],
    Types:[],
    PokemonName:[],
    OrderAttack:[],
    OrderName:[],
    OrderOrigin:[],
    OrderTypes:[],
    Failure:'',
}

const rootReducer=(state= initialState, action)=>{

switch(action.type){
    case ALL_POKEMONS: return{ 
        ...state, Pokemons: action.payload
    }
     
    case ALL_TYPES: return{
        ...state, Types: action.payload
    }
    
    case POKEMON_NAME: return{
        ...state, PokemonName: action.payload
    }

    case ORDER_NAME:
  if (action.payload === 'All') {
    return { ...state, OrderName: state.Pokemons };
  } else if (action.payload === 'Az') {
    const sortedPokemons = [...state.Pokemons].sort((a, b) => a.name.localeCompare(b.name, 'en', { sensitivity: 'base' }));
    return { ...state, OrderName: sortedPokemons };
  } else if (action.payload === 'Za') {
    const sortedPokemonsZA = [...state.Pokemons].sort((a, b) => b.name.localeCompare(a.name, 'en', { sensitivity: 'base' }));
    return { ...state, OrderName: sortedPokemonsZA };
  }
  break;
      
    case ORDER_ATTACK:
        if(action.payload==='All'){ return {...state, OrderAttack: state.Pokemons};
        }
        else if (action.payload === 'Max') {
            const sortedPokemonsMax = [...state.Pokemons].sort((a, b) => b.attack - a.attack);
            return { ...state, OrderAttack: sortedPokemonsMax };
          }
          else if (action.payload === 'Min') {
            const sortedPokemonsMin = [...state.Pokemons].sort((a, b) => a.attack - b.attack);
            return { ...state, OrderAttack: sortedPokemonsMin };
          };
         break;
          case ORDER_ORIGIN:
            if(action.payload === 'All'){
                return { ...state, OrderOrigin: state.Pokemons };
            }
            else if (action.payload === 'Created'){
               const PokemonsDb= state.Pokemons.filter((e) => e.createdInDb)
               if(PokemonsDb.length===0){
                return {
                  ...state, Failure: 'No Pokemons Here'
                }
               };
               return { ...state, OrderOrigin: PokemonsDb};
            }
            else if(action.payload==='Api'){
                const PokemonsApi= state.Pokemons.filter((e)=>!e.createdInDb)
                return { ...state, OrderOrigin: PokemonsApi};
            }
            break;

            case ORDER_TYPES:
            let filterType;
            if (action.payload === "All") {
           filterType = state.Pokemons;
           } else {
              filterType = state.Pokemons.filter((e) =>
           e.types.includes(action.payload)
           );
          }
          if(filterType.length===0) return {
            ...state, Failure: 'No Pokemons Here'
          } 
             return {
           ...state,
            OrderTypes: filterType,
             }

             case FAILURE: if (action.payload==='Err'){
              return {...state, Failure:''}
             }
             else return {
              ...state, Failure: action.payload
             }
        
    default: return {
        ...state
    }
  
}

}

export default rootReducer