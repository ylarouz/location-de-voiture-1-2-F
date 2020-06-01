function revalidpass(){
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;
    var er = document.getElementById("erour");
    if(pass1 == pass2){
      text = "mot de passe correct";
      er.innerHTML = text;
      er.style.color = "green";
      return true;


    }else{
      text = "mot de passe incorrect";
      er.innerHTML = text;
      er.style.color= "red";
      return false;
    }
  }