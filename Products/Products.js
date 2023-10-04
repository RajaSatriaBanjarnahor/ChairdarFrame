function searchProducts() {
       
    var searchText = document.getElementById('productSearchInput').value.toLowerCase();

    var productItems = document.querySelectorAll('.product-item');

    productItems.forEach(function(item) {
        var productName = item.querySelector('h2').innerText.toLowerCase();
        if (productName.includes(searchText)) {
          
            item.style.display = 'block';
        } else {
            
            item.style.display = 'none';
        }
    });
}

function filterProducts(category) {
   
    var productItems = document.querySelectorAll('.product-item');

   
    productItems.forEach(function(item) {
        var itemCategory = item.getAttribute('data-category');

        
        if ((category === 'category1' && itemCategory === 'Design Terbaru') ||
            (category === 'category2' && itemCategory === 'Design Favorit')) {
            
            item.style.display = 'block';
        } else {
            
            item.style.display = 'none';
        }
    });
}