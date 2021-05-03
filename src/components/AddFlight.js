import React, { Component } from 'react';
import '../App.css'
import './AddFlight.css';
import tableSort from './tableSort'



class AddFlight extends Component {
  

    _onMouseMove = (e) => {
    
        const move = this.refs.container1.addEventListener("mousemove" , (e)=>{
        let horizontal = (window.innerWidth / 2 -e.pageX) / 10;
        let vertical = (window.innerHeight / 2 - e.pageX) / 25;
        const mouse = this.refs.rock.style.transform = `rotateX(${vertical}deg) rotate(${horizontal}deg)`;
        const midMove = this.refs.earth.style.transform = `rotateX(${vertical}deg) rotate(${horizontal}deg)`;
        const aflightMove = this.refs.aflight.style.transform = `rotateX(${vertical}deg) rotate(${-horizontal}deg)`;


         
        const earthMove = this.refs.mid.style.transform = `rotateX(${vertical}deg) rotate(0deg)`;
         vertical = (window.innerHeight / 2 - e.pageX) / 60;
        const bgMove = this.refs.bg.style.transform = `rotateX(${-vertical}deg) rotate(0deg)`;
        });
    


        let fromV = this.refs.fromV.value;
        let toV = this.refs.toV.value;
        let departing = this.refs.departing1.value;
        let returning = this.refs.returning1.value;
        
        const showFlight = this.refs.buttonV.addEventListener("click", (e) =>{
          var btn= this.refs.buttonV;
          

  var i = 10;
  var int = setInterval(function() {
    window.scrollTo(0, i);
    i += 10;
    if (i >= 800) clearInterval(int);
  }, 7);

         
          if(fromV!="" && toV!="" && departing!="" && returning!=""){
          const Table2 = this.refs.table2.classList.add("form2--hidden");
          const Table1 = this.refs.table1.classList.remove("form2--hidden");
          }

          

        });

        const bookingPage = this.refs.bookButton.addEventListener("click", (e) =>{
         
          var btn= this.refs.bookButton;



  var i = 10;
  var int = setInterval(function() {
    window.scrollTo(0, i);
    i += 10;
    if (i >= 0) clearInterval(int);
  }, 7);
   
          const book = this.refs.container1.classList.add("form2--hidden");
          
          const pay = this.refs.container3.classList.remove("form4--hidden");

          let fromV = this.refs.fromV.value;
          let toV = this.refs.toV.value;
          let from1 = this.refs.fromV1;
          let to1 = this.refs.toV1;
          let from2 = this.refs.from2;
          let to2 = this.refs.to2;
          var btn= this.refs.confirmV;
          const totalCost = this.refs.totalCost;
          const taxes = this.refs.taxes;
          const passengerCost = this.refs.passengerCost;

          if(fromV == "chennai"|| fromV =="Chennai"||fromV =="CHENNAI"){

        
        console.log(a)
          var rate6 = 12005.00;
          var a=rate6/1.5;
          var a1=a.toFixed(2);
          var b=rate6/3;
          var b1=b.toFixed(2);
          passengerCost.textContent=a1;     
  totalCost.textContent=rate6.toFixed(2);
  taxes.textContent=b1;
      
          }
          if(fromV == "Bangalore"|| fromV =="bangalore"||fromV =="BANGALORE"||fromV == "Bengaluru"|| fromV =="bengaluru"||fromV =="BENGALURU"){

        
            console.log(a)
              var rate6 = 6065.00;
              var a=rate6/1.5;
              var a1=a.toFixed(2);
              var b=rate6/3;
              var b1=b.toFixed(2);
              passengerCost.textContent=a1;     
      totalCost.textContent=rate6.toFixed(2);
      taxes.textContent=b1;
          
              }
              if(fromV == "Delhi"|| fromV =="delhi"||fromV =="DELHI"){

        
                console.log(a)
                  var rate6 = 5499.00;
                  var a=rate6/1.5;
                  var a1=a.toFixed(2);
                  var b=rate6/3;
                  var b1=b.toFixed(2);
                  passengerCost.textContent=a1;     
          totalCost.textContent=rate6.toFixed(2);
          taxes.textContent=b1;
              
                  }
                  if(fromV == "mumbai"|| fromV =="MUMBAI"||fromV =="Mumbai"){

        
                    console.log(a)
                      var rate6 = 5499.00;
                      var a=rate6/1.5;
                      var a1=a.toFixed(2);
                      var b=rate6/3;
                      var b1=b.toFixed(2);
                      passengerCost.textContent=a1;     
              totalCost.textContent=rate6.toFixed(2);
              taxes.textContent=b1;
                  
                      }
                      if(fromV == "maldives"|| fromV =="MALDVIES"||fromV =="Maldives"){

        
                        console.log(a)
                          var rate6 = 12000.00;
                          var a=rate6/1.5;
                          var a1=a.toFixed(2);
                          var b=rate6/3;
                          var b1=b.toFixed(2);
                          passengerCost.textContent=a1;     
                  totalCost.textContent=rate6.toFixed(2);
                  taxes.textContent=b1;
                      
                          }
                          if(fromV == "bali"|| fromV =="BALI"||fromV =="Bali"){

        
                            console.log(a)
                              var rate6 = 13999.00;
                              var a=rate6/1.5;
                              var a1=a.toFixed(2);
                              var b=rate6/3;
                              var b1=b.toFixed(2);
                              passengerCost.textContent=a1;     
                      totalCost.textContent=rate6.toFixed(2);
                      taxes.textContent=b1;
                          
                              }

        });

        const bookingPage1 = this.refs.bookButton1.addEventListener("click", (e) =>{
         
          var btn= this.refs.bookButton1;
          

  var i = 10;
  var int = setInterval(function() {
    window.scrollTo(0, i);
    i += 10;
    if (i >= 0) clearInterval(int);
  }, 7);

         
          
          const book = this.refs.container1.classList.add("form2--hidden");
          
          const pay = this.refs.container3.classList.remove("form4--hidden");


          //aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

          let fromV = this.refs.fromV.value;
          let toV = this.refs.toV.value;
          let from1 = this.refs.fromV1;
          let to1 = this.refs.toV1;
          let from2 = this.refs.from2;
          let to2 = this.refs.to2;
          var btn= this.refs.confirmV;
          const totalCost = this.refs.totalCost;
          const taxes = this.refs.taxes;
          const passengerCost = this.refs.passengerCost;

          if(fromV == "chennai"|| fromV =="Chennai"||fromV =="CHENNAI"){

        
        console.log(a)
          var rate6 = 5660.00;
          var a=rate6/1.5;
          var a1=a.toFixed(2);
          var b=rate6/3;
          var b1=b.toFixed(2);
          passengerCost.textContent=a1;     
  totalCost.textContent=rate6.toFixed(2);
  taxes.textContent=b1;
      
          }
          if(fromV == "Bangalore"|| fromV =="bangalore"||fromV =="BANGALORE"||fromV == "Bengaluru"|| fromV =="bengaluru"||fromV =="BENGALURU"){

        
            console.log(a)
              var rate6 = 4505.00;
              var a=rate6/1.5;
              var a1=a.toFixed(2);
              var b=rate6/3;
              var b1=b.toFixed(2);
              passengerCost.textContent=a1;     
      totalCost.textContent=rate6.toFixed(2);
      taxes.textContent=b1;
          
              }
              if(fromV == "Delhi"|| fromV =="delhi"||fromV =="DELHI"){

        
                console.log(a)
                  var rate6 = 9878.00;
                  var a=rate6/1.5;
                  var a1=a.toFixed(2);
                  var b=rate6/3;
                  var b1=b.toFixed(2);
                  passengerCost.textContent=a1;     
          totalCost.textContent=rate6.toFixed(2);
          taxes.textContent=b1;
              
                  }
                  if(fromV == "mumbai"|| fromV =="MUMBAI"||fromV =="Mumbai"){

        
                    console.log(a)
                      var rate6 = 7999.00;
                      var a=rate6/1.5;
                      var a1=a.toFixed(2);
                      var b=rate6/3;
                      var b1=b.toFixed(2);
                      passengerCost.textContent=a1;     
              totalCost.textContent=rate6.toFixed(2);
              taxes.textContent=b1;
                  
                      }
                      if(fromV == "maldives"|| fromV =="MALDVIES"||fromV =="Maldives"){

        
                        console.log(a)
                          var rate6 = 15000.00;
                          var a=rate6/1.5;
                          var a1=a.toFixed(2);
                          var b=rate6/3;
                          var b1=b.toFixed(2);
                          passengerCost.textContent=a1;     
                  totalCost.textContent=rate6.toFixed(2);
                  taxes.textContent=b1;
                      
                          }
                          if(fromV == "bali"|| fromV =="BALI"||fromV =="Bali"){

        
                            console.log(a)
                              var rate6 = 14055.00;
                              var a=rate6/1.5;
                              var a1=a.toFixed(2);
                              var b=rate6/3;
                              var b1=b.toFixed(2);
                              passengerCost.textContent=a1;     
                      totalCost.textContent=rate6.toFixed(2);
                      taxes.textContent=b1;
                          
                              }
       
          

          

        });
        const bookingPage2 = this.refs.bookButton2.addEventListener("click", (e) =>{
         
          var btn= this.refs.bookButton2;
          

  var i = 10;
  var int = setInterval(function() {
    window.scrollTo(0, i);
    i += 10;
    if (i >= 0) clearInterval(int);
  }, 7);


         
          
          const book = this.refs.container1.classList.add("form2--hidden");
          
          const pay = this.refs.container3.classList.remove("form4--hidden");

       //aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          
       let fromV = this.refs.fromV.value;
       let toV = this.refs.toV.value;
       let from1 = this.refs.fromV1;
       let to1 = this.refs.toV1;
       let from2 = this.refs.from2;
       let to2 = this.refs.to2;
       var btn= this.refs.confirmV;
       const totalCost = this.refs.totalCost;
       const taxes = this.refs.taxes;
       const passengerCost = this.refs.passengerCost;

       if(fromV == "chennai"|| fromV =="Chennai"||fromV =="CHENNAI"){

     
     console.log(a)
       var rate6 = 8265.00;
       var a=rate6/1.5;
       var a1=a.toFixed(2);
       var b=rate6/3;
       var b1=b.toFixed(2);
       passengerCost.textContent=a1;     
totalCost.textContent=rate6.toFixed(2);
taxes.textContent=b1;
   
       }
       if(fromV == "Bangalore"|| fromV =="bangalore"||fromV =="BANGALORE"||fromV == "Bengaluru"|| fromV =="bengaluru"||fromV =="BENGALURU"){

     
         console.log(a)
           var rate6 = 7999.00;
           var a=rate6/1.5;
           var a1=a.toFixed(2);
           var b=rate6/3;
           var b1=b.toFixed(2);
           passengerCost.textContent=a1;     
   totalCost.textContent=rate6.toFixed(2);
   taxes.textContent=b1;
       
           }
           if(fromV == "Delhi"|| fromV =="delhi"||fromV =="DELHI"){

     
             console.log(a)
               var rate6 = 7899.00;
               var a=rate6/1.5;
               var a1=a.toFixed(2);
               var b=rate6/3;
               var b1=b.toFixed(2);
               passengerCost.textContent=a1;     
       totalCost.textContent=rate6.toFixed(2);
       taxes.textContent=b1;
           
               }
               if(fromV == "mumbai"|| fromV =="MUMBAI"||fromV =="Mumbai"){

     
                 console.log(a)
                   var rate6 = 6499.00;
                   var a=rate6/1.5;
                   var a1=a.toFixed(2);
                   var b=rate6/3;
                   var b1=b.toFixed(2);
                   passengerCost.textContent=a1;     
           totalCost.textContent=rate6.toFixed(2);
           taxes.textContent=b1;
               
                   }
                   if(fromV == "maldives"|| fromV =="MALDVIES"||fromV =="Maldives"){

     
                     console.log(a)
                       var rate6 = 13999.00;
                       var a=rate6/1.5;
                       var a1=a.toFixed(2);
                       var b=rate6/3;
                       var b1=b.toFixed(2);
                       passengerCost.textContent=a1;     
               totalCost.textContent=rate6.toFixed(2);
               taxes.textContent=b1;
                   
                       }
                       if(fromV == "bali"|| fromV =="BALI"||fromV =="Bali"){

     
                         console.log(a)
                           var rate6 = 14990.00;
                           var a=rate6/1.5;
                           var a1=a.toFixed(2);
                           var b=rate6/3;
                           var b1=b.toFixed(2);
                           passengerCost.textContent=a1;     
                   totalCost.textContent=rate6.toFixed(2);
                   taxes.textContent=b1;
                       
                           }
          

        });
        const bookingPage3 = this.refs.bookButton3.addEventListener("click", (e) =>{
         
          var btn= this.refs.bookButton3;
          

  var i = 10;
  var int = setInterval(function() {
    window.scrollTo(0, i);
    i += 10;
    if (i >= 0) clearInterval(int);
  }, 7);

         
          
          const book = this.refs.container1.classList.add("form2--hidden");
          
          const pay = this.refs.container3.classList.remove("form4--hidden");

       
          
//333333333333333333333333333333333333333333333333333333333333333333

   
let fromV = this.refs.fromV.value;
let toV = this.refs.toV.value;
let from1 = this.refs.fromV1;
let to1 = this.refs.toV1;
let from2 = this.refs.from2;
let to2 = this.refs.to2;
var btn= this.refs.confirmV;
const totalCost = this.refs.totalCost;
const taxes = this.refs.taxes;
const passengerCost = this.refs.passengerCost;

if(fromV == "chennai"|| fromV =="Chennai"||fromV =="CHENNAI"){


console.log(a)
var rate6 = 7805.00;
var a=rate6/1.5;
var a1=a.toFixed(2);
var b=rate6/3;
var b1=b.toFixed(2);
passengerCost.textContent=a1;     
totalCost.textContent=rate6.toFixed(2);
taxes.textContent=b1;

}
if(fromV == "Bangalore"|| fromV =="bangalore"||fromV =="BANGALORE"||fromV == "Bengaluru"|| fromV =="bengaluru"||fromV =="BENGALURU"){


  console.log(a)
    var rate6 = 8564.00;
    var a=rate6/1.5;
    var a1=a.toFixed(2);
    var b=rate6/3;
    var b1=b.toFixed(2);
    passengerCost.textContent=a1;     
totalCost.textContent=rate6.toFixed(2);
taxes.textContent=b1;

    }
    if(fromV == "Delhi"|| fromV =="delhi"||fromV =="DELHI"){


      console.log(a)
        var rate6 = 6500.00;
        var a=rate6/1.5;
        var a1=a.toFixed(2);
        var b=rate6/3;
        var b1=b.toFixed(2);
        passengerCost.textContent=a1;     
totalCost.textContent=rate6.toFixed(2);
taxes.textContent=b1;
    
        }
        if(fromV == "mumbai"|| fromV =="MUMBAI"||fromV =="Mumbai"){


          console.log(a)
            var rate6 = 8500.00;
            var a=rate6/1.5;
            var a1=a.toFixed(2);
            var b=rate6/3;
            var b1=b.toFixed(2);
            passengerCost.textContent=a1;     
    totalCost.textContent=rate6.toFixed(2);
    taxes.textContent=b1;
        
            }
            if(fromV == "maldives"|| fromV =="MALDVIES"||fromV =="Maldives"){


              console.log(a)
                var rate6 = 16500.00;
                var a=rate6/1.5;
                var a1=a.toFixed(2);
                var b=rate6/3;
                var b1=b.toFixed(2);
                passengerCost.textContent=a1;     
        totalCost.textContent=rate6.toFixed(2);
        taxes.textContent=b1;
            
                }
                if(fromV == "bali"|| fromV =="BALI"||fromV =="Bali"){


                  console.log(a)
                    var rate6 = 16500.00;
                    var a=rate6/1.5;
                    var a1=a.toFixed(2);
                    var b=rate6/3;
                    var b1=b.toFixed(2);
                    passengerCost.textContent=a1;     
            totalCost.textContent=rate6.toFixed(2);
            taxes.textContent=b1;
                
                    }
          

        });
        const bookingPage4 = this.refs.bookButton4.addEventListener("click", (e) =>{
         
          var btn= this.refs.bookButton4;
          

  var i = 10;
  var int = setInterval(function() {
    window.scrollTo(0, i);
    i += 10;
    if (i >= 0) clearInterval(int);
  }, 7);

         
          
          const book = this.refs.container1.classList.add("form2--hidden");
          
          const pay = this.refs.container3.classList.remove("form4--hidden");

       
          
//44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
   
let fromV = this.refs.fromV.value;
let toV = this.refs.toV.value;
let from1 = this.refs.fromV1;
let to1 = this.refs.toV1;
let from2 = this.refs.from2;
let to2 = this.refs.to2;
var btn= this.refs.confirmV;
const totalCost = this.refs.totalCost;
const taxes = this.refs.taxes;
const passengerCost = this.refs.passengerCost;

if(fromV == "chennai"|| fromV =="Chennai"||fromV =="CHENNAI"){


console.log(a)
var rate6 = 3499.00;
var a=rate6/1.5;
var a1=a.toFixed(2);
var b=rate6/3;
var b1=b.toFixed(2);
passengerCost.textContent=a1;     
totalCost.textContent=rate6.toFixed(2);
taxes.textContent=b1;

}
if(fromV == "Bangalore"|| fromV =="bangalore"||fromV =="BANGALORE"||fromV == "Bengaluru"|| fromV =="bengaluru"||fromV =="BENGALURU"){


  console.log(a)
    var rate6 = 14035.00;
    var a=rate6/1.5;
    var a1=a.toFixed(2);
    var b=rate6/3;
    var b1=b.toFixed(2);
    passengerCost.textContent=a1;     
totalCost.textContent=rate6.toFixed(2);
taxes.textContent=b1;

    }
    if(fromV == "Delhi"|| fromV =="delhi"||fromV =="DELHI"){


      console.log(a)
        var rate6 = 12005.00;
        var a=rate6/1.5;
        var a1=a.toFixed(2);
        var b=rate6/3;
        var b1=b.toFixed(2);
        passengerCost.textContent=a1;     
totalCost.textContent=rate6.toFixed(2);
taxes.textContent=b1;
    
        }
        if(fromV == "mumbai"|| fromV =="MUMBAI"||fromV =="Mumbai"){


          console.log(a)
            var rate6 = 4500.00;
            var a=rate6/1.5;
            var a1=a.toFixed(2);
            var b=rate6/3;
            var b1=b.toFixed(2);
            passengerCost.textContent=a1;     
    totalCost.textContent=rate6.toFixed(2);
    taxes.textContent=b1;
        
            }
            if(fromV == "maldives"|| fromV =="MALDVIES"||fromV =="Maldives"){


              console.log(a)
                var rate6 = 9590.00;
                var a=rate6/1.5;
                var a1=a.toFixed(2);
                var b=rate6/3;
                var b1=b.toFixed(2);
                passengerCost.textContent=a1;     
        totalCost.textContent=rate6.toFixed(2);
        taxes.textContent=b1;
            
                }
                if(fromV == "bali"|| fromV =="BALI"||fromV =="Bali"){


                  console.log(a)
                    var rate6 = 9499.00;
                    var a=rate6/1.5;
                    var a1=a.toFixed(2);
                    var b=rate6/3;
                    var b1=b.toFixed(2);
                    passengerCost.textContent=a1;     
            totalCost.textContent=rate6.toFixed(2);
            taxes.textContent=b1;
                
                    }
          

        });
        const bookingPage5 = this.refs.bookButton5.addEventListener("click", (e) =>{
         
          var btn= this.refs.bookButton5;
          

  var i = 10;
  var int = setInterval(function() {
    window.scrollTo(0, i);
    i += 10;
    if (i >= 0) clearInterval(int);
  }, 7);

         
          
          const book = this.refs.container1.classList.add("form2--hidden");
          
          const pay = this.refs.container3.classList.remove("form4--hidden");

//55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
   
let fromV = this.refs.fromV.value;
let toV = this.refs.toV.value;
let from1 = this.refs.fromV1;
let to1 = this.refs.toV1;
let from2 = this.refs.from2;
let to2 = this.refs.to2;
var btn= this.refs.confirmV;
const totalCost = this.refs.totalCost;
const taxes = this.refs.taxes;
const passengerCost = this.refs.passengerCost;

if(fromV == "chennai"|| fromV =="Chennai"||fromV =="CHENNAI"){


console.log(a)
var rate6 = 4999.00;
var a=rate6/1.5;
var a1=a.toFixed(2);
var b=rate6/3;
var b1=b.toFixed(2);
passengerCost.textContent=a1;     
totalCost.textContent=rate6.toFixed(2);
taxes.textContent=b1;

}
if(fromV == "Bangalore"|| fromV =="bangalore"||fromV =="BANGALORE"||fromV == "Bengaluru"|| fromV =="bengaluru"||fromV =="BENGALURU"){


  console.log(a)
    var rate6 = 4999.00;
    var a=rate6/1.5;
    var a1=a.toFixed(2);
    var b=rate6/3;
    var b1=b.toFixed(2);
    passengerCost.textContent=a1;     
totalCost.textContent=rate6.toFixed(2);
taxes.textContent=b1;

    }
    if(fromV == "Delhi"|| fromV =="delhi"||fromV =="DELHI"){


      console.log(a)
        var rate6 = 6599.00;
        var a=rate6/1.5;
        var a1=a.toFixed(2);
        var b=rate6/3;
        var b1=b.toFixed(2);
        passengerCost.textContent=a1;     
totalCost.textContent=rate6.toFixed(2);
taxes.textContent=b1;
    
        }
        if(fromV == "mumbai"|| fromV =="MUMBAI"||fromV =="Mumbai"){


          console.log(a)
            var rate6 = 5500.00;
            var a=rate6/1.5;
            var a1=a.toFixed(2);
            var b=rate6/3;
            var b1=b.toFixed(2);
            passengerCost.textContent=a1;     
    totalCost.textContent=rate6.toFixed(2);
    taxes.textContent=b1;
        
            }
            if(fromV == "maldives"|| fromV =="MALDVIES"||fromV =="Maldives"){


              console.log(a)
                var rate6 = 11565.00;
                var a=rate6/1.5;
                var a1=a.toFixed(2);
                var b=rate6/3;
                var b1=b.toFixed(2);
                passengerCost.textContent=a1;     
        totalCost.textContent=rate6.toFixed(2);
        taxes.textContent=b1;
            
                }
                if(fromV == "bali"|| fromV =="BALI"||fromV =="Bali"){


                  console.log(a)
                    var rate6 = 11450.00;
                    var a=rate6/1.5;
                    var a1=a.toFixed(2);
                    var b=rate6/3;
                    var b1=b.toFixed(2);
                    passengerCost.textContent=a1;     
            totalCost.textContent=rate6.toFixed(2);
            taxes.textContent=b1;
                
                    }       
          

          

        });

        const paymentPort = this.refs.confirmV.addEventListener("click", (e) =>{
         
         


  var i = 10;
  var int = setInterval(function() {
    window.scrollTo(0, i);
    i += 10;
    if (i >= 800) clearInterval(int);
  }, 7);

         
          
  
          

          

        });
        const submitPay = this.refs.confirmV1.addEventListener("click", (e) =>{
         const c1 = this.refs.c1.value;
         const c2 = this.refs.c2.value;
         const c3 = this.refs.c3.value;
         const c4 = this.refs.c4.value;
         const c5 = this.refs.c5.value;
        if(c1!=""&&c2!=""&&c3!=""&&c4!=""&&c5!="") 
        {
                 window.location.replace('https://codepen.io/souporserious/full/EoCjB')             
        
        }
        
                });
        

      


      
      
      
     /* 
        const Create = this.refs.linkCreateAccount.addEventListener("click", (e) =>{
          const loginForm = this.refs.form.classList.add("form--hidden");
          const createForm = this.refs.formC.classList.remove("form--hidden");
        });
        const clickCreate = this.refs.linkLogin.addEventListener("click", (e) =>{
          const loginForm = this.refs.form.classList.remove("form--hidden");
          const createForm = this.refs.formC.classList.add("form--hidden");
        });*/
        const enter = this.refs.container1.addEventListener("mouseenter" , (e)=>{
         const enterTransition = this.refs.container1.style.transition= ".1s";
          const dim = this.refs.rock.style.transform = "translateZ(110px)"
          const dimC = this.refs.earth.style.transform = "translateZ(1200px)"
        const slodim = this.refs.aflight.style.transform = "translateZ(120px)"
        const rocdim = this.refs.mid.style.transform = "translateZ(150px)"
        });    
       /* const leave = this.refs.container.addEventListener("mouseleave" , (e)=>{
          const leaveTransition = this.refs.box.style.transition= ".1s";
          const moveOut = this.refs.box.style.transform= "rotateY(0deg) rotateX(0deg)";
          const dim = this.refs.form.style.transform = "translateZ(0px)"
          const dimC = this.refs.formC.style.transform = "translateZ(0px)"
        const slodim = this.refs.slogan.style.transform = "translateZ(0px)"
        const rocdim = this.refs.rocket.style.transform = "translateZ(0px)"
    
        }); */
    
    }
 _onSearch = (e) => {
   
 
  
let fromV = this.refs.fromV.value;
let toV = this.refs.toV.value;
let from1 = this.refs.fromV1;
let to1 = this.refs.toV1;
let from2 = this.refs.from2;
let to2 = this.refs.to2;
let departing = this.refs.departing1.value;
let returning = this.refs.returning1.value;
let depart1 = this.refs.depart1;
let return1 = this.refs.return1;
let depart2 = this.refs.depart2;
let return2 = this.refs.return2;

let name1 = this.refs.name1;
let name2 = this.refs.name2;
let name3 = this.refs.name3;
let name4 = this.refs.name4;
let name5 = this.refs.name5;
let name6 = this.refs.name6;

let rate1 = this.refs.rate1;
let rate2 = this.refs.rate2;
let rate3 = this.refs.rate3;
let rate4 = this.refs.rate4;
let rate5 = this.refs.rate5;
let rate6 = this.refs.rate6;

let time1 = this.refs.time1;
let time2 = this.refs.time2;
let time3 = this.refs.time3;
let time4 = this.refs.time4;
let time5 = this.refs.time5;
let time6 = this.refs.time6;

depart1.textContent=departing;
return1.textContent=returning;
depart2.textContent=departing;
return2.textContent=returning;

if(fromV == "chennai"|| fromV =="Chennai"||fromV =="CHENNAI"){
from1.textContent="Chennai (CHE)"
from2.textContent="Chennai (CHE)"
name2.textContent="JetSpace"
name1.textContent="ExpressX"
name3.textContent="IndiaX"
name5.textContent="ExpressX"
name4.textContent="abcFly"
name6.textContent="JetSpace"

rate1.textContent="5660"
rate2.textContent="8265"
rate3.textContent="7805"
rate4.textContent="3499"
rate5.textContent="4999"
rate6.textContent="12005"

time1.textContent="24:34 - 13:39"
time2.textContent="19:00 - 16:04"
time3.textContent="24:19 - 10:49"
time4.textContent="22:19 - 8:49"
time5.textContent="21:19 - 18:49"
time6.textContent="15:40 - 20:55"

}
else if(fromV == "Bangalore"|| fromV =="bangalore"||fromV =="BANGALORE"||fromV == "Bengaluru"|| fromV =="bengaluru"||fromV =="BENGALURU"){
  from1.textContent="Bangalore (BLR)"
  from2.textContent="Bangalore (BLR)"
name1.textContent="JetSpace"
name2.textContent="ExpressX"
name3.textContent="IndiaX"
name4.textContent="ExpressX"
name5.textContent="IndiaX"
name6.textContent="abcFly"

rate1.textContent="4505"
rate2.textContent="7999"
rate3.textContent="8564"
rate4.textContent="14035"
rate5.textContent="4999"
rate6.textContent="6065"

time1.textContent="21:55- 12:15"
time2.textContent="19:00 - 16:04"
time3.textContent="10:00 - 15:00"
time4.textContent="22:19 - 8:49"
time5.textContent="13:30 - 19:15"
time6.textContent="16:40 - 20:55"
}
else if(fromV == "Delhi"|| fromV =="delhi"||fromV =="DELHI"){
  from1.textContent="Delhi (DEL)"
  from2.textContent="Delhi (DEL)"
name3.textContent="JetSpace"
name2.textContent="ExpressX"
name1.textContent="IndiaX"
name6.textContent="ExpressX"
name5.textContent="abcFly"
name4.textContent="SkyHigh"

rate1.textContent="9878"
rate2.textContent="7899"
rate3.textContent="6500"
rate4.textContent="12005"
rate5.textContent="6599"
rate6.textContent="5499"

time1.textContent="12:10 - 18:45"
time2.textContent="12:25 - 19:04"
time3.textContent="07:00 - 15:00"
time4.textContent="07:19 - 15:49"
time5.textContent="17:30 - 22:15"
time6.textContent="19:40 - 00:55"
  }
else if(fromV == "mumbai"|| fromV =="MUMBAI"||fromV =="Mumbai"){
    from1.textContent="Mumbai (BOM)"
    from2.textContent="Mumbai (BOM)"
    name2.textContent="JetSpace"
    name1.textContent="ExpressX"
    name3.textContent="IndiaX"
    name4.textContent="SkyHigh"
    name5.textContent="IndiaX"
    name6.textContent="JetSpace"
  
    rate1.textContent="7999"
    rate2.textContent="6499"
    rate3.textContent="8500"
    rate4.textContent="4500"
    rate5.textContent="5500"
    rate6.textContent="5499"

time1.textContent="07:10 - 12:45"
time2.textContent="10:25 - 17:04"
time3.textContent="09:00 - 17:00"
time4.textContent="07:19 - 23:49"
time5.textContent="15:30 - 19:15"
time6.textContent="11:40 - 18:55"

    }
else if(fromV == "maldives"|| fromV =="MALDVIES"||fromV =="Maldives"){
        from1.textContent="Maldives (GAN)"
        from2.textContent="Maldives (GAN)"
        name3.textContent="abcFly"
        name2.textContent="ExpressX"
        name1.textContent="IndiaX"
        name6.textContent="abcFly"
        name5.textContent="SkyHigh"
        name4.textContent="IndiaX"

        rate1.textContent="15000"
        rate2.textContent="13999"
        rate3.textContent="16500"
        rate4.textContent="9590"
        rate5.textContent="11565"
        rate6.textContent="12000"

time1.textContent="03:10 - 12:45"
time2.textContent="07:25 - 17:04"
time3.textContent="06:10 - 17:00"
time4.textContent="11:19 - 23:49"
time5.textContent="10:30 - 19:15"
time6.textContent="14:40 - 22:55"
        }
else if(fromV == "bali"|| fromV =="BALI"||fromV =="Bali"){
          from1.textContent="Bali (DPS)"
          from2.textContent="Bali (DPS)"
          name1.textContent="JetSpace"
          name2.textContent="SkyHigh"
          name3.textContent="IndiaX"
          name4.textContent="abcFly"
          name5.textContent="SkyHigh"
          name6.textContent="abcFly"

          rate1.textContent="14055"
        rate2.textContent="14990"
        rate3.textContent="16500"
        rate4.textContent="9499"
        rate5.textContent="11450"
        rate6.textContent="13999"

        time1.textContent="13:10 - 00:45"
time2.textContent="18:25 - 05:04+2days"
time3.textContent="12:00 - 03:00+2days"
time4.textContent="17:19 - 02:49+2days"
time5.textContent="13:30 - 04:15+2days"
time6.textContent="07:40 - 02:55+2days"
          }



if(toV == "chennai"|| toV =="Chennai"||toV =="CHENNAI"){
  to1.textContent="Chennai (CHE)"
  to2.textContent="Chennai (CHE)"
  }
  else if(toV == "Bangalore"|| toV =="bangalore"||toV =="BANGALORE"||toV == "Bengaluru"|| toV =="bengaluru"||toV =="BENGALURU"){
    to1.textContent="Bangalore (BLR)"
    to2.textContent="Bangalore (BLR)"
  }
  else if(toV == "Delhi"|| toV =="delhi"||toV =="DELHI"){
    to1.textContent="Delhi (DEL)"
    to2.textContent="Delhi (DEL)"
    }
  else if(toV == "mumbai"|| toV =="MUMBAI"||toV =="Mumbai"){
      to1.textContent="Mumbai (BOM)"
      to2.textContent="Mumbai (BOM)"
      }
  else if(toV == "maldives"|| toV =="MALDVIES"||toV =="Maldives"){
    to1.textContent="Maldives (GAN)"
    to2.textContent="Maldives (GAN)"
          }
  else if(toV == "bali"|| toV =="BALI"||toV =="Bali"){
    to1.textContent="Bali (DPS)"
    to2.textContent="Bali (DPS)"
            }
 



}


  _onSort = (e) => {



    function sortTableByColumn(table, column, asc = true) {
      const dirModifier = asc ? 1 : -1;
      const tBody = table.tBodies[0];
      const rows = Array.from(tBody.querySelectorAll("tr"));
  
      // Sort each row
      const sortedRows = rows.sort((a, b) => {
          const aColText = a.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();
          const bColText = b.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();
  
          return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier);
      });
  
      // Remove all existing TRs from the table
      while (tBody.firstChild) {
          tBody.removeChild(tBody.firstChild);
      }
  
      // Re-add the newly sorted rows
      tBody.append(...sortedRows);
  
      // Remember how the column is currently sorted
      table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
      table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-asc", asc);
      table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-desc", !asc);
  }
  
  document.querySelectorAll(".table-sortable th").forEach(headerCell => {
      headerCell.addEventListener("click", () => {
          const tableElement = headerCell.parentElement.parentElement.parentElement;
          const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
          const currentIsAscending = headerCell.classList.contains("th-sort-asc");
  
          sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
      });
  });
  





  }


  
    _parallax = (e) => {
      let Scene = this.refs.scene;
        let parallaxInstance = new (Scene)
    }
    
    render() {
     
        return (
             
            <div>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title> PLANETS</title>
            <link rel="stylesheet" href="style.css" />
            {/* Latest compiled and minified CSS */}
            <link rel="stylesheet" href="style.css" />
           
            {/* jQuery library */}
            {/* Popper JS */}
            {/* Latest compiled JavaScript form2--hidden*/}
            <div className="container1 "
            onMouseMove={this._onMouseMove}
            ref="container1"
            >{/*container*/}

            <section id="sectionone" className="screen ">
          <div id="scene"
          ref="scene"
          >
            <div data-depth="0.1" 
            ref="bg"
            
            className="bg">
              <img src="images/background.png" alt="" />
            </div>

            <div data-depth="0.2"
             ref="rock"
            
            className="rock1">
              <img src="images/rock.png" alt="" />
            </div>
            <div data-depth="0.2" 
            
            ref="earth"
            
            className="earth">
              <img src="images/earth.png" alt="" />
            </div>

            <div data-depth="0.2" 
            
            ref="earth1"
            
            className="earth1">
              <img src="images/Space-PNG-Pic.gif" alt="" />
            </div>


            <div data-depth="0.1"
            ref="aflight"
            
            className="aflight">
            <img src="images/aflight.png" alt="" />
            </div>

            <div data-depth="0.4" 
            ref="mid"
            className="mid">
              <img src="images/mid.png" alt="" />
            </div>
            <div data-depth="0.1" className="fore">
              <img src="images/foreground.png" alt="" />
            </div>
          </div>
        </section>


        

              <form className="form-group">{/*form*/}
                
                <div id="form1">{/*form*/}
                  <h5 className="text-white">Booking Details</h5>
                  <div id="input">{/*input*/}
                    <input type="text"
                    ref="fromV"
                    id="input-group" placeholder="From" />

                    <input type="text"
                    ref="toV"
                    id="input-group" placeholder="To" />
                    <div className="input-grp">
                        <label>Departing</label>
                    <input type="date" 
                    
                    ref="departing1"
                    
                    id="input-grp"  className="form-control select-date" />
                    </div>
                    <div className="input-grp">
                        <label>Returning</label>
                    <input type="date"
                     ref="returning1"
                    id="input-grp"  className="form-control select-date" />
                    </div>
                   
                    <select id="input-group" style={{background: 'black'}}>
                      <option value>Preffered Seating</option>
                      <option value>Economy Class</option>
                      <option value>Business Class</option>
                      <option value>First Class</option>
                    </select>
                  </div>{/*input*/}
                  <div id="input2">{/*input2*/}
                    <input type="number" id="input-group" placeholder="No. of Passengers" />

                  </div>{/*input2*/}
                  <div id="input3" className="input3grp">{/*input3*/}
                  
                    <h7 id="input-group" className="text-primary">Selct Your Fare</h7> 
                    
                    
                    <input type="radio" id="input-group" name="r" />
                    <label className="text-white" htmlFor="input-group">One Way</label>
                    <input type="radio" id="input-group" name="r" />
                    <label className="text-white" htmlFor="input-group">Round Trip</label>
                    
                  </div>{/*input3*/}
                  <div id="input4">{/*input4*/}
                   
                   
                  </div>{/*input4*/}
                  

            

                  <button type="reset" className="btn btn-primary">Clear All</button>

               

                </div>{/*form*/}

                

                
              </form>{/*form*/}

              <div id="form3" >
                  <button id="button"
            href="#page2"
            ref="buttonV"
            onClick = {this._onSearch}
            >Show Flights</button>

                </div>

              <table  id="page2"
              onMouseMove={this._onSearch}
              ref="table1"
             
              className="table-sortable form2--hidden" id="form2">
          <thead>
          <tr2>
              <th

              ref="fromV1"
              >FROM (FRM)</th>
             <i class=" fas fa-arrow-right "></i>


              <th
              ref="toV1"
              >WHERE (ToM)</th>
            </tr2>
            <tr3>
              <th
              ref="depart1"
              >depart</th>
             


              <th
              ref="return1"
              >return</th>
            </tr3>
            <tr1>
             
              <th
              ref="th"
              >Flight Name</th>
              <th
              ref="th"
              >Fare(rs)</th>
              <th
              ref="th"
              >Departure-Arrival</th>
            </tr1>
          </thead>
          <tbody>
            <tr>
      
              <td
              ref="name1"
              
              >Dom</td>
              <td ref="" >
              <i class="fas fa-rupee-sign"></i>
                </td>
              <td ref="rate1" >



                35</td>
              <td ref="time1">Web Developer</td>
              <button 
              ref="bookButton1"
              id="button"
              
              >Book</button>
            </tr>
            <tr>
             
              <td
              ref="name2"
              >Rebecca</td>
              <td ref="" >
              <i class="fas fa-rupee-sign"></i>
                </td>
              <td ref="rate2">29</td>
              <td ref="time2">Teacher</td>
              <button ref="bookButton2" id="button"
              
              >Book</button>
            </tr>
            <tr>
             
              <td ref="name3">John</td>
              <td ref="" >
              <i class="fas fa-rupee-sign"></i>
                </td>
              <td ref="rate3">30</td>
              <td ref="time3">Civil Engineer</td>
              <button ref="bookButton3" id="button">Book</button>
            </tr>
            <tr>
             
              <td ref="name4">Andre</td>
              <td ref="" >
              <i class="fas fa-rupee-sign"></i>
                </td>
              <td ref="rate4">20</td>
              <td ref="time4">Dentist</td>
              <button ref="bookButton4" id="button">Book</button>
            </tr>
            <tr>
              
              <td ref="name5">Andre</td>
              <td ref="" >
              <i class="fas fa-rupee-sign"></i>
                </td>
              <td ref="rate5">21</td>
              <td ref="time5">Dentist</td>
              <button ref="bookButton5" id="button">Book</button>
            </tr>
            <tr>
              
              <td ref="name6">Andre</td>
              <td ref="" >
              <i class="fas fa-rupee-sign"></i>
                </td>
              <td
              ref="rate6"
              >22</td>
              <td ref="time6">Dentist</td>
              <button ref="bookButton" id="button">Book</button>
            </tr>
          </tbody>
        
        </table>









        <table id="page2"
        onMouseMove={this._onSearch}
        ref="table2"
        className="table-sortable " id="form2">
          <thead>
         
            
            <tr1>
             
              <th
              ref="th"
              ><div class="fa-3x">
              <i class="fas fa-spinner fa-spin"></i>
              <i class="fas fa-circle-notch fa-spin"></i>

            </div>
            
            </th>
              <th
              ref="th"
              ><div class="fa-3x">
              
              <i class="fas fa-sync fa-spin"></i>
              <i class="fas fa-cog fa-spin"></i>
             
            </div>
            
            </th>
              <th
              ref="th"
              ><div class="fa-3x">
              
              <i class="fas fa-stroopwafel fa-spin"></i>
              <i class="fas fa-stroopwafel fa-spin"></i>
            </div></th>
            <th
              ref="th"
              ><div class="fa-3x">
              
              <i class="fas fa-spinner fa-spin"></i>
              <i class="fas fa-circle-notch fa-spin"></i>
            </div></th>
            <th
              ref="th"
              ><div class="fa-3x">
              
              <i class="fas fa-sync fa-spin"></i>
              <i class="fas fa-cog fa-spin"></i>
             
            </div>
            
            </th>
            </tr1>
          </thead>
          <tbody>
            <tr>
      
              <td
              ref="nameV1"
              
              > 
              <div class="fa-1x">
              <i class="fas fa-meh-rolling-eyes"></i>
              </div>
              </td>
              <td ref="" >
             
                </td>
              <td ref="rateV1" >



              FILL IN THE ABOVE EMPTY </td>
              <td ref="timeV1">_FIELDS_</td>
              
            </tr>
           
          </tbody>
        
        </table>
    
    <tableSort/>
    
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" />


</div>{/*container*/}
<div
ref="container3"
className="container3 form4--hidden">

<table  id="page2"
              onMouseMove={this._onSearch}
              ref=""
             
              className="table-sortable " id="form4">
          <thead>
          <tr2>
              <th

              ref=""
              >Passenger Details</th>


              
            </tr2>
            
          </thead>
          <tbody1>
          
            <tr>
             
              
              
               
                <input type="text"
                    ref=""
                    id="input-group" placeholder="1.First Name" />
                    <input type="text"
                    ref=""
                    id="input-group" placeholder="Last Name" />
             <td>
              <select id="input-group"  >
                      <option value>MALE</option>
                      <option value>FEMALE</option>
                      
                    </select>
                    <select id="input-group"  >
                      <option value>Indian</option>
                      <option value>a</option>
                      <option value>b</option>
                      <option value>c</option>
                      
                    </select>
                    </td>
                    <td>
                    <label>DOB:</label>
                    <input type="date"
                     ref=""
                     
                    id="input-grp"  className="form-control select-date" />
                    </td>
            </tr>
           
            <tr>
             

                <input type="text"
                    ref=""
                    id="input-group" placeholder="2.First Name" />
                    <input type="text"
                    ref=""
                    id="input-group" placeholder="Last Name" />
              <td>
    
              <select id="input-group"  >
                      <option value>MALE</option>
                      <option value>FEMALE</option>
                      
                    </select>
                    
                  
                    <select id="input-group"  >
                    <option value>Indian</option>
                      <option value>a</option>
                      <option value>b</option>
                      <option value>c</option>
                      
                    </select>
                    </td>
                    <td>
                    <label>DOB:</label>
                    <input type="date"
                     ref=""
                    id="input-grp"  className="form-control select-date" />
                    </td>
            </tr>
            <tr>
              

              
              <input type="text"
                    ref=""
                    id="input-group" placeholder="3.First Name" />
                    <input type="text"
                    ref=""
                    id="input-group" placeholder="Last Name" />
             <td>
              <select id="input-group"  >
                      <option value>MALE</option>
                      <option value>FEMALE</option>
                      
                    </select>
                    
                    <select id="input-group"  >
                    <option value>Indian</option>
                      <option value>a</option>
                      <option value>b</option>
                      <option value>c</option>
                    </select>
                    </td>
                    
                    <td>
                    <label>DOB:</label>
                    <input type="date"
                     ref=""
                    id="input-grp"  className="form-control select-date" />
                    </td>
            </tr>
          
                  <button id="button4"
            href="#page2"
            ref="confirmV"
            onClick = {this._onSearch}
            >Confirm</button>

               
           
          </tbody1>
        
        </table>
  
  

<div data-depth="0.1" 
            ref="bg"
            
            className="bg3">
              <img src="images/background.png" alt="" />
            </div>

            <div>
        <title>Checkout Card</title>
        <link href="https://www.soengsouy.com/favicon.ico" rel="icon" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        {/* library validate */}
        {/* style css */}
        <link rel="stylesheet" href="Style.css" />
        <h8>Payments:</h8>
        <div className="row">
          <div className="col-75">
            <div className="container">
              <form id="validate" action="/action_page.php">
                <div className="row">
                  <div className="col-50">
                    <h3>Contact Information</h3>
                    <label className="lab" htmlFor="fname"><i className="fa fa-user" /> Full Name</label>
                    <input type="text" className="int" id="fname" name="fullname" placeholder=""  required />
                    <label  className="lab"htmlFor="email"><i className="fa fa-envelope" /> Email</label>
                    <input type="text" className="int" id="email" name="email" placeholder="" required />
                    <label className="lab" htmlFor="adr"><i className="fa fa-address-card-o" /> Address</label>
                    <input type="text" className="int" id="adr" name="address" placeholder="" required />
                    <label  className="lab"htmlFor="city"><i className="fa fa-institution" /> City</label>
                    <input type="text" className="int" id="city" name="city" placeholder="" required />
                    <div className="row">
                      <div className="col-50">
                        <label className="lab" htmlFor="state">State</label>
                        <input type="text"className="int" id="state" name="state" placeholder="" required />
                      </div>
                      <div className="col-50">
                        <label className="lab" htmlFor="zip">Zip</label>
                        <input type="text"className="int" id="zip" name="zip"  required />
                      </div>
                    </div>
                  </div>
                  <div className="col-50">
                    <h3>Payment</h3>
                    <label className="lab" htmlFor="fname">Accepted Cards</label>
                    <div className="icon-container">
                      <i className="fa fa-cc-visa" style={{color: 'navy'}} />
                      <i className="fa fa-cc-amex" style={{color: 'blue'}} />
                      <i className="fa fa-cc-mastercard" style={{color: 'red'}} />
                      <i className="fa fa-cc-discover" style={{color: 'orange'}} />
                    </div>
                    <label className="lab" htmlFor="cname">Name on Card</label>
                    <input 
                    ref="c1"
                    type="text" className="int" id="cname" name="cardname" placeholder="" required />
                    <label className="lab" htmlFor="ccnum">Credit card number</label>
                    <input
                    ref="c2"
                    type="text" className="int" id="ccnum" name="cardnumber" placeholder="" required />
                    <label className="lab" htmlFor="expmonth">Exp Month</label>
                    <input
                    ref="c3"
                    type="text" className="int" id="expmonth" name="expmonth" placeholder="" required />
                    <div className="row">
                      <div className="col-50">
                        <label className="lab" htmlFor="expyear">Exp Year</label>
                        <input 
                        ref="c4"
                        type="text" className="int" id="expyear" name="expyear"  required />
                      </div>
                      <div className="col-50">
                        <label className="lab" htmlFor="cvv">CVV</label>
                        <input ref="c5" type="text" className="int" id="cvv" name="cvv"  required />
                      </div>
                    </div>
                  </div>
                </div>
                <label className="lab">
                  <input type="checkbox" className="int" defaultChecked="checked" name="sameadr" /> I confirm I have read and accept the Terms and Condition
                </label>
                <button id="button4"
            href="#page2"
            ref="confirmV1"
            onClick = {this._onSearch}
            >Click To Pay</button>
              </form>
            </div>
          </div>
          <div className="col-25">
            <div className="container4">
              <h3>Summary <span className="price" style={{color: 'darkorchid'}}><i class="fa fa-plane" aria-hidden="true"></i>
 <b>4</b></span></h3>
              <hr />
             
              <tr2>
              <th

              ref="from2"
              >FROM (FRM)</th>
             <i class=" fas fa-arrow-right "></i>


              <th
              ref="to2"
              >WHERE (ToM)</th>
            </tr2>
           <th></th>
            <tr3>
              <th
              ref="depart2"
              >depart</th>
             
             <th>--</th>

              <th
              ref="return2"
              >return</th>
            </tr3>
            <hr></hr>
            
  
              <p><a href="#">Passenger Cost</a> 
              <span1 
              ref="passengerCost"
              className="price">$1500</span1></p>
              <p><a href="#">Taxes</a> 
              <span2
              ref="taxes"
              className="price">$1400</span2></p>
              
             
          
              <p><a3>Total</a3> <span3 
              ref="totalCost"
              className="price" ><b>$12600</b></span3></p>
            </div>
          </div>
        </div>
        {/* script validate js */}
      </div>

</div>

          
          </div>
    
     
      
        );
        
       
    }
    
    
     
    }

export default AddFlight;