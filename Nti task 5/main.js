let productName = document.getElementById("productName");
let productDesc = document.getElementById("productDesc");
let productColor = document.getElementById("productColor");
let outOfStock = document.getElementById("outOfStock");

let addBtn = document.getElementById("addBtn");
let updateBtn = document.getElementById("updateBtn");
let tableBody = document.getElementById("tableBody");

let productsList = [];
let updatedIndex = null;

if (localStorage.getItem("products") !== null) {
  productsList = JSON.parse(localStorage.getItem("products"));
  displayProducts(productsList);
}

function addProduct() {
  if (productName.value === "" || productDesc.value === "") {
    alert("يرجى ملء جميع الحقول المطلوبة!");
    return;
  }

  let product = {
    name: productName.value,
    desc: productDesc.value,
    color: productColor.value,
    outOfStock: outOfStock.checked
  };

  productsList.push(product);
  localStorage.setItem("products", JSON.stringify(productsList));
  
  displayProducts(productsList);
  clearForm();
}

function displayProducts(list) {
  let tableRows = "";
  for (let i = 0; i < list.length; i++) {
    tableRows += `
      <tr>
        <td>${list[i].name}</td>
        <td>${list[i].desc}</td>
        <td>${list[i].color}</td>
        <td>${list[i].outOfStock ? "Yes" : "No"}</td>
        <td>
          <button onclick="setupUpdate(${i})">Update</button>
          <button onclick="deleteProduct(${i})">Delete</button>
        </td>
      </tr>
    `;
  }
  tableBody.innerHTML = tableRows;
}

function deleteProduct(index) {
  productsList.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(productsList));
  displayProducts(productsList);
}

function setupUpdate(index) {
  updatedIndex = index;
  productName.value = productsList[index].name;
  productDesc.value = productsList[index].desc;
  productColor.value = productsList[index].color;
  outOfStock.checked = productsList[index].outOfStock;

  addBtn.classList.add("hidden");
  updateBtn.classList.remove("hidden");
}

function saveUpdate() {
  productsList[updatedIndex].name = productName.value;
  productsList[updatedIndex].desc = productDesc.value;
  productsList[updatedIndex].color = productColor.value;
  productsList[updatedIndex].outOfStock = outOfStock.checked;

  localStorage.setItem("products", JSON.stringify(productsList));
  displayProducts(productsList);
  clearForm();

  addBtn.classList.remove("hidden");
  updateBtn.classList.add("hidden");
}

function clearForm() {
  productName.value = "";
  productDesc.value = "";
  productColor.value = "Red";
  outOfStock.checked = false;
}

function searchProducts(term) {
  let matchedProducts = [];
  for (let i = 0; i < productsList.length; i++) {
    if (productsList[i].name.toLowerCase().includes(term.toLowerCase())) {
      matchedProducts.push(productsList[i]);
    }
  }
  displayProducts(matchedProducts);
}var clickButton=document.getElementById("click")
clickButton.addEventListener("click",function(){
    console.log("click done");
    
})

var deleteButton=document.getElementById("delete")
deleteButton.addEventListener("dblclick",function(){
    console.log("delete done");
    
})