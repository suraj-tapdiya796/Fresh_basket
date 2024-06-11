// Creating dynamic javascript code which will generate header and footer for all pages

function forHeader()
{
    var htmlhead =
    `
    <!-- For Top Header -->
        <header class="header" >
        <div class="container">
            <a href="#" class="logo">
                <img src="logo img .png" alt="Fresh Basket">
            </a>
            <div class="search-container">
                <input type="search" class="search-input" placeholder="Search for Dairy products, Vegetables, Fruits...">
                <i class="fas fa-search search-icon"></i>
            </div>
            <div class="icons">
                <a href="index.html" class="icon-link"><i class="fa-solid fa-house" style="color: #0c0d0d;"></i></i></a>
                <a href="#" class="icon-link"><i class="fa-solid fa-cart-shopping" style="color: #0d0d0d;"></i></i></a>
            </div>
        </div>
    </header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Home</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="dairy.html">Dairy Products</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="vegetable.html">Vegetables</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="fruit.html">Fruits</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="more.html">More</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about.html">About us</a>
                    </li>
                </ul>
            </div>
        </div>
                `
        ;
        // Return the header HTML code
        return htmlhead;
        }


function forFooter() {
var footerHTML=`

<footer class="bg-dark text-white mt-4">
        <div class="card text-center bg-dark text-white">
            <div class="card-body">
                <h5 class="card-title">For Any Queries</h5>
                <p class="card-text">Feel free to</p>
                <a href="contact.html" class="btn btn-primary">Contact us</a>
            </div>
            <div class="footer text-center p-2">
                2024&copy; Suraj_Creation
            </div>
        </div>
    </footer>
`; 
 return footerHTML;
        }
// Ffunction for inserting header and footer
function insertHeader() {
    // Get the header element of the current page
    var headerElement = document.querySelector('header')
    var htmlhead = forHeader();
    headerElement.innerHTML = htmlhead;
    
}
function insertfooter(){
    var footerElement = document.querySelector('footer')
    var footerhtml = forFooter();
    footerElement.innerHTML = footerhtml;
}
  
// Call the insertHeader function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', insertfooter);
document.addEventListener('DOMContentLoaded', insertHeader);
