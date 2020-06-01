
  // start valide full name
  function validename(){
    var name = document.getElementById('name').value;
    var er = document.getElementById('erreur1');
    if(name.match(/^[A-Za-z ]{7,18}$/)){
      text = "le nom est valide";
      er.innerHTML = text;
      er.style.color = "green";
      return true;
    }else{
      text = "le nom n'est pas valide";
      er.innerHTML = text;
      er.style.color = "red";
      return false;
    }
  }
   // end valide full name

// start validation email
function validemail(){
  var email = document.getElementById('email').value;
  var er = document.getElementById('erreur2');
  if (email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    text = "l'email est valide";
    er.innerHTML = text;
    er.style.color = "green";
    return true;
  }else{
    text = "l'email est invalide";
    er.innerHTML = text;
    er.style.color = "red";
    return false;
    
  }

}
// end validation email
// start valid pass
function validpass(){
  var pass = document.getElementById("pass1").value;
  var er = document.getElementById('erreur3');
  if(pass.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")){
    text = "le mot de passe est valide";
    er.innerHTML = text;
    er.style.color = "green";
    return true;
  }else{
    text = " le mot de passe est invalide";
    er.innerHTML = text;
    er.style.color = "red";
    return false;
  }
}
// end valid pass

  // start revalidpass
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
      text = "veuillez saisir une deuxieme fois votre mot de passe";
      er.innerHTML = text;
      er.style.color= "red";

      return false;
    }
  }
  // end revalidpass
  // start submit validation
  function validation(){
    // var btn = document.getElementById('sub');
    if( validename() == true && validemail() == true && validpass() == true && revalidpass() == true){
      alert('vos informations ont bien été envoyées ');
    }else{
      alert("vos informations n'ont pas été envoyées");
    }
  }
    // end submit validation
