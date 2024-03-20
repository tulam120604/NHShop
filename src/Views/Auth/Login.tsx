import { useContext, useState } from 'react';
import '../../Styles/Client/Auth/Sign_In.css'
import { contextProvider } from '../../ContextProvide/DataProvider';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

interface TypeDataForm {
    id: number,
    username: string,
    password: string,
    confirm_password?: string,
    email: string,
}

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm<TypeDataForm>();
    const { HandleOverLayer, Func_Login, LoadingCallApi } = useContext(contextProvider);
    const [checkErrorAuth, setCheckErrorAuth] = useState<string>('')

    const handleLogin = async (dataForm: TypeDataForm) => {
        try {
            const data = await Func_Login(dataForm);
            if (data === undefined) {
                setCheckErrorAuth('Thông tin tài khoản không chính xác !');
            }
            else {
                localStorage.setItem('account', JSON.stringify(data));
                setCheckErrorAuth('');
                document.querySelector('.form_Login').reset();
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (<>
        <div className="Sign_In_Child">
            <div onClick={HandleOverLayer} className="close">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAWpJREFUSEu9lo1NwzAQRr9OAkwCbAKTAJNAJ6GdBEahL/IXXa525TgoJ0WNLj6/+7V70E5y2ImjW6AnSTyPnc78SjpfbE6SeF9IDXQv6bNAOhmLZUCOF8171GYQkJ+wAO/wskfuJGFPFhBsn22YQd9lIV69lsU9EK8B9CLprSjY44v3CGIBKUPwBI9GhbQBw+GHDPJHPMCTLRJLMDkdIyIaovrIhSyRor/qpmLDxovil1qjvwK5PhlkB4BgFGFONzrspnoU8X5TnWJELRBe8Y3fCIs1XXTYKAi7DGNO3Fk1CDarI4qt68isa0E2gTB2ZxpE69YaZBMo1sSgWoMMNwOGufB0Uq1B4uytrlGru1rdOByR61IrvGFsns/G1RE5dXEYY4qA8eSzkVsAfffAjpx5Md1TZ/acDCMgp21O93+D8u08Xzc1ELPRGsJb0flm9Zr50kNRA42kKtpUhziC4n0/AgPQvJV3+1/3BxyEghuN+YO4AAAAAElFTkSuQmCC" />
            </div>
            <span>Login</span>
            <form className='form_Login' onSubmit={handleSubmit(handleLogin)}>
                <div className="use_name">
                    <label htmlFor="user_name">Email</label>
                    <input type="email" id='email'
                        {...register('email', { required: true })}
                    />
                    {errors.email && <p>Vui lòng nhập email !</p>}
                </div>
                <div className="password">
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password'
                        {...register('password', { required: true })}
                    />
                    {errors.email && <p>Vui lòng nhập mật khẩu !</p>}
                </div>
                <p>{checkErrorAuth}</p>
                <button className='btn-login'>Login {LoadingCallApi ? <FontAwesomeIcon icon={faSpinner} /> : ''} </button>
            </form>
            <div className="login_equal_goole">
                <button>facebook</button>
                <button>google</button>
            </div>
            <Link onClick={HandleOverLayer} to={'/sign_up'}>Create account &#10140;</Link>
        </div>
    </>)
}

export default Login