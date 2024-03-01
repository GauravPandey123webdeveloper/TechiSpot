import React from 'react'
import signlogo from '../assets/signlogo.png'
import styles from './Signup.module.css';
import { Link } from 'react-router-dom';

export default function Signup() {
    function handleLogin(e){
        e.preventDefault();
    }
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
                            <button onClick={handleLogin} className={styles.buttn}><Link to='/signNext' className={styles.snin}> Next</Link></button>
                        </div>
                        <div className={styles.signin}>
                            Have an account? <Link to='/sign' className={styles.snin}>Sign In</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
