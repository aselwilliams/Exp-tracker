import React,{useState} from 'react';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm'

const Auth = () => {
    const [login, setLogin] = useState(true)
  return (
    <div>
        {login ? <LoginForm setLogin={setLogin}/> :
        <RegisterForm />
        }
    </div>
  )
}

export default Auth