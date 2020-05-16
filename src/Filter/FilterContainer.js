import { setFilterAC, setQueryТС, handleFiltersТС } from "./../redux/filterReducer";
import { connect } from "react-redux";
import Filter from "./Filter";

const mapStateToProps = (state) => {
  return {
    query: state.filter.rearchQuery,
    filter: state.filter.filter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: (filter) => {
      dispatch(setFilterAC(filter));
    },
    setQuery: (filter, query) => {
      dispatch(setQueryТС(filter, query));
    },
    handleFilters: (genres,filterType) =>{
      dispatch(handleFiltersТС(genres,filterType));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
