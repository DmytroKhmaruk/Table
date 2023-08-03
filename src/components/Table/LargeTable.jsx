import React, { useState } from 'react';
import TableStyled from "./TableStyled";

const Table = () => {
  const [tableData, setTableData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ date: '', type: '', category: '', sum: '' });

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setFormData({ date: '', type: '', category: '', sum: '' });
  };

  const handleAddRow = () => {
    setTableData([...tableData, formData]);
    handleCloseModal();
  };

  const handleDeleteRow = (index) => {
    const updatedData = tableData.filter((_, i) => i !== index);
    setTableData(updatedData);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Category</th>
            <th>Comment</th>
            <th>Sum</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.type}</td>
              <td>{item.category}</td>
              <td>{item.category}</td>
              <td>{item.sum}</td>
              <td>
                <button onClick={() => handleDeleteRow(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
            <button onClick={handleOpenModal}>Add Row</button>
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <input
              type="text"
              placeholder="Date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
            <button onClick={handleAddRow}>Add</button>
          </div>
        </div>
      )}
      </div>

  );
};

export default Table;