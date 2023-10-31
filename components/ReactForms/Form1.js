import React, { useState } from "react";

const Form1 = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) =>  {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values,[name]:value}));
  }
  const handleClick = (e) => {
    e.preventDefault();
    alert("The entered name is "+inputs.username +" the age is "+inputs.age);
  };
  return (
    <>
      <form onSubmit={handleClick}>
        <label htmlFor="">
          Enter You Name:
          <input type="text" name="username" value={inputs.username || ""} onChange={handleChange} />
        </label>

        <label htmlFor="">
          Enter Your age:
          <input type="number" name="age" value={inputs.age || ""} onChange={handleChange} />
        </label>

        <input type="submit" />
      </form>
    </>
  );
};

export default Form1;
