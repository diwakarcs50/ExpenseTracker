import React from 'react'

function Select({label,id,name,value,onchange,error,selectOptions,defaultOption}) {
  return (
    <div className="input-container">
        <label htmlFor={id}>{label}</label>
        <select id={id} name={name} value={value} onChange={onchange}>
            {defaultOption && <option value="">{defaultOption}</option>}    
            {selectOptions.map((ele,i)=>(<option key={i} value={ele}>{ele}</option>))}
            
        </select>
          <p className="error">{error}</p>
    </div>
  )
}

export default Select