class Component{
    hostElement
    insertBefore
    attributes

    constructor(hostElementId, insertBefore = false, attr = null){
        this.hostElement = hostElementId ? document.getElementById(hostElementId) : document.body
        this.insertBefore = insertBefore
        this.attributes = attr
    }
    detach(){
        if(this.element){
            this.element.remove()
        }
    }
    attach(){
        if (this.attributes && this.attributes.length > 0) {
            for (const attr of this.attributes) {
                this.element.setAttribute(attr.name, attr.value);
            }
          }
        this.hostElement.insertAdjacentElement(
            this.insertBefore ? 'afterbegin' : 'beforeend',
            this.element
        )
    }
}

export default Component