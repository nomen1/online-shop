import { setFilterAC, setQueryТС } from "./../redux/filterReducer";
import { connect } from "react-redux";
import Filter from "./Filter";

const mapStateToProps = (state) => {
  return {
    query: state.filter.rearchQuery
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFilter: (filter) => {
      dispatch(setFilterAC(filter));
    },
    setQuery: (filter, query) => {
      dispatch(setQueryТС(filter, query));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
