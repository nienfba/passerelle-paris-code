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
        this.height = params.height ?? '100%';

        /**
         * @var {Element} la zone du DOM où générer le slider
         */
        this.area = params.area;

        /**
         * @var {Array} collection de balise img
         */
        this.images = []

        // chargement des images
        this.loadImages(params.images);

        // creation de l'interface
        this.createInterface();
    }

    loadImages(images) {
        images.forEach(element => {
            let image = new Image();
            image.src=element.src;
            image.title = element.title;
            image.style.height = '100%';
            this.images.push(image);
        });
        console.log(this.images);
    }

    createInterface() {

        // on créé le contenant
        this.divSlider = document.createElement('div');
        this.divSlider.style.width = this.width;
        this.divSlider.style.height = this.height;

        // On créé le bouton next
        this.btnNext = document.createElement('button');
        this.btnNext.textContent = 'Next';
        this.btnNext.addEventListener('click', this.next.bind(this));

        // On créé le bouton prev
        this.btnPrev = document.createElement('button');
        this.btnPrev.textContent = 'Previous';
        this.btnPrev.addEventListener('click', this.prev.bind(this));

        this.divSlider.append(this.btnNext, this.btnPrev, this.images[this.currentImage]);

        this.display();
    }

    display() { 
        
        this.area.appendChild(this.divSlider);
    }

    removeCurrentImage(){
        this.divSlider.removeChild(this.images[this.currentImage]);
    }

    updateCurrentImage() {
        this.divSlider.appendChild(this.images[this.currentImage]);
    }

    next() {
        this.removeCurrentImage();

        if(this.currentImage < this.images.length-1)
            this.currentImage++;
        else
            this.currentImage = 0;

        this.updateCurrentImage();
    }

    prev() {
        this.removeCurrentImage();

        if (this.currentImage > 0)
            this.currentImage--;
        else
            this.currentImage = this.images.length-1;

        this.updateCurrentImage();
    }

}