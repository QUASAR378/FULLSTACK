import React, { useState } from "react";
import api from "./Axios.jsx";
import "./App.css";

const App = () => {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        phone_number: " "
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await api.post("register/", formData);
            console.log("User Registered:", response.data);
            alert("Registration Successful!");
        } catch (error) {
            console.error("Registration Error:", error.response?.data);
            alert("Registration Failed!");
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}  className="form">
                <input className="PUT" type="text" name="first_name" placeholder="First Name" onChange={handleChange} required /> <br/>
                <input className="PUT" type="text" name="last_name" placeholder="Last Name" onChange={handleChange} required /> <br/>
                <input className="PUT" type="email" name="email" placeholder="Email" onChange={handleChange} required /> <br/>
                <input className="PUT" type="password" name="password" placeholder="Password" onChange={handleChange} required /> <br/>
                <input className="PUT" type="phone_number" name="phone_number" placeholder="Phone Number" onChange={handleChange} required /> <br/>
                
                <button className="button" type="submit">Register</button>
            </form>
        </div>
    );
};

export default App;