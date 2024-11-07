class Header extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    // const shadow = this.attachShadow({ mode: "open" })
    const wrapper = document.createElement("header")
    wrapper.classList.add(
      "d-flex",
      "justify-content-between",
      "bg-1",
      "p-3",
      "align-items-center"
    )
    wrapper.innerHTML = `
      <span class="text-white fs-4">
        Sergio Maldonado Villanueva
      </span>
      <nav>
        <ul class="d-flex">
          <li>
            <a href="/" class="text-decoration-none text-white">
              Home
            </a>
          </li>
          <li class="ms-3">
            <a href="/people" class="text-decoration-none text-white">
              People
            </a>
          </li>
          <li class="ms-3">
            <a href="/research.html" class="text-decoration-none text-white">
              Research
            </a>
          </li>
          <li class="ms-3">
            <a href="/publications.html" class="text-decoration-none text-white">
              Publications
            </a>
          </li>
          <li class="ms-3">
            <a href="/teaching.html" class="text-decoration-none text-white">
              Teaching
            </a>
          </li>
          <li class="ms-3">
            <a href="/join-us.html" class="text-decoration-none text-white">
              Join us
            </a>
          </li>
        </ul>
      </nav>
    `
    // shadow.appendChild(wrapper)
    this.appendChild(wrapper)
  }
}

customElements.define("yoyo-header", Header)
