import axios from 'axios'
import  * as actionTypes from "./action-types"

export const allPokemons = (page, itemsPerPage) => {
    return async function(dispatch) {
        try {
            const res = await axios.get(`http://localhost:3001/pokemons/?page=${page}&itemsPerPage=${itemsPerPage}`);
            dispatch({ type: actionTypes.ALL_POKEMONS, payload: res.data });
        } catch (error) {
            // Manejar errores aquí
        }
    };
};

export const allTypes=()=>{
return async function (dispatch){
    const res = await axios.get('http://localhost:3001/types/type');
    dispatch({type: actionTypes.ALL_TYPES, payload: res.data})
}
}

export const PokemonByName=(name)=>{
return async function (dispatch){
    try {
        const res = await axios.get(`http://localhost:3001/pokemons?name=${name}`);
    dispatch({type: actionTypes.POKEMON_NAME, payload:res.data})
    } catch (error) {
        dispatch({type: actionTypes.FAILURE, payload:`NO POKEMON WITH NAME ${name}` })
    }  
}
}

export const FailureHandler=(Err)=>{
    return ({type: actionTypes.FAILURE, payload:Err})
}

export const orderName=(order)=>{
    return {type: actionTypes.ORDER_NAME, payload:order}
}

export const orderAttack=(order)=>{
    return { type: actionTypes.ORDER_ATTACK, payload:order}
}

export const orderTypes=(order)=>{
    return {type: actionTypes.ORDER_TYPES, payload:order}
}

export const orderOrigin=(order)=>{
return {type: actionTypes.ORDER_ORIGIN, payload:order}
}