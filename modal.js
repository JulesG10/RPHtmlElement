document.addEventListener("DOMContentLoaded", () => {
  class RPDotsElement extends HTMLElement {
    constructor() {
      super();
      let dropdown = false;
      let dropdown_el = [];
      if (this.hasAttribute("dropdown")) {
        if (this.getAttribute("dropdown") == "true") {
          dropdown = true;
        }
      }
      if (this.hasAttribute("dropdown-el")) {
        dropdown_el = this.getAttribute("dropdown-el").toString();
        try {
          dropdown_el = JSON.parse(dropdown_el);
        } catch {
          throw new SyntaxError(
            'Faill to parse data from dropdown_el  , you must do it like this :  <mat-dot dropwdown dropdown_el=\'{"id":"item"}\'></mat-dot>'
          );
        }
      }
      let shadow = this.attachShadow({ mode: "open" });
      let style = document.createElement("style");
      let content = document.createElement("div");
      content.className = "dots-content";
      for (let i = 0; i < 3; i++) {
        let div = document.createElement("div");
        div.className = "dot";
        content.appendChild(div);
      }
      if (dropdown) {
        let drop = document.createElement("div");
        drop.className = "dropdown-i";
        drop.hidden = true;
        Object.keys(dropdown_el).forEach((item) => {
          let li = document.createElement("li");
          li.className = "drop-item";
          li.id = item + "-li-mat";
          li.textContent = dropdown_el[item];
          drop.appendChild(li);
        });
        shadow.appendChild(drop);
        content.addEventListener("click", () => {
          drop.hidden = false;
        });
        document.addEventListener("click", (e) => {
          if (e.target != this) {
            drop.hidden = true;
          }
        });
      }
      style.textContent = `
              .dropdown-i{
                  width:100px;
                  height:auto;
                  padding-top:8px;
                  padding-bottom:8px;
                  background:white;
                  position:absolute;
                  left:-70Px;
                  z-index:5;
                  -webkit-box-shadow:0px 2px 4px #ccc;
                     -moz-box-shadow:0px 2px 4px #ccc;
                          box-shadow:0px 2px 4px #ccc;
              }
              .drop-item{
                  cursor:pointer;
                  display:-webkit-box;
                  display:-webkit-flex;
                  display:-moz-box;
                  display:-ms-flexbox;
                  display:flex;
                  -webkit-box-align:center;
                  -webkit-align-items:center;
                     -moz-box-align:center;
                      -ms-flex-align:center;
                          align-items:center;
                  -webkit-box-pack:center;
                  -webkit-justify-content:center;
                     -moz-box-pack:center;
                      -ms-flex-pack:center;
                          justify-content:center;
                  list-style:none;
                  height:36px;
                  width:100%;
                  background:white;
                  transition:0.3s;
              }
              .drop-item:hover{
                  background:#ccc;
              }
              .dots-content{
                  z-index:1;
                  height:100%;
                  width:100%;
                  position:relative;
                  top:0;
                  left:0;
                  position:absolute;
              }
              .dot{
                  margin-top:2Px;
                  position:relative;
                  left:50%;
                  -webkit-transform:translateX(-50%);
                     -moz-transform:translateX(-50%);
                      -ms-transform:translateX(-50%);
                       -o-transform:translateX(-50%);
                          transform:translateX(-50%);
                  -webkit-border-radius:50%;
                     -moz-border-radius:50%;
                          border-radius:50%;
                  height:5px;
                  width:5Px;
                  background:#fff;
              }
              `;
      if (document.getElementById("mat-item")) {
        let text = document.getElementById("mat-item").textContent;
        text +=
          "mat-dots{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;height:22px;width:22px;background:transparent;position:absolute;top:50%;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-ms-transform:translateY(-50%);-o-transform:translateY(-50%);transform:translateY(-50%);}";
      } else {
        let stylesEL = document.createElement("style");
        stylesEL.id = "mat-item";
        stylesEL.textContent =
          "mat-dots{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;height:22px;width:22px;background:transparent;position:absolute;top:50%;-webkit-transform:translateY(-50%);-moz-transform:translateY(-50%);-ms-transform:translateY(-50%);-o-transform:translateY(-50%);transform:translateY(-50%);}";
        document.body.appendChild(stylesEL);
      }
      shadow.appendChild(content);
      shadow.appendChild(style);
    }
  }
  class RPCardElement extends HTMLElement {
    constructor() {
      super();
      let shadown = this.attachShadow({ mode: "open" });
      let content = document.createElement("div");
      let style = document.createElement("style");
      content.className = "mat-card";
      content.innerHTML = this.innerHTML;
      style.textContent = `
              .mat-card{
                  height:100%;
                  width:100%;
                  background:transparent;
              }
              `;
      shadown.appendChild(content);
      shadown.appendChild(style);
      if (document.getElementById("mat-item")) {
        let text = document.getElementById("mat-item").textContent;
        text += `
                  mat-card{
                      z-index:1;
                      position:relative;
                      left:50%;
                      margin-top:10px;
                      transform:translateX(-50%);
                      height:auto;
                      padding-top:20px;
                      border-radius:5px;
                      width:300Px;
                      min-width:250px;
                      max-width:350px;
                      display:block;
                      padding-bottom:20px;
                      background:#fff;
                      box-shadow:0px 2px 10px #ccc;
                  }
                  `;
        document.getElementById("mat-item").textContent = text;
      } else {
        let stylesEL = document.createElement("style");
        stylesEL.id = "mat-item";
        stylesEL.textContent = `
                  mat-card{
                      position:relative;
                      left:50%;
                      margin-top:10px;
                      transform:translateX(-50%);
                      height:auto;
                      padding-top:20px;
                      border-radius:5px;
                      width:300Px;
                      min-width:250px;
                      max-width:350px;
                      display:block;
                      padding-bottom:20px;
                      background:#fff;
                      box-shadow:0px 2px 10px #ccc;
                  }
                      
                      `;
        document.body.appendChild(stylesEL);
      }
    }
  }
  class RPCardCaseElement extends HTMLElement {
    constructor() {
      super();
      let shadown = this.attachShadow({ mode: "open" });
      let big = document.createElement("div");
      let style = document.createElement("style");
      let height = 100;
      big.className = "mat-card-rcz";
      if (this.hasAttribute("case")) {
        if (!isNaN(parseInt(this.getAttribute("case")))) {
          switch (parseInt(this.getAttribute("case"))) {
            case 1:
              height = 100;
              break;
            case 2:
              height = 230;
              break;
            case 3:
              height = 310;
              break;
            case 4:
              height = 420;
              break;
            default:
              height = 100;
              break;
          }
        }
      }
      style.textContent =
        `
                  .mat-card-rcz{
                      position:relative;
                      left:50%;
                      margin-top:10px;
                      transform:translateX(-50%);
                      height:` +
        height +
        `px;
                      padding-top:20px;
                      border-radius:5px;
                      width:300Px;
                      min-width:250px;
                      max-width:350px;
                      display:block;
                      padding-bottom:20px;
                      background:#fff;
                      box-shadow:0px 2px 10px #ccc;
                  }
              `;
      big.innerHTML = this.innerHTML;
      shadown.appendChild(big);
      shadown.appendChild(style);
    }
  }
  class RPFloatElement extends HTMLElement {
    constructor() {
      super();
      let shadow = this.attachShadow({ mode: "open" });
      let style = document.createElement("style");
      let float = document.createElement("button");
      float.className = "mat-float-element";
      if (this.hasAttribute("href") && !this.hasAttribute("click")) {
        if (this.hasAttribute("target")) {
          float.addEventListener("click", () => {
            window.open(this.getAttribute("href"));
          });
        } else {
          float.addEventListener("click", () => {
            document.location.href = this.getAttribute("href");
          });
        }
      }
      if (this.hasAttribute("click") && !this.hasAttribute("href")) {
        float.addEventListener("click", () => {
          eval(this.getAttribute("click"));
        });
      }
      let bottom = "20px";
      let left = "30px";
      let right = "auto";
      let top = "auto";
      if (this.hasAttribute("top")) {
        top = "70px";
        bottom = "auto";
      }
      if (this.hasAttribute("bottom")) {
        bottom = "20px";
        top = "auto";
      }
      if (this.hasAttribute("left")) {
        right = "auto";
        left = "30px";
      }
      if (this.hasAttribute("right")) {
        right = "30px";
        left = "auto";
      }
      if (this.hasAttribute("logo")) {
        style.textContent =
          `
          .mat-float-element{
              z-index:20;
              height:44px;
              width:44px;
              position:fixed;
              bottom:` +
          bottom +
          `;
              left:` +
          left +
          `;
              top:` +
          top +
          `;
              right:` +
          right +
          `;
              border-radius:50%;
              outline:none;
              border:none;
              background:#fff;
              box-shadow:0px 2.5px 5px #ccc;
              overflow:hidden;
              transition:0.3s;
          }
          .mat-float-element:hover{
              filter: brightness(0.8);
          }
          .mat-float-element::after{
              content:'';
              background: transparent no-repeat center;
              background-size: cover;
              background-image:url('` +
          this.getAttribute("logo") +
          `');
              position:absolute;
              height:90%;
              width:90%;
              top:50%;
              left:50%;
              transform:translate(-50%,-50%);
          }
          `;
      } else {
        style.textContent = `
          .mat-float-element{
              height:44px;
              width:44px;
              position:fixed;
              bottom:20px;
              left:30px;
              border-radius:50%;
              outline:none;
              border:none;
              background:#fff;
              box-shadow:0px 2.5px 5px #ccc;
          }
          `;
      }
      shadow.appendChild(float);
      shadow.appendChild(style);
    }
  }
  class RPButtonElement extends HTMLElement {
    constructor() {
      super();
      let shadow = this.attachShadow({ mode: "open" });
      let btn = document.createElement("button");
      let style = document.createElement("style");
      let color = "blue";
      let bk = "#3b78ff";
      let bkh = "#2d59b9";
      let c = "white";
      if (this.hasAttribute("color")) {
        color = this.getAttribute("color");
        switch (color) {
          case "blue":
            bk = "#3b78ff";
            bkh = "#2d59b9";
            c = "white";
            break;
          case "green":
            bk = " #47da17";
            bkh = "#2e900e";
            c = "white";
            break;
          case "orange":
            bk = "#ff833b";
            bkh = "#d86d2f";
            c = "white";
            break;
          case "light":
            bk = "#c0c1c1";
            bkh = "#676767";
            c = "white";
            break;
          default:
            bk = "#3b78ff";
            bkh = "#2d59b9";
            c = "white";
            break;
        }
      }
      style.textContent =
        `
              .mat-button{
                  transition:0.3s;
                  color:` +
        c +
        `;
                  text-align:center;
                  padding-left:16px;
                  padding-right:16px;
                  padding-top:8px;
                  padding-bottom:8px;
                  background:` +
        bk +
        `;
                  border-radius:10px;
                  border:none;
                  outline:none;
                  position:relative;
                  display:inline-block;
                  margin:5px;
              }
              .mat-button:hover{
              background:` +
        bkh +
        `;
              }
          `;
      btn.className = "mat-button";
      btn.textContent = this.textContent;
      shadow.appendChild(btn);
      shadow.appendChild(style);
    }
  }
  class RPItemElement extends HTMLElement {
    constructor() {
      super();
      let shadow = this.attachShadow({ mode: "open" });
      let it = document.createElement("div");
      let style = document.createElement("style");
      style.textContent = `
              .mat-item{
                  padding-top:10px;
                  padding-bottom:10px;
                  height:auto;
                  border-top:1Px solid #ccc;
                  border-bottom:1px solid #ccc;
                  left:50%;
                  position:relative;
                  transform:translateX(-50%);
                  width:80%;
                  margin-top:5px;
              }
          `;
      it.innerHTML = this.innerHTML;
      it.className = "mat-item";
      shadow.appendChild(it);
      shadow.appendChild(style);
    }
  }
  class RPModalElement extends HTMLElement {
    constructor() {
      super();
      let shadow = this.attachShadow({ mode: "open" });
      let modal = document.createElement("div");
      let blur = document.createElement("div");
      let icon = document.createElement("div");
      let style = document.createElement("style");
      let modalContent = document.createElement("div");
      let display = "none";
      modalContent.innerHTML = this.innerHTML;
      modalContent.className = "mat-modal-content";
      if (this.hasAttribute("active")) {
        display = "block";
        for (
          let i = 0;
          i < document.getElementsByClassName("top-bar").length;
          i++
        ) {
          document.getElementsByClassName("top-bar")[i].style =
            "z-index: -1;";
        }
      }
      blur.addEventListener("click", () => {
        blur.style.display = "none";
        modal.style.display = "none";
        for (
          let i = 0;
          i < document.getElementsByClassName("top-bar").length;
          i++
        ) {
          document.getElementsByClassName("top-bar")[i].style =
            "z-index: 20;";
        }
      });
      let observer = new MutationObserver((changes) => {
        changes.map((change) => {
          if (change.type == "attributes") {
            if (this.hasAttribute("active")) {
              for (
                let i = 0;
                i < document.getElementsByTagName("mat-modal").length;
                i++
              ) {
                document.getElementsByTagName("mat-modal")[
                  i
                ].shadowRoot.childNodes[0].style.display = "block";
                document.getElementsByTagName("mat-modal")[
                  i
                ].shadowRoot.childNodes[1].style.display = "block";
              }
              for (
                let i = 0;
                i < document.getElementsByClassName("top-bar").length;
                i++
              ) {
                document.getElementsByClassName("top-bar")[i].style =
                  "z-index: -1;";
              }
            } else {
              blur.style.display = "none";
              modal.style.display = "none";
              for (
                let i = 0;
                i < document.getElementsByClassName("top-bar").length;
                i++
              ) {
                document.getElementsByClassName("top-bar")[i].style =
                  "z-index: 20;";
              }
            }
          }
        });
      });
      for (
        let i = 0;
        i < document.getElementsByTagName("mat-modal").length;
        i++
      ) {
        observer.observe(document.getElementsByTagName("mat-modal")[i], {
          attributes: true,
        });
      }

      blur.className = "mat-blur";
      modal.className = "mat-modal";
      icon.className = "mat-modal-icon";
      modal.appendChild(icon);
      modal.appendChild(modalContent);
      style.textContent =
        `
          .mat-modal-icon{
              position:relative;
              top:3px;
              left:50%;
              height:5px;
              border-radius:30px;
              width:45px;
              background:#ccc;
              transform:translateX(-50%);
          }
          .mat-blur{
              position:fixed;
              top:0;
              left:0;
              height:100%;
              width:100%;
              z-index:9999;
              background:#000000a8;
          }
          .mat-modal-content{
              position:absolute;
              bottom:0;
              left:0;
              width:100%;
              height:90%;
          }
          .mat-modal{
              position:fixed;
              bottom:0;
              left:0;
              z-index:99999;
              background:#fff;
              height:50%;
              width:100%;
              border-top-left-radius:10px;
              border-top-right-radius:10px;
          }
          .mat-modal, .mat-blur{
              display:` +
        display +
        `;
          }
          `;

      shadow.appendChild(blur);
      shadow.appendChild(modal);
      shadow.appendChild(style);
    }
  }
  class RPDropDownCardElement extends HTMLElement {
    constructor() {
      super();
      let shadow = this.attachShadow({ mode: "open" });
      let content = document.createElement("div");
      let top = document.createElement("div");
      let contentDrop = document.createElement("div");
      let style = document.createElement("style");
      let title = "Dropdown Title";
      if (this.hasAttribute("title-text")) {
        title = this.getAttribute("title-text");
      }
      contentDrop.innerHTML = this.innerHTML;
      top.innerHTML = title;
      top.className = "mat-top-dropdown";
      top.addEventListener("click", () => {
        if (contentDrop.style.height == "auto") {
          contentDrop.style.height = "0";
        } else {
          contentDrop.style.height = "auto";
        }
      });
      contentDrop.className = "mat-content-dropdown";
      style.textContent = `
      .mat-top-dropdown{
          color:#5d5c5c;
          font-size:15px;
          width:80%;
          height:25px;
          background:#fff;
          position:relative;
          left:50%;
          transform:translateX(-50%);
          border-bottom:2px solid #969595;
      }
      .mat-top-dropdown::after{
          content:'';
          position:absolute;
          top:50%;
          right:10px;
          transform:translateY(-50%);
          border-left:8px solid transparent;
          border-right:8Px solid transparent;
          border-top:8px solid #969595; 
      }
      .mat-content-dropdown{
          color:#5d5c5c;
          transition:1s;
         overflow:hidden;
         height:0;
         width:80%;
         background:#fff;
         text-align:left;
         position:relative;
          left:50%;
          transform:translateX(-50%);
          padding-bottom:5px;
      }
      `;
      content.appendChild(top);
      content.appendChild(contentDrop);
      shadow.appendChild(content);
      shadow.appendChild(style);
    }
  }
  class RPImageElement extends HTMLElement {
    constructor() {
      super();
      let shadow = this.attachShadow({ mode: "open" });
      let image = document.createElement("img");
      let style = document.createElement("style");
      image.className = "mat-image";
      let src =
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHkAqAMBIgACEQEDEQH/xAAbAAEBAQADAQEAAAAAAAAAAAAABAUBAgMHBv/EADMQAAIBAwIEBAMGBwAAAAAAAAABAgMEERIhBRMxURQiQXEVYZEGMlKBobEzQkRUcsHR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APrYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACa6uvC1KfMpvkS2lUX8r9Nj3lKMYOcppQSy5emCPi9zK3tkowjLmNxetZWPYybS6hyfCXbk7eT8sl1pvuvkBtfELL+5h9GUQnGpCM6clKEllSXqYM+E14tYq0G5bwXMw5+x0sal5bXLtaWIznLDhUW2e4H6MEdhcVqs69K5jBVKUkm4dNywAAAAAAAAAAAAAAAAAAAAAAyvtB/Aof5v9jP4dGMvFZipSjbzcItZ32NH7QJ+HotLZTeX22MWhXlQqxq056ZRewFNrcU5UvC3e9BvyT9aT7r5HtxmDgrSUpKdVU8OcX95Lo/1PJ3lo25ysYcx9cVWo/Q4tLqnKn4W73oSflkutJ91/wC37P/1PvH/ZsGdwm1qWtS4jPDi9LhNdJLfoaIAAAAAAAAAAAAAAAAAAAAZ0eKwlczocpqcbjkrL+8vxL89sFFpe0LttUXPaKktUGtUX0ku626gUp46DL9W/qZ1LjFCUKTnCqpTUXpjByS1NqKz82sHp8UtM0FrknXxozFrq9O/57AW5fdnWpGNSDhUSlFrDUvUi+L2ahKcpTjGKTTlBpSTelae+Wc3HEqVOxpXdHRUhVlGMXOehLPq3h4A72lCra1JUoyUrXGYan5oPsVkUeJUcU1VaUp4y6Tc4R1PEcyx6nL4nbKMZZqPUk0lB5eZaV+oFgM6txejGnCVGM6kpyitOlrSnPR5u2+foaIAAAAAAAAAAAAAAAAEkuHW8qkKjUtcKzrxeekn1Xt8jm0sKNnnk8x+VQWuWdMVnEV8t2VACKnwy2pqKjzPLy8eb8DbX7nX4Ra8ylNOqnTaa82zxJyWdu7ZeAMqjweKlVVeo3TcYxpRi3mmoyclu/dbFztoOnRg3JqlJSi298rue4AmrWNGtcKtJzTWnMYyxGel5jleuGeUOFW8J6tVZ7rCc8qKUtSS26ZLgBBLhNs3FqVaOHlqM8KXnc99u7ZeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/9k=";
      style.textContent = `
      .mat-image{
          position:relative;
          left:50%;
          transform:translateX(-50%);
          border-radius:3Px;
          margin:5px;
      }
      `;
      let options = {
        root: document.body,
        rootMargin: "0px",
        threshold: 0.8,
      };
      if (this.hasAttribute("src")) {
        src = this.getAttribute("src");
      }
      let observer = new IntersectionObserver((e) => {
        image.src = src;
      }, options);
      observer.observe(image);
      shadow.appendChild(image);
      shadow.appendChild(style);
    }
  }
  class RPLiveElement extends HTMLElement {
    constructor() {
      super();
      let shadow = this.attachShadow({ mode: "open" });
      let div = document.createElement("div");
      let l = document.getElementsByTagName("mat-live").length;
      let id = "mat-live-" + l;
      if (this.hasAttribute("tag")) {
        id = this.getAttribute("tag");
      }
      div.id = id;
      div.innerHTML = this.innerHTML;
      let observer = new MutationObserver((mut, list) => {
        let evt = new CustomEvent(id, {
          detail: { mutation: mut,observer:list},
        });
        document.dispatchEvent(evt)
      });
      let observerOptions = {
        childList: true,
        attributes: true,
        subtree: true,
        characterData: true,
        attributeOldValue: true,
      };
      observer.observe(this, observerOptions);
      shadow.appendChild(div);
    }
  }
  customElements.define("mat-live", RPLiveElement);
  customElements.define("mat-image", RPImageElement);
  customElements.define("mat-dropdown", RPDropDownCardElement);
  customElements.define("mat-modal", RPModalElement);
  customElements.define("mat-item", RPItemElement);
  customElements.define("mat-button", RPButtonElement);
  customElements.define("mat-card-r", RPCardCaseElement);
  customElements.define("mat-dots", RPDotsElement);
  customElements.define("mat-card", RPCardElement);
  customElements.define("mat-float", RPFloatElement);
});
document.addEventListener('mat-live-1',(e)=>{
  
})
// resizeobserver reportingobserver mutationobeserver interceptionobserver performanceobserver
