$(document).ready(function(){
    var data = [
        {
            "name" : "PHO BO",
            "category" : "6:00 - 11:30 AM",
            "price" : "50.29",
            "imgSrc" : "img/instagram/phobo.jpg",
            "link"  : "phobo.html"
        },
        {
            "name" : "BANH MI THIT",
            "category" : "6:00 - 11:30 AM",
            "price" : "102.11",
            "imgSrc" : "img/instagram/banhmithit.jpg",
            "link" : "banhmi.html"
        },
        {
            "name" : "BANH CUON",
            "category" : "6:00 - 11:30 AM",
            "price" : "15.00",
            "imgSrc" : "img/instagram/banhcuon.jpg",
            "link" : "banhcuon.html"
        },
        {
            "name" : "MI QUANG",
            "category" : "6:00 - 11:30 AM",
            "price" : "23.75",
            "imgSrc" : "img/instagram/miquang.jpg",
            "link" : "miquang.html"
            
        },
        {
            "name" : "COM TAM",
            "category" : "12:00 - 14:30 PM",
            "price" : "50.00",
            "imgSrc" : "img/instagram/comtam.jpg",
"link" : "pizza.html"
        },
        {
            "name" : "SUSHI",
            "category" : "12:00 - 14:30 PM",
            "price" : "200.50",
            "imgSrc" : "img/instagram/shushi.jpg",
            "link" : "sushi.html"
        },
        {
            "name" : "COM CHIEN HAI SAN",
            "category" : "12:00 - 14:30 PM",
            "price" : "5.50",
            "imgSrc" : "img/instagram/comchienhaisan.jpg",
            "link" : "comchienhaisan.html"
        },
        {
            "name" : "CANH CU SEN",
            "category" : "12:00 - 14:30 PM",
            "price" : "5.50",
            "imgSrc" : "img/instagram/canhcusen.jpg",
            "link" : "canhsen.html"
        },
        {
            "name" : "GA SOT CAY",
            "category" : "17:30 - 23:00 PM",
            "price" : "49.00",
            "imgSrc" : "img/instagram/gasotcay.jpg",
            "link" : "gasotcay.html"
        },
        {
            "name" : "BO BIT TET",
            "category" : "17:30 - 23:00 PM",
            "price" : "60.99",
            "imgSrc" : "img/instagram/bobittet.jpg",
            "link" : "bobittet.html"
        },
        {
            "name" : "SPAGHETTI",
            "category" : "17:30 - 23:00 PM",
            "price" : "69.20",
            "imgSrc" : "img/instagram/spaghetti.jpg",
            "link" : "spaghetti.html"
        },
        {
            "name" : "PIZZA",
            "category" : "17:30 - 23:00 PM",
            "price" : "224.99",
            "imgSrc" : "img/instagram/pizza.jpg",
            "link" : "pizza.html"
        }];

$('#txt-search').keyup(function(){
    var searchField = $(this).val();
    if(searchField === '')  {
        $('#filter-records').html('');
        return;
    }
    
    var regex = new RegExp(searchField, "i");
    var output = '<div class="row">';
    var count = 1;
      $.each(data, function(key, val){
        if ((val.price.search(regex) != -1) || (val.name.search(regex) != -1) || (val.category.search(regex) != -1) || (val.price.search(regex) != -1)){
            output += '<div class="col-lg-3 col-md-6 col-sm-6">';
            output += '<div class = "product-item"><div class = "product-img"><img src="'+val.imgSrc+'" alt="'+ val.name +'" />';
            output += '<button class="btn btn-warning btn-lg active add-to-cart-btn2"><i class="fas fa-search"></i><a href="'+val.link+'" style="color: white;">INFO</a></button></div>'
            output += '<div class = "product-content">';
            output += '<h3 class = "product-name">'+ val.name +'</h3>'
            output += '<span class = "product-category">' +val.category+ '</span>';
            output += '<p class = "product-price">$'+val.price+'</p>';
            output += '</div>';
            output += '</div>';
            output += '</div>';
          if(count %4 == 0){
            output += '</div><div class="row">'
          }
          count++;
        }
      });
      output += '</div>';
      $('#filter-records').html(output);
});
});
