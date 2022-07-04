import React, { useEffect, useState } from 'react'
import { database } from '../firebase';

function FireStore() {
    const [name,setName]=useState('');
    const [age,setAge] = useState('');
let signUpUserInDB=async()=>{
    // let res = await database.users.add({name,age});
    let res = await database.users.doc('1234').set({name,age})
    console.log(res);
}
useEffect (async()=>{
    let uid = '1234';
    let data = await database.users.doc(uid).get();
    console.log(data.data());
    
})
let updateDetail = async()=>{
    await database.users.doc('1234').update({name,age})
}
let deletee = async()=>{
    await database.users.doc('1234').delete();
}
  return (
    <div>
        <label htmlFor="name">Name</label>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
        <br /><br />
        <label htmlFor="age">Age</label>
        <input type="age"  value = {age} onChange={(e)=>{setAge(e.target.value)}}/>
        <br />
        <br />
        <button onClick={signUpUserInDB}>submit</button>
        <button onClick={updateDetail}>update</button>
        <button onClick={deletee}>delete</button>
    </div>
  )
}

export default FireStore