<template>
  <div>
     

 <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <div class="container">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
               <ul class="navbar-nav ml-auto">
                  <li class="nav-item active">
                     <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" href="#">Features</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" href="#">Pricing</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" @click="showCart" data-toggle="modal" data-target="#exampleModal" ><i class="fas fa-cart-plus"></i>{{count}}</a>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
      <!-- Modal  popup-->
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div class="modal-dialog width_900" role="document">
            <div class="modal-content">
               <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Product</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                  </button>
               </div>
               <div class="modal-body">
                     <div class="d-flex product_detail" v-if="cartItems.length == 0">
                          <p> No Item In Your Cart.</p>
                         </div>
                  <div class="d-flex product_detail" v-if="cartItems.length != 0">
                       
                     <div class="product_item" v-for="(item,index) in cartItems"  :key="item.id">
                        <div class="card">
                           <div class="card-body `${index}`">
                              <div class="imgproduct-c">
                                <img :src="`${item.image}`" alt="" class="img-fluid">
                              </div>
                              <div class="txtproduct">
                              <h5 class="card-title"> {{item.title}} </h5>
                              <p>{{item.price}}/-</p>
                              <a href="#" class="btn btn-primary"  @click="removeItem(index)">Remove</a>
                              </div>
                           </div>
                        </div>
                     </div>

                    
                  </div>
               </div>
               <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
               </div>
            </div>
         </div>
      </div>
      <!-- card section -->
      <div class="container mt-5">
         <div class="row ">
            <div class="col-sm-4 mb-4">
               <div class="card">
                  <div class="card-body">
                     <img src="images/SS.png " alt="Card image cap" class="img-fluid">
                     <h5 class="card-title">Perfume</h5>
                     <p>5455/-</p>
  <a href="javascript:void(0)" @click="addToCart('images/SS.png','Perfume',5455,1)" class="btn btn-primary">ADD TO CART</a>
                  </div>
               </div>
            </div>
            <div class="col-sm-4 mb-4">
               <div class="card">
                  <div class="card-body">
                     <img src="images/SS2.png" alt="Card image cap" class="img-fluid">
                     <h5 class="card-title">Shoes</h5>
                     <p>99009/-</p>
                   <a href="javascript:void(0)" @click="addToCart('images/SS2.png','Shoes',99009,2)" class="btn btn-primary">ADD TO CART</a>
                  </div>
               </div>
            </div>
            <div class="col-sm-4 mb-4">
               <div class="card">
                  <div class="card-body">
                     <img src="images/SS3.png" alt="Card image cap " class="img-fluid">
                     <h5 class="card-title">Oil</h5>
                     <p>8988/-</p>
  <a href="javascript:void(0)" @click="addToCart('images/SS3.png','Oil',8988,3)" class="btn btn-primary">ADD TO CART</a>
                  </div>
               </div>
            </div>
            <div class="col-sm-4 mb-4">
               <div class="card">
                  <div class="card-body">
                     <img src="images/SS4.png " alt="Card image cap" class="img-fluid">
                     <h5 class="card-title">Oil 2</h5>
                     <p>455/-</p>
                       <a href="javascript:void(0)" @click="addToCart('images/SS4.png','Oil 2',455,4)" class="btn btn-primary">ADD TO CART</a>
                  </div>
               </div>
            </div>
            <div class="col-sm-4 mb-4">
               <div class="card">
                  <div class="card-body">
                     <img src="images/SS5.png" alt="Card image cap" class="img-fluid">
                     <h5 class="card-title">Cards</h5>
                     <p>766/-</p>
                      <a href="javascript:void(0)" @click="addToCart('images/SS5.png','Cards',766,5)" class="btn btn-primary">ADD TO CART</a>
                  </div>
               </div>
            </div>
            <div class="col-sm-4 mb-4">
               <div class="card">
                  <div class="card-body">
                     <img src="images/SS6.png" alt="Card image cap " class="img-fluid">
                     <h5 class="card-title">Cup</h5>
                     <p>1009/-</p>
                     <a href="javascript:void(0)" @click="addToCart('images/SS6.png','Cup',1009,6)" class="btn btn-primary">ADD TO CART</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
      </div>
</template>
 <style>
          .product_detail{
              flex-wrap:wrap;
          }
          
        .imgproduct-c {
    height: 114px;
    margin-right: 25px;
}

.product_item .card {
    width: 100%;
    border: none;
}
.product_item .card-body{
width:100%;
}
          
          .imgproduct-c img{
              width:100%;
              height:100%;
              object-fit:cover;
          }
        .product_item .card-body {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}
 .product_item {
    flex: 0 0 100%;
    max-width: 100%;
    display: flex;
    margin-bottom: 0px;
    border-bottom: #ddd 1px solid;
}
.txtproduct{

}
.imgproduct-c{

}
          </style>

<script>
 
  export default {
    name: 'cart',
      data() {
        return {
            cartItems: [],
            products:null,
            count : 0,
        }
    },
    mounted() {

      this.count = JSON.parse(localStorage.getItem('products')).length;
    },
 
    methods: {
         addToCart: function (img,title,price,id){
       this.products =    JSON.parse(localStorage.getItem('products'));
     
    
      if( this.products==null){
          var item =[];
      }else{
            
          item =  this.products
          var res = item.some(function (arrVal) {
            return id === arrVal.id;
        });
        if(res){
            alert('Product already in your cart.')
        }else{
item.push({'title':title,'image':img,'price':price,'id':id});
            console.warn(item);
              localStorage.setItem('products',JSON.stringify(item));
           
              this.count = this.products.length
        }
         
      }
            
       },

       showCart: function(){
            this.cartItems =  JSON.parse(localStorage.getItem('products'));
       },

       removeItem: function(index){
           this.products =  JSON.parse(localStorage.getItem('products'));
            this.products.splice(index, 1);
            this.cartItems= this.products
             this.count = this.products.length
             localStorage.setItem('products',JSON.stringify( this.products));
             

       }
       
    
}

}
</script>