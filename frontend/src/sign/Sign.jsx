import React from 'react'
import styles from './Sign.module.css'
import signlogo from '../assets/signlogo.png'
import { Link } from 'react-router-dom'

export default function Sign() {
    function handleLogin(e){
        e.preventDefault();
    }
    return (
        <div>
            <div className={styles.box}>
                <div className={styles.logobox}><img src={signlogo} className={styles.logo} alt="Signin Logo" /></div>
                <div className={styles.inputbox}>
                    <form action="" >
                        <input className={styles.user} type="email" placeholder='Email ID'/> <br /><br />
                        <input className={styles.pass} type="password" placeholder='Password'/>
                        <div className={styles.rem}>
                            <input type="checkbox" className={styles.check}/>  Remember Me
                        </div>
                        <div className={styles.buttnbox}>
                            <button onClick={handleLogin} className={styles.buttn}>Login</button>
                        </div>
                        <div className={styles.signup}>
                            Don't have an account? <Link to='/Signup' className={styles.snup}>Sign Up</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
