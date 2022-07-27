export const fetchIpData = (ipAddress) => {

      try {
            
      
      const encodedParams = new URLSearchParams();
      encodedParams.append("my-url", `https://geo.ipify.org/api/v2/country,city?apiKey=at_Smon839gueImxFF1FydQoIk40NH1p&ipAddress=${ipAddress}`);
      
      const options = {
            method: 'POST',
            headers: {
                  'content-type': 'application/x-www-form-urlencoded',
                  'X-RapidAPI-Key': '05f1179be4mshfdce8c5340638d0p1a85f3jsn97608f89afcf',
                  'X-RapidAPI-Host': 'cors-proxy3.p.rapidapi.com'
            },
            body: encodedParams
      };
      
      fetch('https://cors-proxy3.p.rapidapi.com/api', options)
            .then(res => res.json())
            .then((data) => {
                   console.log(data);
                  return data
                  
            })
          
      .catch((e)=> console.log(`${e} is the error from the API`))

console.log('its evaluating')                   
}

catch (error) {

      console.log(error)
      alert(error)
      
}

}