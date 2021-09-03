import "./Laman2.css";
import f3 from "./img/charles-rRWiVQzLm7k-unsplash.jpg";
import f4 from "./img/logo-ALTA-v2@2x.png";


function Contact_us(){
  return (
<div>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CONTACT</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
      crossorigin="anonymous"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
      rel="stylesheet"
    />
  </head>

  <body>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj"
      crossorigin="anonymous"
    ></script>
    <div class="col-5 float-start">

      <div>
        <img class="kiri img-fluid" src={ f3} alt="" />
      </div>
      <div id="layer">
        <img class="img-fluid" src={f4} alt="" />
      </div>
      <div class="layer"></div>

    </div>

    <div id="bag.kanan" class="col-7 float-end">
      <div id="forma" class="col-6 mx-auto " style={{color: '#19345E'}}>
        <form action="">
          <h1 class="display-4" style={{fontWeight:'normal'}}>Contact Us</h1>
          <label class="fs-1">Full Name<span>*</span> </label>
          <input
            type="text"
            class="form-control  form-control-lg"
            placeholder="Your Full Name Here..."
            id=""
          />
          <label class="fs-1">Email Address<span>*</span></label>
          <input
            type="email"
            class="form-control  form-control-lg"
            placeholder="example@domail.com"
            id=""
          />
          <label class="fs-1">Phone Number<span>*</span></label>
          <input
            type="number"
            class="form-control  form-control-lg"
            placeholder="08573890xxxxx"
            id=""
          />
          <label class="fs-1">Nationality</label>
          <select class="form-select  form-select-lg" aria-label="Default select example">
            <option selected>Selected</option>
            <option value="1">Indonesia</option>
            <option value="2">WNA</option>
          </select>
          <br />
          <label class="fs-1">Message</label>
          <div class="form-floating">
            <textarea class="form-control form-control-lg" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: 200+'px'}}></textarea>
            <label for="floatingTextarea2">Your Full Name Here...</label>
          </div>
          <br/>
          <button
            type="button"
            class="btn btn-lg rounded-pill fs-2"
            style={{backgroundColor: '#f47522', color: 'white'}}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </body>
</html>
</div>
  );
}
export default Contact_us;
