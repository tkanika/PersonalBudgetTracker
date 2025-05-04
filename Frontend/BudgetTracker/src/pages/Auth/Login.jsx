import React, { useState } from 'react';
import AuthLayout from '../../components/layouts/AuthLayout';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/Inputs/Input';

const Login = () => {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState("")
  const navigate = useNavigate();

  const handleLogin = async(e)=>{}
  return (
    <AuthLayout>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
      <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
      <p
        className="text-xs text-slate-700 mt-[5px] mb-6">
          Please enter your details to log in
      </p>
      <form onSubmit={handleLogin}>
        <Input
        value={email}
        onChange={({target})=>setEmail(target.value)}
        label="Email Address"
        placeholder="john@example.com"
        type="text"
        />
        <Input
        value={password}
        onChange={({target})=>setPassword(target.value)}
        label="Password"
        placeholder="Min 8 Character"
        type="password"
        />
        {error && <p className=''>{error}</p>}
        <button type="submit">LOGIN</button>
        <p className=''>
          Don't have an account?{""}
          <Link className="" to="/signup">SignUp</Link>
        </p>
      </form>
      </div>
      
    </AuthLayout>
  );
};

export default Login;