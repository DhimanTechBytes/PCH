document.addEventListener("DOMContentLoaded", function () {
    var products = [
        { title: "Suits", price: 690, image: "assets/1.jpg" },
        { title: "Suits", price: 690, image: "assets/2.jpg" },
        { title: "Suits", price: 690, image: "assets/3.jpg"  },
        { title: "Suits", price: 690, image: "assets/4.jpg"  },
        { title: "Suits", price: 690, image: "assets/5.jpg"  },
        { title: "Suits", price: 690, image: "assets/6.jpg"  },
        { title: "Suits", price: 690, image: "assets/7.jpg"  },
      
     
        
        // Add more products as needed
    ];

    // Function to create a card element
    function createCard(product) {
        var card = document.createElement("div");
        card.classList.add("col-md-4", "mb-4");
        card.innerHTML = `
            <div class="card">
                <img src="${product.image}" class="card-img-top img-fluid" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text" style="color:white;"> Starting From Rs.${product.price}</p>
                    <a href="reach.html" class="btn btn-primary"
                        style="background-color: #faf1b8; color: crimson;">Buy This</a>
                </div>
            </div>
        `;
        return card;
    }

    // Function to create a row and append cards to it
    function createRow(products) {
        var row = document.createElement("div");
        row.classList.add("row");

        products.forEach(function (product) {
            var card = createCard(product);
            row.appendChild(card);
        });

        return row;
    }

    function displayProducts() {
        var productsContainer = document.querySelector(".carousel");
        productsContainer.innerHTML = "";

        // Assume you want to display products in sets of 3
        var productsPerRow = 3;

        for (var i = 0; i < products.length; i += productsPerRow) {
            var rowProducts = products.slice(i, i + productsPerRow);
            var row = createRow(rowProducts);
            productsContainer.appendChild(row);
        }
    }

    function sortProductsBy(option) {
        switch (option) {
            case "priceHighToLow":
                products.sort(function (a, b) {
                    return b.price - a.price;
                });
                break;
            case "priceLowToHigh":
                products.sort(function (a, b) {
                    return a.price - b.price;
                });
                break;
            // Add more cases for other sorting criteria if needed
        }

        displayProducts();
    }

    // Initial display of products
    displayProducts();

    // Attach event listener to the sort dropdown
    var sortDropdown = document.getElementById("sortDropdown");
    sortDropdown.addEventListener("change", function () {
        var selectedOption = sortDropdown.value;
        sortProductsBy(selectedOption);
    });
});
