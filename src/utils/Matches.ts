export const teams: {[key: string]: string} = {
    "alianza": "Alianza Lima",
    "universitario": "Universitario",
    "cristal": "Sporting Cristal",
    "comerciantes-unidos": "Comerciantes Unidos",
    "chankas": "Los Chankas",
    "melgar": "Melgar",
    "cusco": "Cusco FC",
    "huancayo": "Sport Huancayo",
    "garcilaso": "Deportivo Garcilaso",
    "binacional": "Deportivo Binacional",
    "cienciano": "Cienciano",
    "adt": "ADT",
    "grau": "Atlético Grau",
    "alianza-atletico": "Alianza Atlético",
    "boys": "Sport Boys",
    "alianza-universidad": "Alianza Universidad",
    "juan-pablo": "Juan Pablo II",
    "utc": "UTC",
    "ayacucho": "Ayacucho FC"
  }
  

export const matches: Array<{date:number, matches: Array<{ home: string, away: string }>, rest: string}> = [
    {
      date: 1,
      matches: [
        { home: "grau", away: "ayacucho" },
        { home: "alianza", away: "cusco" },
        { home: "comerciantes-unidos", away: "universitario" },
        { home: "alianza-universidad", away: "cristal" },
        { home: "melgar", away: "utc" },
        { home: "huancayo", away: "alianza-atletico" },
        { home: "boys", away: "juan-pablo" },
        { home: "cienciano", away: "adt" },
        { home: "chankas", away: "garcilaso" },
      ],
      rest: "binacional"
    },
    {
      date: 2,
      matches: [
        { home: "adt", away: "grau" },
        { home: "juan-pablo", away: "huancayo" },
        { home: "cristal", away: "boys" },
        { home: "utc", away: "binacional" },
        { home: "cusco", away: "melgar" },
        { home: "alianza-atletico", away: "alianza" },
        { home: "ayacucho", away: "alianza-universidad" },
        { home: "garcilaso", away: "comerciantes-unidos" },
        { home: "universitario", away: "cienciano" },
      ],
      rest: "chankas"
    },
    {
      date: 3,
      matches: [
        { home: "grau", away: "universitario" },
        { home: "boys", away: "ayacucho" },
        { home: "cienciano", away: "garcilaso" },
        { home: "huancayo", away: "cristal" },
        { home: "alianza", away: "juan-pablo" },
        { home: "binacional", away: "cusco" },
        { home: "alianza-universidad", away: "adt" },
        { home: "melgar", away: "alianza-atletico" },
        { home: "comerciantes-unidos", away: "chankas" },
      ],
      rest: "utc"
    },
    {
      date: 4,
      matches: [
        { home: "chankas", away: "cienciano" },
        { home: "cusco", away: "utc" },
        { home: "ayacucho", away: "huancayo" },
        { home: "juan-pablo", away: "melgar" },
        { home: "universitario", away: "alianza-universidad" },
        { home: "garcilaso", away: "grau" },
        { home: "alianza-atletico", away: "binacional" },
        { home: "cristal", away: "alianza" },
        { home: "adt", away: "boys" },
      ],
      rest: "comerciantes-unidos"
    },
    {
      date: 5,
      matches: [
        { home: "cienciano", away: "comerciantes-unidos" },
        { home: "binacional", away: "juan-pablo" },
        { home: "grau", away: "chankas" },
        { home: "boys", away: "universitario" },
        { home: "utc", away: "alianza-atletico" },
        { home: "alianza", away: "ayacucho" },
        { home: "huancayo", away: "adt" },
        { home: "alianza-universidad", away: "garcilaso" },
        { home: "melgar", away: "cristal" },
      ],
      rest: "cusco"
    },
    {
      date: 6,
      matches: [
        { home: "comerciantes-unidos", away: "grau" },
        { home: "garcilaso", away: "boys" },
        { home: "juan-pablo", away: "utc" },
        { home: "alianza-atletico", away: "cusco" },
        { home: "chankas", away: "alianza-universidad" },
        { home: "universitario", away: "huancayo" },
        { home: "ayacucho", away: "melgar" },
        { home: "adt", away: "alianza" },
        { home: "cristal", away: "binacional" },
      ],
      rest: "cienciano"
    },
    {
      date: 7,
      matches: [
        { home: "binacional", away: "ayacucho" },
        { home: "huancayo", away: "garcilaso" },
        { home: "grau", away: "cienciano" },
        { home: "melgar", away: "adt" },
        { home: "cusco", away: "juan-pablo" },
        { home: "alianza", away: "universitario" },
        { home: "alianza-universidad", away: "comerciantes-unidos" },
        { home: "utc", away: "cristal" },
        { home: "boys", away: "chankas" },
      ],
      rest: "alianza-atletico"
    },
    {
      date: 8,
      matches: [
        { home: "cienciano", away: "alianza-universidad" },
        { home: "juan-pablo", away: "alianza-atletico" },
        { home: "chankas", away: "huancayo" },
        { home: "cristal", away: "cusco" },
        { home: "universitario", away: "melgar" },
        { home: "comerciantes-unidos", away: "boys" },
        { home: "garcilaso", away: "alianza" },
        { home: "adt", away: "binacional" },
        { home: "ayacucho", away: "utc" },
      ],
      rest: "grau"
    },
    {
      date: 9,
      matches: [
        { home: "utc", away: "adt" },
        { home: "boys", away: "cienciano" },
        { home: "cusco", away: "ayacucho" },
        { home: "melgar", away: "garcilaso" },
        { home: "alianza", away: "chankas" },
        { home: "binacional", away: "universitario" },
        { home: "alianza-atletico", away: "cristal" },
        { home: "huancayo", away: "comerciantes-unidos" },
        { home: "alianza-universidad", away: "grau" },
      ],
      rest: "juan-pablo"
    },
    {
      date: 10,
      matches: [
        { home: "adt", away: "cusco" },
        { home: "comerciantes-unidos", away: "alianza" },
        { home: "cienciano", away: "huancayo" },
        { home: "cristal", away: "juan-pablo" },
        { home: "grau", away: "boys" },
        { home: "ayacucho", away: "alianza-atletico" },
        { home: "universitario", away: "utc" },
        { home: "chankas", away: "melgar" },
        { home: "garcilaso", away: "binacional" },
      ],
      rest: "alianza-universidad"
    },
    {
      date: 11,
      matches: [
        { home: "alianza-atletico", away: "adt" },
        { home: "boys", away: "alianza-universidad" },
        { home: "binacional", away: "chankas" },
        { home: "huancayo", away: "grau" },
        { home: "cusco", away: "universitario" },
        { home: "utc", away: "garcilaso" },
        { home: "juan-pablo", away: "ayacucho" },
        { home: "alianza", away: "cienciano" },
        { home: "melgar", away: "comerciantes-unidos" },
      ],
      rest: "cristal"
    },
    {
      date: 12,
      matches: [
        { home: "ayacucho", away: "cristal" },
        { home: "garcilaso", away: "cusco" },
        { home: "universitario", away: "alianza-atletico" },
        { home: "comerciantes-unidos", away: "binacional" },
        { home: "grau", away: "alianza" },
        { home: "alianza-universidad", away: "huancayo" },
        { home: "cienciano", away: "melgar" },
        { home: "adt", away: "juan-pablo" },
        { home: "chankas", away: "utc" },
      ],
      rest: "boys"
    },
    {
      date: 13,
      matches: [
        { home: "utc", away: "comerciantes-unidos" },
        { home: "cristal", away: "adt" },
        { home: "cusco", away: "chankas" },
        { home: "melgar", away: "grau" },
        { home: "alianza", away: "alianza-universidad" },
        { home: "binacional", away: "cienciano" },
        { home: "juan-pablo", away: "universitario" },
        { home: "huancayo", away: "boys" },
        { home: "alianza-atletico", away: "garcilaso" },
      ],
      rest: "ayacucho"
    },
    {
      date: 14,
      matches: [
        { home: "adt", away: "ayacucho" },
        { home: "grau", away: "binacional" },
        { home: "garcilaso", away: "juan-pablo" },
        { home: "boys", away: "alianza" },
        { home: "chankas", away: "alianza-atletico" },
        { home: "comerciantes-unidos", away: "cusco" },
        { home: "universitario", away: "cristal" },
        { home: "cienciano", away: "utc" },
        { home: "alianza-universidad", away: "melgar" },
      ],
      rest: "huancayo"
    },
    {
      date: 15,
      matches: [
        { home: "juan-pablo", away: "chankas" },
        { home: "melgar", away: "boys" },
        { home: "cusco", away: "cienciano" },
        { home: "utc", away: "grau" },
        { home: "alianza", away: "huancayo" },
        { home: "alianza-atletico", away: "comerciantes-unidos" },
        { home: "binacional", away: "alianza-universidad" },
        { home: "cristal", away: "garcilaso" },
        { home: "ayacucho", away: "universitario" },
      ],
      rest: "adt"
    },
    {
      date: 16,
      matches: [
        { home: "garcilaso", away: "ayacucho" },
        { home: "comerciantes-unidos", away: "juan-pablo" },
        { home: "universitario", away: "adt" },
        { home: "cienciano", away: "alianza-atletico" },
        { home: "boys", away: "binacional" },
        { home: "alianza-universidad", away: "utc" },
        { home: "chankas", away: "cristal" },
        { home: "grau", away: "cusco" },
        { home: "huancayo", away: "melgar" },
      ],
      rest: "alianza"
    },
    {
      date: 17,
      matches: [
        { home: "utc", away: "boys" },
        { home: "cristal", away: "comerciantes-unidos" },
        { home: "cusco", away: "alianza-universidad" },
        { home: "juan-pablo", away: "cienciano" },
        { home: "alianza-atletico", away: "grau" },
        { home: "ayacucho", away: "chankas" },
        { home: "adt", away: "garcilaso" },
        { home: "melgar", away: "alianza" },
        { home: "binacional", away: "huancayo" },
      ],
      rest: "universitario"
    },
    {
      date: 18,
      matches: [
        { home: "alianza", away: "binacional" },
        { home: "garcilaso", away: "universitario" },
        { home: "boys", away: "cusco" },
        { home: "alianza-universidad", away: "alianza-atletico" },
        { home: "comerciantes-unidos", away: "ayacucho" },
        { home: "grau", away: "juan-pablo" },
        { home: "cienciano", away: "cristal" },
        { home: "chankas", away: "adt" },
        { home: "huancayo", away: "utc" },
      ],
      rest: "melgar"
    },
    {
      date: 19,
      matches: [
        { home: "alianza-atletico", away: "boys" },
        { home: "cristal", away: "grau" },
        { home: "juan-pablo", away: "alianza-universidad" },
        { home: "adt", away: "comerciantes-unidos" },
        { home: "cusco", away: "huancayo" },
        { home: "universitario", away: "chankas" },
        { home: "ayacucho", away: "cienciano" },
        { home: "binacional", away: "melgar" },
        { home: "utc", away: "alianza" },
      ],
      rest: "garcilaso"
    }
  ];
  