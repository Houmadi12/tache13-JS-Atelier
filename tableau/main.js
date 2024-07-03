// Déclaration d'un tableau
 var etudiants = [
    {prenom : "Saliou", nom : "Diallo", age : 22, note : 15},
    {prenom : "Ahmed", nom : "Diop", age : 20, note : 12},
    {prenom : "Fallou", nom : "Wade", age : 23, note : 15},
    {prenom : "Ambdou", nom : "Soilihi", age : 20, note : 14},
    {prenom : "Said", nom : "Omar", age : 19, note : 12},
    {prenom : "Bacar", nom : "Ahmed", age : 27, note : 16},
    {prenom : "Karim", nom : "Bacar", age : 17, note : 11},
    {prenom : "Anfaita", nom : "Muhtar", age : 25, note : 12},
    {prenom : "Richard", nom : "Pierre", age : 30, note : 10},
    {prenom : "Patricia", nom : "Pierre", age : 30, note : 11}
 ]

//  Affichage du tableau dans le console
 console.log(etudiants);

// Afichage du tableau dans html
document.write(
    "<table style=\" border-collapse: collapse;\"> <tr> <th style=\" border: 1px solid black; padding: 10px;\">Prenom</th>"+
    "<th style=\" border: 1px solid black; padding: 10px;\">Nom</th> <th style=\" border: 1px solid black; padding: 10px;\">Age</th><th style=\" border: 1px solid black; padding: 10px;\">Note</th></tr>"
);

for (etudiant of etudiants){
    document.write(
        "<td style=\" border: 1px solid black; padding: 10px;\">"+etudiant.prenom+"</td>"+
        "<td style=\" border: 1px solid black; padding: 10px;\">"+etudiant.nom+"</td>"+
        "<td style=\" border: 1px solid black; padding: 10px;\">"+etudiant.age+"</td>"+
        "<td style=\" border: 1px solid black; padding: 10px;\">"+etudiant.note+"</td></tr>"
    )
}

document.write("</table>");