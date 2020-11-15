import * as React from 'react';
//import Link from 'next/link';

const BackgroundReg=()=>{
    return(
        <div id="logo-section-R">
            <div id="logo-wrap-R">
              <img id="log-img-R" src="./icons/android-chrome-512x512.png" alt="logo"/> 
           </div>
        </div>
    )
}

 
class Register  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           fullname:'',
           email:'',
           mobile:'',
           password:''
             };
             this.fullNameInp=this.fullNameInp.bind(this);
             this.emailInp=this.emailInp.bind(this);
             this.mobileInp=this.mobileInp.bind(this);
             this.passwordInp=this.passwordInp.bind(this);
    }
    fullNameInp(event){
        this.setState({
          fullname:event.target.value
        })
    }
    emailInp(event){
      this.setState({
        email:event.target.value
      })
    }
    mobileInp(event){
      this.setState({
        mobile:event.target.value
      })
    }
    passwordInp(event){
      this.setState({
        password:event.target.value
      })
    }
    render() { 
        const background={
           backgroundImage:'url("./img/blue.png")',
           backgroundSize: 'cover',
           backgroundRepeat: 'no-repeat'
        }
        return ( 
        <div className='wrap-register' style={background}>
            <div id='form-register-c'>
              <div></div>
              <div id="reg-f-cover">
                <h1>Create an account</h1>
                <h3>Fill up informations below</h3>
              <form action="POST">
                  <div className="input-c">
                       <label htmlFor='fullname'>Full Name<input type="text" className='regInput input' name="fullname" id="fullname" /></label>
                  </div>
                  <div className="input-c">
                        <label htmlFor='email'>Email <input type="email" className='regInput input' name="email" id="email" /></label>
                    </div>
                  
                  <div className="input-c">
                       <label htmlFor='mobile'>Phone no  <input type="number" className='regInput input' name="Username" id="mobile" /></label>
                   </div>
                  <div className="input-c">
                       <label htmlFor='pass'>Password  <input type="password" className='regInput input' name="password" id="pass"/></label>
                  </div>
                 <label htmlFor='terms'><input type="checkbox" className='' name="terms" id="terms"/>   I accept terms and conditions in private policy</label>
                 <div id="align-R-submit">
                   <input type="submit" name='submit' id="submit" value="sign up"/>
                 </div>
              </form>
              <div>
               <a href=""><img src="./img/fb-rounded-brand-white-64.png" alt=""/></a> 
                    <a href=""><img src="./img/gplus-rounded-brand-white-64.png" alt=""/></a>
                    <a href=""><img src="./img/twitter-rounded-brand-white-64.png" alt=""/></a>
                    <p className='social-login-p'>signup with social media</p>
               </div>
               </div>
               <BackgroundReg/>  
               </div>
            </div>
          
         );
    }
}
 
export default Register ;