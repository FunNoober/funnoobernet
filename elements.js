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
          
          p {
            color: var(--clr-primary);
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
          
          * {
            margin: 0;
            padding: 0;
          }
          
          html,
          body {
            margin: 0;
            height: 100%;
            width: 100%;
          
            font-family: Arial, Helvetica, sans-serif;
          }
          
          body {
            font-family: Arial, Helvetica, sans-serif;
            margin: 0;
            padding: 0;
            background-color: var(--clr-lbg);
            display: flex;
            flex-direction: column;
          
            width: 100%;
            height: 100%;
          }
          
          h1,
          h2,
          h3,
          h4,
          h5 {
            color: var(--clr-primary);
          }
          
          a {
            color: var(--clr-link);
            text-decoration: none;
          }
          
          a:hover {
            font-size: 155%;
            text-decoration: underline;
          }
          
          .page_content {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            width: 100%;
            background-image: linear-gradient(to top, var(--clr-bg), var(--clr-lbg));
            flex-direction: column;
            flex: 1;
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
                    <a class="navbar_link" href="/Pages/UnityPackages.html">Unity Packages</a>
                </li>
                <li class="navbar_item">
                    <a class="navbar_link" href="/Pages/Tutorials.html">Tutorials</a>
                </li>
            </ul>
        </div>`
    }
}

customElements.define("fn-header", FNHEADER)