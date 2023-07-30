var ipAddressInput = document.getElementById("ipAddress");
var locationInput = document.getElementById("location");
var timezoneInput = document.getElementById("timezone");
var ispInput = document.getElementById("isp");

/**
 *  Get location data from API
 */

async function getData() {

    const apiURL =  "https://ipapi.co/json/"
      
    try {
        const response = await fetch(apiURL, {cache: "no-cache"});
        const result = await response.json();
    
        if (response.ok) {
            console.log("the IP API result is: " , result);
           
            ipAddressInput.innerHTML = result.ip;
            
            locationInput.innerHTML = result.city;
            
            timezoneInput.innerHTML = result.
            timezone + " " + result.utc_offset;
            
            ispInput.innerHTML = result.org;


        }

    } catch (error) {
        if (error) throw error;
        console.log("IP address API error ", error);
    
    }
}
