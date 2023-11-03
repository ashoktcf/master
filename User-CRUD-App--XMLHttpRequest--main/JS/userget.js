//Get - User

function getUser() {
  const http = new XMLHttpRequest();
  http.open("GET", "https://jsonplaceholder.typicode.com/users");
  http.send();
  http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const userData = JSON.parse(this.response);
      // console.log(userData[0])
      let tr = '';
      for (let data of userData) {
        tr += `<tr>`;
        tr += `<td> ${data['id']}</td>`;
        // tr += `<td><img width="50px" src= "${data['name']}" class="avatar"></td>`;
        tr += `<td> ${data['name']}</td>`;
        tr += `<td> ${data['username']}</td>`;
        tr += `<td> ${data['email']}</td>`;
        tr += `<td><button type="button" class="btn btn-outline-secondary" onclick="showUserEditBox(${data['id']})">Edit</button>`;
        tr += `<button type="button" class="btn btn-outline-danger" onclick="userDelete(${data['id']})">Del</button></td>`;
        tr += `</tr>`;
      }
      document.getElementById("mytable").innerHTML = tr;
    }
  };
}

getUser();
