import React,{useEffect, useState, useContext} from 'react'
import axios from 'axios'
import qs from 'qs';
import {authenticate, isAuthenticated} from '../Auth/AuthenticationHandler'

// const Base_URL = 'http://localhost:4000'
const Base_URL = 'http://ec2-34-229-164-148.compute-1.amazonaws.com:4000'

const ProductContext = React.createContext()

function  ContextProvider(props) {




// FOR CHANGING BLOCK AND DISTRICT FROM LOGIN SCREEN
    
    const [block, setblock] = useState("0")
    const [district, setdistrict] = useState("0")

// FOR CHANGING BLOCK AND DISTRICT FROM LOGIN SCREEN


    const [values,setValues] = useState({
        // cart : [],
        products_veg: [],
        _home_screen : 'kit', // kit or veg
        kit_screen : '200',      //200 or 400
        // user_address : [],
    })
    
    const[userValues,setUserValues] = useState({
        user_address : [],
   })


   const[cart,setCart] = useState({
        cart : [],
    })


    const initUserAddress = async ()=>{
        let phoneNo = isAuthenticated().phoneNumber;
        let phoneNumber ;

        // console.log("init address")

        try
        {
            phoneNumber = (phoneNo).substring(3);
        }catch{

        }

        await axios({
            'method'    :   'GET',
            'url'       :   `${Base_URL}/user/${phoneNumber}`,
            'headers'   :   {
                                'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                            },
            'data'      :  qs.stringify({
                            }),
        })
        .then (res =>{
            // if success
            if(res.status === 201)
            {
                // console.log(res.data)
                if( (res.data.full_name==='notfound') )
                {
                    // console.log("no user");
                    UpdateNullAddress() ;
                }
                else
                {
                    
                    setUserValues({
                                    ...userValues,
                                    user_address : [res.data], // match it from backend
                                });    

                    // console.log("201 : " , res.data )
                    // console.log("return true")
                    
                }
                
            }
            else {
                console.log("401 : " , res.data )
            }
        }).catch(err=>{
        })

        return true;

    }






    // ---------------------------------------------------
    // CART START 

    const InitCart = async () =>{
        
        let phoneNo = isAuthenticated().phoneNumber;
        let phoneNumber ;

        // console.log("Add to cart : ", itemId , " , " , Quantity );

        try
        {
            phoneNumber = (phoneNo).substring(3);
        }catch{

        }
        

        await axios({
            'method'    :   'GET',
            'url'       :   `${Base_URL}/cart/${phoneNumber}`,
            'headers'   :   {
                                'content-type': 'application/json;charset=utf-8',
                            },
            'data'      :  {
                           },
        })
        .then(res =>{
            // if success
            if(res.status === 201)
            {
                // console.log(" data read from cart : " , res.data )
                // let phoneNo = isAuthenticated().phoneNumber;
                // let phoneNumber;
                setCart({
                    ...cart,
                    cart:[res.data],
                })

                // console.log("cart : ", res.data)
            }
        }).catch(err=>{
            
        })
    }


    const AddToCart = async (itemId, quantity) =>{
        
        let phoneNo = isAuthenticated().phoneNumber;
        let phoneNumber ;

        console.log("Add to cart : ", itemId , " , " , quantity );

        try
        {
            phoneNumber = (phoneNo).substring(3);
        }catch{

        }

        await axios({
            'method'    :   'POST',
            'url'       :   `${Base_URL}/cart/`,
            'headers'   :   {
                                'content-type': 'application/json;charset=utf-8',
                            },
            'data'      :  {
                                "product_id":`${itemId}`, 
                                "quantity":quantity, 
                                "user_id":`${phoneNumber}`, 
                                "ordered_or_not":1
                           },
        })
        .then(res =>{
            // if success
            if(res.status === 201)
            {
                console.log(" data pushed AddToCart: " , res.data )
                
                setCart({
                                ...cart,
                                cart : [res.data], // match it from backend
                            })

                // initKitProducts()
            }
        }).catch(err=>{
            
        })
    }



    const RemoveFromCart = async (cartID) =>{
        
        let phoneNo = isAuthenticated().phoneNumber;
        let phoneNumber ;

        console.log("remove from cart : ", cartID );

        try
        {
            phoneNumber = (phoneNo).substring(3);
        }catch{

        }

        await axios({
            'method'    :   'DELETE',
            'url'       :   `${Base_URL}/cart/${cartID}`,
            'headers'   :   {
                                'content-type': 'application/json;charset=utf-8',
                            },
            'data'      :  {
                                user_id:`${phoneNumber}`
                           },
        })
        .then(res =>{
            // if success
            if(res.status === 201)
            {
                console.log(" data removed AddToCart: " , res.data )
                
                setCart({
                                ...cart,
                                cart : [res.data], // match it from backend
                            })

                // initKitProducts()
            }
        }).catch(err=>{
            
        })
    }




    // counter handle
    const CartChangeCount = async (itemId, quantity) =>{
        
        let phoneNo = isAuthenticated().phoneNumber;
        let phoneNumber ;

        console.log("cart count adjust : ", itemId , " , " , quantity );

        try
        {
            phoneNumber = (phoneNo).substring(3);
        }catch{

        }

        await axios({
            'method'    :   'PATCH',
            'url'       :   `${Base_URL}/cart/${phoneNumber}`,
            'headers'   :   {
                                'content-type': 'application/json;charset=utf-8',
                            },
            'data'      :  {
                                "product_id":`${itemId}`, 
                                "quantity":`${quantity}`, 
                                "user_id":`${phoneNumber}`, 
                                "ordered_or_not":1
                           },
        })
        .then(res =>{
            // if success
            if(res.status === 201)
            {
                console.log(" cart count changed : " , res.data )
                
                // let phoneNo = isAuthenticated().phoneNumber;
                // let phoneNumber;
                // setUserValues({
                //                 ...userValues,
                //                 user_address : [res.data], // match it from backend
                //             })
                InitCart();
                initKitProducts()
            }
            else {
                console.log(" error response cartChangeCount"  )
            }
        }).catch(err=>{
            
        })
    }
    // CART SECTION END
    // ---------------------------------------------------



    const UpdateNullAddress = async ()=>{
        
        let phoneNo = isAuthenticated().phoneNumber;
        
        console.log(" updateNull address : " , district , block );

        let phoneNumber;
        try{
            phoneNumber = (phoneNo).substring(3);
        }
        catch{

        }
        
        await axios({
            'method'    :   'POST',
            'url'       :   `${Base_URL}/user/`,
            'headers'   :   {
                                'content-type': 'application/json;charset=utf-8',
                            },
            'data'      :  {
                                id:`${phoneNumber}`,
                                full_name:"name",
                                house_name:"name",
                                street_name:"name", 
                                pincode:"name",
                                district:`${district}`, 
                                block:`${block}`, 
                                delivery_location:"1",
                                // district:"1", 
                                // block:"1",
                           },
        })
        .then(res =>{
            // if success
            if(res.status === 201)
            {
                console.log(" data pushed UpdateNullAddress  : " , res.data )
                
                // let phoneNo = isAuthenticated().phoneNumber;
                // let phoneNumber;
                setUserValues({
                                ...userValues,
                                user_address : [res.data], // match it from backend
                            })

                initKitProducts()
            }
        }).catch(err=>{
            
        })
        
    }


    const initKitProducts = async ()=>{
        console.log("district : ", district)
        console.log("block : ", block)
        console.log("values at init kit here  :  " , userValues.user_address[0] );

        try{
            var dataLoader =  userValues.user_address[0];


        console.log("values at init kit, dataLoader.district :" , dataLoader.district );
        console.log("values at init kit, dataLoader.block :" , dataLoader.block );
        if(dataLoader.district==0){
            dataLoader.district=district;
            dataLoader.block = block;
        }
            console.log("init kit called user dataLoader is : ", dataLoader);
            // await fetch('https://api.npms.io/v2/search?q=react')
            
            await axios({
                'method'    :   'POST',
                'url'       :   `${Base_URL}/products/products-with-location/`,
                'headers'   :   {
                                    'content-type': 'application/json;charset=utf-8',
                                },
                'data'      :  {
                                    district:`${userValues.user_address[0].district}`, 
                                    block:`1`,
                            },                  
            })
            .then(res =>{
                if(res.status === 201)
                {
                    setValues({
                        ...values,
                        products_veg : res.data, // match it from backend
                    })
                    console.log("res data : ", res.data );
                }
            }).catch(err=>{
                console.log("error at product init : ",err);
            })
            
        }
        catch
        {
            var data =  userValues.user_address[0];
            console.log("init kit catched error ");
            // await fetch('https://api.npms.io/v2/search?q=react')
            
            await axios({
                'method'    :   'POST',
                'url'       :   `${Base_URL}/products/products-with-location/`,
                'headers'   :   {
                                    'content-type': 'application/json;charset=utf-8',
                                },
                'data'      :  {
                                    district:district, 
                                    block:block,
                            },                  
            })
            .then(res =>{
                if(res.status === 201)
                {
                    setValues({
                        ...values,
                        products_veg : res.data, // match it from backend
                    })
                    // console.log("res data : ", res.data );
                }
            }).catch(err=>{
                console.log("error at product init : ",err);
            })
            
        }
        
    }






    const UpdateAddressToDbForBlockAndDistrictSet = async (full_name, house_name, street_name, pincode, newDistrict, newBlock )=>{
        
        let phoneNo = isAuthenticated().phoneNumber;
        
        console.log(" UpdateAddressToDbForBlockAndDistrictSet address : " , full_name );


        let phoneNumber;
        try{
            phoneNumber = (phoneNo).substring(3);
        }
        catch{

        }

        // return 0;
        // newDistrict, newBlock
        await axios({
            'method'    :   'POST',
            'url'       :   `${Base_URL}/user/`,
            'headers'   :   {
                                'content-type': 'application/json;charset=utf-8',
                            },
            'data'      :  {
                                id:`${phoneNumber}`,
                                full_name:`${full_name}`,
                                house_name:house_name,
                                street_name:street_name, 
                                pincode:pincode,
                                district:newDistrict, 
                                block:newBlock,
                                delivery_location:"1",
                           },
        })
        .then(res =>{
            if(res.status === 201)
            {
                // console.log(" data pushed : " , res.data )
                
                setUserValues({
                                ...userValues,
                                user_address : [res.data], 
                            })

                initUserAddress()

                initKitProducts()
            }
        }).catch(err=>{
            
        })
        
    }




    const UpdateAddressToDb = async (full_name, house_name, street_name, pincode )=>{
        
        let phoneNo = isAuthenticated().phoneNumber;
        
        console.log(" update address : " , userValues.user_address[0] );

        let phoneNumber;
        try{
            phoneNumber = (phoneNo).substring(3);
        }
        catch{

        }

        // return 0;
        
        await axios({
            'method'    :   'POST',
            'url'       :   `${Base_URL}/user/`,
            'headers'   :   {
                                'content-type': 'application/json;charset=utf-8',
                            },
            'data'      :  {
                                id:`${phoneNumber}`,
                                full_name:`${full_name}`,
                                house_name:house_name,
                                street_name:street_name, 
                                pincode:pincode,
                                district:userValues.user_address[0].district, 
                                block:userValues.user_address[0].block,
                                delivery_location:"1"
                           },
        })
        .then(res =>{
            if(res.status === 201)
            {
                // console.log(" data pushed : " , res.data )
                
                setUserValues({
                                ...userValues,
                                user_address : [res.data], 
                            })

                initKitProducts()
            }
        }).catch(err=>{
            
        })
        
    }





const placeOrderToDb = async (slot, total_amount)=>{
    // console.log("values :  " , userValues.user_address[0] );
    var data =  userValues.user_address[0];
    let phoneNo = isAuthenticated().phoneNumber;
    
    console.log("placing order : " , slot, total_amount );

    let phoneNumber;
    try{
            phoneNumber = (phoneNo).substring(3);
    }catch{

    }

    // console.log("init kit ");
    // await fetch('https://api.npms.io/v2/search?q=react')
    await axios({
        'method'    :   'POST',
        'url'       :   `${Base_URL}/orders/`,
        'headers'   :   {
                            'content-type': 'application/json;charset=utf-8',
                        },
        'data'      :  {
                            user_id:`${phoneNumber}`, 
                            slot:slot,
                            total_amount:`${total_amount}`,
                            status:`1`,
                            payment_id:"NULL"
                       },                  
    })
    .then(res =>{
        if(res.status === 201)
        {
            // setValues({
            //     ...values,
            //     products_veg : res.data,
            // })
            // console.log("res data : ", res.data );
        }
    }).catch(err=>{
        console.log("error at product init : ",err);
    })
    
}


   useEffect( async ()=>{
        // call function to initialize data to product kit
        if(isAuthenticated())
        {
            await initUserAddress()
            // await initKitProducts()
            await InitCart();
        }
        

        
        // await initCartItems()
        
        // await initOrderPlaced()
        
    },[])




    return (
        <ProductContext.Provider value={{
            ...userValues,
            ...values,
            block,
            district,
            ...cart,
 
            setValues : setValues,
            setUserValues : setUserValues,


            setblock:setblock,
            setdistrict:setdistrict,
            
            initUserAddress:initUserAddress,

            initKitProducts:initKitProducts,

            AddToCart:AddToCart,
            CartChangeCount:CartChangeCount,

            InitCart:InitCart,
            
            placeOrderToDb:placeOrderToDb,
            UpdateAddressToDb:UpdateAddressToDb,
            UpdateAddressToDbForBlockAndDistrictSet:UpdateAddressToDbForBlockAndDistrictSet,

            RemoveFromCart:RemoveFromCart,

        }}>
            {props.children}
        </ProductContext.Provider>
    )
}


// const ContextConsumer = ProductContext.Consumer;
const ContextConsumer =ProductContext  ;
export {ContextConsumer,ContextProvider}

