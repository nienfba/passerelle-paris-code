# Création d'une balle

Vous devez créer une classe qui permette d'instancier une ou plusieurs balles.

Ces balles doivent avoir les propriétés minimum pour être représentées à l'écran (que l'on utilise une représentation en HTML, en Canvas, en SVG ...).

Chaque balle doit avoir une méthode `draw()` qui permet de renvoyer une chaine de caractères qui représente la balle. Ici nous allons retourner une chaine en HTML !

## Tester votre code

- Créer la classe balle avec ses propriétés
- Créer une nouvelle balle (une instance)
- Afficher cette balle dans la console pour s'assurer que tout est ok
- Créez la méthode `draw()` et tester là sur votre instance en l'appelant
- Finalisez cette méthode `draw()` pour qu'elle nous renvoie l'HTML... puis injectez l'HTML dans le DOM.


```js
// Exemple d'appel du code 

const babale = new Ball('red',50,150,150);
let html = babale.draw(); // <div style="background-color:red"></div>

// écrire html quelques part dans mon DOM
document.body.innerHTML = html;

```