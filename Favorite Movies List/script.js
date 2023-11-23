let filmListesi = [];

function renderList() {
  const filmListesiElement = document.getElementById("filmListesi");
  filmListesiElement.innerHTML = "";

  filmListesi.forEach((film, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${film.isim}</span>
      <button onclick="like(${index})">Beğen</button>
      <button onclick="dislike(${index})">Beğenme</button>
      <span>${film.begeniSayisi}</span>
      <button onclick="deleteFilm(${index})">Sil</button>
    `;
    filmListesiElement.appendChild(li);
  });
}

function addFilm() {
  const filmInput = document.getElementById("filmInput");
  const filmIsmi = filmInput.value.trim();

  if (filmIsmi !== "") {
    const yeniFilm = {
      isim: filmIsmi,
      begeniSayisi: 0,
    };

    filmListesi.push(yeniFilm);
    filmInput.value = "";
    renderList();
  }
}

function like(index) {
  filmListesi[index].begeniSayisi++;
  renderList();
}

function dislike(index) {
  if (filmListesi[index].begeniSayisi > 0) {
    filmListesi[index].begeniSayisi--;
    renderList();
  }
}

function deleteFilm(index) {
  filmListesi.splice(index, 1);
  renderList();
}

renderList();
