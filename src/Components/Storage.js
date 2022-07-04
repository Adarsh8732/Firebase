import React,{useState} from 'react'
import {storage} from '../firebase'
function Storage() {
    const[file,setFile] = useState('');
    let uploadImg=()=>{
        let uploadTask = storage.ref(`/data/${file.name}`).put(file);
        uploadTask.on('state_changed',fn1,fn2,fn3);
        function fn1(snapshot){
            let progress = snapshot.bytesTransferred/snapshot.totalBytes*100;
            console.log(progress);
        }
        function fn2(error){
            console.log("error",error);
        }
        function fn3(){
            uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
                console.log(url);
            })
        }
    }
  return (
    <div>
        <label htmlFor="File">File Upload</label>
        <input type="file" accept='image/*' onChange={(e)=>{setFile(e.target.files[0])}} />
        <br /><br />
        <button onClick={uploadImg}>Upload</button>
    </div>
  )
}

export default Storage