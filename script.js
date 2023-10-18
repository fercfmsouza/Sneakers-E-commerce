//Toggle menu - responsive mobile
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const menuList = document.querySelector('#menu-list');
const overlay = document.querySelector('.overlay');

function openMenu() {
  menuIcon.style.display = 'none'; //menu icon disappear
  menuList.style.display = 'block'; //list appear
  closeIcon.style.display = 'block'; //close icon appear
  overlay.style.display = 'initial'; //open overlay
}

function closeMenu() {
  closeIcon.style.display = 'none'; //close icon disappear
  menuList.style.display = 'none'; //list disappear
  menuIcon.style.display = 'block'; //menu icon appear
  overlay.style.display = 'none'; //close overlay
}

/////////////////////////////////////////////////////////////////

//Loop through the images - mobile
const previousButton = document.querySelector('.arrow-previous');
const nextButton = document.querySelector('.arrow-next');
const mainImage = document.querySelector('#main-img');
const images = Array.from(document.querySelectorAll('#images a img'));
const lastImageIndex = images.length - 1;

// Initialize the image number
let currentImageNumber = 1;

// Function to update the main image
function updateMainImage() {
  mainImage.src = `./images/image-product-${currentImageNumber}.jpg`;

  // Remove the active class from all images
  images.forEach((image, index) => {
    if (index + 1 === currentImageNumber) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  });
}

// Event listener for the "next" button
nextButton.addEventListener('click', (e) => {
  e.stopPropagation();

  if (currentImageNumber === lastImageIndex + 1) {
    currentImageNumber = 1;
  } else {
    currentImageNumber++;
  }

  updateMainImage(currentImageNumber);
});

// Event listener for the "previous" button
previousButton.addEventListener('click', (e) => {
  e.stopPropagation();

  if (currentImageNumber === 1) {
    currentImageNumber = lastImageIndex + 1;
  } else {
    currentImageNumber--;
  }

  updateMainImage(currentImageNumber);
});

/////////////////////////////////////////

// Event listeners for individual images - big screen
images.forEach((image, index) => {
  image.addEventListener('click', () => {
    currentImageNumber = index + 1;
    updateMainImage(currentImageNumber);
  });
});

/////////////////////////////////////////

const imageModal = document.getElementById('imageModal');
const overlayModal = document.getElementById('overlay');
const modalMainImage = document.getElementById('modal-main-img');

// Function to open the modal - big screen
function openModal() {
  modalMainImage.src = mainImage.src; // Set modal image source
  imageModal.style.display = 'block';
  overlayModal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
  imageModal.style.display = 'none';
  overlayModal.style.display = 'none';
}

// Event listener for opening the modal on main image click
mainImage.addEventListener('click', () => {
  openModal();
});

// Event listener for closing the modal on close button click
const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', () => {
  closeModal();
});

/////////////////////////////////////////

//Loop through the images - modal
const previousModalButton = document.querySelector('.arrow-previous-modal');
const nextModalButton = document.querySelector('.arrow-next-modal');
const mainImageModal = document.querySelector('#modal-main-img');
const allModalImages = Array.from(
  document.querySelectorAll('#modal-images a img'),
);
const lastImageModalIndex = allModalImages.length - 1;

// Initialize the image number
let currentImageModalNumber = 1;

// Function to update the main image - modal
function updateMainModalImage() {
  mainImageModal.src = `./images/image-product-${currentImageModalNumber}.jpg`;

  // Remove the active class from all images - modal
  allModalImages.forEach((image, index) => {
    if (index + 1 === currentImageModalNumber) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  });
}

// Event listener for the "next" button - modal
nextModalButton.addEventListener('click', (e) => {
  e.stopPropagation();

  if (currentImageModalNumber === lastImageModalIndex + 1) {
    currentImageModalNumber = 1;
  } else {
    currentImageModalNumber++;
  }

  updateMainModalImage(currentImageModalNumber);
});

// Event listener for the "previous" button - modal
previousModalButton.addEventListener('click', (e) => {
  e.stopPropagation();

  if (currentImageModalNumber === 1) {
    currentImageModalNumber = lastImageModalIndex + 1;
  } else {
    currentImageModalNumber--;
  }

  updateMainModalImage(currentImageModalNumber);
});

// Event listeners for individual images - modal
allModalImages.forEach((image, index) => {
  image.addEventListener('click', () => {
    currentImageModalNumber = index + 1;
    updateMainModalImage(currentImageModalNumber);
  });
});

/////////////////////////////////////////////////////////////////

//Add or Remove Itens from the Cart
const removeItemButton = document.querySelector('#remove');
const addItemButton = document.querySelector('#add');
const numberOfItems = document.querySelector('#quantityItem');
const cartIcon = document.querySelector('.img-cart');
const addItemToCartButton = document.querySelector('.add-button');
const list = document.querySelector('.list');
const price = document.querySelector('#price');
const modalCart = document.querySelector('.cart-modal');
const cartItemPrice = document.querySelector('.cart-item-price');
const cartItemQuantity = document.querySelector('.cart-item-quantity');
const cartTotal = document.querySelector('.cart-total');
const cartItemDelete = document.querySelector('.cart-delete');
const cartContent = document.querySelector('.cart-content');
const checkoutButton = document.querySelector('.checkout-button');
const cartEmptyText = document.querySelector('.cart-empty-text');

let counter = 0;

addItemButton.addEventListener('click', (e) => {
  e.stopPropagation();

  counter++;
  numberOfItems.textContent = counter;
});

removeItemButton.addEventListener('click', (e) => {
  e.stopPropagation();

  if (counter <= 0) {
    return;
  }

  counter--;
  numberOfItems.textContent = counter;
});

let itemQuantity;
let newItem = document.createElement('p');

// ADD TO CART BUTTON - Add an event listener to the button
addItemToCartButton.addEventListener('click', (e) => {
  e.stopPropagation();

  newItem.textContent = numberOfItems.textContent;
  counter = 0;

  if (newItem.textContent === '0') {
    return;
  } else {
    list.appendChild(newItem);
    newItem.classList.add('item');
  }
  console.log(`Cart content 1: ${cartContent}`);
});

//CART ICON CLICK
cartIcon.addEventListener('click', (e) => {
  e.stopPropagation();

  modalCart.style.display = 'block';

  if (numberOfItems.textContent !== '0') {
    cartItemPrice.textContent = price.textContent;
    cartItemQuantity.textContent = numberOfItems.textContent;
    cartTotal.textContent = `$${
      Number(cartItemPrice.textContent.replace('$', '')) *
      Number(cartItemQuantity.textContent)
    }`;

    cartContent.style.display = 'flex';
    cartEmptyText.style.display = 'none';
    checkoutButton.style.display = 'block';
  } else {
    cartContent.style.display = 'none';
    cartEmptyText.style.display = 'block';
    checkoutButton.style.display = 'none';
  }

  console.log(`cart price: ${price.textContent}`);
  console.log(`cart quantity: ${numberOfItems.textContent}`);
  console.log(`cart total: ${cartTotal.textContent}`);
  console.log(`cart content: ${cartContent.innerHTML}`);
});

//TO DELETE ITEMS FROM THE CART
cartItemDelete.addEventListener('click', (e) => {
  e.stopPropagation();

  cartContent.style.display = 'none';
  cartEmptyText.style.display = 'block';
  checkoutButton.style.display = 'none';
  numberOfItems.textContent = counter;
  newItem.remove();
});

//If the users clicks outside of the modal, then closes the modal
document.body.addEventListener('click', (e) => {
  if (e.target !== modalCart && !modalCart.contains(e.target)) {
    modalCart.style.display = 'none';
  }
});
