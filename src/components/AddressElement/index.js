import React, { useState, useEffect, useContext } from 'react';
import "./style.css";



import {ContextConsumer} from '../../utils/Context'

// import {constants} from '../../constants/values'

import {constants} from '../../constants/values';

import { useHistory } from "react-router-dom";
// import { MdHistoryEdu } from 'react-icons/md';

const AddressElement = () => {


// MODAL
  const [show, setShow] = useState(true);

  const handleClose = () =>{

    console.log("handle close called ")


    if(inputs.full_name===""||inputs.house_name==="" || inputs.block===""|| inputs.district===""|| inputs.pincode===""|| inputs.street_name==="")
      {
        console.log("empty data")
        setShow(true)
        seteditName(true) 
      }
      else if(inputs.order_slot==="" )
      {
        console.log("select slot")
      }
      else{
        console.log("move forward")
        seteditName(false) 
        setShow(false)
      }

      //  setShow(!show)
    };
// MODAL






      const contextValues = useContext(ContextConsumer);

      const ENABLE_BLOCK_AND_DISTRICT_SECTION= 0;

      // history.push("/address");

      // var district = contextValues.user_address[0].district?contextValues.user_address[0].district:"0";
      // var block = contextValues.user_address[0].block;

      // console.log("uservalues : ", contextValues.user_address )

      const [inputs, setInputs] = useState({
        full_name: "",
        house_name: "",
        pincode: "",
        street_name: "",
        order_slot:"",
        // district : '0',
        // block: "0"
      });

      const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }



      let history = useHistory();

      const onSubmit = (event) => {
        event.preventDefault();
        console.log("submission prevented");
      };
      


    const LoadAddressDataToForm = () =>{
      // console.log("run second ")

      var full_name = "";
      var house_name="";
      var block = "";
      var district ="";
      var pincode ="";
      var street_name ="";

      if(contextValues.user_address[0].full_name==="name"||contextValues.user_address[0].house_name==="name")
      {
        full_name = "";
        house_name="";
        block = "";
        street_name ="";

        block =  contextValues.user_address[0].block ;
        district = contextValues.user_address[0].district;
      }
      else
      {
        full_name=contextValues.user_address[0].full_name ;
        house_name=contextValues.user_address[0].house_name ;
        block =  contextValues.user_address[0].block ;
        district = contextValues.user_address[0].district;
        pincode = contextValues.user_address[0].pincode;
        street_name = contextValues.user_address[0].street_name;

      }
      setInputs( (inputs)=> ({
                                ...inputs,
                                'district' : `${district}`,
                                'block' : `${block}`,
                                'full_name' : `${full_name}`,
                                'house_name' :`${house_name}`,
                                'street_name' :`${street_name}`,
                                'pincode' :`${pincode}`,
                            }));

    }





// DATA FETCHING START ***
// FIRST READ HERE 

// first we call runFirst() in a useeffect. 
// this will call first

    const [runTest , setRuntest] = useState(false) ;
    const runFirst = async() =>{
        const ret = await contextValues.initUserAddress();
        setRuntest(ret);
        // this function is called first and it returns true if it is success . 
        // this will set runTest flag to true 
    }
// below is the first useffect function
    useEffect( ()=>{
        runFirst()
    },[])

// below is the second useffect function
    useEffect( ()=>{
        if( runTest )
        {
          // it enters this if loop only if the first one returns a true value
          // Here we fetch that return value which is runTest and if it is true we execute the next function
            LoadAddressDataToForm()   
            // console.log("inputs : ", inputs )
            // console.log("uservalues : ", contextValues.user_address )
        }
    },[ runTest ])
// DATA FETCHING END ---


  // seteditName

  // var EditStatus=false;
  // if(inputs.full_name===""||inputs.house_name==="" || inputs.block===""|| inputs.district===""|| inputs.pincode===""|| inputs.street_name==="" )
  // {
  //   // console.log(" please enter valid data  ")
  //   EditStatus=true;
  // }
  
  // contextValues.placeOrder()




  var editstartBool=false;
  if(inputs.full_name==="" && contextValues.user_address.full_name==="name" ){
    editstartBool=true;
  }
  
  const [editName , seteditName] = useState(editstartBool) ;

  



    const UpdateAddress = () =>{
      // console.log(" update address : ", inputs)

      var block = "";
      var district ="";
      var pincode ="";
      var street_name ="";
      
      console.log( " update address :  ",  inputs.full_name, inputs.house_name, inputs.street_name, inputs.pincode)

      if(inputs.full_name===""||inputs.house_name==="" || inputs.block===""|| inputs.district===""|| inputs.pincode===""|| inputs.street_name==="" )
      {
        // console.log(" please enter valid data  ")
        seteditName(true) 
      }
      else{
        seteditName(false) 
        console.log( " update else address :  ", inputs.full_name, inputs.house_name, inputs.street_name, inputs.pincode)
        contextValues.UpdateAddressToDb(inputs.full_name, inputs.house_name, inputs.street_name, inputs.pincode)
        contextValues.initUserAddress()
      }
      // contextValues.placeOrder()
    }




//CALCULATE TOTAL PRICING START ** 
    var cartItem = contextValues.cart[0];

      var totalProductPrice=0;
      var deliveryCharge=50;

      cartItem?.forEach(item =>{
          // console.log(item)
          totalProductPrice += item.price*item.quantity;
      })
      var totalPriceIncDelivery = totalProductPrice+deliveryCharge;

      var enableOrderButon = totalPriceIncDelivery<=100;
//CALCULATE TOTAL PRICING END --


    const PlaceOrder = ()=>{
      if( inputs.order_slot==""|| inputs.full_name===""||inputs.house_name==="" || inputs.block===""|| inputs.district===""|| inputs.pincode===""|| inputs.street_name==="" )
      {
        // console.log("please enter valid data ")
      }
      else{
        // console.log("order placing")
        contextValues.placeOrderToDb( inputs.order_slot , totalPriceIncDelivery);
        history.push("/")
      }
    }





    

// TIME SLOT

const current = new Date();
var strTime =current.toString();

var TimeOnly = strTime.slice(16, 24) ;
console.log("time : " , TimeOnly  );


var hour = strTime.slice(16, 18) ;
var hourInt = parseInt(hour);


console.log("Hours : " , hourInt  );
var slotSelectorHere=0;
if( (hourInt>=12)&&(hourInt<=23) ){
  console.log("tomorrow morning slot and tomorrow afternoon slot ")
  slotSelectorHere=1;
}
if( (hourInt<12)&&(hourInt<23) ){
  console.log("show afternoon slot day after tomorrow morning slot")
  slotSelectorHere=2;
}


const [orderSlotAdjuster , setorderSlotAdjuster ] = useState(slotSelectorHere)
// TIME SLOT





    return (

      

  <div class="container-fluid">
{
  show?
  <>

  <div class="row">


  <div class="addressbox col-lg-6 col-md-12 col-sm-12 col-xm-12"> 


  <div class="heading">      
          <h2>Enter your Address</h2>
        </div>

{/* <AddressViewOnly/> */}

{
  editName?
    <form onSubmit={onSubmit} >
        <div class="group col-lg-12 col-md-12 col-sm-12 col-xm-12">      
          <input type="text" placeholder="full name "  name="full_name" 
            value={inputs.full_name || ""} 
            onChange={handleChange}
            required/>

         { 
          !inputs.full_name?<p style={{color:"red"}} >please enter name</p>:<></>
         }

        </div>
        
        <div class="group col-lg-12 col-md-12 col-sm-12 col-xm-12">      
          <input type="text" placeholder="house name"  name="house_name" 
            value={inputs.house_name || ""} 
            onChange={handleChange}
            required/>

            { 
              !inputs.house_name?<p style={{color:"red"}} >please enter house name</p>:<></>
            }

        </div>

        <div class="group col-lg-12 col-md-12 col-sm-12 col-xm-12">      

          <input type="text" placeholder="street name"  name="street_name" 
              value={inputs.street_name || ""} 
              onChange={handleChange}
              required/>
            { 
              !inputs.street_name?<p style={{color:"red"}} >please enter street name</p>:<></>
            }
        </div>

        <div class="group col-lg-12 col-md-12 col-sm-12 col-xm-12">      
          <input type="text" placeholder="pincode"  name="pincode" 
              value={inputs.pincode || ""} 
              onChange={handleChange}
              required/>
              { 
                !inputs.pincode?<p style={{color:"red"}} >please enter pincode</p>:<></>
              }
              
        </div>

        <div class="group col-lg-12 col-md-12 col-sm-12 col-xm-12 col-12"> 

      {
        ENABLE_BLOCK_AND_DISTRICT_SECTION?
        <>
                        <select  name="district" id="district" class="select"
                          placeholder={inputs.district}  name="district" 
                          value={inputs.district || ""} 
                          onChange={handleChange}
                           required> 
                          <option value="">select</option>
                          <option value="1">Trivandrum</option>
                          <option value="2">Eranakulam</option>
                          <option value="3">Alappuzha</option>
                          <option value="4">Kottayam</option>
                          <option value="5">Palakkad</option>
                          <option value="6">Trissur</option>
                          <option value="7">Kollam</option>
                          <option value="8">Kannur</option>
                        </select>
                        { 
                          inputs.district==="0"?<p style={{color:"red"}} >please select district</p>:<></>
                        }

                        {
                          inputs.district==="1"?
                          <>
                            <select  name="block" id="block" class="select"
                                      placeholder={inputs.block}  name="block" 
                                      value={inputs.block || ""} 
                                      onChange={handleChange} required> 
                                <option value="">select</option>
                                <option value="1">Paalayam</option>
                                <option value="2">Poojappura</option>
                            </select>
                          </>
                          : //eranakulam
                          inputs.district==="2"?
                          <>
                            <select name="block" id="block" class="select"
                                      placeholder={inputs.block}  name="block" 
                                      value={inputs.block || ""} 
                                      onChange={handleChange} required> 
                              <option value="0">select</option>
                              <option value="1">Infopark</option>
                              <option value="2">Vazhakkala</option>
                              <option value="3">Thrikkakkara</option>
                              <option value="4">Vallayhoor nagar</option>
                              <option value="5">Cusat</option>
                            </select>
                          </>
                          :
                          inputs.district==="3"?
                          <>
                          {/* Alappuzha */}
                          {/* Aryad, Alappuzha (M), Punnamada, Kommadi,District court, kalavoor,Mullakkal, Mannanchery */}
                            <select name="block" id="block" class="select"
                                      placeholder={inputs.block}  name="block" 
                                      value={inputs.block || ""} 
                                      onChange={handleChange} required> 
                              <option value="0">select</option>
                              <option value="1">Arayad</option>
                              <option value="2">Alappuzha (M)</option>
                              <option value="3">Punnamada</option>
                              <option value="4">Kommandi</option>
                              <option value="5">Dist. Court</option>
                              <option value="6">Mullakkal</option>
                              <option value="7">Manchery</option>
                            </select>
                          </>
                          
                          :
                          inputs.district==="4"?
                          <>
                          {/* Kottayam */}
                          {/* Aryad, Alappuzha (M), Punnamada, Kommadi,District court, kalavoor,Mullakkal, Mannanchery */}
                            <select name="block" id="block" class="select"
                                      placeholder={inputs.block}  name="block" 
                                      value={inputs.block || ""} 
                                      onChange={handleChange} required> 
                              <option value="0">select</option>
                              <option value="1">Kanjikkuzhy</option>
                              <option value="2">Manganam</option>
                              <option value="3">Puthuppalli</option>
                            </select>
                            
                          </>
                          
                          :
                          <>
                          </>
                        }
                          { 
                            inputs.block==="0"?<p style={{color:"red"}} >please select block</p>:<></>
                          }

                      </>
                      :
                      <div class="group col-lg-12 col-md-12 col-sm-12 col-xm-12">      
                      </div>

                      
      }








  </div>


{
  editName?
  <button className="continue_btn" onClick={()=>{ UpdateAddress() }} >
          Confirm address
  </button>
  :
  <></>
}

  <div class="group col-lg-12 col-md-12 col-sm-12 col-xm-12"> 
    <p>Delivery Time Slot</p>

      {/* <div class="radio-box flex col-lg-6 col-md-6 col-sm-6 col-xm-6">
        <input 
        onChange={handleChange} 
         type="radio" name="order_slot" id="radio1" value="1" required/>
        <label for="radio1">Morning Section-9am to 1pm </label>
      </div> */}



    { 
      inputs.order_slot===""?<p style={{color:"red"}} >please select time slot </p>:<></>
    }

  </div>

  </form> 
  :
  <div class="group col-lg-12 col-md-12 col-sm-12 col-xm-12">

      <div class="group col-lg-12 col-md-12 col-sm-12 col-xm-12">      
          {/* <input type="text" placeholder="full name "  name="full_name" 
                  value={inputs.full_name || ""} 
                  onChange={handleChange}
                  required/> */}
                  <>
                  {inputs.full_name}
                  </>
                  
        </div>


      <div class="group col-lg-12 col-md-12 col-sm-12 col-xm-12">      
                  <>
                  {inputs.house_name}
                  </>
        </div>


      <div class="group col-lg-12 col-md-12 col-sm-12 col-xm-12">      
                  <>
                  {inputs.street_name}
                  </>
        </div>

        <div class="group col-lg-12 col-md-12 col-sm-12 col-xm-12">      
                  <>
                  {inputs.pincode}
                  </>
        </div>

        <div class="group col-lg-12 col-md-12 col-sm-12 col-xm-12">      
                  <>
                  {/* {inputs.district} */}
                  {constants.district_array[inputs.district]}
                  </>
        </div>

        <div class="group col-lg-12 col-md-12 col-sm-12 col-xm-12">      
                  <>
                  {constants.block[1][inputs.block]}
                  </>
        </div>



<div class="group col-lg-12 col-md-12 col-sm-12 col-xm-12">      
    {
      editName?
          <></>
          :
          <button className="edit_btn" onClick={()=>{ 
                                                    seteditName(true) 
                                                    }} >
            Edit address
          </button>
    }
</div>



  <div class="group col-lg-12 col-md-12 col-sm-12 col-xm-12"> 
    <p>Delivery Time Slot</p>
      
{
  orderSlotAdjuster==1?
  <>
    <div class="radio-box flex col-lg-6 col-md-6 col-sm-6 col-xm-6">
        <input 
        onChange={handleChange} 
         type="radio" name="order_slot" id="radio1" value="1" required/>
        <label for="radio1">tomorrow Morning Section -9am to 12pm </label>
    </div>

    <div class="radio-box flex col-lg-6 col-md-6 col-sm-6 col-xm-6">
      <input 
        onChange={handleChange} 
        type="radio" name="order_slot" id="radio2" value="2"/>
      <label for="radio2">tomorrow Section -1pm to 6pm</label>
    </div>
    </>
    :
    <>
    <div class="radio-box flex col-lg-6 col-md-6 col-sm-6 col-xm-6"  >
      <input 
        onChange={handleChange} 
        type="radio" name="order_slot" id="radio3" value="3"/>
      <label for="radio3">Afternoon Section-1pm to 6pm</label>
    </div>
    <div class="radio-box flex col-lg-6 col-md-6 col-sm-6 col-xm-6"  >
    <input 
      onChange={handleChange} 
      type="radio" name="order_slot" id="radio4" value="4"/>
    <label for="radio4">Tomorrow Morning Section-9am to 1pm</label>
  </div>
  </>

}
    { 
      inputs.order_slot===""?<p style={{color:"red"}} >please select time slot </p>:<></>
    }

  </div>

  </div>

  
}


  <div class="radio-box flex col-lg-6 col-md-6 col-sm-6 col-xm-6" style={{ alignItems:'center', textAlign:'center', alignSelf:'center' }} >
    <h4 style={{ alignItems:'center', textAlign:'center' }} >Total Price : ₹{totalPriceIncDelivery}/-</h4>
  </div>

  

        {  
          !editName?
            <button className="continue_btn" style={{ backgroundColor :"green"}} onClick={()=>{ handleClose() }} >
            Place Order
            </button>
            :
            <></>
        }


        {
          enableOrderButon?<p style={{color:"red"}} >Please place order greater than ₹250 </p>:<></>
        }
        </div>
{/* 
        <div className="price-total col-lg-12 col-md-12 col-sm-12 col-xm-12">
          <h4>Total Price : ${totalPriceIncDelivery}/-</h4>
        </div> */}

  </div>

  {/* <button onClick={()=>{handleClose()}}>teset</button> */}
{/* 
  {
    show?
    < >
    </>
    :
    <div class="row">
      <div class="addressbox col-lg-6 col-md-12 col-sm-12 col-xm-12"> 

      </div>  
    </div>  
  } */}
</>
:
<>
{/* <div style={{ width:"100%"}} > */}
  <div className="button_wrapper" style={{flexDirection:"coloumn", }}>
        
                  <button className="continue_btn" style={{ display:'inline-block', backgroundColor :"green" }} onClick={()=>{ 
                    PlaceOrder() 
                    alert("Your order has been plased successfully")
                    // alert
                    
                    history.push("/")
                    }} >
                    Confirm Order
                    </button>

                  <button className="continue_btn" style={{ display:'inline-block',backgroundColor :"green"}} 
                    onClick={()=>{ 
                      history.push("/")
                    }} >
                    Go To Home 
                    </button>




  </div>  

</>
}
</div>

    )
}


const AddressViewOnly = ()=>{
  return(
    <>
    </>
    
  )
}


export default AddressElement;
