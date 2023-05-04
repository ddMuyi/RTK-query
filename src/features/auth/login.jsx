import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import {useDispatch} from 'react-redux'
import { setCredentials } from "./authSlice";
import {useLoginMutation} from './authApiSlice'

const Login = () => {
    const userRef = useRef(null)
    const errorRef = useRef(null)
    const [user, setUser] = useState("")
    const [pwd, setPwd] = useState("")
    const [errMsg, setErrMsg] = useState("")
    const navigate = useNavigate()

    const [login, {isLoading}] = useLoginMutation()
    const dispatch = useDispatch()

    useEffect(()=>userRef.current.focus(), [])

    useEffect(()=>{
        setErrMsg("")
    }, [user, pwd])

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try{
            const userData = await login({user, pwd}).unwrap()
            dispatch(setCredentials({...userData}, user))
            setUser("")
            setPwd("")
            navigate('/welcome')
        }
        catch(err){
            console.log(err)
            if(!err.response) setErrMsg("We couldn't connect to the server")
            else if(err.response?.status === 400) setErrMsg("Missing username or password")
            else if(err.response?.status === 401) setErrMsg("unauthorized")
            else setErrMsg("Login Failed")

            errorRef.current.focus()
        }
    }

  return (
    <div>
        <p ref={errorRef} aria-label={errMsg} className={`${errMsg ? "text-red-300" : "hidden"}`}>{errMsg}</p>

        <form className="flex flex-col space-y-4 w-96 p-8">
            <input ref={userRef} type="email" value={user} onChange={(e)=>setUser(e.target.value)}/>
            <input type="password" value={pwd} onChange={(e)=>setPwd(e.target.value)}/>
            <button onClick={handleSubmit}>{isLoading ? 'Submitting' : 'Submit'}</button>
        </form>
    </div>
  )
}

export default Login