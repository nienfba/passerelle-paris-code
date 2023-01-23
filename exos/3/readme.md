# On fait bouger nos balles ?

Si on considère que chaque balle peut se déplacer dans une direction sur X et une direction sur Y, nous pouvons créer un méthode `move()` dans la classe `Ball`.

Il est alors possible d'appeler cette méthode `move()` pour que la balle se déplace.

Pour la faire se déplacer il suffit de modifier les coordonnées X et Y de la balle puis de répercuter ce changement sur l'objet du DOM.
Il est en effet important de modifier d'abord les propriétés de l'objet puis d'appliquer ces changements à se représentation graphique.

Pour gérer le déplacement nous pouvons créer une propriété `direction` dans notre classe `Ball`.
Cette propriété est un objet contenant deux valeur numérique pour chaque position X et Y.

```js
 this.direction = {x:1,y:-1};
```

**Déplacement et valeur de direction :**

- x:0 : la balle ne bouge pas. X+1*0 = X+0 = X
- x:1 : la balle se déplace en positif. X+1*1 = X+1
- x:-1 : la balle se déplacer en négatif. X+1*-1 = X-1


## Notre programme va déplacer toutes les balles

Il va appeler les méthodes `move()` de toutes nos balles à interval régulier.
Les balles vont donc se déplacer dans une direction sur X et sur Y. Et finir par "disparaitre" de l'écran.


## Faire rebondir les balles ?

Et si l'on faisait rebondir les balles.
A chaque mouvement de balle, il faut vérifier si elle n'est pas en collision avec le bords de la zone du DOM la contenant (ou tout le document).
Je vous laisse réfléchir comment nous pouvons faire ça !
Si notre balle rentre en collision on peut changer sa direction ! Elle continuera à se déplacer dans l'autre sens !