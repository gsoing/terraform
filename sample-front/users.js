// A modifier en fonction de votre deploiment
const API_URL = 'https://manga-api-guillaume-6o49a90y.ew.gateway.dev'
const table = document.getElementById("users");
const tblBody = document.createElement("tbody");

addUser = async () => {
  const username = document.getElementById('username').value;
  const result = document.getElementById('result');

  // Vérifier si le champ n'est pas vide
  if (username.trim() === '') {
    console.log('Utilisateur manquant:', data);
    result.appendChild(document.createTextNode('Username is missing'))
    return;
  }

  const user = {
    name: username
  };

  try {
    const res = await fetch(`${API_URL}/v1/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    console.log(res);
    if (res.ok) {
      result.appendChild(document.createTextNode(`${username} is created`))
      addRow(user)
    }
  } catch (error) {
    console.error('Erreur lors de la création de l\'utilisateur:', error);
  }

};

addRow = (user) => {
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

initialize = async () => {
  try {
    const res = await fetch(`${API_URL}/v1/users`);
    if (!res.ok) {
      console.log(`Error while calling api ${response.status}`);
      return;
    }
    console.log('response', res);
    users = await res.json();
    console.log('users', users);
    if (users) {
      for (const user of users) {
        addRow(user);
      }
      table.appendChild(tblBody);
    }
  } catch (err) {
    console.log(`Error while calling api`, err);
  }
}

document.addEventListener('DOMContentLoaded', initialize, false);