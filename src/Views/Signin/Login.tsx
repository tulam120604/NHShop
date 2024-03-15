import { useContext } from 'react';
import '../../Styles/Client/Signin/Sign_In.css'
import { contextProvider } from '../../ContextProvide/DataProvider';
import { Link } from 'react-router-dom';

// type Props = {}

const Login = () => {
    const { HandleOverLayer } = useContext(contextProvider);
    return (<>
        <div className="Sign_In_Child">
            <div onClick={HandleOverLayer} className="close">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAWpJREFUSEu9lo1NwzAQRr9OAkwCbAKTAJNAJ6GdBEahL/IXXa525TgoJ0WNLj6/+7V70E5y2ImjW6AnSTyPnc78SjpfbE6SeF9IDXQv6bNAOhmLZUCOF8171GYQkJ+wAO/wskfuJGFPFhBsn22YQd9lIV69lsU9EK8B9CLprSjY44v3CGIBKUPwBI9GhbQBw+GHDPJHPMCTLRJLMDkdIyIaovrIhSyRor/qpmLDxovil1qjvwK5PhlkB4BgFGFONzrspnoU8X5TnWJELRBe8Y3fCIs1XXTYKAi7DGNO3Fk1CDarI4qt68isa0E2gTB2ZxpE69YaZBMo1sSgWoMMNwOGufB0Uq1B4uytrlGru1rdOByR61IrvGFsns/G1RE5dXEYY4qA8eSzkVsAfffAjpx5Md1TZ/acDCMgp21O93+D8u08Xzc1ELPRGsJb0flm9Zr50kNRA42kKtpUhziC4n0/AgPQvJV3+1/3BxyEghuN+YO4AAAAAElFTkSuQmCC" />
            </div>
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
            </form>
            <button className='btn-login'>Login</button>
            <div className="login_equal_goole">
                <button>facebook</button>
                <button>google</button>
            </div>
            <Link onClick={HandleOverLayer} to={'/sign_up'}>Create account &#10140;</Link>
        </div>
    </>)
}

export default Login