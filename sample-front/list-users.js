// use fetch to retrieve the products and pass them to init
// report any errors that occur in the fetch operation
// once the products have been successfully loaded and formatted as a JSON object
// using response.json(), run the initialize() function
const API_URL = 'https://manga-api-guillaume-5ns8dby0.ew.gateway.dev'
//const API_URL = 'http://localhost:3000'
fetch(`${API_URL}/v1/users`)
  .then( response => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then( json => initialize(json) )
  .catch( err => console.error(`Fetch problem: ${err.message}`) );

// sets up the app logic, declares required variables, contains all the other functions
initialize = (users) => {
 const table = document.getElementById("users");
 const tblBody = document.createElement("tbody");
 for (const user of users) {
  const row = document.createElement("tr");
  const nameCell = document.createElement("td");
  const idCell = document.createElement("td");
  const nameText = document.createTextNode(user.name);
  const idText = document.createTextNode(user.name);
  nameCell.appendChild(nameText);
  idCell.appendChild(idText);
  row.appendChild(idCell);
  row.appendChild(nameCell);
  tblBody.appendChild(row);
 }
  table.appendChild(tblBody);
}