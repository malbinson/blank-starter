
let queryString = window.location.search;
let params = new URLSearchParams(queryString);
let id = params.get('id');

let universities = JSON.parse(localStorage.getItem("universities"));
let i = parseInt(id);
let container = document.getElementById("detail-container");

let o = "";

    o += '<h2>' + universities[i].name + '</h2>';
    o += '<table>';
    o += '<tr><td>Location</td><td>' + universities[i].location + '</td></tr>';
    o += '<tr><td>Rank</td><td>' + universities[i].rank + '</td></tr>';
    o += '<tr><td>Average Class Size</td><td>' + universities[i].avgClassSize + '</td></tr>';
    o += '<tr><td>Tuition</td><td>' + universities[i].tuition + '</td></tr>';
    o += '<tr><td>Specialty</td><td>' + universities[i].specialty + '</td></tr>';
    o += '<tr><td>Website</td><td><a href="' + universities[i].webLink + '" target="_blank">Website</a></td></tr>';
    o += '</table>';

container.innerHTML = o;