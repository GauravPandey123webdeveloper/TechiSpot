import React, { useState } from 'react'
import signlogo from '../assets/signlogo.png'
import styles from './Signup.module.css';
import { Link } from 'react-router-dom';

export default function Signup() {
    const [next,setNext]=useState(false);
    function handleNext(e){
        e.preventDefault();
        setNext(true);
    }
    if(next===true){
        return (
            <div>
            <div className={styles.box}>
                <div className={styles.logobox}><img src={signlogo} className={styles.logo} alt="Signin Logo" /></div>
                <div className={styles.inputbox}>
                    <form action="" >
                        <input className={styles.email} type="email" placeholder='Email ID'/> <br /><br />
                        <input className={styles.pass} type="password" placeholder='New Password'/> <br /><br />
                        <input className={styles.cpass} type="password" placeholder='Confirm Password'/> <br /><br />
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
                <div className={styles.logobox}><img src={signlogo} className={styles.logo} alt="Signin Logo" /></div>
                <div className={styles.inputbox}>
                    <form action="" >
                        <input className={styles.user} type="text" placeholder='Username'/> <br /><br />
                        <input className={styles.dob} type="date" placeholder='Date Of Birth'/> <br /><br />
                        <input className={styles.phone} type="text" placeholder='Phone Number'/> <br /><br />
                        <div className={styles.buttnbox}>
                            <button onClick={handleNext} className={styles.buttn}>Next</button>
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
}
