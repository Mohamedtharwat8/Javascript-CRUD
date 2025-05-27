var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productDescription = document.getElementById("productDesc");
var productImage = document.getElementById("productImage");
var productCategory = document.getElementById("productCat");
var productContainer = document.getElementById("productContainer");
var productList = [];
var addProductBtn = document.getElementById("addProductBtn");
var UpdateProductBtn = document.getElementById("UpdateProductBtn");

// Check if there are products in localStorage and load them

function addProduct() {
  var product = {
    pName: productName.value,
    pPrice: productPrice.value,
    pDescription: productDescription.value,
    pCategory: productCategory.value,
    pImage: `./img/${productImage.files[0]?.name}`,
  };

  // Get the selected file object from the input
  // const selectedFile = productImage.files[0];

  // Create a temporary URL for the selected file
  // const imageUrl = URL.createObjectURL(selectedFile);
  // product.pImage = imageUrl;

  productList.push(product);

  console.log(product);
  console.log(productList);
  displayProducts();
}

function displayProducts() {
  var box = ``;
  for (var i = 0; i < productList.length; i++) {
    box += `
        <div class="col-md-3 mb-4 px-2"> <div class="product border border-warning gap-2 position-relative">
                <img src="${productList[i].pImage}" class="w-100 object-fit-cover" alt="${productList[i].pName}">
                <h5 class="text-center">${productList[i].pName}</h5>
                <p class="text-center">${productList[i].pDescription}</p>
                <p class="text-center">${productList[i].pPrice}</p>
                <p class="text-center badge bg-info position-absolute top-0 end-0">${productList[i].pCategory}</p>
                <button class="btn btn-danger w-100" onclick="deleteProduct(${i})">Delete</button>
                <button class="btn btn-primary w-100"onclick="UpdateProduct(${i})" >Update</button>
            </div>
        </div>`;
  }
  productContainer.innerHTML = box;
}
function cleaForm() {
  productName.value = "";
  productPrice.value = "";
  productDescription.value = "";
  productCategory.value = "";
  productImage.value = "";
  console.log("Form cleared");
}

function UpdateProduct(i) {
  addProductBtn.classList.add("d-none");
  UpdateProductBtn.classList.remove("d-none");
  productName.value = productList[i].pName;
  productPrice.value = productList[i].pPrice;
  productDescription.value = productList[i].pDescription;
  productCategory.value = productList[i].pCategory;
  productImage.value = productList[i].pImage;
  productList.splice(i, 1);
  localStorage.setItem("products", JSON.stringify(productList));
  console.log("Product updated at index: " + i);
}

function finalUpdate() {
  console.log("Final update called");
  var product = {
    pName: productName.value,
    pPrice: productPrice.value,
    pDescription: productDescription.value,
    pCategory: productCategory.value,
    pImage: `./img/${productImage.files[0]?.name}`,
  };
  // Get the selected file object from the input
  // const selectedFile = productImage.files[0];
  // Create a temporary URL for the selected file
  // const imageUrl = URL.createObjectURL(selectedFile);
  // product.pImage = imageUrl;
  
}

function deleteProduct(index) {
  productList.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(productList));
  console.log("Product deleted at index: " + index);
  displayProducts();
}
