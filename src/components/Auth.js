import React,{useState} from 'react';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm'

const Auth = () => {
    const [login, setLogin] = useState(false)
  return (
    <div>
        {login ? <LoginForm setLogin={setLogin}/> :
        <RegisterForm />
        }
    </div>
  )
}

export default Auth