check = prompt("give the palindrome")




function palindrome(check){
    //remove special characters

    removespecial = check.replace(/[^a-zA-z0-9]/g,"")

    var palindrome=removespecial.split("").reverse().join("")
    //alert(palindrome)

    if(removespecial==palindrome){
        document.getElementById("result").innerHTML =check +"is a palindrome"



    }
    else{
        document.getElementById("result").innerHTML =check +"is not a palindrome"

    }




}

palindrome(check)
