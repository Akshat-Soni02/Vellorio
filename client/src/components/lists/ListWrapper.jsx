import React from 'react';
import "./style.css";

const ListWrapper = ({ items, renderItem }) => {
  return (
    <div className="client-list">
      {items.slice(0, 5).map((item, index) => (
        <div key={index} className="client-item">
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
};

export default ListWrapper;
