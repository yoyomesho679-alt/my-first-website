// function Aver(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }
// console.log(Aver([10, 20, 30]));



// function N(){
//     let x = prompt('enter your number');
//     return x % 2 === 0
// }
//  document.writeln(N()); 



// function NUMBER(x) {
//   let result = [];

//   for (let i = 0; i < x.length; i++) {
//     if (x[i] % 2 === 0) {
//       result.push(x[i] * 2);
//     } else {
//       result.push(x[i]);
//     }
//   }

//   return result;
// }

// console.log(NUMBER([2, 5, 8, 9]));




//  function count(arr){
//   let coun = 0;

//   for(let x = 0; x < arr.length; x++){
//     if(arr[x] % 3 === 0){
//       coun++;
//     }
//   }
//   return coun;
// }

// console.log(count([3,5,6,9]));










let studentForm = document.getElementById("studentForm");
let nameInput = document.getElementById("Entername");
let ageInput = document.getElementById("inputAge");
let activeInput = document.getElementById("checkActive");
let tableBody = document.getElementById("tableBody");

let students = [];

studentForm.addEventListener("submit", function (e) {
  e.preventDefault(); 

  let student = {
    name: nameInput.value,
    age: ageInput.value,
    active: activeInput.checked ? "Yes" : "No"
  };

  students.push(student);
  displayStudents();
});

function displayStudents() {
  tableBody.innerHTML = "";

  for (let i = 0; i < students.length; i++) {
    tableBody.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${students[i].name}</td>
                <td>${students[i].age}</td>
                <td>${students[i].active}</td>
                <td>
                    <button class="btn btn-warning btn-sm">Edit</button>
                    <button class="btn btn-danger btn-sm">Delete</button>
                    <button class="btn btn-primary btn-sm">View</button>
                </td>
            </tr>
        `;
  }
} 
