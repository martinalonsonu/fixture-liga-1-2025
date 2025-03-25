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
    },
    {
      date: 12,
      matches: [
        { away: "melgar", home: "unsaac" },
        { away: "vallejo", home: "killas" },
        { away: "cristal", home: "flamengo" },
        { away: "biavo", home: "mannucci" },
        { away: "ancash", home: "universitario" },
        { away: "alianza", home: "ilucan" }        
      ]      
    },
    {
      date: 13,
      matches: [
        { away: "ilucan", home: "melgar" },
        { away: "mannucci", home: "alianza" },
        { away: "universitario", home: "vallejo" },
        { away: "flamengo", home: "ancash" },
        { away: "killas", home: "cristal" },
        { away: "unsaac", home: "biavo" },
      ]
    },
    {
      date: 14,
      matches: [
        { away: "universitario", home: "killas" },
        { away: "vallejo", home: "flamengo" },
        { away: "biavo", home: "alianza" },
        { away: "cristal", home: "ilucan" },
        { away: "ancash", home: "unsaac" },
        { away: "melgar", home: "mannucci" },
      ]
    },
    {
      date: 15,
      matches: [
        { away: "flamengo", home: "universitario" },
        { away: "alianza", home: "melgar" },
        { away: "unsaac", home: "cristal" },
        { away: "mannucci", home: "ancash" },
        { away: "ilucan", home: "vallejo" },
        { away: "killas", home: "biavo" },
      ]
    },
    {
      date: 16,
      matches: [
        { away: "melgar", home: "biavo" },
        { away: "killas", home: "flamengo" },
        { away: "ancash", home: "alianza" },
        { away: "vallejo", home: "unsaac" },
        { away: "cristal", home: "mannucci" },
        { away: "universitario", home: "ilucan" },
      ]
    },
    {
      date: 17,
      matches: [
        { away: "melgar", home: "flamengo" },
        { away: "illucan", home: "killas" },
        { away: "unsaac", home: "universitario" },
        { away: "biavo", home: "ancash" },
        { away: "alianza", home: "cristal" },
        { away: "mannucci", home: "vallejo" },
      ]
    },
    {
      date: 18,
      matches: [
        { away: "flamengo", home: "ilucan" },
        { away: "vallejo", home: "alianza" },
        { away: "killas", home: "unsaac" },
        { away: "ancash", home: "melgar" },
        { away: "universitario", home: "mannucci" },
        { away: "cristal", home: "biavo" },
      ]
    },
    {
      date: 19,
      matches: [
        { away: "alianza", home: "universitario" },
        { away: "biavo", home: "vallejo" },
        { away: "melgar", home: "cristal" },
        { away: "mannucci", home: "killas" },
        { away: "unsaac", home: "flamengo" },
        { away: "ancash", home: "ilucan" },
      ]
    },
    {
      date: 20,
      matches: [
        { away: "flamengo", home: "mannucci" },
        { away: "universitario", home: "biavo" },
        { away: "vallejo", home: "melgar" },
        { away: "cristal", home: "ancash" },
        { away: "ilucan", home: "unsaac" },
        { away: "killas", home: "alianza" },
      ]
    },
    {
      date: 21,
      matches: [
        { away: "biavo", home: "flamengo" },
        { away: "melgar", home: "killas" },
        { away: "ancash", home: "vallejo" },
        { away: "mannucci", home: "ilucan" },
        { away: "cristal", home: "universitario" },
        { away: "alianza", home: "unsaac" },
      ]
    },
    {
      date: 22,
      matches: [
        { away: "universitario", home: "melgar" },
        { away: "ilucan", home: "biavo" },
        { away: "vallejo", home: "cristal" },
        { away: "killas", home: "ancash" },
        { away: "unsaac", home: "mannucci" },
        { away: "flamengo", home: "alianza" },
      ]
    }
  ];
  