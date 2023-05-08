import PropTypes from "prop-types";
import { isLastElement } from "../utils";

const ListDivider = ({ payload }) => {
  return (
    <div className="ListDivider">
      {!isLastElement(payload.index, payload.list) && <hr />}
    </div>
  );
};

ListDivider.propTypes = {
  payload: PropTypes.shape({
    index: PropTypes.number.isRequired,
    list: PropTypes.array.isRequired,
  }),
};

export default ListDivider;
