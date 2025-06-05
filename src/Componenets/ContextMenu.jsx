import React from "react";

export default function ContextMenu({
  menuPosition,
  setMenuPosition,
  setExpenseData,
  rowId,
  setFormData,
  expenseData,
  setEditingRowId
}) {
  if (!menuPosition.top) return;
  return (
    <div className="context-menu" style={{ ...menuPosition }}>
      <div
        onClick={() => {
          const { title, category, amount } = expenseData.find(
            (data) => data.id === rowId
          );
          console.log({ title, category, amount });
          setFormData({ title, category, amount });
          setEditingRowId(rowId)
          setMenuPosition({});
        }}
      >
        Edit
      </div>

      <div
        onClick={() => {
          setExpenseData((prev) => {
            console.log(rowId);
            return prev.filter((data) => data.id !== rowId);
          });
          setMenuPosition({});
        }}
      >
        Delete
      </div>
    </div>
  );
}
