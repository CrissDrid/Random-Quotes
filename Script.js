let data = [];
let currentQuote;

fetch(
  "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/3-javascript/challenges/group_1/data/random-quotes.json"
)

  .then((response) => response.json())
  .then((json) => {
    data = json;
    randomQuote()
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

  function randomQuote() {
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomQuote = data[randomIndex]

    currentQuote = randomQuote;

    const authorElement = document.querySelector(".quote-author")
    authorElement.innerText = randomQuote.author;

    const tagsContainer = document.querySelector(".quote-tags")
    tagsContainer.innerHTML = "";

    randomQuote.tags.forEach(tags => {
      //Crea un elemento span en el DOM
      const tagsElements = document.createElement("span")
      //Añade un elemento span por cada tag que haya con el estilo del css
      tagsElements.classList.add("quote-tag");
      //El contenido de text se cambia por el que se devuelve del json recorriendo el array
      tagsElements.textContent = tags;
      //Se inserta el span como hijo en el tagsContainer
      tagsContainer.appendChild(tagsElements)
    });

    const quoteElement = document.querySelector(".quote-text")
    quoteElement.innerText = `“${randomQuote.quote}”`;
  }

  document.querySelector(".random-quote").addEventListener("click", randomQuote);

  function showToaste(message) {
    const toast = document.getElementById("toast")
    toast.textContent = message;
    toast.classList.add("show")

    clearTimeout(toast.timeout);

    setTimeout(() => {
      toast.classList.remove("show")
    }, 2500)
  }

  function shareQuote() {
    const shareQuote = `“${currentQuote.quote}” - ${currentQuote.author}`

    navigator.clipboard.writeText(shareQuote)
      .then(() => {
        showToaste("Cita copiada en el portapapeles")
      })
      .catch((error) => {
        console.error("Error al copiar al portapapeles: ",error)
        showToaste("Error al copiar la cita")
      })
  }

  document.querySelector(".share-quote").addEventListener("click", shareQuote)