import Search from "../search/Search-box.component";
import IpDataModal from "../modal/api-data-modal.component";
import Map from "../map/map.component";

import './home.style.css'



const Home = ()=> {
 
      
            
    
      return (

            <>
                  <div className="container">
                  <h2 className="container-heading">IP Address Tracker</h2>

                        <Search />
                        <IpDataModal/>
                  </div>

                  <Map/>

               

               
        
                  
            </>
          )
          
        
      
}

// Home.contextType = myContext
export default Home;