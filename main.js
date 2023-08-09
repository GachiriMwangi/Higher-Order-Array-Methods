console.log("Hello There.")

const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989},
];

//filter the retail companies.

const Retail_companies = companies.filter(function(company){
    if(company.category === 'Retail'){
        return true;
    }
});
console.log(Retail_companies)

const smart_retail_companies = companies.filter(company => company.category === 'Retail')
console.log("Retail Here: ")
console.log(smart_retail_companies)

console.log("Companies created in the 80's")

const eighties = companies.filter(company => (company.start > 1980 && company.start > 1990))
console.log(eighties)

const mttyears = companies.filter(company => (company.end - company.start >= 10))
console.log("companies that lasted for more than ten years. ")
console.log(mttyears)



const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]
/*
for(let i=0;i<companies.length;i++){
    console.log(companies[i])
}
*/

companies.forEach(function(company){
    console.log(company)
});

//Get people who can drink
let CanDrink = []

for(let i=0;i<ages.length;i++){
    if(ages[i] >= 18){
        CanDrink.push(ages[i])
    }
}

console.log(CanDrink)
console.log("A different way of doing that same thing. Check it out below.")

const Drinks = ages.filter(function(age){
    if(age >= 18){
        return true;
    }
})


console.log(Drinks)
console.log("There's yet another way of doing the same piece of work, by using one line of code.")
console.log("Check out below. ")

const AllowedToDrink = ages.filter(age => age >= 18)
console.log(AllowedToDrink)

//Ages squared. 

const AgesSquared = ages.map(age => (age * age))

console.log(AgesSquared)

//Age squareRoot 

const ageSqrt = ages
.map(age => Math.sqrt(age))
.map(age => age * 2)
console.log(ageSqrt)

//foreach
//filter
//map 

//Create an array of company names.

const CompanyNames = companies.map(function(company){
    return company.name
})
console.log(CompanyNames)

const testMap = companies.map(function(company){
    return `${company.name} [${company.start} - ${company.end}]`
})

console.log(testMap)

console.log("The short hand way: ")

const testMapShortHand = companies.map(company => `${company.name} [${company.start} - ${company.end}]`)
console.log(testMapShortHand)
//sort 

const sortedCompanies = companies.sort(function(c1, c2){
    if(c1.start > c2.start){
        return 1
    }
    else{
        return -1
    }
})

console.log("sorted Array. ")

console.log(sortedCompanies)

//Short hand array method.
console.log("Short hand.")

const sortedShortHand = companies.sort((c1, c2) => (c1.start > c2.start ? 1 : -1))
console.log(sortedShortHand)

//sort the ages, from lowest to highefa-stack

//const agesSort = ages.sort((a1, a2) =>  (a1 < a2 ? 1 : -1))
const agesSort = ages.sort((a, b) => a - b)
console.log(agesSort)


//reduce

//Add all the ages.

//Using a for loop.
let sum = 0;
for(let i = 0; i< ages.length; i++){
    sum += ages[i]
}
console.log(sum)

//Using reduce array method: 

const sumArray = ages.reduce(function(total, age){
return total + age
}, 0)
console.log("The total is " + sumArray + ".")

console.log("The short hand way: ")

const shortSumArray = ages.reduce((total, age) => (total + age), 0)
console.log("Get the total here: " +shortSumArray)

console.log("Adding the years.")
const addYears = companies.reduce((total, years) => total + (years.end - years.start) , 0)
console.log(addYears)

//forEach, filter, map, sort, reduce.