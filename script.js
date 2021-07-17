fetch("https://60efffc4f587af00179d3c31.mockapi.io/users")
    .then((data) => {
        return data.json();
    })
    .then((users) => userdata(users));

function userdata(eachUsers) {
    const userList = document.createElement("div");
    userList.setAttribute("class", "layout");
    eachUsers.forEach((user) => {
        const userContainer = document.createElement("div");

        userContainer.setAttribute("class", "singleUser");

        userContainer.innerHTML = `
      <h3 class="user-name">${user.name}</h3>
      <img src=${user.avatar}> </img>
      <p >${user.createdAt}</p>
      `;

        userList.append(userContainer);
    });

    document.body.append(userList);
}