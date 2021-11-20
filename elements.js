class FNHEADER extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `

        <style>
        :root {
            --clr-bg: #254158;
            --clr-lbg: #4f85b1;
            --clr-primary: #f4ffff;
            --clr-link: #00d3cc;
          }
          
          .navigation {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
          
            max-width: 1300px;
          
            flex-wrap: wrap;
          }
          
          .nav_list {
            display: flex;
            text-decoration: none;
            list-style: none;
          
            height: 100%;
          
            justify-content: center;
            align-items: center;
          }
          
          .navbar_item {
            margin-top: auto;
            margin-bottom: auto;
            margin-left: 1vw;
            margin-right: 1vw;
            text-align: center;
          
            width: 100%;
            height: 100%;
          
            flex: 1;
          
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
          .web_name {
            margin-top: auto;
            margin-bottom: auto;
            font-size: 2vw;
          }
          
          .navbar_link {
            width: 100%;
            height: 100%;
          
            padding: 5px;
          
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
          .navbar_link:hover {
            text-decoration: none;
            background-color: rgba(0, 0, 0, 0.5);
          }
          </style>

        <div class="navigation">
            <h1 class="web_name">FN.NET</h1>
            <ul class="nav_list">
                <li class="navbar_item">
                    <a href="/index.html" class="navbar_link">Home</a>
                </li>
                <li class="navbar_item">
                    <a href="/Pages/Games.html" class="navbar_link">Games</a>
                </li>
                <li class="navbar_item">
                    <a class="navbar_link" href="/Pages/Software.html">Software</a>
                </li>
                <li class="navbar_item">
                    <a class="navbar_link" href="/Pages/Tutorials.html">Tutorials</a>
                </li>
            </ul>
        </div>`
    }
}

customElements.define("fn-header", FNHEADER)