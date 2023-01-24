# Projet JS Snake

## But de l'exercice : 

Faire un jeu du serpent ou SNAKE...

- Un écran titre apparait 
- On démarre le jeu quand on le souhaite (appuie sur entrée)
- On déplace ensuite un serpent avec les flèches du clavier.
- Le serpent fait initialement 1 unités de longueur. Il n'a qu'une tête !
- Une pomme apparait sur le plateau, le serpent peu manger la Pomme en lui passant dessus, il gagne alors une unité de longueur (il commence à se construire une queue). Chaque pomme rajoute une unité à la queue.
- toutes les 10 pommes mangées, le jeu accélère un peu (le serpent se déplace plus vite)
- un score est comptabilisé et s'affiche en plus du nombre de pommes mangées. Chaque pomme rapporte 10 points.
- Le score sera stocké dans le navigateur, dans le localStorage. Et sera donc affiché sur l'écran titre (votre score précédent : XXXX)
- Il y a GameOver si la tête du serpent percute un mur ou un élement de la queue (le serpent qui se mord la queue !)
- A l'écran de GameOver on peut recommencer une partie.


## Quelques informations : 

Nous devons développer le Jeu en objets.
Nous allons utiliser le SVG pour dessiner le Jeu (et la propriété viewBox du SVG pour simplifier le positionnement et la taille des élements) !
Pour vous guider nous allons définir plusieurs classes : 

- SnakeGame : la classe du Jeu
- Snake : le serpent
- Apple : une pomme
- Tail : la queue du serpent
- TailPart : un élement de la queue
===================================================

- SnakeGame est composé d'un Snake et d'une Apple 
- Snake est composé d'une Tail 
- Une Tail est composé de TailPart. On y ajoute un nouveau TailPart à chaque fois que l'on mange une pomme
- TailPart est un élément de la queue


## De l'aide : 

- Commencer à faire se déplacer une tête (un carré) dans le SVG à l'aide d'un carré... 
- Pour déplacer la queue : la tête se déplace d'un pixel (définie par viewBox du SVG). Le premier élément de la queue prend la place précédente de la tête, l'élément suivant de la queue la place de l'élément précédent.. .et ainsi de suite !

## Les gestionnaires d'évènement avec des méthodes de classe ?

Dans notre programme SnakeGame, nous allons avoir une méthode play()... 
Cette méthode sera appelée à interval régulier et fera se déplacer le serpent (et sa queue).
Si nous appelons cette méthode comme un gestionnaire d'évent timé... par exemple avec un setInterval, son contexte va changer. Cela veut dire que dans cette méthode play(), le this ne sera plus l'objet SnakeGame mais ce que définie la méthode setInterval (dans ce cas donc l'objet window).

Pour éviter ce problème nous devons lier notre fonction de callBak (gestionnaire de l'évent timé) avec un contexte et donc lui passer un contexte. Dans notre cas celui de l'objet.

Un petit exemple : 

```js


/** Un exemple qui ne marchera pas ! */
class SnakeGame() {

    constructor() {
        //...
        this.testProperty = 'Text';
    }

    start() {
        // 
        this.intervalId = setInterval(this.play,1000/60);
    }

    play() {
        // quand cette fonction sera appelée le this ne sera plus l'instance de notre objet, mais un autre objet, l'objet window.
        // car l'évènement déclenché par setInterval change de lcontexte de la fonction de callBack... le contexte étant contenu dans la variable *this*

        // cette ligne ne va pas marcher : JS va nous dire que la propriété testProperty n'existe pas dans l'object ... dans l'objet window !
        console.log(this.testProperty);
    }
}


/** Un exemple qui marche ! */
class SnakeGame() {

    constructor() {
        //...
        this.testProperty = 'Text';
    }

    start() {
        // on dit à setInterval de lier la fonction play avec le contexte défini par this. Ici this est bien l'instance de mon objet.
        // donc maintenant dans play, *this* sera toujours l'instance de l'objet !
        // COOL !
        this.intervalId = setInterval(this.play.bind(this),1000/60);
    }

    play() {
        // ça marche ici.. car *this* est bien l'instance de l'objet SnakeGame
        console.log(this.testProperty);
    }
}

```
