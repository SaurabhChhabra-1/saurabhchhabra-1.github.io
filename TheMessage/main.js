function myfunction()   {
    const text=  document.getElementById("text");
    if  (text.value == '') {
    document.getElementById("error").style.display = "block";
    setTimeout(function(){
        document.getElementById("error").style.display = "none";
    }, 1000)
    } else {
        document.getElementById("result").innerHTML = text.value;
        text.value = '';
        
    }
}