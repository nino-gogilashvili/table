
function getRandompost() {
  fetch("http://jsonplaceholder.typicode.com/posts", {
    headers: {
      Accept: "application/json",
    },
  })
    .then(res => res.json())
    .then( j => displaypost(j))
   
     }

function displaypost(data) {
let table = document.querySelector('#tbl')
for (let i = 0; i < data.length; i++) {
    let row = `<tr>
      <td>${data[i].userId}</td>
      <td>${data[i].id}</td>
      <td>${data[i].title}</td>
      <td>${data[i].body}</td>
    </tr>`
    table.innerHTML += row 
    

}}
window.onload = function () {
  getRandompost();
};



