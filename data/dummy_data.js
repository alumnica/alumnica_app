import Momento from "../models/momento";
import Oda from "../models/oda";
import Content from "../models/content";

export const ODAS = [
  new Oda("1", "Termodinámica"),
  new Oda("2", "Trigonometría"),
  new Oda("3", "Mitosis"),
  new Oda("4", "Primera Guerra Mundial"),
  new Oda("5", "Puentes de Hidrógeno"),
  new Oda("6", "Medioevo"),
  new Oda("7", "Krzysztof Kieślowski"),
  new Oda("8", "Segunda Guerra Mundial"),
  new Oda("9", "Meiosis")
];

let momentos = [];

let count = 1;

ODAS.forEach(oda => {
  let id = oda.id;
  let names = [
    "Explorar",
    "Conectar",
    "Modelar",
    "Aplicar",
    "Integrar",
    "Evaluación"
  ];
  names.forEach(name => {
    let momento = new Momento(count.toString(), id, name);
    momentos.push(momento);
    count++;
  });
});

export const MOMENTOS = momentos;

let contents = []
count = 1;

MOMENTOS.forEach(momento => {
  let id = momento.id;
  let data = [
    [
      {
        type: "Text",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
        type: "Image",
        content: "../assets/img/modelar.png"
      },
      {
        type: "Text",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
    ],
    [
      {
        type: "Image",
        content: "../assets/img/modelar.png"
      }
    ],
    [
      {
        type: "Image",
        content: "../assets/img/aplicar.png"
      },
      {
        type: "Image",
        content: "../assets/img/conectar.png"
      },
      {
        type: "Image",
        content: "../assets/img/explorar.png"
      },
      {
        type: "Image",
        content: "../assets/img/integrar.png"
      },
      {
        type: "Image",
        content: "../assets/img/modelar.png"
      }
    ]
  ];
  const randomNumGenerator = () => {
    let randomData = Math.floor(Math.random() * data.length)
    return randomData
  }

  contents.push(new Content(count.toString(), id, data[randomNumGenerator()]))
  count++;

  contents.push(new Content(count.toString(), id, data[randomNumGenerator()]))
  count++;

  contents.push(new Content(count.toString(), id, data[randomNumGenerator()]))
  count++;
});


export const CONTENTS = contents;
