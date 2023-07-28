function copierDansPressePapier() {
    // Créez un élément temporaire (un input) pour y placer le texte que vous voulez copier
    var tempInput = document.createElement("input");
    
    // Définissez la valeur du texte à copier
    tempInput.value = "QUSO5590";
    
    // Ajoutez l'élément temporaire au DOM
    document.body.appendChild(tempInput);
    
    // Sélectionnez le contenu de l'input
    tempInput.select();
    
    // Copiez le contenu sélectionné dans le presse-papier
    document.execCommand("copy");
    
    // Supprimez l'élément temporaire du DOM
    document.body.removeChild(tempInput);
  
    // Facultatif : Affichez un message pour indiquer que le texte a été copié
    alert("Le code parrainage a bien été copié dans le presse-papier !");
  }