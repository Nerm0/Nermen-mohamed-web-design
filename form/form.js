 
    var form = document.getElementById("myForm");
    var table = document.getElementById("myTable").querySelector("tbody");

    form.onsubmit = function(e) {
      e.preventDefault();

      var name = document.getElementById("nameInput").value.trim();
      var balance = document.getElementById("balanceInput").value.trim();
      var id = document.getElementById("idInput").value.trim();

      var newRow = document.createElement("tr");
      newRow.innerHTML = `
        <td>${name}</td>
        <td>${balance}</td>
        <td>${id}</td>
        <td>
          <button class="delete-btn">Delete</button>
          <button class="edit-btn">Edit Balance</button>
        </td>
      `;

      table.appendChild(newRow);
      form.reset();
    };

    table.addEventListener("click", function(e) {
      var target = e.target;

      if (target.classList.contains("delete-btn")) {
        if (table.rows.length > 0) {
          table.deleteRow(table.rows.length - 1);
        }
      }

      if (target.classList.contains("edit-btn")) {
        var row = target.closest("tr");
        var currentBalance = row.cells[1].innerText;
        var newBalance = prompt("Enter new balance:", currentBalance);

        if (newBalance !== null && newBalance.trim() !== "") {
          row.cells[1].innerText = newBalance.trim();
        }
      }
    });
  
