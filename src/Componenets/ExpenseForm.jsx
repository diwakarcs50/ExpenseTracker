import React, { useEffect, useRef, useState } from "react";
import { use } from "react";
import { Input } from "./Input";
import expenseData from "../expenseData";
import Select from "./Select";

function ExpenseForm({ setExpenseData }) {
  // console.log('rendering')
  // const [total,setTotal]  = useState('')

  const [formData, setFormData] = useState({
    // id: crypto.randomUUID(),
    title: "",
    category: "",
    amount: "",
  });

  const [errors, setErrors] = useState({});

  const myref = useRef(0);

  useEffect(() => {
    console.log("value:", myref.current);
  });

  const validationConfig = {
    title: [
      { required: true, message: "Please Enter Title" },
      { minlength: 5, message: "Title should be at least 5 charactersl̥ long" },
    ],
    category: [
      { required: true, message: "Please Enter category" },
    ],
    amount: [{ required:true, message:"Please Enter amount"},],
  };

  const validate = (formData) => {
    const errorData = {};
  
    Object.entries(formData).forEach(([key,value])=>{
        validationConfig[key].forEach((rule)=>{
            if(rule.required){
              errorData[key]= rule.message
            }
        })
    })

    setErrors(errorData)
    return errorData
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, category, amount } = formData;
    const expense = { title, category, amount, id: crypto.randomUUID() };

    const validateResult = validate(formData);
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
        <button className="add-btn">Add</button>
      </form>
    </>
  );
}

export default ExpenseForm;
