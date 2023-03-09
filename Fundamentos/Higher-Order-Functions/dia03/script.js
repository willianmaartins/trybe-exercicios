// Fonte: <https://restcountries.com/v2/all>
const countries = [
  {
    name: 'Afghanistan',
    region: 'Asia',
    currencies: [{ code: 'AFN', name: 'Afghan afghani' }],
    capital: 'Kabul',
    population: 40218234,
    area: 652230
  },
  {
    name: 'Åland Islands',
    region: 'Europe',
    currencies: [{ code: 'EUR', name: 'Euro' }],
    capital: 'Mariehamn',
    population: 28875,
    area: 1580
  },
  {
    name: 'Albania',
    region: 'Europe',
    currencies: [{ code: 'ALL', name: 'Albanian lek' }],
    capital: 'Tirana',
    population: 2837743,
    area: 28748
  },
  {
    name: 'Algeria',
    region: 'Africa',
    currencies: [{ code: 'DZD', name: 'Algerian dinar' }],
    capital: 'Algiers',
    population: 44700000,
    area: 2381741
  },
  {
    name: 'American Samoa',
    region: 'Oceania',
    currencies: [{ code: 'USD', name: 'United States Dollar' }],
    capital: 'Pago Pago',
    population: 55197,
    area: 199
  },
  {
    name: 'Andorra',
    region: 'Europe',
    currencies: [{ code: 'EUR', name: 'Euro' }],
    capital: 'Andorra la Vella',
    population: 77265,
    area: 468
  },
  {
    name: 'Angola',
    region: 'Africa',
    currencies: [{ code: 'AOA', name: 'Angolan kwanza' }],
    capital: 'Luanda',
    population: 32866268,
    area: 1246700
  },
  {
    name: 'Anguilla',
    region: 'Americas',
    currencies: [{ code: 'XCD', name: 'East Caribbean dollar' }],
    capital: 'The Valley',
    population: 13452,
    area: 91
  }
];

// const expectedResult = 120797034;
const getPopulation = () => {
  // retorne o seu código aqui
 const population = countries.map((countrie) => countrie.population);
 const totalPopupation = population.reduce((acc, cur) => {
   return acc + cur;
 }, 0);
 return totalPopupation;
 }
 console.log(getPopulation());
 
 // const expectedResult = 4311757;
 const getTotalArea = () => {
 // retorne seu código aqui
 return countries.map((countrie) => countrie.area).reduce((acc, cur) => acc + cur, 0)
 }
 console.log(getTotalArea());
 
 // const expectedResult = {
 //   name: 'American Samoa',
 //   region: 'Oceania',
 //   currencies: [{ code: 'USD', name: 'United States Dollar' }],
 //   capital: 'Pago Pago',
 //   population: 55197,
 //   area: 199
 // }
 const longestName = () => {
   // retorne seu código aqui
   return countries.reduce((acc, cur) => {
     return acc.name.length > cur.name.length ? acc : cur;  
   })
 }
 console.log(longestName());
 
 const names = [
   'Aanemarie', 'Adervandes', 'Akifusa',
   'Abegildo', 'Adicellia', 'Aladonata',
   'Abeladerco', 'Adieidy', 'Alarucha',
 ];
 // const expectedResult = 20;
 const lettersArray = names.join('').toLowerCase().split('');
 const countA = () => {
   return lettersArray.reduce((acc, curr) => {
     return curr === 'a' ? acc += 1 : acc;
   }, 0);
 }
 console.log(countA());
 
 // O index 0 do array `students` equivale ao index 0 do array `grades`
 const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
 const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];
 // const expectedResult = [
 //  { name: 'Pedro Henrique', average: 7.8 },
 //  { name: 'Miguel', average: 9.2 },
 //  { name: 'Maria Clara', average: 8.8 },
 // ];
 const studentAverage = () => {
   // retorne seu código aqui
   return nameAndAverage = students.map((student, index) => (
     {
     name: student,
     average: (grades[index].reduce((acc, cur) => acc + cur, 0) / grades[index].length),
   }
   ));
 }
 console.log(studentAverage())