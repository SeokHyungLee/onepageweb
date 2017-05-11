

function guestAdd(){
  var table = document.getElementById("insertTable");
      // tr 개체를 얻어와 속성값을 조절한다.
  var tr = document.createElement("tr");
  var td1 = document.createElement("td");
  td1.setAttribute("width", "150"); // 넓이
  td1.innerText = document.getElementById("author").value;
  var td2 = document.createElement("td");
  td2.setAttribute("width", "500"); // 넓이
  td2.innerText = document.getElementById("contain").value;

  tr.appendChild(td1);
  tr.appendChild(td2);
      // 입력된값을 넣은 tr 개체를 추가한다.
  table.appendChild(tr);

}
