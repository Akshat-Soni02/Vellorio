import React from 'react';

const ListWrapper = ({ items, renderItem }) => {
  return (
    <div className="client-list">
      {items.map((item, index) => (
        <div key={index} className="client-item">
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
};

export default ListWrapper;
