import React, { useState } from "react";

const Event2 = () => {
  const InStyle = {
    padding: "5px",
    margin: "5px",
  };

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    gender: "",
    favcolor: "",
    bio:""
  });

  const [lang,setLang] = useState({
    English:false,
    Marathi:false,
    Hindi:false
  })

  const handleDataChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleLangChange = (e) => {
    const {name,checked} = e.target;
    setLang(prevLang => ({...prevLang,[name]:checked}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const languages = Object.keys(lang).filter(key => lang[key]).join(', ')
    alert(`Username:${data.username}\nEmail:${data.email}\nPassword:${data.password}\nGender:${data.gender}\nLanguages:${languages}\nFavouriteColor:${data.favcolor}\nBio:${data.bio}`)
  }

  const handleClear = (e) => {
    if(e.key === 'Escape'){
    setData({
      username: "",
      email: "",
      password: "",
      gender: "",
      favcolor: "",
      bio: "",
    });

    setLang({
      English: false,
      Marathi: false,
      Hindi: false,
    });
  }
  }
document.addEventListener("keydown", handleClear);


  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit} onKeyDown={handleClear}>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            placeholder="Enter username"
            style={InStyle}
            name="username"
            id="username"
            value={data.username}
            onChange={handleDataChange}
          />
        </label>{" "}
        <br />
        <label htmlFor="email">
          Email:
          <input
            type="email"
            placeholder="Enter Your Email"
            style={InStyle}
            name="email"
            id="email"
            value={data.email}
            onChange={handleDataChange}
          />
        </label>{" "}
        <br />
        <label htmlFor="password">
          Password:
          <input
            type="password"
            placeholder="Enter a password"
            style={InStyle}
            name="password"
            id="password"
            value={data.password}
            onChange={handleDataChange}
          />
        </label>{" "}
        <br />
        <label htmlFor="">
          Select Your Gender: <br />
          <input
            type="radio"
            id="male"
            name="gender"
            value="Male"
            checked={data.gender === "Male"}
            onChange={handleDataChange}
          />
          <label htmlFor="male">Male</label>
          <br />
          <input
            type="radio"
            id="female"
            name="gender"
            value="Female"
            checked={data.gender === "Female"}
            onChange={handleDataChange}
          />
          <label htmlFor="female">Female</label> <br />
          <input
            type="radio"
            name="gender"
            id="other"
            value="Other"
            checked={data.gender === "Other"}
            onChange={handleDataChange}
          />
          <label htmlFor="other">Other</label> <br />
        </label>
        <br />
        <label htmlFor="FavColor">
          Select Your Favourite Color:
          <select
            name="favcolor"
            id="FavColor"
            value={data.favcolor}
            style={InStyle}
            onChange={handleDataChange}
          >
            <option value="">Choose your color.</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
          </select>
        </label>
        <br />
        <label htmlFor="">
          Select Your Preferred Language.
          <input
            type="checkbox"
            name="English"
            id="english"
            value="English"
            checked={lang.English}
            onChange={handleLangChange}
          />
          <label htmlFor="english">English</label>
          <input
            type="checkbox"
            name="Marathi"
            id="marathi"
            value="Marathi"
            checked={lang.Marathi}
            onChange={handleLangChange}
          />
          <label htmlFor="marathi">Marathi</label>
          <input
            type="checkbox"
            name="Hindi"
            id="hindi"
            value="Hindi"
            checked={lang.Hindi}
            onChange={handleLangChange}
          />
          <label htmlFor="hindi">Hindi</label>
        </label>
        <br />
        <br />
        <label htmlFor="">
          Bio:
          <textarea
            name="bio"
            id=""
            cols="30"
            rows="5"
            style={{ margin: "5px" }}
            value={data.bio}
            onChange={handleDataChange}
          ></textarea>
        </label>
        <br />
        <button type="submit">Submit</button>
        {/* <button type="button" onClick={handleClear}>Clear</button> */}
        {/* <label htmlFor=""onKeyDown={handleClear}>Clear</label> */}
      </form>
    </div>
  );
};

export default Event2;
