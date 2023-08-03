import React, { useState } from 'react';

const TableList = () => {
  const [tableList, setTableList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    date: '',
    type: '',
    category: '',
    sum: '',
  });

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setFormData({
      date: '',
      type: '',
      category: '',
      sum: '',
    });
  };

  const handleAddTable = () => {
    if (formData.date || formData.type || formData.category || formData.sum) {
      setTableList([...tableList, [formData]]);
      handleCloseModal();
    }
  };

  return (
    <div>
  
      <ul>
        {tableList.map((table, tableIndex) => (
          <li key={tableIndex}>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Type</th>
                  <th>Category</th>
                  <th>Category</th>
                  <th>Sum</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {table.map((item, rowIndex) => (
                  <tr key={rowIndex}>
                    <td>{item.date}</td>
                    <td>{item.type}</td>
                    <td>{item.category}</td>
                    <td>{item.category}</td>
                    <td>{item.sum}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </li>
        ))}
          </ul>
              <button onClick={handleOpenModal}>Add Table</button>
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <button onClick={handleAddTable}>Add Table</button>
            <input
              type="text"
              placeholder="Date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TableList;