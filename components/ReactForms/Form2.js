import React, { useState } from 'react'

const Form2 = () => {

    const [lang,setLang] = useState({
        English:false,
        Marathi:false,
        Hindi:false
    });
    const [selectedIn,setSelectedIn] = useState("");
    const [selectedGender,setSelectedGender] = useState('');


    const handleLang = (e) => {
       const { name, checked } = e.target;
       setLang((prevLang) => ({ ...prevLang, [name]: checked }));
    } 

    const handleChange = (e) => {
            setSelectedIn(e.target.value);
    }

    const handleGender = (e) => {
        setSelectedGender(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Languages: ${Object.keys(lang).filter((key)=> lang[key]).join(", ")} ,Color: ${selectedIn},Gender:${selectedGender}`);
    }

   
    const handleClear = () => {
        setSelectedGender('');
        setSelectedIn('');
        setLang({English:false,Marathi:false,Hindi:false});
    }

   
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          Select you favourite color:
          <select name="" id="" value={selectedIn} onChange={handleChange}>
            <option value="">Select Options</option>
            <option value="red">Red</option>
            <option value="yellow">Yellow</option>
            <option value="blue">Blue</option>
          </select>
          <p>Your favourite color is {selectedIn}</p>;
        </label>

        <label htmlFor="">
          Select Your Preferred Language: <br></br>
          <input
            type="checkbox"
            name="English"
            checked={lang.English}
            onChange={handleLang}
          />{" "}
          <span>English</span> <br></br>
          <input
            type="checkbox"
            name="Marathi"
            checked={lang.Marathi}
            onChange={handleLang}
          />{" "}
          <span>Marathi</span>
          <br></br>
          <input
            type="checkbox"
            name="Hindi"
            checked={lang.Hindi}
            onChange={handleLang}
          />{" "}
          <span>Hindi</span>
          <br></br>
          <p>
            You choosed :{" "}
            {Object.keys(lang)
              .filter((key) => lang[key])
              .join(", ")}
          </p>
        </label>

        <label htmlFor="">
          Select gender: <br />
          <input
            type="radio"
            name="gender"
            value="Male"
            id="male"
            checked={selectedGender === "Male"}
            onChange={handleGender}
          />{" "}
          <label htmlFor='male'>Male</label> <br />
          <input
            type="radio"
            name="gender"
            id="female"
            value="Female"
            checked={selectedGender === "Female"}
            onChange={handleGender}
          />{" "}
          <label htmlFor='female'>Female</label>
          <br />
          <input
            type="radio"
            name="gender"
            id='other'
            value="Other"
            checked={selectedGender === "Other"}
            onChange={handleGender}
          />{" "}
          <label htmlFor='other'>Other</label>
          <br />
        </label>

        <button type='submit'>Submit</button>
        {/* <button type='button' onClick={handleClear}>Clear</button> */}
        <label htmlFor="" onkeyPress={handleClear}>Clear</label>
      </form>
    </div>
  );

  
}

export default Form2