import React, { useState,useEffect } from 'react'
import { auth } from '../firebase';
function FirebaseAuth() {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [User, setUser] = useState(null);
    let signUp = async()=>{
        console.log(Email,Password);
        let res = await auth.createUserWithEmailAndPassword(Email,Password);
        console.log(res);
    }
    useEffect(() => {
        let unsub =  auth.onAuthStateChanged((user)=>{
            setUser(user);
        })
        return ()=>{
            unsub();
        }
    },[])
    let logOut = async()=>{
        await auth.signOut();
    }
    let signIn = async()=>{
        await auth.signInWithEmailAndPassword(Email,Password)
    }
  return (
        <>
        {
            User==null ?
            <div>
                <label htmlFor="email" >Email:</label>
                <input type="text" name="" id="" value={Email} onChange={(e)=>{setEmail(e.target.value)}} />
                <br />
                <br />
                <label htmlFor="Password" >Password:</label>
                <input type="password" name="" id="" value = {Password} onChange={(e)=>{setPassword(e.target.value)}} />
                <br /><br />
                <button onClick={signUp}>SignUp</button>
                <button onClick={signIn}>singin</button>
            </div>:
            <div>
                <div>
                    {User.uid} 

                </div>
                <button onClick={logOut}>Logout</button>
            </div>
        }
        </>
    )
}

export default FirebaseAuth
