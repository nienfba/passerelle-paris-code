class Slider {

    constructor(params) {
        /**
         * @var {Number} image courante !
         */
        this.currentImage = 0;

        /**
         * @var {string} largeur
         */
        this.width = params.width ?? '100%';

        /**
         * @var {string} hauteur
         */
        this.height = params.height ?? 'auto';

        /**
         * @var {Element} la zone du DOM où générer le slider
         */
        this.area = params.area;

        /**
         * @var {Array} collection de balise img
         */
        this.images = []

        // chargement des images
        // on appelle la méthode loadImages qui est asynchrone
        this.loadImages(params.images)
    
    }

    /**
     * Méthode asynchrone qui attend la résolution des promesses de chargement des images
     * Et lance la création de l'interface une fois les images chargées
     */
    async loadImages(images) {
        const imagesPromiseList = [];

        for(let image of images) {
            await this.loadImage(image)
            .then((img)=>{
                // si l'image est chargée l'objet du DOM la représentant est ajouté aux images du slider
                this.images.push(img)
            })
            .catch((message)=>{
                // un message d'erreur est affiché dans la console si une image n'est pas chargée
                // mais on ne bloque pas l'affichage
                console.error(message)
            })
        }

        // Creation de l'interface une fois les images chargées
        this.createInterface();

    }

    loadImage(img) {
        return new Promise((resolve, reject) => {
            let image = new Image();
            image.onload = () => { 
                resolve(image);
            }
            image.onerror = () => { reject(`Erreur de chargement de l\'image ${image.src}`) };
            image.src = img.src;
            image.title = img.title;
        });
    }

    
    /**
     * Création de l'interface HTML
     */
    createInterface() {

        // on créé le contenant
        this.divSlider = document.createElement('div');
        this.divSlider.classList.add('slider-content');
        this.divSlider.style.width = this.width;
        this.divSlider.style.height = this.height;

        // On créé le bouton next
        this.btnNext = document.createElement('button');
        this.btnNext.classList.add('next');
        this.btnNext.innerHTML = '<i class="icon-next"></>';
        this.btnNext.addEventListener('click', this.next.bind(this));

        // On créé le bouton prev
        this.btnPrev = document.createElement('button');
        this.btnPrev.classList.add('prev');
        this.btnPrev.innerHTML = '<i class="icon-previous"></>';
        this.btnPrev.addEventListener('click', this.prev.bind(this));

        this.divSlider.append(this.btnNext, this.btnPrev, this.images[this.currentImage]);

        this.display();
    }

    /**
    * Ajout de l'interface HTML au DOM de la page
    */
    display() { 
        
        this.area.appendChild(this.divSlider);
    }

    /**
    * Enlève l'image courrante de l'interface du slider
    */
    removeCurrentImage(){
        this.divSlider.removeChild(this.images[this.currentImage]);
    }

    /**
    * Affiche l'image courrante de l'interface du slider
    */
    displayCurrentImage() {
        this.divSlider.appendChild(this.images[this.currentImage]);
    }


    /**
     * Action sur le bouton NEXT
     */
    next() {
        this.removeCurrentImage();

        if(this.currentImage < this.images.length-1)
            this.currentImage++;
        else
            this.currentImage = 0;

        this.displayCurrentImage();
    }

    /**
     * Action sur le bouton PREVIOUS
     */
    prev() {
        this.removeCurrentImage();

        if (this.currentImage > 0)
            this.currentImage--;
        else
            this.currentImage = this.images.length-1;

        this.displayCurrentImage();
    }

}