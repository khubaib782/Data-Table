document.addEventListener("DOMContentLoaded", function () {
  const table = document.querySelector("table");
  const tbody = table.querySelector("tbody");
  const headers = table.querySelectorAll("th");

  headers.forEach((header, index) => {
    header.addEventListener("click", () => {
      sortColumn(index);
    });
  });

  function sortColumn(columnIndex) {
    const rows = Array.from(tbody.querySelectorAll("tr"));
    const isAscending = headers[columnIndex].classList.contains("asc");

    headers.forEach((header) => {
      header.classList.remove("asc", "desc");
    });

    if (isAscending) {
      rows.sort((a, b) => {
        const aValue = a.querySelectorAll("td")[columnIndex].textContent;
        const bValue = b.querySelectorAll("td")[columnIndex].textContent;
        return bValue.localeCompare(aValue);
      });
      headers[columnIndex].classList.add("desc");
    } else {
      rows.sort((a, b) => {
        const aValue = a.querySelectorAll("td")[columnIndex].textContent;
        const bValue = b.querySelectorAll("td")[columnIndex].textContent;
        return aValue.localeCompare(bValue);
      });
      headers[columnIndex].classList.add("asc");
    }

    tbody.innerHTML = "";
    rows.forEach((row) => {
      tbody.appendChild(row);
    });
  }
});
