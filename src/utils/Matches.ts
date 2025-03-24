export const teams: {[key: string]: string} = {
    "alianza": "Alianza Lima",
    "universitario": "Universitario",
    "cristal": "Sporting Cristal",
    "melgar": "Melgar",
    "unsaac": "UNSAAC",
    "vallejo": "César Vallejo",
    "killas": "FC Killas" ,
    "flamengo": "Flamengo",
    "biavo": "Biavo FC",
    "mannucci": "Mannucci",
    "ancash": "Real Ancash",
    "ilucan": "Defensores de Ilucán"  
  }
  

export const matches: Array<{date:number, matches: Array<{ home: string, away: string }>}> = [
    {
      date: 1,
      matches: [
        { home: "melgar", away: "unsaac" },
        { home: "vallejo", away: "killas" },
        { home: "cristal", away: "flamengo" },
        { home: "biavo", away: "mannucci" },
        { home: "ancash", away: "universitario" },
        { home: "alianza", away: "ilucan" }        
      ]      
    },
    {
      date: 2,
      matches: [
        { home: "ilucan", away: "melgar" },
        { home: "mannucci", away: "alianza" },
        { home: "universitario", away: "vallejo" },
        { home: "flamengo", away: "ancash" },
        { home: "killas", away: "cristal" },
        { home: "unsaac", away: "biavo" },
      ]
    },
    {
      date: 3,
      matches: [
        { home: "universitario", away: "killas" },
        { home: "vallejo", away: "flamengo" },
        { home: "biavo", away: "alianza" },
        { home: "cristal", away: "ilucan" },
        { home: "ancash", away: "unsaac" },
        { home: "melgar", away: "mannucci" },
      ]
    },
    {
      date: 4,
      matches: [
        { home: "flamengo", away: "universitario" },
        { home: "alianza", away: "melgar" },
        { home: "unsaac", away: "cristal" },
        { home: "mannucci", away: "ancash" },
        { home: "ilucan", away: "vallejo" },
        { home: "killas", away: "biavo" },
      ]
    },
    {
      date: 5,
      matches: [
        { home: "melgar", away: "biavo" },
        { home: "killas", away: "flamengo" },
        { home: "ancash", away: "alianza" },
        { home: "vallejo", away: "unsaac" },
        { home: "cristal", away: "mannucci" },
        { home: "universitario", away: "ilucan" },
      ]
    },
    {
      date: 6,
      matches: [
        { home: "melgar", away: "flamengo" },
        { home: "illucan", away: "killas" },
        { home: "unsaac", away: "universitario" },
        { home: "biavo", away: "ancash" },
        { home: "alianza", away: "cristal" },
        { home: "mannucci", away: "vallejo" },
      ]
    },
    {
      date: 7,
      matches: [
        { home: "flamengo", away: "ilucan" },
        { home: "vallejo", away: "alianza" },
        { home: "killas", away: "unsaac" },
        { home: "ancash", away: "melgar" },
        { home: "universitario", away: "mannucci" },
        { home: "cristal", away: "biavo" },
      ]
    },
    {
      date: 8,
      matches: [
        { home: "alianza", away: "universitario" },
        { home: "biavo", away: "vallejo" },
        { home: "melgar", away: "cristal" },
        { home: "mannucci", away: "killas" },
        { home: "unsaac", away: "flamengo" },
        { home: "ancash", away: "ilucan" },
      ]
    },
    {
      date: 9,
      matches: [
        { home: "flamengo", away: "mannucci" },
        { home: "universitario", away: "biavo" },
        { home: "vallejo", away: "melgar" },
        { home: "cristal", away: "ancash" },
        { home: "ilucan", away: "unsaac" },
        { home: "killas", away: "alianza" },
      ]
    },
    {
      date: 10,
      matches: [
        { home: "biavo", away: "flamengo" },
        { home: "melgar", away: "killas" },
        { home: "ancash", away: "vallejo" },
        { home: "mannucci", away: "ilucan" },
        { home: "cristal", away: "universitario" },
        { home: "alianza", away: "unsaac" },
      ]
    },
    {
      date: 11,
      matches: [
        { home: "universitario", away: "melgar" },
        { home: "ilucan", away: "biavo" },
        { home: "vallejo", away: "cristal" },
        { home: "killas", away: "ancash" },
        { home: "unsaac", away: "mannucci" },
        { home: "flamengo", away: "alianza" },
      ]
    }
  ];
  