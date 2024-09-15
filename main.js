let url = "https://http.cat/"
// let contianer = document.getElementById("container")
let container1 = document.getElementById("container1")
let container2 = document.getElementById("container2")
let container3 = document.getElementById("container3")
let container4 = document.getElementById("container4")
let container5 = document.getElementById("container5")


const resCodes = [
    100, 101, 102, 103, 200, 201, 202, 203, 204, 206, 207, 208, 214, 226, 300,
    301, 302, 303, 304, 305, 307, 308, 400, 401, 402, 403, 404, 405, 406, 407,
    408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 420, 421, 422, 423,
    424, 425, 426, 428, 429, 431, 444, 450, 451, 497, 498, 499, 500, 501, 502,
    503, 504, 506, 507, 508, 509, 510, 511, 521, 522, 523, 525, 530, 599,
  ];


  for(let i in resCodes){
    
    let img = document.createElement("img")
    img.src = url+resCodes[i]+ ".jpg"

if (resCodes[i] >= 100 && resCodes[i] < 200) {
    container1.appendChild(img);  
  } else if (resCodes[i] >= 200 && resCodes[i] < 300) {
    container2.appendChild(img);
  } else if (resCodes[i] >= 300 && resCodes[i] < 400) {
    container3.appendChild(img);
  } else if (resCodes[i] >= 400 && resCodes[i] < 500) {
    container4.appendChild(img);
  } else if (resCodes[i] >= 500 && resCodes[i] < 600) {
    container5.appendChild(img);
  }

    
  }
