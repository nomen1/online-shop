
const SET_FILTER = "SET_FILTER";
const SET_QUERY = "SET_QUERY"

export const setFilterAC = (filter)=>{
    
    return {
        type: SET_FILTER, filter
      };
 }


 export  const setQueryAC = (query)=>{
    
    return {
        type: SET_QUERY, query
 }
 }

 export const setQueryТС = (filter, query) =>{
    
    return  (dispatch) => {
       dispatch(setFilterAC(filter))
       dispatch(setQueryAC(query))
    }
}





const initialState = {
    filter:"all",
    searchQuery: " "
 }

const filterReducer = (state = initialState, action) => {
    switch(action.type){
   
 
   case SET_FILTER:
     return{
        ...state,
         filter: action.filter
     }
   
     case  SET_QUERY:
       return {
            ...state,
            searchQuery: action.query,
          };
 
  default:
     return state;
     }
     
 }
 
 export default filterReducer