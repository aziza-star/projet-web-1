// Message de bienvenue
window.onload = function() {
    if (confirm("Bienvenue dans notre salle de sport !")) {
      alert("Bonne visite !");
    } else {
      alert("À bientôt !");
    }
  };
  
  // Fonction de soumission de formulaire
  document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const errorMessage = document.getElementById("error-message");

    if (password !== confirmPassword) {
        errorMessage.textContent = "Les mots de passe ne correspondent pas.";
    } else if (password.length < 8) {
        errorMessage.textContent = "Le mot de passe doit contenir au moins 8 caractères.";
    } else {
        errorMessage.textContent = "";
        alert("Inscription réussie !");
        // Ici, on pourrait ajouter le code pour envoyer les données au serveur
    }
});

  
  // Exemple d'utilisation des événements pour l'image
  document.querySelectorAll('.clickable').forEach(function(image) {
    image.onmouseover = function() {
      this.style.border = '2px solid blue';
    };
    image.onmouseout = function() {
      this.style.border = 'none';
    };
  });
  