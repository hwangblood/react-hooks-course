import PropTypes from "prop-types";
import { isLastElement } from "../utils";

const GutterColumn = ({ index, list }) => {
  return <>{!isLastElement(index, list) && <div className="GutterColumn" />}</>;
};

GutterColumn.propTypes = {
  index: PropTypes.number.isRequired,
  list: PropTypes.array.isRequired,
};

export default GutterColumn;
