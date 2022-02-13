function getPin(){
    let pin = Math.round(Math.random() * 10000);
    let pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function generatePin(){
    let pin = getPin();
    document.getElementById('display-input').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function(event){
    let number = event.target.innerText;
    console.log(number)
})