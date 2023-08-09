console.log("Get some arrays here. ")

//books, name, author, published.

const books = [
    {title: "Mastery", author: "Robert Greene", price: 3200},
    {title: "12 Rules For Life", author: "Jordan Peterson", price: 3500},
    {title: "The Unplugged Alpha", author: "Richard Cooper",price: 2800},
    {title: "The 50th Law", author: "Robert Greene", price: 3100},
    {title: "The Rational Book", author: "Rollo Tomassi", price: 4500},
    {title: "The Laws of Human Nature", author: "Robert Greene", price: 3700},
    {title: "The Wall Speaks", author: "Rjee", price: 2900},
    {title: "The 48 Laws of power", author: "Robert Greene", price: 3500}
];

console.log("Books available in the catalogue include the following: ")

const AllBooks = books.forEach((book) =>
console.log(book.title)
)

//Filter out books written by Robert Greene

const RobertGreene = books.filter((book) => book.author === "Robert Greene")
console.log(RobertGreene)
//Total cost for Robert Greene's books.
const RGreenBooks = RobertGreene.reduce((total, book) => 
total + book.price, 0
)
console.log("Total of Robert Greene's books is " + RGreenBooks + ".")
//cost more than 3000

const More3K = books.filter((book) => book.price > 3000)
console.log(More3K)

//Array with title of book and author

const TitleAuthor = books.map((book) => 
`${book.title} by ${book.author}.`
)
 console.log(TitleAuthor)

 //sort by title of the book.

 const SortTitle = books.sort((book1, book2) => (book1 < book2) ? 1 : -1)
 console.log(SortTitle)

 //If you were to get all the books, how much would you pay?

 const TotalPrice = books.reduce((total, bookPrice) => 
 total + bookPrice.price, 0
 )

 console.log(TotalPrice)