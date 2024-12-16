import { useState } from "react";

const ItemList = ({ title, schema }) => {
    const [items, setItems] = useState([{ name: '', bio: '', age: '' }]);
  
    const handleInputChange = (index, attribute, value) => {
      const updatedItems = [...items];
      updatedItems[index][attribute] = value;
      setItems(updatedItems);
    };
  
    const handleAddItem = () => {
      const newItem = schema.reduce((acc, field) => {
        acc[field.attribute] = '';
        return acc;
      }, {});
      setItems([...items, newItem]);
    };
  
    const handleRemoveItem = (index) => {
      setItems(items.filter((_, i) => i !== index));
    };
  
    const handleSubmit = () => {
      console.log('Submitted Items:', items);
    };
  
    return (
      <div>
        <h3>{title}</h3>
        {items.map((item, index) => (
          <div key={index} className="item-form border p-4 mb-4">
            <h4>Item {index + 1}</h4>
            {schema.map((field) => (
              <div key={field.attribute}>
                <label>{field.label}</label>
                <input
                  type={field.type === 'Text' ? 'text' : field.type === 'Number' ? 'number' : 'text'}
                  value={item[field.attribute]}
                  onChange={(e) => handleInputChange(index, field.attribute, e.target.value)}
                  className="border px-2 py-1 rounded"
                />
              </div>
            ))}
            <button onClick={() => handleRemoveItem(index)} className="text-red-500">
              Remove Item
            </button>
          </div>
        ))}
        <button onClick={handleAddItem} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Item
        </button>
        <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded mt-4">
          Submit Items
        </button>
      </div>
    );
  };
  