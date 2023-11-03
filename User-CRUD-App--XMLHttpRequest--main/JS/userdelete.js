// Delete - User

function userDelete(id) {
  const http = new XMLHttpRequest();
  http.open("DELETE", `https://jsonplaceholder.typicode.com/users/${id}`);
  http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  http.send();


  http.onreadystatechange = function () {
    if (this.readyState == 4) {
      getUser();
    }
  };
}


