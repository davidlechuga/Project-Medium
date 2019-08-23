const mediumArticles = [ 

  {
    name: "El DOM  virtual",
    author: "Noemi Hernandez",
    imagen: "url",
    date: "22-ago-2019"

  },
  {
    name:  "Como aunmetar productividad del developer",
    author: "María Huerta",
    imagen: "url",
    date: "22-ago-2019"

  },
  {
    name: "SQLite in Flutter",
    author: "Jessica Lechuga",
    imagen: "url",
    date: "22-ago-2019"

  },
  {
    name:  "Create Snapshot of AWS EC2",
    author: "Daniel Castillo",
    imagen: "url",
    date: "22-ago-2019"

  },
  {
    name: "Fundamentos de Js",
    author: "David Lopez",
    imagen: "url",
    date: "22-ago-2019"

  }

                  ]


const fillMediumArticles = () => {
  mediumArticles.forEach((value,index) => {
    console.log(value.name)      
    $(".modal-content").append(`
    <div class="container post${index}">
    <div class="modal-header"> 
        <h5 class="modal-title" id="name">${value.name}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body">
      <div class="row">
          <div class="col-6">
              <p id="author">${value.author}</p>
          </div>
          <div class="col-6">
              <img id="imagen" src="${value.imagen}">
          </div>
    </div>
    <p id="date">${value.date}</p>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" otextick="getMediumArticles()" >Save changes</button>
    </div>
    </div>


    `)
  
  })
  /*$(".modal-content").empty();*/
}

fillMediumArticles();

const getMediumArticles = () => {
  let name = $("#name").text();
  let author = $("#author").text();
  let imagen = $("#imagen").text();
  let date = $("#date").text();
  let mediumArticlesObject = { name, author, imagen, date }
  console.log(mediumArticlesObject)
}
getMediumArticles()



