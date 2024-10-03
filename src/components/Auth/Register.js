import { useState } from 'react'
import './Register.scss'
import { BsEye } from "react-icons/bs";
import { BsEyeSlashFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import { postRegister } from '../../services/apiServices';
import { toast } from 'react-toastify';
import Language from '../Header/Language';


const Register = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();


    const handleShowPassword = (password) => {
        setShowPassword(!showPassword);
    }

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleRegister = async () => {
        // validate
        const isValidateEmail = validateEmail(email);
        if (!isValidateEmail) {
            toast.error('Invailid email')
            return;
        }
        if (!password) {
            toast.error('Invailid password')
            return;
        }

        //submit apis
        let data = await postRegister(email, userName, password);
        if (data && data.EC === 0) {
            toast.success(data.EM);
            navigate('/login')

        }

        if (data && +data.EC !== 0) {
            toast.error(data.EM)
        }


    }

    return (
        <div className='signup-container'>
            <div className='header'>
                <span>Don't have an account yet?</span>
                <button onClick={() => { navigate('/login') }}>Sign in</button>
                <Language />
            </div>
            <div className='title col-4 mx-auto'>
                Sign Up
            </div>
            <div className='content-form col-4 mx-auto'>
                <div className='form-group'>
                    <label>Email (*)</label>
                    <input
                        type={'email'}
                        className='form-control'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label>Username</label>
                    <input
                        className='form-control'
                        value={userName}
                        onChange={(event) => setUserName(event.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label>Password (*)</label>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        className='form-control'
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <div className='showpass'>
                        <span onClick={(event) => handleShowPassword(event.target.value)}>{showPassword ? <BsEye /> : <BsEyeSlashFill />}</span>
                    </div>
                </div>
                <div className='btn-signup'>
                    <button
                        className='btn-submit'
                        onClick={() => handleRegister()}
                    >Create my free account</button>
                </div>
                <div className='text-center'>
                    <span className='back' onClick={() => { navigate('/login') }} > &#60;&#60; Already have an account? Login</span>
                </div>
            </div>
        </div>
    )
}

export default Register;