import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useAuth } from '../components/context/AuthContext';

const SignupForm = Object.freeze({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    region: '',
    city: '',
});

const axiosBase = axios.create({
    baseURL: 'http://localhost:9400',
    headers: {
        'Content-Type': 'application/json',
    },
});

const Signup = () => {
    const [formData, updateFormData] = useState(SignupForm);
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
        const data = {
            email: formData.email,
            password: formData.password,
            firstName: formData.firstName,
            lastName: formData.lastName,
            region: formData.region,
            city: formData.city,
        };
        axiosBase
            .post('/signup', data)
            .then((response) => {
                Login(response);
                router.push('/');
            })
            .catch((err) => {
                alert(err);
            });
    };

    return (
        <form className={'signup'} onSubmit={handleSubmit}>
            <div>
                <h1>Sign Up</h1>
            </div>
            <label>
                <p>Email</p>
                <input type={'email'} name={'email'} onChange={handleChange} />
            </label>
            <label>
                <p>Password</p>
                <input
                    type={'password'}
                    name={'password'}
                    onChange={handleChange}
                />
            </label>
            <div>
                <label>
                    <p>First Name</p>
                    <input
                        type={'text'}
                        name={'firstName'}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <p>Last Name</p>
                    <input
                        type={'text'}
                        name={'lastName'}
                        onChange={handleChange}
                    />
                </label>
            </div>
            <label>
                <p>Region</p>
                <input type={'text'} name={'region'} onChange={handleChange} />
            </label>
            <label>
                <p>City</p>
                <input type={'text'} name={'city'} onChange={handleChange} />
            </label>
            <div className={'submit'}>
                <button type={'submit'}>submit</button>
            </div>
        </form>
    );
};

export default Signup;
