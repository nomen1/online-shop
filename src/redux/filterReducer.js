
const SET_FILTER = "SET_FILTER";
const SET_QUERY = "SET_QUERY"
const SET_MULTIPLY_FILTERS = "SET_MULTIPLY_FILTERS"

export const setFilterAC = (filter)=>{
    
    return {
        type: SET_FILTER, filter
      };
 }


 export const setMultipleFiltersAC = (filters) => {
  return {
    type: SET_MULTIPLY_FILTERS,
    filters
  };
};








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

export const handleMultipleFiltersТС = (genres, filterType) =>{
    
  return  (dispatch) => {
     dispatch(setMultipleFiltersAC(genres))
     dispatch(setFilterAC(filterType))
     
  }
}



const initialState = {
    filter:"all",
    searchQuery: " ",
    multiplyFilters: []
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
      case SET_MULTIPLY_FILTERS:
        return {
          ...state,
          multiplyFilters: action.filters,
        };

  default:
     return state;
     }
     
 }
 
 export default filterReducer