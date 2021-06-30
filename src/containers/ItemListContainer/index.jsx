import ItemList from "../../components/ItemList";

const ItemListContainer = ({ setSelectedId, productos }) => {
  return <ItemList setSelectedId={setSelectedId} productos={productos} />;
};

export default ItemListContainer;
