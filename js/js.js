console.log('connected');

fetch('https://www.thesportsdb.com/api/v1/json/3/all_leagues.php')
.then( res => res.json())
.then( leagues => showLeagues(leagues.leagues));

function showLeagues(leagues){
    let list = document.getElementById('League list');


    for (const league of leagues) {

        console.log(league);

        let div = document.createElement('div');
        div.innerHTML = `
        
        <div class="border bg-slate-100">
        <h1 class="text-xl"> ${league.strLeague} </h1>
        <h2 class="text-lg"> ${league.strLeagueAlternate?league.strLeagueAlternate: 'No sName' } </h2>

         </div>
        
        
        `;
        list.appendChild(div);

        
      
        
    }
   
    
    
    


}