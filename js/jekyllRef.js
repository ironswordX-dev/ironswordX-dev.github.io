let elem = document.createElement('div')
let refElem = document.createElement('a')
let imgElem = document.createElement('img')
imgElem.src = "/assets/jekyllLogo.png";
refElem.appendChild(imgElem);
refElem.href = "https://jekyllrb.com/";
elem.innerText = "Made & Deployed with ";
elem.id = "jekyll";
elem.appendChild(refElem)
document.body.appendChild(elem)