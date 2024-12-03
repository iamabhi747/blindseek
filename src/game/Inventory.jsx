import InventoryItem from "./InventoryItem";

function Inventory({ items }) {
  if (!items) {
    items = [];
  }

  if (items.length < 6) {
    for (let i = items.length; i < 6; i++) {
      items.push(InventoryItem());
    }
  }
  else if (items.length > 6) {
    items = items.slice(0, 6);
  }
  
  return (
    <div className="Inventory w-full h-full p-4 grid grid-cols-3 grid-rows-2 gap-4 border-r-2 border-gray-500">
      {items.map((item, index) => {
        return (
          <div className="Inventory-Item-Box">
            {item}
          </div>
        )
      })}
    </div>
  );
}

export default Inventory;