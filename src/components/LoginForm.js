import React, { Component } from 'react';
import '../App.css'
import './LoginForm.css';



class LoginForm extends Component {
  

_onMouseMove = (e) => {

    const move = this.refs.container.addEventListener("mousemove" , (e)=>{
    let horizontal = (window.innerWidth / 2 -e.pageX) / 20;
    let vertical = (window.innerHeight / 2 - e.pageX) / 20;
    const mouse = this.refs.box.style.transform = `rotateX(${vertical}deg) rotate(${horizontal}deg)`;
    
    });

    
  
  
    const Create = this.refs.linkCreateAccount.addEventListener("click", (e) =>{
      const loginForm = this.refs.form.classList.add("form--hidden");
      const createForm = this.refs.formC.classList.remove("form--hidden");
    });
    const clickCreate = this.refs.linkLogin.addEventListener("click", (e) =>{
      const loginForm = this.refs.form.classList.remove("form--hidden");
      const createForm = this.refs.formC.classList.add("form--hidden");
    });
    const enter = this.refs.container.addEventListener("mouseenter" , (e)=>{
      const enterTransition = this.refs.box.style.transition= ".1s";
      const dim = this.refs.form.style.transform = "translateZ(110px)"
      const dimC = this.refs.formC.style.transform = "translateZ(70px)"
    const slodim = this.refs.slogan.style.transform = "translateZ(120px)"
    const rocdim = this.refs.rocket.style.transform = "translateZ(150px)"
    });    
    const leave = this.refs.container.addEventListener("mouseleave" , (e)=>{
      const leaveTransition = this.refs.box.style.transition= ".1s";
      const moveOut = this.refs.box.style.transform= "rotateY(0deg) rotateX(0deg)";
      const dim = this.refs.form.style.transform = "translateZ(0px)"
      const dimC = this.refs.formC.style.transform = "translateZ(0px)"
    const slodim = this.refs.slogan.style.transform = "translateZ(0px)"
    const rocdim = this.refs.rocket.style.transform = "translateZ(0px)"

    }); 

}
_validateForm = (e) => {
  const Username = this.refs.usernameV.value ;
  var password = this.refs.passwordV.value ;
 let { l1 , l2 , l3 , l4} =JSON.parse(localStorage.getItem('formData'));

console.log(JSON.parse(localStorage.getItem('formData')))
console.log(l1);

 if(password =="qwertyui"||password =="admin"||password =="qwert"||password =="qwerty"||password =="qwertyu"||(password == l3&&Username == l1)){
   window.location.replace('http://localhost:3000/flights');
   alert("Successfully LoggedIn")
 }
 else{
alert("Incorrect Password or Username")
 }
    
}
//22222222222222222222222222222222222222
_validateForm2 = (e) => {
  const Username = this.refs.usernameV.value ;
  var password = this.refs.passwordV.value ;
  
let formData ={
 l1 : this.refs.l1.value,
 l2 : this.refs.l2.value,
 l3 : this.refs.l3.value,
 l4 : this.refs.l4.value
}
localStorage.setItem('formData',JSON.stringify(formData));
//console.log(localStorage.getItem('formData'));
if(formData.l3==formData.l4 ){
  alert('Successfully created an account')
}
else{
  alert('Incorrect entry')
}


}
render() {
 
    return (
         
        <div className="LoginForm">

<div className="container"
    onMouseMove={this._onMouseMove}
    ref="container"
>
  
        <div className="box"
        _rotate={this._onMouseMove}
        ref="box"
        >
            
            <div className="path"></div>
        
          <div className="form " id="form"
          onMouseMove={this._onMouseMove}
          ref="form"
          onMouseMove={this._onMouseMove}
    ref="form"
          >
            
            <h3>Login</h3><br /><br />
            <label>Username</label><br/><br/>

            <input type="text" 
            name=""
            ref="usernameV"
            /><br /><br />
            <label>Password</label><br /><br />
            <input type="password" 
            name="" 
            ref="passwordV"
            /><br /><br />
            <button id="button"
            
            ref="buttonV"
            onClick = {this._validateForm}
            >Log In</button>
          
            <p class="form__text"
            onMouseMove={this._onMouseMove}
            ref="linkCreateAccount"
            >
                <a class="form__link" href="#" id="linkCreateAccount">Don\'t have an account? Create account</a>
            </p>
          </div>

          <div className="form form--hidden" id="createAccount "
          
          onMouseMove={this._onMouseMove}
    ref="formC"
          >
            
            <h4>Create Account</h4><br /><br />
            <label
           
            >Username</label><br/><br/>
            <input  ref="l1" type="text" /><br /><br />
            <label>Email Address</label><br/><br/>
            <input  ref="l2" type="text" /><br /><br />
            <label>Password</label><br /><br />
            <input  ref="l3" type="password" /><br /><br />
            <label>Confirm Password</label><br /><br />
            <input  ref="l4" type="password" /><br /><br />
            <button id="button"
            onClick={this._validateForm2}
            ref="buttonl"
            >Sign Up</button>
            
      
            <p class="form__text"
             onMouseMove={this._onMouseMove}
             ref="linkLogin"
             >
                <a class="form__link" href="#" id="linkLogin">Already have an account? Sign in</a>
            </p>
          </div>
         
          <img src="/images/rocket.png" 
          onMouseMove={this._onMouseMove}
          ref="rocket"
          id="rocket"/> 
          
          <img src="/images/flylog.png" id="flog"/> 
          <h2 id="head"
          onMouseMove={this._onMouseMove}
          ref="slogan"
          >Come let's &nbsp;fly!</h2>
        </div>
      </div>

        </div>
    

 
  
    );
    
   
}


 
}



export default LoginForm;

