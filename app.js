let container = document.getElementById("card");

fetch("book.json")
  .then(res => res.json())
  .then(data => {
    data.forEach(item => {
      let col = document.createElement("div");
      col.className = "col-md-3 mb-4"; 

      col.innerHTML = `
        <div class="custom-card">
          <img src="${item.img}" alt="${item.name}">
          <div class="card-body">
            <h5>${item.name}</h5>
            <p>${item.date}</p>
            <p>${item.views}</p>
          </div>
        </div>
      `;

      container.appendChild(col);
    });
  })
  .catch(err => console.log("Xəta:", err));
