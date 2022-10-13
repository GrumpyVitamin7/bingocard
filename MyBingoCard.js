// const btn1 = document.getElementById("btn1")
// const btn2 = document.getElementById("btn2")
// const btn3 = document.getElementById("btn3")
// const btn4 = document.getElementById("btn4")
// const btn5 = document.getElementById("btn5")
// const btn6 = document.getElementById("btn6")
// const btn7 = document.getElementById("btn7")
// const btn8 = document.getElementById("btn8")
// const btn9 = document.getElementById("btn9")
// const btn10 = document.getElementById("btn10")
// const btn11 = document.getElementById("btn11")
// const btn12 = document.getElementById("btn12")
// const btn13 = document.getElementById("btn13")
// const btn14 = document.getElementById("btn14")
// const btn15 = document.getElementById("btn15")
// const btn16 = document.getElementById("btn16")
// const btn17 = document.getElementById("btn17")
// const btn18 = document.getElementById("btn18")
// const btn19 = document.getElementById("btn19")
// const btn20 = document.getElementById("btn20")
// const btn21 = document.getElementById("btn21")
// const btn22 = document.getElementById("btn22")
// const btn23 = document.getElementById("btn23")
// const btn24 = document.getElementById("btn24")
// const btn25 = document.getElementById("btn25")

// const NumsArray = [];
// do {
// 	const randomNumber = Math
// 		.floor(Math.random() * 76) + 1
// 	if (!NumsArray.includes(randomNumber)) {
// 		NumsArray.push(randomNumber);
// 	}

// } while (NumsArray.length < 76);

// btn1.innerHTML = NumsArray.shift()
// btn2.innerHTML = NumsArray.shift()
// btn3.innerHTML = NumsArray.shift()
// btn4.innerHTML = NumsArray.shift()
// btn5.innerHTML = NumsArray.shift()
// btn6.innerHTML = NumsArray.shift()
// btn7.innerHTML = NumsArray.shift()
// btn8.innerHTML = NumsArray.shift()
// btn9.innerHTML = NumsArray.shift()
// btn10.innerHTML = NumsArray.shift()
// btn11.innerHTML = NumsArray.shift()
// btn12.innerHTML = NumsArray.shift()
// btn13.innerHTML = NumsArray.shift()
// btn14.innerHTML = NumsArray.shift()
// btn15.innerHTML = NumsArray.shift()
// btn16.innerHTML = NumsArray.shift()
// btn17.innerHTML = NumsArray.shift()
// btn18.innerHTML = NumsArray.shift()
// btn19.innerHTML = NumsArray.shift()
// btn20.innerHTML = NumsArray.shift()
// btn21.innerHTML = NumsArray.shift()
// btn22.innerHTML = NumsArray.shift()
// btn23.innerHTML = NumsArray.shift()
// btn24.innerHTML = NumsArray.shift()
// btn25.innerHTML = NumsArray.shift()





let row = 4;
let column = 19;

function generateCard() {
    // creates a <table> element and a <tbody> element
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
  
    // creating all cells
    for (let i = 0; i < row; i++) {
      // creates a table row
      const row = document.createElement("tr");
  
      for (let j = 0; j < column; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        const cell = document.createElement("td");
        const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    document.body.appendChild(tbl);
    // sets the border attribute of tbl to '2'
    tbl.setAttribute("border", "2");
  }
  

  function Random() {
    var rnd = Math.floor(Math.random() * 76);
    document.getElementById("tb").value = rnd;
  }