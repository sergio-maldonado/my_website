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
        Sergio Maldonado's Lab
      </span>
      <nav class="d-none d-lg-block">
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
      <i id="menu-burger" class="bi bi-list text-white fs-3 d-lg-none" role="button" tabindex="0"></i>
      <div id="menu-cel" class="position-fixed top-0 left-0 w-75 h-100 bg-1 p-3 d-none">
        <nav>
          <ul>
            <li class="mb-3">
              <a href="/" class="text-decoration-none text-white fs-3">
                Home
              </a>
            </li>
            <li class="mb-3">
              <a href="/people" class="text-decoration-none text-white fs-3">
                People
              </a>
            </li>
            <li class="mb-3">
              <a href="/research.html" class="text-decoration-none text-white fs-3">
                Research
              </a>
            </li>
            <li class="mb-3">
              <a href="/publications.html" class="text-decoration-none text-white fs-3">
                Publications
              </a>
            </li>
            <li class="mb-3">
              <a href="/teaching.html" class="text-decoration-none text-white fs-3">
                Teaching
              </a>
            </li>
            <li class="mb-3">
              <a href="/join-us.html" class="text-decoration-none text-white fs-3">
                Join us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    `
    // shadow.appendChild(wrapper)
    const btn = wrapper.querySelector("#menu-burger")
    const menuCel = wrapper.querySelector("#menu-cel")
    btn.onclick = () => {
      const hasDnone = menuCel.classList.contains("d-none")
      if (hasDnone) {
        menuCel.classList.remove("d-none")
      } else {
        menuCel.classList.add("d-none")
      }
    }
    this.appendChild(wrapper)
  }
}

customElements.define("yoyo-header", Header)
