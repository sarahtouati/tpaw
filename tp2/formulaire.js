function validation ( )
{
document.getElementById("resultat").setAttribute("hidden",'hidden');
document.getElementById("error").setAttribute("hiden",'hidden');

    if (document.getElementById("Name").value.length < 5 ) { 
        document.getElementById("error").innerHTML = "Le nom doit contenir au moins 5 caractère !";
        document.getElementById("error").removeAttribute("hidden");
    }  

     
     else if(document.getElementById("Prénom").value.length < 5 ) { 
        document.getElementById("error").innerHTML = "Le prenom doit contenir au moins 5 caractère !";
        document.getElementById("error").removeAttribute("hidden"); 
    }    
      
     else if(document.getElementById("Adresse").value.length < 5 ) { 
        document.getElementById("error").innerHTML = "L'adresse doit contenir au moins 5 caractère !";
        document.getElementById("error").removeAttribute("hidden");
    }    
     
     else if(document.getElementById("Mail").value.length < 5 ) { 
        document.getElementById("error").innerHTML = "Le mail doit contenir au moins 5 caractère !";
        document.getElementById("error").removeAttribute("hidden");
    }    
     else {
        document.getElementById("resultat").removeAttribute("hidden");
        document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#Prénom").value;
   }
}
