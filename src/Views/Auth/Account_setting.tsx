import { useContext } from 'react';
import '../../Styles/Client/Auth/Account_setting.css'
import { contextProvider } from '../../ContextProvide/DataProvider';

const Account_setting = () => {
    const { Func_Sign_Out } = useContext(contextProvider);
    const InforAccount = JSON.parse(localStorage.getItem('account'));
    let InforUser = ''
    if (InforAccount !== null) {
        const { user } = InforAccount;
        InforUser = (user.username)
    }
    else {
        InforUser = '';
    }
    return (<>
        <div className="Account_setting">
            <span>Account settings</span>
            <div className="info_account">
                <form className='form_infoAccount'>
                    <div className="use_name">
                        <label htmlFor="user_name">User name</label>
                        <input type="text" id='user_name' value={InforAccount.user.username} disabled
                        />
                    </div>
                    <div className="password">
                        <label htmlFor="password">Password</label>
                        <input type="password" id='password' value={InforAccount.user.confirm_password} disabled
                        />
                    </div>
                    <div className="password">
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' value={InforAccount.user.email} disabled
                        />
                    </div>
                    <div className="btn_setting">
                        <button className='btn-login'>Edit Password</button>
                        {InforUser !== '' ? <a className='btn-goAdmin'>Adminstration</a> : ''}
                    </div>
                </form>
            </div>
        </div>
    </>)
}

export default Account_setting