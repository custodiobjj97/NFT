export default class Menu{
    constructor(menu, toggle) {
        this.toggle = document.querySelector(toggle)
        this.menu = document.querySelector(menu)
        this.activeClass = 'active'
       
    }

    activeToggle(event) {
        if (event.type === 'touchstart') {
            event.preventDefault()

        }
        this.menu.classList.toggle(this.activeClass)
    }


    addEventMenu() {
        ['click','touchstart'].forEach((userEvent) => this.toggle.addEventListener(userEvent, this.activeToggle))
    }

    bindEvent() {
        this.activeToggle = this.activeToggle.bind(this)
    }

    init() {
        if (this.menu) {
            this.bindEvent()
            this.addEventMenu()
        }
        return this
    }
}