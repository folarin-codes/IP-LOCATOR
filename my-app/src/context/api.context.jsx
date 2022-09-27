import { createContext, useEffect, useState } from "react";

//  import {fetchIpData} from '../util/api-fetch.util.js'
 

export const apiContext = createContext({
      apiData: {},
      setApiData: ()=> null
}
     

)

console.log('hello')

export const ApiProvider = ({ children }) => {

      const defaultApiData = {
            isp: '',
            latitude: '',
            longitude: '',
            ipAddress: '',
            timezone: '',
            location :{}
      }

      const [apiData, setApiData] = useState({defaultApiData})
      


      const fetchIpData = async () => {


            try {
                
                  fetch('https://ipapi.co/json/')
                  .then(res => res.json())
                              .then((data) => {
                                    console.log(data)
                                    setApiData(data)
                               
                              })
                        .catch((error) => {
                        alert(`${error} data , try again later!`)
                  })
                       
                  
                  
                         
            }

            catch (error) {

                  console.log(error)
                  alert(error)
                  
            }
            
      }


      useEffect(() => {
            
            fetchIpData()

           
            
      }, [])

      return (
            <apiContext.Provider value={[apiData , setApiData]}>
                  { children }
            </apiContext.Provider>
            
      )
}