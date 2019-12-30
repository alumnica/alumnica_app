import Momento from "../models/momento";
import Oda from "../models/oda";

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
    let momento = new Momento(count, id, name, []);
    momentos.push(momento);
    count++;
  });
});

export const MOMENTOS = momentos
