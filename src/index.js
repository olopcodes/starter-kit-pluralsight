import "./index.css";

import { getUsers } from "./api/userApi";

// populate table with users from api
getUsers().then((result) => {
  let userbody = "";
  result.forEach((user) => {
    userbody += `
      <tr>
        <td><a href="#" data-id="${user.id}" class="deleteUser">delete</a></td>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
      </tr>
    `;
  });

  global.document.getElementById("users").innerHTML = userbody;
});
