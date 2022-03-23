fetch('https://rickandmortyapi.com/api/character', {
    method: 'GET'
})

    .then((response) => {
        response.json()
            .then((data) => {
                var colCard = document.getElementById('col-card');
                console.log('DATA', data.results)

                data.results.map((result) => {
                    const episodios = result.episode

                    const card = document.createElement('div');
                    card.classList = 'card';
                    const content = `<div  class="col">
                    <div  class="card shadow-lg">
                        <img src="${result.image}"
                            class="card-img-top shadow-lg img-fluid rounded-circle mx-auto d-block mt-2" alt="..."
                            style="width: 300px;">
                        <div class="card-body">
                            <h5 class="card-title">${result.name}</h5>
                            <p class="card-text"><b>Status:</b> ${result.status}</p>
                            <p class="card-text"><b>Gênero:</b> ${result.gender}</p>
                            <p class="card-text"><b>Planeta de Origem:</b><a href="${result.origin.url}"> ${result.origin.name}</a></p>
                        </div>
                        <div class="card-footer">
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                              Episódios
                            </button>
                          </h2>
                          <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">${episodios}.</div>
                          </div>
                        </div>
                        </div>
                    </div>
    
                </div>`;

                    colCard.innerHTML += content;

                })

            })
    })




    //fetch('http://localhost:3001/activities/' + hostEmail)
    .then((response) => {
        response.json()
            .then((data) => {
                console.log(data);
                return data;
            }).catch((err) => {
                console.log(err);
            })
    });