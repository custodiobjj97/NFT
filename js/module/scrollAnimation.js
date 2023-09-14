export default class ScrollAnimation{
    constructor(section) {
        this.sections = document.querySelectorAll(section)
        this.activeSection='active'
    }

    

    scrollShow() {
        for (let i = 0; i < this.sections.length; i++){
            const elemenTop = this.sections[i].getBoundingClientRect().top
            const isVisible = (elemenTop - window.innerHeight * 0.5) < 0
            if (isVisible) {
                this.sections[i].classList.add(this.activeSection)
            } else {
                this.sections[i].classList.remove(this.activeSection)
            }
        }
    }


    addEventScroll() {
        window.addEventListener('scroll', this.scrollShow)
    }

    bindScrolls() {
        this.scrollShow = this.scrollShow.bind(this)
    }

    init() {
        if (this.sections.length) {
            this.bindScrolls()
            this.addEventScroll()
            this.scrollShow()
        }
    }
}