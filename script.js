var years = document.querySelector(".caryears");
var make =document.querySelector(".make")
var model =document.querySelector(".model")
var founded=document.querySelector(".founded")
var find = document.querySelector(".find")
var color =document.querySelector(".color")
var pricemin=document.querySelector (".min")
var pricemax=document.querySelector(".max")

var arr = [
{
    make:"bmw",
    model:"550",
    years:2010,
    color:"black",
    price:2000,
 
},
{
    make:"bmw",
    model:"350",
    years:2012,
    color:"grey",
    price:1500
    
},
{
    make:"bmw",
    model:"550",
    years:2014,
    color:"white",
    price:1000
},
{
    make:"mercedes",
    model:"c250",
    years:2017,
    color:"black",
    price:8000
},
{
    make:"mercedes",
    model:"e200",
   
    color:"grey",
    years:2019,
    price:5000
},
{
    make:"audi",
    model:"Q7",
    years:2020,
    color:"grey",
    price:4000
},
{
    make:"audi",
    model:"Q6",
    years:2021,
    color:"grey",
    price:3000

}
]
var colorarr = []
for (var i of arr){
    colorarr.push(i.color)
}
colorarr =[... new Set (colorarr)]
for(var i of colorarr){
var coloropt =document.createElement("option")
coloropt.innerText=i
color.appendChild(coloropt)
}

var makearr = []

for ( var i of arr){
   makearr.push(i.make)
}
makearr= [... new Set(makearr)]
for (var i of makearr){ 
    var makeoption = document.createElement ("option")
makeoption.innerText =i
make.appendChild(makeoption)
}

var modelarr = []

for (var i of arr){
    modelarr.push(i.model)
}
modelarr= [... new Set(modelarr)]


make.addEventListener("change", function(){
    model.innerHTML= " <option >model</option>"
var x = arr.filter(i=> i.make == make.value)
x =[... new Set(x.map(i=> i.model))]
for( var i of x){
    var modelopt = document.createElement("option");
    modelopt.innerText = i;
    model.appendChild(modelopt)
}
})

var dt = new Date()
var newarr =arr;
for(var i = 1999; i <=dt.getFullYear(); i++){
    var yearopt = document.createElement("option")
    yearopt.innerText = i
    years.appendChild(yearopt)
}




find.addEventListener("click", function(){

newarr=arr
if (make.value == ""){
    newarr=arr
}else{
    newarr = newarr.filter(i=> i.make <= make.value)
}
if (model.value != ""){
    newarr = newarr.filter(i=> i.model == model.value)
}
if(years.value != ""){
    newarr = newarr.filter(i => i.years == years.value)
}
if(color.value != ""){
    newarr = newarr.filter(i=> i.color == color.value)
}
if(pricemin.value !=""){
    newarr = newarr.filter (i=> i.price >= pricemin.value)
}
if(pricemax.value !=""){
    newarr =newarr.filter(i=>i.price <= pricemax.value )
}
var pelement =document.createElement("p");

for(var i of newarr){
var narr=[i.make,i.model,i.color,i.price + "$",i.years]
    pelement.innerText = narr;
    founded.appendChild(pelement)
    console.log()
}



})

var reset =document.querySelector(".reset");
reset.addEventListener("click", function(){
  
founded.innerHTML =''

})
