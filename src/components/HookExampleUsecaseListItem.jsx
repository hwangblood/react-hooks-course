import PropTypes from "prop-types";
import UsecaseTitle from "./UsecaseTitle";
import UsecaseSubtitle from "./UsecaseSubtitle";

const HookExampleUsecaseListItem = ({ usecase }) => {
  return (
    <div id={usecase.id} className="HookExampleUsecase">
      <UsecaseTitle text={usecase.title} />
      <UsecaseSubtitle text={usecase.description} />
      <usecase.element />
    </div>
  );
};

HookExampleUsecaseListItem.propTypes = {
  usecase: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    element: PropTypes.elementType.isRequired,
  }),
};

export default HookExampleUsecaseListItem;
