import PropTypes from "prop-types";
import HookExampleUsecaseListItem from "./HookExampleUsecaseListItem";
import GutterColumn from "./GutterColumn";

const HookExampleUsecaseList = ({ items }) => {
  return (
    <div className="HookExampleUsecaseList">
      {items.map((usecase, index) => (
        <div key={usecase.id}>
          <HookExampleUsecaseListItem usecase={usecase} />
          <GutterColumn index={index} list={items} />
        </div>
      ))}
    </div>
  );
};

HookExampleUsecaseList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default HookExampleUsecaseList;
