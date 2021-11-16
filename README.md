<u>**TP Multiplication**</u>

C’est un TP de développement d’application permettant d’afficher des tables de multiplication (Jusqu’à 10).

C’est un projet de deuxième année de BTS SIO SLAM donné par Monsieur Chamillard. 

Outils : Angular 13.0.1 

Le projet a démarré le lundi 15 novembre 2021 et s’est terminé le mardi 16 novembre 2021.

<u>**Lien GitHub**</u>

https://github.com/VrNephy/TableMultiplication

<u>**Versions utilisées**</u>

Système d’exploitation : Windows 10

Angular 13.0.1 

Visual studio 1.62.2

<u>**Mise en place/ Commandes**</u>

 

Tout d’abord il faut créer le projet Angular. Pour cela nous exécutons la commande suivante : ng new TableMultiplication –style –routing=false

A l’emplacement voulu.

 

Après avoir testé que tout s’est bien déroulé, on essai de lancer le serveur avec la commande : ng serve

Ensuite, nous allons créer un nouveau composant que nous allons appeler « table-multiplication » via la commande : ng g c table-multiplication

 

Mention importante: Lors de la création du composant table multiplication, j'ai malencontreusement fait une faute de frappe. Tout au long de ce readme, table-multilplication est l'orthographe correcte pour ce composant.

<u>**Partie 1**</u>

Concernant la première partie, il nous est demandé de créer un formulaire où l’utilisateur pourra rentrer un chiffre.

 Si l’on prend par exemple la table de 7, sa table de 0 à 10 apparait.



![img](https://drive.google.com/file/d/1CfpYdjVCfutztxpAzuUgFzUtIg8PlRUb/view?usp=sharing)

1

 

Voici à quoi ressemble le code HTML derrière cette page :

 

App.component.html

 

![img](file:///C:/Users/lucas/AppData/Local/Temp/msohtmlclip1/01/clip_image004.gif)

2

Ici, on appel « table-multilplication » ainsi que « tables-multiplication »

 

Et voici à quoi ressemble app.component.ts

 

 

![img](file:///C:/Users/lucas/AppData/Local/Temp/msohtmlclip1/01/clip_image006.gif)

3

On commence par importer les packages, puis on annonce les Attributs. On créer également les formulaires.

 

Dans « app.component.html » on fait appel à « tableMultilplication » pour le premier formulaire.

![img](file:///C:/Users/lucas/AppData/Local/Temp/msohtmlclip1/01/clip_image008.gif)

4

Concernant ce code, ``ngfor`` parcours compteur avant d’utiliser la variable chiffre donné précédemment par l’utilisateur puis x qui se trouve dans ``table-multilplication.component.ts``

 

Ici le formulaire demande à l’utilisateur un nombre qui sera par la suite utilisé dans ``table-multilplication.component.ts ``![img](file:///C:/Users/lucas/AppData/Local/Temp/msohtmlclip1/01/clip_image010.gif)

![img](file:///C:/Users/lucas/AppData/Local/Temp/msohtmlclip1/01/clip_image012.gif)

5 ET 6

Tout d’abord, on communique avec le composant parent à l’aide de input et output. Ensuite il y a un tableau x ici nommé compteur (nom porte à confusion). N’oublions pas qu’au tout début, on importe les packages nécessaires.

Enfin, submitForm1 est chargé de vérifier que la valeur n’est pas égale à rien ou soit nulle. Dans le cas contraire la valeur est automatiquement 1.

 

 


 **<u>Partie 2</u>**

 

Dans la partie 2, l’utilisateur entre un nombre dans un nouveau champ. Ce dernier définira le nombre de tables de multiplication qui s’afficheront. Si l’utilisateur n’entre aucun nombre, alors 10 tables s’afficheront (de 1 à 10).

 

``Tables-Multiplication.component.html``

![img](file:///C:/Users/lucas/AppData/Local/Temp/msohtmlclip1/01/clip_image014.gif)

7

Ici, le code est relativement similaire à la partie 1.

Ce code html est lié à :

``Tables-Multiplication.component.ts``



![img](file:///C:/Users/lucas/AppData/Local/Temp/msohtmlclip1/01/clip_image016.gif)

**![img](file:///C:/Users/lucas/AppData/Local/Temp/msohtmlclip1/01/clip_image018.gif)**

**8 et 9**

Avant toute chose, on importe les packages

Encore une fois, input et output permettent de communiquer avec le composant parent. Ensuite, nous avons un tableau cette fois nommé tab2. Puis un second commit qui lui est utilisé uniquement par le deuxième formulaire (pour la partie 2). Donc si la valeur entrée n’est pas égale à ‘’ et qu’elle n’est pas nulle, alors on prend la valeur donnée par l’utilisateur. Sinon, la valeur est 10 par défaut. Ce qui veut dire que de base, il y a 10 tables, de 1 à 10. 

 

Après un peu de css (ajout de bulma et quelques autres légères modifications css) voici à quoi le site ressemble.

 

**Screenshot 10 et 11**

 ![image-20211116190423618](C:\Users\lucas\AppData\Roaming\Typora\typora-user-images\image-20211116190423618.png)

![image-20211116190953214](C:\Users\lucas\AppData\Roaming\Typora\typora-user-images\image-20211116190953214.png)



<u>**Diagramme UML**</u>

![ulm](C:\Users\lucas\OneDrive\Bureau\multi\multi\ulm.PNG)





<u>**Conclusion**</u>

Ce projet était une bonne initiation à Angular. Bien que les TD fait précédemment étaient bien guidés, ce projet m'a parut certes plus compliqué mais à la fois plus instructif. Le code en soit n'est pas d'une complexité hors norme. Cependant, l'architecture s'est avérer être un problème majeur pour moi. 



<u>**Sources**</u>

 

https://www.youtube.com/watch?v=k5E2AVpwsko

TD 1, 2 et 3 Login.

 
