
function number(num){
  var a=document.getElementById("input")
a.value+=num
}
function allCear(){
  var b=document.getElementById("input").value=""
}
function equal(){
  var d=document.getElementById("input").value
  f=eval(d)
  document.getElementById("input").value=f
}