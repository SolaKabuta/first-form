// document.getElementById('registrationForm').addEventListener('submit', function(event) {
//     event.preventDefault(); //ajoute un écouteur d'événement sur le formulaire pour intercepter la soumission et empêcher son comportement par défaut. Décomposons-le en détail

//     const user = {
//         nom: document.getElementById('name').value.trim(),//Sélectionne l'élément HTML <input> qui a l'ID "nom" //.value : Récupère la valeur saisie par l'utilisateur.//.trim() : Supprime les espaces avant et après la valeur
//         prenom: document.getElementById('second-name').value.trim(),
//         email: document.getElementById('mail-input').value.trim(),
//         age: parseInt(document.getElementById('age-input').value, 10),
//         pays: document.getElementById('country-input').value,
//         guess: parseInt(document.getElementById('guess').value, 10)
//     }; //parseInt(..., 10) assure que la valeur est bien un nombre et non une chaîne de caractères.
//     if (user.nom === "test") {
//         alert(`Le champ "Nom" ne peut pas être vide.`);
//         return; // Arrête l'exécution ici
//     }

//     this.submit(); // Soumet le formulaire manuellement

// })

//     let myForm = document.forms["registrationForm"][""].value;

// function validateForm() {
//     if (user.nom == "test") {
//         alert (`${user.nom} "isn't a valid name"`);
//     }
// }

// console.log(validateForm())



// CHATGPT TEACHER

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Bloque la soumission par défaut

    const user = {
        nom: document.getElementById('name').value.trim(),
        prenom: document.getElementById('second-name').value.trim(),
        email: document.getElementById('mail-input').value.trim(),
        age: parseInt(document.getElementById('age-input').value, 10),
        pays: document.getElementById('country-input').value.trim()
    };

    if (!user.nom || !user.prenom || !user.email || !user.pays || isNaN(user.age)) {
        alert("Tous les champs doivent être remplis et l'âge doit être un nombre valide.");
        return;
    }

    if (!user.email.includes("@") || !user.email.includes(".")) {
        alert("L'email doit contenir un '@' et un '.'");
        return;
    }

    if (user.age < 16 || user.age > 50) {
        alert(`Tu dois avoir entre 16 et 50 ans, "${user.age}" n'est pas un âge valide`);
        return;
    }

    // ✅ Tout est valide, on soumet le formulaire manuellement
    this.submit();
});



