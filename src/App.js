import logo from "./img/logo-ALTA.png";
import "./Laman.css";
import f1 from "./img/bg-img.png";
import f2 from "./img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg";
import Contact_us from "./Contact_us";

function App() {
  return (
    <div>
      {/* <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>HOME</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="Laman.css" />
      </head> */}

      <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <div class="container-fluid">
          <div class="col-7">
            <a class="navbar-brand" href="#">
              <img src={logo} style={{ marginLeft: 100 + "px" }} alt="" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
          <div class="collapse navbar-collapse col-5" id="navbarNav">
            <ul class="navbar-nav mx-auto">
              <div class="row">
                <li class="nav-item col-3">
                  <a
                    class="nav-link active"
                    href="#"
                    style={{ color: "#F47522" }}
                  >
                    HOME
                  </a>
                </li>
                <li class="nav-item col-3">
                  <a class="nav-link" href="#">
                    ABOUT
                  </a>
                </li>
                <li class="nav-item col-3">
                  <a class="nav-link" href="#">
                    EXPERIENCE
                  </a>
                </li>
                <li class="nav-item col-3" style={{ paddingLeft: 11 + "%" }}>
                  <a class="nav-link " href="contact_us.html">
                    CONTACT
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>

      <div>
        <img src={f1} class="img-fluid" alt="" />
      </div>
      <div>
        <img class="foto-pp" src={f2} width="30%" height="30%" alt="" />
      </div>
      <div class="punch">
        <h3>Hi, my name is</h3>
        <h1>Anne Sullivan</h1>
        <br />
        <h2>I build things for the web</h2>

        <br />
        <button
          type="button"
          class="btn  btn-lg rounded-pill fs-4"
          style={{ backgroundColor: "#F47522", color: "white" }}
        >
          Get In Touch
        </button>
      </div>
      <div> 
        <br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/>
         <br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/>
         <br/> <br/><br/> <br/><br/>
         <Contact_us style={{marginTop:1800+'px'}}/></div>
    </div>
  );
}

export default App;
