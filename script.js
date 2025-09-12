document.getElementById("button1").addEventListener("click",htmlString);
document.getElementById("button2").addEventListener("click",jsDOM);


let topUniversities = JSON.parse(localStorage.getItem("universities"));
console.log(topUniversities)
function htmlString(){
    
    let o = "";
///
  for(let i = 0; i < topUniversities.length; i++) {
    o += "<tr>";
    o += "<td>";
    o += '<a href="detail.html?id=' + i + '">' + topUniversities[i].name + '</a>';
    o += "</td>";
    o += "</tr>";
  }
      
    document.getElementById("body").innerHTML = o;
   
}

function jsDOM(){
    const tbody = document.querySelector("body");
    console.log('works')

    for(let i = 0; i< topUniversities.length; i++) {

      let row = document.createElement("tr"); //starts a row

      
    
      let nameCell = document.createElement("td");
      nameCell.innerHTML = topUniversities[i].name;

      let locationCell = document.createElement("td");
      locationCell.innerHTML = topUniversities[i].location;

      let rankCell = document.createElement("td");
      rankCell.innerHTML = topUniversities[i].rank;

      let avgClassSizeCell = document.createElement("td");
      avgClassSizeCell.innerHTML = topUniversities[i].avgClassSize;

      let tuitionCell = document.createElement("td");
      tuitionCell.innerHTML = topUniversities[i].tuition;

      let specialtyCell = document.createElement("td");
      specialtyCell.innerHTML = topUniversities[i].specialty;

      row.appendChild(nameCell); //new columns
      row.appendChild(locationCell);
      row.appendChild(rankCell);
      row.appendChild(avgClassSizeCell);
      row.appendChild(tuitionCell);
      row.appendChild(specialtyCell);

      tbody.appendChild(row);//add the whole row to the table
    };
}

//th is heading, tr is table rows, td is columns, caption





