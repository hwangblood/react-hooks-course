import PropTypes from "prop-types";
import HookExampleUsecaseList from "./HookExampleUsecaseList";
import ListWraper from "./ListWraper";
import HookExampleUsecaseListEmptySpacer from "./HookExampleUsecaseListEmptySpacer";

const HookExampleListItem = ({ item }) => {
  const usecases = item.usecases;
  return (
    <div id={item.id} className="HookExampleListItem">
      <h2>{item.title}</h2>
      <h3>{item.description}</h3>

      <ListWraper
        listData={usecases}
        empty={<HookExampleUsecaseListEmptySpacer />}
      >
        <HookExampleUsecaseList items={usecases} />
      </ListWraper>
    </div>
  );
};

HookExampleListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    usecases: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
};

export default HookExampleListItem;
