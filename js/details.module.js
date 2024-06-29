import { UI } from "./ui.module.js";
export class Details{
    constructor(id){
        this.ui = new UI();
        this.getid(id)

    document.addEventListener("click", () => {
      const btnClose = document.getElementById("btnClose");
      if (btnClose) {
        btnClose.addEventListener("click", () => {
          document.getElementById('big').classList.remove('d-none');
          document.getElementById('de').classList.add('d-none');
        });
      }
    });
    }
    async getid(idOption) {
        const option = {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": "b7ddeaba2emsh4c7f9a279de19b4p17f62fjsn9ef33d17e7d9",
            "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
          },
        };
    
        const api2 = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${idOption}`,option);
        const response2 = await api2.json();
        this.ui.displaydetails(response2);
      }
}