import React, { useState } from 'react'
import axios from "axios";

function App() {

    // let [email, setEmail] = useState("");
    let [name, setName] = useState("");
    let [username, setusername] = useState("");
    let [password, setpassword] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        console.log({ name: name, username: username, password: password })
        try {
            const data = await axios.post(process.env.REACT_APP_API_BASE_URL+'register', { name: name, username: username, password: password })
            if (data.status === 200) {

                alert("post successfully")
            }
        } catch (err) {
            console.log(err)
        }

    }

    const getName = async () => {
      try {
        const res = await axios.post('https://corschekcerserver.vercel.app/check?name=Santosh&message=Hello, Iam santosh.');
        if(res.status===200) {
          console.log(res);

        }
      } catch(err) {
        console.log(err);
      }
    }


    return (
        <>
            <div className='home-bg vh-100' >
                <div className='container' >
                    <h1 className='text-center' >Register Form</h1>

                    <form className='d-grid gap-2 col-8 mx-auto mt-3'  onSubmit={handleSubmit} >
                        <div className="  mb-3">
                            <label htmlfor="exampleInputName" className="form-label">Name</label>
                            <input type="name" className="form-control" onChange={(e) => { setName(e.target.value) }} id="exampleInputName" aria-describedby="nameHelp" />

                        </div>
                        <div className="  mb-3">
                            <label htmlfor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="username" className="form-control" onChange={(e) => { setusername(e.target.value) }} id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>
                        <div className="mb-3">
                            <label htmlfor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" onChange={(e) => { setpassword(e.target.value) }} id="exampleInputPassword1" />
                        </div>
                        <div className='d-grid gap-2 col-10 mx-auto ' >
                            <button type="submit" className="btn btn-primary rounded-pill mt-3">Submit</button>
                            <button type="button" className="btn btn-primary rounded-pill mt-3" onClick={getName}>Get Name</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default App;
