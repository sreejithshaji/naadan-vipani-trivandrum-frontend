import React, {  useState, useContext } from 'react'

import Firebase from './Firebase'
// import { AppContext } from '../utils/AppContext';
// import {  useContext } from 'react';

// used to open routes
import { useHistory } from 'react-router-dom'
// used to open routes



import { authenticate_save_jwt, isAuthenticated, signOut } from './AuthenticationHandler'
import "./loginpage1.css"
import Icon from "./Images/icons-2.png"

import {ContextConsumer} from '../utils/Context'


function App() {

  // signOut();

  const contextValues = useContext(ContextConsumer);

  // used to open routes
  let history = useHistory()
  if(isAuthenticated()){
    history.push('/')
  }
  else{
    console.log("not authenticated")
    // history.push('/')
  }
  // used to open routes


  // const ContextValue = useContext(AppContext);
  // console.log(ContextValue)

  //used to hold the main values in the file 
  const [values, setValues] = useState({
    otp: '',
    mobile: '',
    confirmationResult: '',
    c_error:'',
    redirectToReffer:false,
    district:"",
    block:""
  })

  const [ showGetOtpButton , SetshowGetOtpButton ] = useState(true)
  


  // handle change is called when there is a change in the input box
  const handleChange = name => event => {    
    // console.log(name ," : ",event.target.value);
    setValues({ ...values, [name]: event.target.value })
    
    if(name==="district"){
      console.log(" district: ", event.target.value   )
      contextValues.setdistrict( event.target.value )
    }
    if(name==="block"){
      console.log(" block: ", event.target.value   )
      contextValues.setblock(event.target.value)
    }

    // console.log( "district: ", contextValues.district, " block:", contextValues.block );
    
    // contextValues.setUserValues({
    //   ...contextValues.userValues,
    //   user_address : [name , event.target.value], 
    // })

    // contextValues.handleChangeBlockAndDistrict(
    //   { ...contextValues.values, [name]: event.target.contextValues.value }
    // )
    
  
  }


  const getOtp = () => {
    // this function sends otp to the mobile number using firebase. 
    
    let phoneNumber = "+91" + values.mobile
    console.log("otp section : " , phoneNumber );

    

    if( (values.mobile==="") || ( values.mobile.length<10 )  )
    {
      // enter here if the entered phone number is null 
      //  or the number is less than 10 digit
      SetshowGetOtpButton(true);
      // SetshowGetOtpButton(true); will set the get otp button button visibility to true 
      // if it is true then the button is visible . 
      // if the number is not entered this button will be visible 
      console.log("enter valid phone number" );
      
      console.log("district : ", contextValues.district  )
      
      console.log("block : ",contextValues.block);
      

    if((values.mobile==="")||(values.mobile.length<10)){
        console.log("please enter valid phone number")
        
      }
    }
    // else if (!isAuthenticated() && (contextValues.district==="0")){   
    //   console.log("please select valid district")
    // }
    // else if(!isAuthenticated() &&(contextValues.block==="0")){
    //   console.log("please select valid block")
    // }

    else if ((contextValues.district==="0")){   
      console.log("please select valid district")
    }
    else if((contextValues.block==="0")){
      console.log("please select valid block")
    }
    else
    {
      
      console.log("got phone number" );
      // this section is executed if the user enter a valid phone number . 
      // if it is a valid number first we disable the get otp button using below line 
      SetshowGetOtpButton(false);
      // SetshowGetOtpButton(false); will disable the get otp button
      
      console.log("district : ", contextValues.district)
      console.log("block : ", contextValues.block);

       
      if (contextValues.district=="0"){
        console.log("please select valid district")
        SetshowGetOtpButton(true);
        return;
      }
      if(contextValues.block=="0"){
        console.log("please select valid block")
        SetshowGetOtpButton(true);
        return;
      }
      

      // Firebase otpsent section START
      let recaptcha = new Firebase.auth.RecaptchaVerifier('recaptcha-container')
      Firebase.auth().signInWithPhoneNumber(phoneNumber, recaptcha)
      .then(function (e) {
          
          setValues({ ...values, confirmationResult: e })
          console.log("OTP is sent");
          
      })
      .catch(function (error) {
          console.log(error);
          alert(error)
          
      });
      // Firebase otp sent section END
    }
    
    
  }


  const RedirectToHome = async () =>{
    // used to redirect to home screen 

    // started
    console.log("here")

    var user_data = contextValues.user_address[0];

    console.log("user_data : ", user_data)
    // user_data[0].district = contextValues.district;
    // user_data[0].block = contextValues.block;

    // contextValues.setUserValues({
    //   ...contextValues.userValues,
    //   user_address : [user_data[0]],
    // })

    try{
      await contextValues.UpdateAddressToDbForBlockAndDistrictSet(user_data.full_name, user_data.house_name, user_data.street_name, user_data.pincode, contextValues.district, contextValues.block )
    }
    catch
    {
      contextValues.UpdateAddressToDbForBlockAndDistrictSet("name", "name", "name", "name", contextValues.district, contextValues.block )
    }
    
    console.log("completed")


    history.push("/")
  }


  const RedirectToLoginScreen = async () =>{
    history.push("/login")
  }

  const submitOTP =  (e)=>{
    
  // read the entered otp 
    let code = values.otp
    console.log("otp : " , code );
    // console log the entered otp 

    // confirm the otp
    values.confirmationResult.confirm(code).then( (result)=>{
        console.log(result.user,"User")
        // if the otp is correct it enters here 
        authenticate_save_jwt({
            phoneNumber : "+91" + values.mobile
        })



    })
    .then( async (data)=>{
          // await contextValues.initUserAddress()
          // console.log("data is : " )

          RedirectToHome()


      })
    .catch(err=>{
      // if otp is wrong it enter here
        console.log("error :" , err )
        alert("error or wrong otp")
    })

  }


  
  return (
    <div className="App">

      <div>
        {
          // if confirmationResult equal to zero 
          // then the enter phone number screen is displayed
          values.confirmationResult.length === 0 &&
          <div className="login_main row">
            <div className="login_container d-flex col-md-6 justify-content-center">

              <div className="login_small_container">

                  <div className="icon_container">
                      <img src={Icon} alt="" className="login_icon" />
                  </div>

                  <div className="login_text_container">  
                      <h1>
                        Login
                      </h1>
                      <p>
                        We will send you a <strong>One Time Password </strong>on your phone number.
                      </p>
                  </div>

                  <div className="mobile_number_container">
                      <input type="text" name="mobile" placeholder="Mobile Number" onChange={handleChange('mobile')} value={values.mobile} required/> 
                      
                      {
                      !isAuthenticated()?
                      <>
                        <select type="text" name="district" placeholder="district" onChange={handleChange('district')} value={values.district} required> 
                          <option value="0">select</option>
                          <option value="1">Trivandrum</option>
                          <option value="2">Eranakulam</option>
                          <option value="3">Alappuzha</option>
                          <option value="4">Kottayam</option>
                          <option value="5">Kollam</option>
                          <option value="6">Thrissur</option>
                          <option value="7">Kozhikode</option>
                          <option value="8">Kannur</option>
                          <option value="9">Pathanamthitta</option>
                          <option value="10">Palakkad</option>
                          {/* <option value="2">Eranakulam</option>
                          <option value="3">Alappuzha</option>
                          <option value="4">Kottayam</option>
                          <option value="5">Palakkad</option>
                          <option value="6">Trissur</option>
                          <option value="7">Kollam</option>
                          <option value="8">Kannur</option> */}
                        </select>

                        {
                          values.district==="1"?
                          <>
                            <select type="text" name="block" placeholder="block" onChange={handleChange('block')} value={values.block} required> 
                              <option value="0">select</option>
                              <option value="1">Paalayam</option>
                              <option value="2">Poojappura</option>
                            </select>
                          </>
                          :
                          values.district==="2"?
                          <>
                            <select type="text" name="block" placeholder="block" onChange={handleChange('block')} value={values.block} required> 
                              <option value="0">select</option>
                              <option value="1">Kakkanad</option>
                              {/* <option value="2">Haritha supermarket</option> */}
                            </select>
                          </>
                          :
                          values.district==="3"?
                          <>
                            <select type="text" name="block" placeholder="block" onChange={handleChange('block')} value={values.block} required> 
                              <option value="0">select</option>
                              <option value="1">Alappuzha </option>
                              {/* <option value="2">Alappuzha 2</option> */}
                            </select>
                          </>
                          :
                          values.district==="4"?
                          <>
                            <select type="text" name="block" placeholder="block" onChange={handleChange('block')} value={values.block} required> 
                              <option value="0">select</option>
                              <option value="1">Kottayam Town</option>
                              {/* <option value="2">Alappuzha 2</option> */}
                            </select>
                          </>
                          :
                          values.district==="5"?
                          <>
                            <select type="text" name="block" placeholder="block" onChange={handleChange('block')} value={values.block} required> 
                              <option value="0">select</option>
                              <option value="1">Keralapuram</option>
                              {/* <option value="2">Alappuzha 2</option> */}
                            </select>
                          </>
                          :
                          values.district==="6"?
                          <>
                            <select type="text" name="block" placeholder="block" onChange={handleChange('block')} value={values.block} required> 
                              <option value="0">select</option>
                              <option value="1">Koorkencherry</option>
                              {/* <option value="2">Alappuzha 2</option> */}
                            </select>
                          </>
                          :
                          values.district==="7"?
                          <>
                            <select type="text" name="block" placeholder="block" onChange={handleChange('block')} value={values.block} required> 
                              <option value="0">select</option>
                              <option value="1">Kakkodi</option>
                              {/* <option value="2">Alappuzha 2</option> */}
                            </select>
                          </>
                          :
                          values.district==="8"?
                          <>
                            <select type="text" name="block" placeholder="block" onChange={handleChange('block')} value={values.block} required> 
                              <option value="0">select</option>
                              <option value="1">Kannnur</option>
                              {/* <option value="2">Alappuzha 2</option> */}
                            </select>
                          </>
                          :
                          values.district==="9"?
                          <>
                            <select type="text" name="block" placeholder="block" onChange={handleChange('block')} value={values.block} required> 
                              <option value="0">select</option>
                              <option value="1">Pazhakulam</option>
                              {/* <option value="2">Alappuzha 2</option> */}
                            </select>
                          </>
                          :
                          values.district==="10"?
                          <>
                            <select type="text" name="block" placeholder="block" onChange={handleChange('block')} value={values.block} required> 
                              <option value="0">select</option>
                              <option value="1">Ottappalam</option>
                              {/* <option value="2">Alappuzha 2</option> */}
                            </select>
                          </>
                          :
                          <>
                          
                          </>

                        }
                      </>
                      :
                      <></>
                      }
                      {/* <input type="text" name="district" placeholder="district" onChange={handleChange('district')} value={values.district} required/>  */}
                  </div>


                  {/* <div id="recaptcha-container"></div> */}

                  <div className="button_container">
                          {
                            // if the phonenumber is not entered 
                            // the showGetOtpButton will be true
                            // the get otp button is displayed 
                          showGetOtpButton ?
                              <>
                                  <button onClick={() => {
                                    
                                      getOtp()
                                    }}>GET OTP</button>
                              </>
                              :
                              <>
                              </>
                          }        
                  </div>

                  <div className="recaptcha_container">
                    <div id="recaptcha-container" className="recaptcha"></div>
                  </div>

                  {/* <div className="retry_container">
                    <p>Message is not receive ?&nbsp;&nbsp;&nbsp;</p>
                    <a href="/">
                      Retry again
                    </a>
                  </div> */}


              </div>
            </div>
          </div>
      
        }
      </div>


      {/* fffffffffffffffffffffffffffffff */}

      <div>
        {
          // if confirmationResult not equal to zero then the otp is sent
          // then the enter otp section is displayed    
          values.confirmationResult.length !== 0 &&
          <div className="login_main row">
            <div className="login_container d-flex justify-content-center col-md-6">
              <div className="login_small_container">

              <div className="icon_container">
                  <img src={Icon} alt="" className="login_icon" />
              </div>
          
              <div className="login_text_container">  
                      <h1>
                        Login
                      </h1>
                      <p>
                        You will get a <strong>OTP </strong>via <strong>SMS</strong>
                      </p>
              </div>

              <div className="mobile_number_container">
                
                <input id="otp" type="text"
                       name="otp" placeholder="OTP"
                       onChange={handleChange('otp')}
                       value={values.otp} required/>

                <span class="focus-input100"></span>
              </div>

              <div className="recaptcha_container">
                <div id="recaptcha-container" ></div>
              </div>

              <div className="button_container">
                <button onClick={()=>{submitOTP() } } >
                    SUBMIT
                </button>
              </div>
              
              <div className="retry_container">
              <p>Message is not receive ?&nbsp;&nbsp;&nbsp;</p>
              <a href="/" onClick={() => {
                          // executed when retry button is pressed
                          // if pressed confirmationResult and otp is set to null
                          setValues({...values, confirmationResult: '' , otp: ''})
                          // then we set SetshowGetOtpButton(true) 
                          // so that the enter phone number page is displayed
                          SetshowGetOtpButton(true)
                          RedirectToLoginScreen()
                          
                        }} >
                    Retry again
              </a>
              </div>

              </div>
      </div>

          </div>
          
        }
      </div>
      </div>

      

    
 
  );
  
  






  
}

export default App;
