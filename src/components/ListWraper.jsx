import PropTypes from "prop-types";
import { isNotEmptyArray } from "../utils";

const ListWraper = ({ listData, children, empty }) => {
  return (
    <div className="ListWraper">
      {isNotEmptyArray(listData) ? children : empty}
    </div>
  );
};

ListWraper.propTypes = {
  listData: PropTypes.any.isRequired,
  children: PropTypes.element.isRequired,
  empty: PropTypes.element.isRequired,
};

export default ListWraper;
