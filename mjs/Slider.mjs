export class Slider {
    constructor(elmMonSlider, config_slider){
        this.elmMonSlider = elmMonSlider;
        this.list_slide = config_slider.list_slide;
        console.log('slider')

    }

    creerSlider() {

        console.log(this.elmMonSlider.tagName)
        console.log(this.list_slide)
        let elmSlider = document.createElement('div')
        elmSlider.classList.add('slider')
        let elmSlides = document.createElement('div')
        elmSlides.classList.add('slides')
        let k=1
        for (let unSlide of this.list_slide){
            let elmSlide = document.createElement('div')
            elmSlide.id = 'slides-' + k
            k++
            elmSlides.appendChild(elmSlide)

            let elmImg = document.createElement('img')
            elmImg.src = unSlide.img
            elmSlide.appendChild(elmImg)

            let elmTitre = document.createElement('titre')
            elmTitre.src = unSlide.elmTitre
            elmSlide.appendChild(elmTitre)

            let elmSousTitre = document.createElement('sousTitre')
            elmSousTitre.src = unSlide.elmSousTitre
            elmSlide.appendChild(elmSousTitre)
        }
        elmSlider.appendChild(elmSlides)
        this.elmMonSlider.appendChild(elmSlider)

    }


}