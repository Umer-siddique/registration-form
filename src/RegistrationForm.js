import React, { useState } from 'react';
import { validEmail, validPhone, validPassword } from './Regex';




const RegistrationForm = () => {

    const [formData, setformData] = useState({
        fullname: "",
        email: "",
        ph_num: "",
        psw: "",
        psw_confirm: ""
    });

    const [allData, setAllData] = useState([]);
    const [inputClass, setInputClass] = useState("input-style");
    const [emailErr, setEmailErr] = useState("input-style");
    const [pwdErr, setPwdErr] = useState("input-style");
    const [phoneErr, setPhoneErr] = useState("input-style")

    const handleInput = (event) => {
        const { name, value } = event.target;

        setformData((previousData) => {

            return {
                ...previousData,
                [name]: value
            }
        })
    }

    const validate = () => {
        if (!validEmail.test(formData.email)) {
            setEmailErr("inputMissmatchStyle")
            alert("Please Enter a valid email Like >> abc123@gmail.com")
            return true;
        }

        else if (!validPhone.test(formData.ph_num)) {
            setPhoneErr("inputMissmatchStyle")
            alert("Please Enter a valid phone number Like >> +923...etc OR 03...etc")
            return true;
        }
        // else {
        //     setPhoneErr("input-style")
        // }
        else if (!validPassword.test(formData.psw)) {
            setPwdErr("inputMissmatchStyle")
            alert("Please Enter a valid password >> Like Umer123@..etc")
            return true;
        }
        // else {
        //     setPwdErr("input-style")
        // }

        else if (formData.psw !== formData.psw_confirm) {
            setInputClass("inputMissmatchStyle");
            alert("Please make sure password and cornfirm password must be matched..");
            return true;
        }

        else {
            setEmailErr("input-style");
            setPhoneErr("input-style");
            setInputClass("input-style");
            setPwdErr("input-style");
        }

    }

    const sendFormData = (event) => {
        event.preventDefault();

        // if (validator.isEmail(formData.email)) {

        //     setValidateEmail("input-style")
        // }
        // else {
        //     setValidateEmail("inputMissmatchStyle")
        //     alert("Please Enter a valid Email..like >> abc123@gmail.com");
        //     return false;
        // }

        if (validate()) {
            return false;
        }

        else {
            setAllData((prevData) => {
                return [...prevData, formData]
            })

            setformData({
                fullname: "",
                email: "",
                ph_num: "",
                psw: "",
                psw_confirm: ""
            })
        }

        // setAllData((prevData) => {
        //     return [...prevData, formData]
        // })

        // setformData({
        //     fullname: "",
        //     email: "",
        //     ph_num: "",
        //     psw: "",
        //     psw_confirm: ""
        // })
        // }


    }

    return (
        <div className='form'>
            <form action="" onSubmit={sendFormData}>
                <div className='form-container'>

                    <h1 className="form-heading">Register Here</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr />

                    <label htmlFor="fullname"><b>Full Name</b></label>
                    <input className="input-style" type="text"
                        placeholder="Enter your full name"
                        name="fullname"
                        onChange={handleInput}
                        value={formData.fullname}
                        autoComplete='off'
                        required />


                    <label htmlFor="email"><b>Email</b></label>
                    <input className={emailErr} type="text"
                        placeholder="Enter Email"
                        name="email"
                        onChange={handleInput}
                        value={formData.email}
                        autoComplete='off'
                        required />

                    <label htmlFor="ph_num"><b>Phone</b></label>
                    <input className={phoneErr} type="number"
                        placeholder="Enter your phone number"
                        name="ph_num"
                        onChange={handleInput}
                        value={formData.ph_num}
                        autoComplete='off'
                        required />


                    <label htmlFor="psw"><b>Password</b></label>
                    <input className={pwdErr} type="password"
                        placeholder="Enter Password"
                        name="psw"
                        onChange={handleInput}
                        value={formData.psw}
                        autoComplete='off'
                        required />

                    <label htmlFor="psw_confirm"><b>Confirm Password</b></label>
                    <input className={inputClass} type="password"
                        placeholder="Confirm Password"
                        name="psw_confirm"
                        onChange={handleInput}
                        value={formData.psw_confirm}
                        autoComplete='off'
                        required />


                    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
                    <button type="submit" className="registerBtn">Register</button>

                    <div className="container-signin">
                        <p>Already have an account? <a href="#">Sign in</a>.</p>
                    </div>

                </div>

            </form>

            {
                allData.map((currItem, index) => {
                    return (
                        <div className="formData-container" key={index}>
                            <h4 className='form-data-text'>
                                <span> {currItem.fullname} </span>
                                <span>  {currItem.email}  </span>
                                <span> {currItem.ph_num}  </span>
                                <span> {currItem.psw} </span>
                                <span> {currItem.psw_confirm}  </span>
                            </h4>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default RegistrationForm;
