import { Link } from 'react-router-dom'
import '../../Styles/Client/Signin/Signup.css'
import { useForm } from 'react-hook-form'

// type Props = {}

const Sign_Up = () => {
    // const { HandleOverLayer } = useContext(contextProvider);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const CreateAccount = () => {
    }
    return (<>
        <div className="Sign_up">
            <div className="Sign_up_Child">
                <span>Login</span>
                <form onSubmit={handleSubmit(CreateAccount)}>
                    <div className="use_name">
                        <label htmlFor="user_name">Username</label>
                        <input type="text" id='use_name'
                            {...register('username', { required: true })}
                        />
                        {/* {username.errors && <p>Username không được để trống !</p>} */}
                    </div>
                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password'
                            {...register('password', { required: true })}
                        />
                        {/* {password.errors && <p>Username không được để trống !</p>} */}
                    </div>
                    <div className="password">
                        <label htmlFor="confirm_password">Confirm password</label>
                        <input type="password" id='confirm_password'
                            {...register('confirm_password', { required: true })}
                        />
                        {/* {confirm_password.errors && <p>Username không được để trống !</p>} */}
                    </div>
                    <div className="password">
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email'
                            {...register('email', { required: true })}
                        />
                        {/* {email.errors && <p>Email không được để trống !</p>} */}
                        <button className='btn-login'>Create Account</button>
                    </div>
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