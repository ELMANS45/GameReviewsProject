 export class UI{
    displayData(response){
        let data=``
        for(let i = 0 ;  i<response.length ; i++){
            data+=`<div class="col-xxl-3 col-xl-3 col-md-6 col-sm-12 col-12 d-flex justify-content-center gy-3 pb-4 pt-4">
                        <div class="card" style="width: 18rem;" id=${response[i].id} role="button">
                            <img src=${response[i].thumbnail} class="card-img-top" alt="...">
                            <div class="card-body">
                              <div class="card-title d-flex justify-content-between">
                                <span>${response[i].title}</span>
                                <span class=" btn btn-primary">Free</span>
                              </div>
                              <p class="card-text text-center opacity-50">${response[i].short_description}</p>
                              <div class="card-title d-flex justify-content-between">
                                <span class="badge badge-color">${response[i].genre}</span>
                                <span class="badge badge-color">${response[i].platform}</span>
                              </div>
                            </div>
                          </div>
                    </div>`
        }
        document.getElementById('kara').innerHTML = data;
    }
    displaydetails(respons){
        let dat = ``
        dat+=`<div class="container">
               <div class="hstack justify-content-between">
                  <h1 class="text-center h3 py-4">Details Game</h1>
                  <button class="btn-close btn-close-white" id="btnClose"></button>
            </div>
               <div class="row g-4" id="detailsContent">
         <div class="col-md-4">
         <img src=${respons.thumbnail} class="w-100" alt="image details">
      </div>
      <div class="col-md-8">
         <h3>Title: ${respons.title}</h3>
         <p>Category: <span class="badge text-bg-info">${respons.genre}</span> </p>
         <p>Platform: <span class="badge text-bg-info"> ${respons.platform}</span> </p>
         <p>Status: <span class="badge text-bg-info"> Live</span> </p>
         <p class="small">${respons.description}</p>
         <a class="btn btn-outline-warning" target="_blank" href=${respons.game_url}>Show Game</a>
      </div>         
         </div>
            </div>`
            document.getElementById('de').innerHTML=dat
    }
}