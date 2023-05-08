import PropTypes from "prop-types";
import HookExampleListItem from "./HookExampleListItem";
import ListFooter from "./ListFooter";

const HookExampleList = ({ items }) => {
  return (
    <div className="HookExampleList">
      {/* Generate hook examples */}
      {
        // eslint-disable-next-line no-unused-vars
        items.map((item, index) => (
          <div key={item.id}>
            {/* Hook Example */}
            <HookExampleListItem item={item} />
            {/* show divider between list items */}
          </div>
        ))
      }
      <ListFooter />
    </div>
  );
};

HookExampleList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default HookExampleList;
