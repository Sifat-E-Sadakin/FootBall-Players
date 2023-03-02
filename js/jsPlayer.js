console.log('connected');

function searchPlayers(name, limit){
    fetch(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${name}`)
.then( res => res.json())
.then( players => showPlayers(players.player, limit) );

}




document.getElementById('btn').addEventListener('click', function(){
      sp(true);
      let input = document.getElementById('inp').value;
      searchPlayers(input, 10);
})

document.getElementById('inp').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sp(true);
      let input = document.getElementById('inp').value;
      searchPlayers(input, 10);
        
    //   // Enter key pressed
    //   console.log('Enter key pressed!');
    }
  })


function showPlayers(players, limit){
    // console.log('players', players.length);

    if(players== null ){
        alert('No player Found. Try again')
        sp(false);
    }
    let list = document.getElementById('player list');
    // list.classList.add=('flex');

   console.log(players);
    if(players==null){
        let notFound= document.getElementById('notFound');
        notFound.classList.add('hidden');
    }

    if(players.length>limit){
        // alert(console.log("snsun"))

        players = players.slice(0,10);
        
        let allButton = document.getElementById('btn-all');
        allButton.classList.remove('hidden');
    }
    else{
        let allButton = document.getElementById('btn-all');
        allButton.classList.add('hidden');

    }

    list.innerHTML =``;
    for (const player of players ) {

        console.log(player );

        // if( player.strTeam  == club){
            
        // }

        let div = document.createElement('div');
        div.innerHTML = `

        <div class="card lg:card-side bg-base-100 bg-slate-50 shadow-xl">
            <figure><img src="${player.strCutout? player.strCutout:'./Pictures/download_500x500.png'}"  alt="Album"/></figure>
            <div class="card-body">
              <h2 class="card-title">${player.strPlayer}</h2>
              <p>${player.strBirthLocation}</p>
              <label for="my-modal-6" onclick="playerDetails('${player.idPlayer}')" class="btn">View Details</label>
              
        </div>
        
        
                    
       
        
        
        `;
        list.appendChild(div);

        
      
        
    }
    sp(false);
}
function playerDetails(id){
    console.log('showing details', id);
    fetch(`https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${id}`)
    .then( res => res.json())
    .then( players => showPlayersDetails(players.players) );
}

 function showPlayersDetails(players){

    console.log(players[0]);

       let info = document.getElementById('info');
       info.innerHTML=``;
    //    let div = document.createElement('div');
    //    div.classList.add=('modal-box');
    //    div.classList.add=('w-11/12');
    //    div.classList.add=('max-w-5xl');

       info.innerHTML=`  <h3 id="name" class="font-bold text-lg text-black">Name: ${players[0].strPlayer}</h3>
                           <p id="age" class="py-1 text-black">Born: ${players[0].dateBorn} </p>
                           <p id="age" class="py-1 text-black">Nationality: ${players[0].strNationality} </p>
                           <p id="age" class="py-1 text-black">Club: ${players[0].strTeam} </p>
                           <p id="age" class="py-1 text-black">Position: ${players[0].strPosition} </p>
                           <p id="age" class="py-1 text-black"> ${players[0].strDescriptionEN} </p>
                           <img src="${players[0].strThumb}? " alt=""/
                           
                           <div class="modal-action">
                           <label for="my-modal-6" class="btn">Yay!</label>
                         </div>
       `;

        // info.appendChild(div);
    // for (const player of players) {
    //     console.log(players[0]);
    //     let name = document.getElementById('name');
    //     name.innerText = players[0].strPlayer;
    //     let age = document.getElementById('age');
    //     age.innerText = players[0].dateBorn;
        
    // }

   


 }

 function sp(a){
    if(a== true){
        let sp = document.getElementById('sp');
        sp.classList.remove('hidden');
    }
    else{
        let sp = document.getElementById('sp');
        sp.classList.add('hidden');

    }
 }

 document.getElementById('btn-all').addEventListener('click', function(){
    sp(true);
    let input = document.getElementById('inp').value;
    searchPlayers(input);

 })

 //Fcb
 document.getElementById('btn-fcb').addEventListener('click', function(){
    sp(true);
    fetch(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${name}`)
    .then( res => res.json())
    .then( players => showPlayersOfFcb(players.player) );


    
 })

 function showPlayersOfFcb(players){
    console.log('players', players.length);

    if(players== null ){
        alert('No player Found. Try again')
        sp(false);
    }
    let list = document.getElementById('player list');
    // list.classList.add=('flex');

   console.log(players);
    if(players==null){
        let notFound= document.getElementById('notFound');
        notFound.classList.add('hidden');
    }

    // if(players.length>limit){
    //     // alert(console.log("snsun"))

    //     players = players.slice(0,10);
        
    //     let allButton = document.getElementById('btn-all');
    //     allButton.classList.remove('hidden');
    // }
    // else{
    //     let allButton = document.getElementById('btn-all');
    //     allButton.classList.add('hidden');

    // }

    list.innerHTML =``;
    for (const player of players ) {

        console.log(player );

        if( player.strTeam  == 'Barcelona'){
             let div = document.createElement('div');
        div.innerHTML = `

        <div class="card lg:card-side bg-base-100 bg-slate-50 shadow-xl">
            <figure><img src="${player.strCutout? player.strCutout:'./Pictures/download_500x500.png'}"  alt="Album"/></figure>
            <div class="card-body">
              <h2 class="card-title">${player.strPlayer}</h2>
              <p>${player.strBirthLocation}</p>
              <label for="my-modal-6" onclick="playerDetails('${player.idPlayer}')" class="btn">View Details</label>
              
        </div>
        
        
                    
       
        
        
        `;
        list.appendChild(div);
            
        }

       

        
      
        
    }
    sp(false);


 }