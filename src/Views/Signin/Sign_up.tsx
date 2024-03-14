import '../../Styles/Client/Signin/Signup.css'

// type Props = {}

const Sign_Up = () => {
    // const { HandleOverLayer } = useContext(contextProvider);
    return (<>
        <div className="Sign_up">
            <div className="Sign_up_Child">
                <span>Login</span>
                <form>
                    <div className="use_name">
                        <label htmlFor="user_name">Username</label>
                        <input type="text" id='use_name' />
                    </div>
                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' />
                    </div>
                    <div className="password">
                        <label htmlFor="confirm_password">Confirm password</label>
                        <input type="password" id='confirm_password' />
                    </div>
                    <div className="password">
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' />
                    </div>
                </form>
                <button className='btn-login'>Create Account</button>
                <div className="login_equal_goole">
                    <button>facebook</button>
                    <button>google</button>
                </div>
                <a >Sign in</a>
            </div>
        </div>
    </>)
}

export default Sign_Up