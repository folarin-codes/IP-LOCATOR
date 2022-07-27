import { useState, useContext } from 'react'
import { apiContext } from '../../context/api.context'

import {ReactComponent as Arrow} from '../../images/icon-arrow.svg'

import Loader from '../loader/loader.component'

import './search-box.styles.css'



const Search = () => {

      const contextValue = useContext(apiContext)

      const ipSetterFuction = contextValue[1]

      const [ipAddress, setIpAddress] = useState('')

      const [loading , setLoading] = useState(false)
  
      const fetchIpData = async () => {
           
            setLoading(true)

           try {
      
                  // const encodedParams = new URLSearchParams();
                  // encodedParams.append("my-url", `https://geo.ipify.org/api/IPv6/country,city?apiKey=at_Smon839gueImxFF1FydQoIk40NH1p&ipAddress=${ipAddress}`);
                  
                  // const options = {
                  //       method: 'POST',
                  //       headers: {
                  //             'content-type': 'application/x-www-form-urlencoded',
                  //             'X-RapidAPI-Key': '05f1179be4mshfdce8c5340638d0p1a85f3jsn97608f89afcf',
                  //             'X-RapidAPI-Host': 'cors-proxy3.p.rapidapi.com'
                  //       },
                  //       body: encodedParams
                  // };
                  
                  fetch(`https://ipapi.co/${ipAddress}/json/`)
                               .then(res => res.json())
                        .then((data) => {
                              console.log(data)
                              ipSetterFuction(data)
                              setLoading(false)

                              
                         
                        })
                        .catch((e) => {
                              console.log(`${e} is the error from the API`)
                              alert('Seems to be a network issue , check your network and try again')
                              setLoading(false)
                        })
           
                 
            }

           catch (error) {
                 
                 console.log('this block is evaluated')

                  console.log(error)
                 alert(error)
                  
            }
            

      }

      return (
            <div>
                  
                  <input onChange={(event) => { 
                        setIpAddress(event.target.value)

                  }} type='search' className='input-search' />
                  <button className='button' type='submit' onClick={() => {
                      
                         fetchIpData()
                  }}> <Arrow/></button>

                  {
                        loading ? <Loader/> : null
                  }

                  </div>
            )
      }


export default Search 