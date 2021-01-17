import React from 'react';

const List = ({ items }) => {
  // Show a info text if no items are found
  if (items.length === 0) {
    return <h1>No items Found</h1>;
  }

  return (
    // Table with the repos
    <table className='table table-striped'>
      <thead>
        <tr>
          <th>NAME</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default List;
