import React, { useState } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import FormSignup from './components/FormSignup'
import AccountSetting from './components/AccountSetting'

function App() {
    const[status,setStatus]=useState('home');
  return (
    <div className="w-full flex items-center h-screen justify-center">
    {
        status==='home' ? <Header setStatus={setStatus}  /> : null
    }
    {
        status==='signup' ? <FormSignup setStatus={setStatus} /> : null
    }
    {
        status==='login' ? <Form setStatus={setStatus} /> : null
    }
    {
        status==='setting' ? <AccountSetting setStatus={setStatus} /> : null
    }
  </div>
  )
}

export default App
