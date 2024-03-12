import React,{useState} from 'react'
import styles from './Sign.module.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function Sign() {
    const [data,setData]=useState({email:"",pass:""})
    function handleChange(e){
        e.preventDefault();
        setData({...data,[e.target.id]:e.target.value,})
    }
    const navigate=useNavigate();
    function handleLogin(e){
        e.preventDefault();
        if(localStorage.getItem("email")===data.email && localStorage.getItem("pass")===data.pass){
            navigate('/')
        }
        else{
            alert("Username or Password is Incorrect")
        }
    }
    return (
        <div>
            <div className={styles.box}>
                <div className={styles.logobox}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOWXwl_HONi9kFuA9BtSCTEQqW-Bi_b7RKaQ&usqp=CAU" className={styles.logo} alt="Signin Logo" /></div>
                <div className={styles.inputbox}>
                    <form autocomplete="off">
                        <input className={styles.user} type="email" id='email' onChange={handleChange} placeholder='Email ID'/> <br /><br />
                        <input className={styles.pass} type="password" id='pass' onChange={handleChange} placeholder='Password'/>
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
