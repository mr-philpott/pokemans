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

// right:
// abilities
// stats


// when the page loads get which page it is
//load the page depending on which page you're on
window.addEventListener('load', function () {
  let file = window.location.pathname;
  file = file.split('/');
  for (i in file) {
    if (i == file.length - 1) {
      file = file[i];
      file = file.split('.')
      file = file[0]
    }
  }


  let pokeObj;
  if (file == 'charmander') {

    pokeObj = JSON.parse(charmander)
  }
  if (file == 'charmeleon') {
    pokeObj = JSON.parse(charmeleon)
  }
  if (file == 'charizard') {
    pokeObj = JSON.parse(charizard)
  }

  let id = document.getElementById('id');
  let stats = document.getElementById('stats');
  let imgDiv = document.getElementById('image');

  let img = document.createElement("img");
  if (file == 'charmander') {
    img.src = "../pages/images/Charmander.png";
    imgDiv.appendChild(img);
  }
  if (file == 'charmeleon') {
    img.src = "../pages/images/Charmeleon.png";
    imgDiv.appendChild(img);
  }
  if (file == 'charizard') {
    img.src = "../pages/images/Charizard.png";
    imgDiv.appendChild(img);
  }

  createIdDiv(pokeObj)
  createStatsDiv(pokeObj)


  function createIdDiv(obj) {
    const LIST1 = document.createElement('ul');
    // NAME
    const NAME = document.createElement('li');
    NAME.textContent = obj["name"];
    LIST1.appendChild(NAME)
    id.appendChild(LIST1);

    // ID
    const ID = document.createElement('li');
    ID.textContent = `#00${obj["id"]}`;
    LIST1.appendChild(ID)
    id.appendChild(LIST1);

    // BASE EXPERIENCE
    const XP = document.createElement('h4');
    XP.textContent = `Base XP: ${obj["base_experience"]}`;
    id.appendChild(XP);

    // TYPES
    const TYPES = obj["types"];
    for (type in TYPES) {
      const DIV = document.createElement('div');

      const TYPE = TYPES[type]["type"];
      const { name } = TYPE;

      const ITEM1 = document.createElement('h4');
      ITEM1.textContent = name;
      DIV.appendChild(ITEM1)
      id.appendChild(DIV)
    }

    // HEIGHT
    const HEIGHT = document.createElement('h4');
    let height = String(obj["height"])
    height = height.split('')
    if (height.length == 1) {
      height.splice(height.length - 1, 0, '.');
      height = `0${height.join('')} m`;
    } else {
      height.splice(height.length - 1, 0, '.');
      height = `${height.join('')} m`;
    }
    HEIGHT.textContent = height;
    id.appendChild(HEIGHT);

    // WEIGHT
    const WEIGHT = document.createElement('h4');
    let weight = String(obj["weight"]);
    weight = weight.split('')
    weight.splice(weight.length - 1, 0, '.');
    weight = `${weight.join('')} kg`;
    WEIGHT.textContent = weight;
    id.appendChild(WEIGHT);
  }


  function createStatsDiv(obj) {
    // Creating the stats
    const STAT = obj["stats"];

    for (stat of STAT) {
      const { base_stat } = stat
      const name = stat.stat.name;
      const PARA = document.createElement("p")
      PARA.textContent = name + " " + base_stat
      stats.appendChild(PARA)
    }

  }

});

