var theFormInput = document.getElementById("formInput");
var ipAddressInput = document.getElementById("ipAddress");
var locationInput = document.getElementById("location");
var timezoneInput = document.getElementById("timezone");
var ispInput = document.getElementById("isp");

const formEl = document.querySelector('form');



//------------------------------------------------------//
//       Get location data from API automatically       //
//------------------------------------------------------//

async function getData() {
    
    const apiURL =  "https://ipapi.co/json/"

    try {
    console.log("get the info automatically");
    
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

//------------------------------------------------------//
//                Event listener for form               //
//------------------------------------------------------//


formEl.onsubmit = (e) => {
    e.preventDefault();
    processForm();    
    e.target.reset();
}


//------------------------------------------------------//
//                Process form submission               //
//------------------------------------------------------//


function  processForm() {

    // 176.100.43.109 Van
    // 185.219.141.41 Seattle
    // 185.212.118.40 Toronto

    console.log("Processing form submission");

    let tempFormInput = formInput.value;

    console.log("Form input is: " + tempFormInput);

    getDataFromForm(tempFormInput);



}

//------------------------------------------------------//
//       Get location data from API from form input     //
//------------------------------------------------------//


async function getDataFromForm(formInput) {
    
    console.log("get data from form input");
    const apiURL2 =  "https://ipapi.co/" +  formInput + "/json";
    console.log(apiURL2);
    try {
        
        
        const response = await fetch(apiURL2, {cache: "no-cache"});
        const result = await response.json();
    
        if (response.ok) {
            console.log("the IP API result from form is: " , result);
           
            ipAddressInput.innerHTML = result.ip;
            
            locationInput.innerHTML = result.city;
            
            timezoneInput.innerHTML = result.
            timezone + " " + result.utc_offset;
            
            ispInput.innerHTML = result.org;
        }

    } catch (error) {
        if (error) throw error;
        console.log("IP address API error from form input ", error);
    
    }


}




