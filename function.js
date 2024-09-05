function init() {
    let body = document.getElementById("body");

    const numberOfDivs = 5

    for (let i = 0; i <= numberOfDivs; i++) {
        let div = document.createElement("div");
        div.innerText += `This is div ${i}`
        div.setAttribute("id", `div${i}`)
        if (i == 0) {
            div.style.backgroundColor = "green"
        } else if (i % 2 == 0) {
            div.style.backgroundColor = "red"
        }
        else {
            div.style.backgroundColor = "blue"
        }
        body.appendChild(div)
    }
    /*
 
     let div1 = document.createElement("div");
     div1.innerText += "Hello world"
     div1.setAttribute("id", "div1")
     let div2 = document.createElement("div");
     div2.innerText += "Hello world"
     div2.setAttribute("id", "div1")
     let div3 = document.createElement("div");
     div3.innerText += "Hello world"
     div3.setAttribute("id", "div1")
 
     body.appendChild(div1);
     body.appendChild(div2);
     body.appendChild(div3);
     */
}
