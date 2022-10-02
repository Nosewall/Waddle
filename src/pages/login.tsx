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
                axiosBase
                    .post('/get-name', { userId: response.data })
                    .then((res) => {
                        Login(response.data, res.data[0].firstName);
                        router.push('/');
                    });
            })
            .catch((err) => {
                alert(err);
            });
    };

    return (
        <div className='flex flex-col items-center background-image p-20'>
            <div className='width-1/5'>
                <img
                    className='max-w-xs'
                    src='https://i.imgur.com/yExvwQG.png'
                />
            </div>

            <form className='login my-6' onSubmit={handleSubmit}>
                <h1 className='text-center font-fun text-5xl my-4'>Waddle</h1>
                <label>
                    <p className='font-business'>Email</p>
                    <input
                        className='input'
                        type={'email'}
                        name={'email'}
                        onChange={handleChange}
                        placeholder={'abc@email.com'}
                    />
                </label>
                <label>
                    <p className='font-business'>Password</p>
                    <input
                        className='input'
                        type={'password'}
                        name={'password'}
                        onChange={handleChange}
                        placeholder={'*****'}
                    />
                </label>
                <div className='submit flex flex-col'>
                    <button
                        className='bg-pastelTangerine hover:bg-orange-500 scopeFilterButtons font-fun'
                        type={'submit'}>
                        Login
                    </button>
                    <a
                        className='font-business self-center my-1 hover:underline decoration-boldCyan'
                        href='/signup'>
                        Create An Account
                    </a>
                </div>
            </form>
        </div>
    );
};

export default Login;
