let charmander = `{
    "abilities": [
      {
        "name": "blaze"
      },
      {
        "name": "solar-power"
      }
    ],
    "base_experience": 62,
    "height": 6,
    "id": 4,
    "is_default": true,
    "name": "charmander",
    "order": 5,
    "stats": [
      {
        "base_stat": 39,
        "effort": 0,
        "stat": {
          "name": "hp"
        }
      },
      {
        "base_stat": 52,
        "effort": 0,
        "stat": {
          "name": "attack"
        }
      },
      {
        "base_stat": 43,
        "effort": 0,
        "stat": {
          "name": "defense"
        }
      },
      {
        "base_stat": 60,
        "effort": 0,
        "stat": {
          "name": "special-attack"
        }
      },
      {
        "base_stat": 50,
        "effort": 0,
        "stat": {
          "name": "special-defense"
        }
      },
      {
        "base_stat": 65,
        "effort": 1,
        "stat": {
          "name": "speed"
        }
      }
    ],
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fire"
        }
      }
    ],
    "weight": 85
}`


let charmeleon = `{
    "abilities": [
      {
        "name": "blaze"
      },
      {
        "name": "solar-power"
      }
    ],
    "base_experience": 142,
    "height": 11,
    "id": 5,
    "is_default": true,
    "name": "charmeleon",
    "order": 6,
    "stats": [
      {
        "base_stat": 58,
        "effort": 0,
        "stat": {
          "name": "hp"
        }
      },
      {
        "base_stat": 64,
        "effort": 0,
        "stat": {
          "name": "attack"
        }
      },
      {
        "base_stat": 58,
        "effort": 0,
        "stat": {
          "name": "defense"
        }
      },
      {
        "base_stat": 80,
        "effort": 1,
        "stat": {
          "name": "special-attack"
        }
      },
      {
        "base_stat": 65,
        "effort": 0,
        "stat": {
          "name": "special-defense"
        }
      },
      {
        "base_stat": 80,
        "effort": 1,
        "stat": {
          "name": "speed"
        }
      }
    ],
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fire"
        }
      }
    ],
    "weight": 190
}`

let charizard = `{
    "abilities": [
      {
        "name": "blaze"
      },
      {
        "name": "solar-power"
      }
    ],
    "base_experience": 240,
    "height": 17,
    "id": 6,
    "is_default": true,
    "name": "charizard",
    "order": 7,
    "stats": [
      {
        "base_stat": 78,
        "effort": 0,
        "stat": {
          "name": "hp"
        }
      },
      {
        "base_stat": 84,
        "effort": 0,
        "stat": {
          "name": "attack"
        }
      },
      {
        "base_stat": 78,
        "effort": 0,
        "stat": {
          "name": "defense"
        }
      },
      {
        "base_stat": 109,
        "effort": 3,
        "stat": {
          "name": "special-attack"
        }
      },
      {
        "base_stat": 85,
        "effort": 0,
        "stat": {
          "name": "special-defense"
        }
      },
      {
        "base_stat": 100,
        "effort": 0,
        "stat": {
          "name": "speed"
        }
      }
    ],
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fire"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "flying"
        }
      }
    ],
    "weight": 905
}`


// left:
// name & id
// base xp & type
// height & weight
// abilities

// right:
// stats


// when the page loads get which page it is
//load the page depending on which page you're on
window.addEventListener('load', function(){
let file = window.location.pathname;
file = file.split('/');
for(i in file){
  if(i == file.length - 1){
    file = file[i];
    file = file.split('.')
    file = file[0]
  }
}


let pokeObj;
if(file == 'charmander'){
  pokeObj = JSON.parse(charmander)
}
if(file == 'charmeleon'){
  pokeObj = JSON.parse(charmeleon)
}
if(file == 'charizard'){
  pokeObj = JSON.parse(charizrd)
}

let id = document.getElementById('id');

createIdDiv(pokeObj)
createStatsDiv(pokeObj)

function createIdDiv(obj){
const NAME = document.createElement('h1');
NAME.textContent = obj['name'];
const ID = document.createElement('h1');
ID.textContent = `#00${obj['id']}`;

id.appendChild(NAME)
id.appendChild(ID)
}



//takes out stats from array - Ahiram
