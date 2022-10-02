import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useAuth } from '../components/context/AuthContext';

const SignupForm = Object.freeze({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    region: 'AM',
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
            <h1 className='text-center font-fun text-4xl my-4'>Sign Up</h1>

            <form className='signup my-5' onSubmit={handleSubmit}>
                <label>
                    <p className='font-business'>Email</p>
                    <input
                        className='font-business input w-[100%]'
                        type={'email'}
                        name={'email'}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <p className='font-business'>Password</p>
                    <input
                        className='font-business input w-[100%]'
                        type={'password'}
                        name={'password'}
                        onChange={handleChange}
                    />
                </label>
                <div className={"flex justify-evenly justify-center"}>
                    <label>
                        <p className='font-business'>First Name</p>
                        <input
                            className='font-business input w-[98%]'
                            type={'text'}
                            name={'firstName'}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        <p className='font-business'>Last Name</p>
                        <input
                            className='font-business input w-[98%]'
                            type={'text'}
                            name={'lastName'}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <label>
                    <p className='font-business'>Region</p>
                    <select
                        onChange={handleChange}
                        className={'input font-business input w-[100%]'}
                        name={'region'}>
                        <option value={'AM'}>Americas</option>
                        <option value={'APJ'}>Asia</option>
                        <option value={'EU'}>Europe</option>
                    </select>
                </label>
                <label>
                    <p className='font-business'>City</p>
                    <input
                        className='font-business input w-[100%]'
                        type={'text'}
                        name={'city'}
                        onChange={handleChange}
                    />
                </label>
                <div className='submit flex flex-col my-5'>
                    <button
                        className='bg-pastelTangerine hover:bg-orange-500 scopeFilterButtons font-fun'
                        type={'submit'}>
                        Submit
                    </button>
                    <a
                        className='font-business self-center my-1 hover:underline decoration-boldCyan'
                        href='/login'>
                        back to Login
                    </a>
                </div>
            </form>
        </div>
    );
};

export default Signup;
