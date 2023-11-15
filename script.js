function btn(num){
    cal.value+=num
}
function clearbox(){
    cal.value=""
}
function equ(){
    exp=cal.value
    output=eval(exp)
    cal.value=output

    // cal.value=eval(cal.value)
}
function dele(){
    cal.value=cal.value.slice(0,-1)
}
