const Item = ({ name, quantity, category, onSelect }) => {
    return (
      <li
        className="p-2 bg-slate-900 text-slate-100 rounded-lg hover:bg-slate-700 cursor-pointer m-4 max-w-sm"
        onClick={onSelect}
      >
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-sm">
          Buy {quantity} in {category}
        </p>
      </li>
    );
  };
  
  export default Item;
  