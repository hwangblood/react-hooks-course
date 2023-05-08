import PropTypes from "prop-types";

const HookExampleListItem = ({ item }) => {
  return (
    <div id={item.id} className="HookExampleListItem">
      <h2>{item.title}</h2>
      <h4>{item.description}</h4>
      <item.element />
    </div>
  );
};

HookExampleListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    element: PropTypes.elementType.isRequired,
  }),
};

export default HookExampleListItem;
