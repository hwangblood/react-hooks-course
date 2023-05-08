import PropTypes from "prop-types";
import HookExampleListItem from "./HookExampleListItem";

const HookExampleList = ({ items }) => {
  const hasExamples = items != (null || undefined) && items.length > 0;

  const isLastExample = (index) => index == items.length - 1;

  return (
    <>
      {hasExamples ? (
        //  Generate hook examples
        <div className="HookExampleList">
          {hasExamples &&
            items.map((item, index) => (
              <div key={item.id}>
                {/* Hook Example */}
                <HookExampleListItem item={item} />
                {/* show divider between examples */}
                {!isLastExample(index) && <hr />}
              </div>
            ))}
        </div>
      ) : (
        //  Don't have any hook examples, show a empty state
        <div>No hook examples found!</div>
      )}
    </>
  );
};
HookExampleList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default HookExampleList;
