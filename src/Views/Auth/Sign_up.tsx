import { Link, useNavigate } from 'react-router-dom'
import '../../Styles/Client/Auth/Signup.css'
import { useForm } from 'react-hook-form'
import { useContext, useState } from 'react';
import { contextProvider } from '../../ContextProvide/DataProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

interface TyeDataForm {
    id: number,
    username: string,
    password: string | number,
    confirm_password: string | number,
    email: string | number,
}
const Sign_Up = () => {
    // const { HandleOverLayer } = useContext(contextProvider);
    const [checkFormPass, setCheckFormPass] = useState<boolean>(false)
    const [checkConfirmPass, setCheckConfirmPass] = useState<boolean>(false);
    const backHome = useNavigate();
    const { register, formState: { errors }, handleSubmit } = useForm<TyeDataForm>();
    const { CreateAccount, LoadingCallApi } = useContext(contextProvider);
    const SignUp = (dataForm: TyeDataForm): void => {
        if ((dataForm.confirm_password !== dataForm.password)) {
            setCheckConfirmPass(true)
        } else {
            setCheckConfirmPass(false);
            CreateAccount(dataForm);
            setTimeout(() => {
                backHome('/');
            }, 1000);
        }
    };

    // validate form
    const validatePass = (e: React.ChangeEvent<HTMLInputElement>) => {
        if ((e.target.value).length < 6 || (e.target.value).length > 20) {
            setCheckFormPass(true);
        }
        else {
            setCheckFormPass(false)
        }
    };

    return (<>
        <div className="Sign_up">
            <div className="Sign_up_Child">
                <span>Login</span>
                <form onSubmit={handleSubmit(SignUp)}>
                    <div className="use_name">
                        <label htmlFor="user_name">Username</label>
                        <input type="text" id='use_name'
                            {...register('username', { required: true })}
                        />
                        {errors?.username && <p>Username không được để trống !</p>}
                    </div>
                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password'
                            {...register('password', { required: true })}
                            onBlur={(e) => validatePass(e)} />
                        {errors?.password ? <p>Mật khẩu không được để trống !</p> : checkFormPass ? <p>Mật khẩu phải nằm trong khoảng 6 đến 20 kí tự</p> : <p></p>}
                    </div>
                    <div className="password">
                        <label htmlFor="confirm_password">Confirm password</label>
                        <input type="password" id='confirm_password'
                            {...register('confirm_password', { required: true })}
                        />
                        {errors?.confirm_password ? <p>Xác nhận mật khẩu không được để trống !</p> : checkConfirmPass ? <p>Xác nhận mật khẩu không đúng !</p> : <p></p>}
                    </div>
                    <div className="password">
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email'
                            {...register('email', { required: true })}
                        />
                        {errors?.email && <p>Email không được để trống !</p>}
                    </div>
                    <button className='btn-login'>Create Account {LoadingCallApi ? <FontAwesomeIcon icon={faSpinner} /> : ''}</button>
                </form>
                <div className="login_equal_goole">
                    <button>facebook</button>
                    <button>google</button>
                </div>
                <Link to={'/'} >&#8678; Back</Link>
            </div>
        </div>
    </>)
}

export default Sign_Up