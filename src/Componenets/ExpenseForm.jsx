import React, { useEffect, useRef, useState } from "react";
import { use } from "react";
import { Input } from "./Input";
import expenseData from "../expenseData";
import Select from "./Select";

function ExpenseForm({
  editingRowId,
  setEditingRowId,
  setExpenseData,
  formData,
  setFormData,
}) {
  // console.log('rendering')
  // const [total,setTotal]  = useState('')

  const [errors, setErrors] = useState({});

  const myref = useRef(0);

  useEffect(() => {
    console.log("value:", myref.current);
  });

  const validationConfig = {
    title: [
      { required: true, message: "Please Enter Title" },
      { minlength: 5, message: "Title should be at least 5 characters long" },
    ],
    category: [{ required: true, message: "Please Enter category" }],
    amount: [{ required: true, message: "Please Enter amount" }],
  };

  const validate = (formData) => {
    const errorData = {};

    Object.entries(formData).forEach(([key, value]) => {
      validationConfig[key].forEach((rule) => {
        if (rule.required && !value.trim()) {
          errorData[key] = rule.message;
        }
        if (rule.minlength && value.length < rule.minlength) {
          errorData[key] = rule.message;
        }
      });
    });

    setErrors(errorData);
    return errorData;
  };

  const handleSubmit = (e) => {


    e.preventDefault();
    const validateResult = validate(formData);
    if (Object.keys(validateResult).length) return


      if (editingRowId) {
      setExpenseData((prev) => {
        return prev.map((data) => {
          if (data.id === editingRowId) {
            return { ...formData, id: editingRowId };
          }
          return data;
        });
      });

      setFormData({
        title:"",
        category: "",
        amount: "",
      })

      setEditingRowId('')
      return

    }

    const { title, category, amount } = formData;
    const expense = { title, category, amount, id: crypto.randomUUID() };

    
    if (Object.keys(validateResult).length) return;
    console.log(errors);

  
    setExpenseData((prev) => [...prev, expense]);
    setFormData({
      title: "",
      category: "",
      amount: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors({});
  };

  return (
    <>
      <form className="expense-form" onSubmit={handleSubmit}>
        <Input
          className="input-container"
          label="Title"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          error={errors.title}
        />
        <Select
          label="Category"
          id="category"
          name="category"
          value={formData.category}
          onchange={handleChange}
          error={errors.category}
          defaultOption="Select Category"
          selectOptions={[
            "Grocery",
            "Clothes",
            "Bills",
            "Education",
            "Medicine",
          ]}
        />
        <Input
          label="Amount"
          id="amount"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          error={errors.amount}
        />

        <button className="add-btn">{editingRowId? "Update" : "Add"}</button>
      </form>
    </>
  );
}

export default ExpenseForm;
