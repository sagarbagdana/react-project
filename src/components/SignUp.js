import React, { useState } from 'react'


const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

   
    return (
        <div className='register'>
            <h1>Registration</h1>
            <label>Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} className='inputBox' type='text' placeholder='Enter Name' />
            <label>Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className='inputBox' type='text' placeholder='Enter Email' />
            <label>Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} className='inputBox' type='password' placeholder='Enter Password' />
            <label>Confirm Password</label>
            <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className='inputBox' type='password' placeholder='Enter Password' />
            <button style={{borderRadius:'10px'}} className='appButton' type='button'>Sign Up</button>
        </div>
    )
}

export default SignUp