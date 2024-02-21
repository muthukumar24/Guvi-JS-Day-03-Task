//Display all the country names, region, sub-region, population in cosole

// Creating XML Request object
const req = new XMLHttpRequest();
// What should i do and where i have to connect
req.open('GET', 'https://restcountries.com/v3.1/all')
// Sending the request to the server
req.send() 
// what to do when the request is completed successfully
req.onload = function (){
    const obj = JSON.parse(this.response)
    for(let ind = 0; ind < obj.length; ind++ )
    {
        console.log("Country Name:",obj[ind].name.common)
        console.log("Region:",obj[ind].region)
        console.log("Subregion:",obj[ind].subregion)
        console.log("Population:",obj[ind].population)
        console.log("================================")
    }
}