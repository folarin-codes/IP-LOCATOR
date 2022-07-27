import { useContext } from "react";
import { apiContext } from "../../context/api.context";
import './api-data-modal.styles.css'


const IpDataModal = () => {

     

      const apiData = useContext(apiContext)

      console.log(apiData[0])

      const {ip , city , timezone , utc_offset,org, country_name} = apiData[0]


      return (
            <section className='section' style={{
                  display :  apiData[0].ip == undefined ? 'none' : "block"
            }} >
                  
                  <div>
                        <h3>IP ADDRESS</h3>
                        <p>{ip}</p>
                  </div>

                  <div>
                        <h3>LOCATION</h3>
                        <p>{`${city} , ${country_name}`}</p>
                  </div>

                  <div>
                        <h3>TIMEZONE</h3>
                        <p>{`${timezone} , ${utc_offset}`}</p>
                  </div>

                  <div>
                        <h3>ISP</h3>
                        <p> {org}</p>
                  </div>

      </section>
      )
      
}

export default IpDataModal;