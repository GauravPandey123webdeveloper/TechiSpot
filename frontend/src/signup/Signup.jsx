import React, { useState } from 'react'
import styles from './Signup.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const [next,setNext]=useState(false);
    const navigate=useNavigate();
    const [data,setData]=useState({
        username:"",
        dob:"",
        phone:"",
        email:"",
        pass:"",
        cpass:"",
    });
    function handleChange(e){
        e.preventDefault();
        setData({...data,[e.target.id]:e.target.value,})
    }
    function handleNext(e){
        e.preventDefault();
        if(localStorage.getItem('username')===data.username){
            alert("User already have an account")
        }
        else{
            document.getElementById('username').value="" ;
            document.getElementById('dob').value="" ;
            document.getElementById('phone').value="" ;
            setNext(true);
        }
    }
    function handleSubmit(e){
        e.preventDefault();
        if(data.pass===data.cpass){
            localStorage.setItem("username",data.username);
            localStorage.setItem("dob",data.dob);
            localStorage.setItem("phone",data.phone);
            localStorage.setItem("email",data.email);
            localStorage.setItem("pass",data.pass);
            localStorage.setItem("cpass",data.cpass);
            navigate('/');
        }
        else{
            alert("Password and Confirn Password should be same");
        }
    }
    if(next===true){
        return (
            <div>
            <div className={styles.box}>
                <div className={styles.logobox}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOWXwl_HONi9kFuA9BtSCTEQqW-Bi_b7RKaQ&usqp=CAU" className={styles.logo} alt="Signin Logo" /></div>
                <div className={styles.inputbox}>
                    <form autocomplete="off" onSubmit={handleSubmit}>
                        <input className={styles.email} type="email" id='email' onChange={handleChange} placeholder='Email ID' required/> <br /><br />
                        <input className={styles.pass} type="password" id='pass' onChange={handleChange} placeholder='New Password' required/> <br /><br />
                        <input className={styles.cpass} type="password" id='cpass' onChange={handleChange} placeholder='Confirm Password' required/> <br /><br />
                        <div className={styles.buttnbox}>
                            <button className={styles.buttn}>Sign Up</button>
                        </div>
                        <div className={styles.signin}>
                            Have an account? <Link to='/Sign' className={styles.snin}> Sign In</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        )
    }
    else{
    return (
        <div>
            <div className={styles.box}>
                <div className={styles.logobox}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOWXwl_HONi9kFuA9BtSCTEQqW-Bi_b7RKaQ&usqp=CAU" className={styles.logo} alt="Signin Logo" /></div>
                <div className={styles.inputbox}>
                    <form onSubmit={handleNext} autocomplete="off">
                        <input className={styles.user} type="text" id='username' onChange={handleChange} placeholder='Username' required/> <br /><br />
                        <input className={styles.dob} type="date" id='dob' onChange={handleChange} placeholder='Date Of Birth' required/> <br /><br />
                        <input className={styles.phone} type="text" id='phone' onChange={handleChange} placeholder='Phone Number' required/> <br /><br />
                        <div className={styles.buttnbox}>
                            <button type='submit' className={styles.buttn}>Next</button>
                        </div>
                        <div className={styles.signin}>
                            Have an account? <Link to='/sign' className={styles.snin}> Sign In</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
    }
}
