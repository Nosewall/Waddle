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
        <div className="flex flex-col items-center background-image p-20">
            <h1 className='text-center font-fun text-4xl my-4'>Sign Up</h1>


            <form className='signup my-5' onSubmit={handleSubmit}>
                <label>
                    <p className="font-fun">Email</p>
                    <input
                        className="font-business input"
                        type={'email'} name={'email'} onChange={handleChange} />
                </label>
                <label>
                    <p className="font-fun">Password</p>
                    <input
                        className="font-business input"
                        type={'password'}
                        name={'password'}
                        onChange={handleChange}
                    />
                </label>
                <div>
                    <label>
                        <p className="font-fun">First Name</p>
                        <input
                            className="font-business input"
                            type={'text'}
                            name={'firstName'}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        <p className="font-fun">Last Name</p>
                        <input
                            className="font-business input"
                            type={'text'}
                            name={'lastName'}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <label>
                    <p className="font-fun">Region</p>
                    <input className="font-business input" type={'text'} name={'region'} onChange={handleChange} />
                </label>
                <label>
                    <p className="font-fun">City</p>
                    <input className="font-business input" type={'text'} name={'city'} onChange={handleChange} />
                </label>
                <div className='submit flex flex-col my-5'>
                    <button className="bg-pastelTangerine hover:bg-orange-500 scopeFilterButtons font-fun" type={'submit'}>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Signup;
