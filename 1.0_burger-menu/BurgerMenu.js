const templateElement = document.createElement("template");

templateElement.innerHTML = `
<style>

.burger__menu__wrapper {
  margin: auto;
  border: solid 2px black;
  border-radius: 10px;
  background: var(--background-primary-color, whitesmoke);
  height: 80px;
  width: 80px;
  color: #fff;
}

.burger__menu__img {
  width: 120px;
  
}

.burger__menu__list {
  position: fixed;
  top: 91px;
  bottom: 0;
  background-color: #f08080;
  width: 100%;
  left: 0;
  display:flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
   clip-path: circle(0 at center);  
  transition: clip-path 1s ease-in-out;
}

.burger__menu__item {
  color: #fff;
  font-size: var(--font-size-menu-item, 40px);
  text-decoration: none;
  --clippy: polygon(0 0, 0 0, 0 100%, 0% 100%);
}

.burger__menu__item::after {
  
  content: "";
  display: block;
  background: #fff;
  width: 100%;
  margin-top: 3px;
  height: 3px;
  clip-path: var(--clippy);
  transition: clip-path .8s;
}

.burger__menu__item:hover {
  --clippy: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
}

.burger__menu__input:checked + .burger__menu__list{
  clip-path: circle(100% at center);
} 

.burger__menu__input  {
  display: none;
}
.burger__menu__label {
  display: block;
  cursor: pointer;
}

</style>

<div class="burger__menu__wrapper">
  <label for="menu" class="burger__menu__label">
      <img src="assets/menu.svg" class="burger__menu__img" alt="Menu">
  </label>
  <input type="checkbox" id="menu" class="burger__menu__input">
  <div class="burger__menu__list">
      
  </div>
</div>

`;

class BurgerMenu extends HTMLElement {
  constructor() {
    super();

    this.href = this.getAttribute('href') || ""
    this.textcontent = this.getAttribute('textcontent') || ""
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const template = templateElement.content.cloneNode(true);
    this.shadowRoot.appendChild(template);
    const anchorContainerElement = this.shadowRoot.querySelector('.burger__menu__list');
    const listAnchors = this.href.split(',')
    const names = this.textcontent.split(',')
    for(let i = 0; i < listAnchors.length; i++) {
      const anchor = document.createElement('a');
      anchor.setAttribute('class', 'burger__menu__item')
      anchor.setAttribute('href', listAnchors[i]);
      anchor.textContent = names[i];
      if(!listAnchors[i].startsWith("#")){
        anchor.setAttribute('target', '_blank')
      }

      anchor.addEventListener('click', () => {
        const valueInput = this.shadowRoot.querySelector('input');
        valueInput.checked = false
      })
      
      anchorContainerElement.appendChild(anchor)

    }
    
  }
}

customElements.define("burger-menu", BurgerMenu);
