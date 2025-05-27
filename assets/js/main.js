var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productDescription = document.getElementById("productDesc");
var productImage = document.getElementById("productImage");
var productCategory = document.getElementById("productCat");
var productContainer = document.getElementById("productContainer");
var productList = [];


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
        <div class="col-md-3 mb-4 px-2"> <div class="product border border-warning gap-2">
                <img src="${productList[i].pImage}" class="w-100 object-fit-cover" alt="${productList[i].pName}">
                <h5 class="text-center">${productList[i].pName}</h5>
                <p class="text-center">${productList[i].pDescription}</p>
                <p class="text-center">${productList[i].pPrice}</p>
                <p class="text-center">${productList[i].pCategory}</p>
            </div>
        </div>`;
  }
  productContainer.innerHTML = box;
}
