import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useAuth } from '../components/context/AuthContext';

const LoginForm = Object.freeze({
    email: '',
    password: '',
});

const axiosBase = axios.create({
    baseURL: 'http://localhost:9400',
    headers: {
        'Content-Type': 'application/json',
    },
});

const Login = () => {
    const [formData, updateFormData] = useState(LoginForm);
    const router = useRouter();
    const { Login } = useAuth();

    const handleChange = (e: any) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const data = { email: formData.email, password: formData.password };
        axiosBase
            .post('/login', data)
            .then((response) => {
                Login(response);
                router.push('/');
            })
            .catch((err) => {
                alert(err);
            });
    };

    return (
        <form className='login' onSubmit={handleSubmit}>
            <div>
                <h1>Log In</h1>
            </div>
            <label>
                <p>Email</p>
                <input type={'email'} name={'email'} onChange={handleChange} />
            </label>
            <label>
                <p>password</p>
                <input
                    type={'password'}
                    name={'password'}
                    onChange={handleChange}
                />
            </label>
            <div className={'submit'}>
                <button type={'submit'}>submit</button>
            </div>
        </form>
    );
};

export default Login;
