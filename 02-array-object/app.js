// Theory

// const array = [1, 2, 3, 5, 40, 30];
// const arrayStrings = ["one", "two", "three", null, 12];

// const array = new Array(1, 2, 3, 5, 40, 30); //second way

// console.log(array.length);
// console.log(array[3]);
// console.log(array[array.length - 1]);
// array[0] = "Daun";
// console.log(array);
// array[array.length] = "Hello"; //No recommended

const inputElement = document.getElementById("title");
const createBtn = document.getElementById("create");
const listElement = document.getElementById("list");

// console.log(inputElement.value);

const notes = ["записать блок массив", "рассказать про теорию"];
function render() {
  listElement.insertAdjacentHTML(
    "beforeend",
    `
    <li
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <span>${notes[0]}</span>
         <span>
           <span class="btn btn-small btn-success">&check;</span>
           <span class="btn btn-small btn-danger">&times;</span>
         </span>
      </li>
      `
  );
  listElement.insertAdjacentHTML(
    "beforeend",
    `
    <li
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <span>${notes[1]}</span>
         <span>
           <span class="btn btn-small btn-success">&check;</span>
           <span class="btn btn-small btn-danger">&times;</span>
         </span>
      </li>
      `
  );
}
render();

createBtn.onclick = function () {
  // listElement.innerHTML = `<li
  //         class="list-group-item d-flex justify-content-between align-items-center"
  //       >
  //         <span>${inputElement.value}</span>
  //         <span>
  //           <span class="btn btn-small btn-success">&check;</span>
  //           <span class="btn btn-small btn-danger">&times;</span>
  //         </span>
  //       </li>`;
  if (inputElement.value.length === 0) {
    return;
  }

  listElement.insertAdjacentHTML(
    "beforeend",
    `
    <li
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <span>${inputElement.value}</span>
         <span>
           <span class="btn btn-small btn-success">&check;</span>
           <span class="btn btn-small btn-danger">&times;</span>
         </span>
      </li>
      `
  );

  inputElement.value = "";
};
