import image from "../../images/cocktail.png"
class AppBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
         }

        :host {
            display: block;
            width: 100%;
            background-color: rgb(54, 55, 56);
            color: white;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            background-image: url(${image});
            background-repeat: no-repeat;
            background-position:center;
            background-size:200px;
        }

        h2 {
          padding-top :400px;
         font-size:30px;
            text-align: center;
            margin-top: -100px;
        }
        h3{
            padding-bottom :50px;
            text-align: center;
            font-style:italic;
            font-size:20px;
        }
    </style>
    <h2>MakeCocktail Finder</h2>
        <h3> Let's find and make your favorite cocktail!</h3>`;
    }
}

customElements.define("app-bar", AppBar);