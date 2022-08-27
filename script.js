/*------------------------------Nav----------------------------------------*/
let nav = document.createElement("nav");
nav.setAttribute("class", " py-5 text-center  text-white");
document.body.append(nav);
//
let h5 = document.createElement("h1");
h5.innerHTML = "Search a Phone Number";
nav.append(h5);
/*------------------------------------nav-----------------------------------------*/
/*-------------------------------------searchbar-------------------------------------- */
let div = document.createElement("div");
div.setAttribute("class", "d-flex  justify-content-center py-3");
document.body.append(div);
let input = document.createElement("input");
input.setAttribute("type", "tel");
input.setAttribute("placeholder", "Enter Phonenumber");
input.setAttribute("id", "books");
input.setAttribute("onkeypress", "eventCheck(event)");
input.setAttribute("class", "input len");
div.append(input);
var button = document.createElement("button");
button.setAttribute("type", "submit");
button.setAttribute("class", "btn btn-primary mx-2 text-white");
button.innerHTML = "search";
button.addEventListener("click", phoneNumber);
div.append(button);

/*-------------------------------------searchbar-------------------------------------- */

let container = document.createElement("div");
container.setAttribute("class", "container ");
container.style.fontSize = "15px";
document.body.append(container);
//
async function phoneNumber() {
  try {
    let input = document.getElementById("books").value;
    let url = `https://api.veriphone.io/v2/verify?phone=${input}&key=4124B1993E6744888B534AE5D3DBCD9D`;
    let link = await fetch(url);
    let result = await link.json();
    //console.log(result);
    container.innerHTML = ` <div class="card  mx-auto con">
    <div class="card-body px-3">
    <p class="card-text"><span class=" text-black">Valid :<span class=" text-warning"> "${result.phone_valid}"</span></p>
    <p class="card-text "><span class=" text-black">Country :<span class=" text-white">" ${result.country}"</span></p>
    <p class="card-text"><span class=" text-black">Carrier : <span class=" text-white"> "${result.carrier}"</span> </p>
    <pclass="card-text"><span class=" text-black">Phone Type :<span class="text-white">"${result.phone_type}"</span></p>
    <p class="card-text"><span class=" text-black">Dial Code :<span class="text-white">" ${result.country_prefix}"</span></p>
    <p class="card-text"><span class=" text-black">Region : <span class="text-white">"${result.phone_region}"</span></p>
    <p class="card-text"><span class=" text-black">Int Number:<span class=" text-white">" ${result.international_number}"</span></p>
    <p class="card-text"><span class=" text-black">E164 Number:<span class=" text-white">" ${result.e164}"</span></p>
    </div>
  </div>`;
  } catch (error) {
    a.innerHTML = "error";
  }
}
function eventCheck(event) {
  if (event.keyCode < 48 || event.keyCode > 57) {
    event.preventDefault();
    alert("Only numbers are allowed");
  }
}
