
/*
    1. Observe and Collapse the getAllBooks method.
    2. create the renderBooks method which renders the books in the table.
    Sample HTML for render books.
    <tr>
      <td>Insert book id here</td>
      <td>Insert Title here</td>
      <td>Insert Author here</td>
      <td>Insert Rating here</td>
      <td>Insert Number Of Ratings here</td>
    </tr>
    3. select the table body, select the form and call the two function from the
    previous steps. This should show in the table.
    4. create the getAuthors function and present the authors array step by step.
      - use map to display the authors
      - use filter to get distinct authors
      - present sort as a function on an array to show you can sort things!
    5. create the function renderAuthorOptions to add the options to the select.

    6. add the event listener to the form.
    7. get the form values.
    8. create the getBooksFilter function with 3 params: filterQuery, objectkey, and booklist
      - this is going to fiter out based on a given key.
    9. in your event handler:
      - get books.
      - pass the subset into a filter
      - render the booklist
*/
/*
Sample object in the array of books returned from getAllBooks:
{"bookId":1,
  "title": "Harry Potter and the Half-Blood Prince (Harry Potter  #6)",
  "author": "J.K. Rowling/Mary GrandPrÃ©",
  "rating":4.57,
  "isbn":"439785960",
  "language":"eng",
  "numberOfRatings": 652}
*/

// Step 2. create the renderBooks method which renders the books in the table.
const renderBooks = (books) => {
  // for each book in the array, add a <tr> to the page

  books.forEach((book) => {
    const newRow = `<tr>
      <td>${book.bookId}</td>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.rating}</td>
      <td>${book.numberOfRatings}</td>
    </tr>`;

    const tableBody = document.getElementById('book-rows');
    tableBody.innerHTML += newRow;
  });
}

let allBooks = getAllBooks();
renderBooks(allBooks);


// TODO: 3. select the table body, select the form and call the two function from the
// previous steps. This should show in the table.
// TODO: 4. create the getAuthors function and present the authors array step by step.
//   - use map to display the authors
//   - use filter to get distinct authors
//   - present sort as a function on an array to show you can sort things!
// TODO: 5. create the function renderAuthorOptions to add the options to the select.

// TODO: 6. add the event listener to the form.
// TODO: 7. get the form values.
// TODO: 8. create the getBooksFilter function with 3 params: filterQuery, objectkey, and booklist
//   - this is going to fiter out based on a given key.
// TODO: 9. in your event handler:
//   - get books.
//   - pass the subset into a filter
//   - render the booklist









function getAllBooks() {
  return [
  {"bookId":1,
  "title": "Harry Potter and the Half-Blood Prince (Harry Potter  #6)",
  "author": "J.K. Rowling/Mary GrandPrÃ©",
  "rating":4.57,
  "isbn":"439785960",
  "language":"eng",
  "numberOfRatings": 652},

  {"bookId":2,
  "title": "Harry Potter and the Order of the Phoenix (Harry Potter  #5)",
  "author": "J.K. Rowling/Mary GrandPrÃ©",
  "rating":4.49,
  "isbn":"439358078",
  "language":"eng",
  "numberOfRatings": 870},

  {"bookId":4,
  "title": "Harry Potter and the Chamber of Secrets (Harry Potter  #2)",
  "author": "J.K. Rowling",
  "rating":4.42,
  "isbn":"439554896",
  "language":"eng",
  "numberOfRatings": 352},

  {"bookId":5,
  "title": "Harry Potter and the Prisoner of Azkaban (Harry Potter  #3)",
  "author": "J.K. Rowling/Mary GrandPrÃ©",
  "rating":4.56,
  "isbn":"043965548X",
  "language":"eng",
  "numberOfRatings": 435},

  {"bookId":8,
  "title": "Harry Potter Boxed Set  Books 1-5 (Harry Potter  #1-5)",
  "author": "J.K. Rowling/Mary GrandPrÃ©",
  "rating":4.78,
  "isbn":"439682584",
  "language":"eng",
  "numberOfRatings": 2690},

  {"bookId":9,
  "title": "Unauthorized Harry Potter Book Seven News: 'Half-Blood Prince' Analysis and Speculation",
  "author": "W. Frederick Zimmerman",
  "rating":3.74,
  "isbn":"976540606",
  "language":"en-US",
  "numberOfRatings": 152},

  {"bookId":10,
  "title": "Harry Potter Collection (Harry Potter  #1-6)",
  "author": "J.K. Rowling",
  "rating":4.73,
  "isbn":"439827604",
  "language":"eng",
  "numberOfRatings": 3342},

  {"bookId":12,
  "title": "The Ultimate Hitchhiker's Guide: Five Complete Novels and One Story (Hitchhiker's Guide to the Galaxy  #1-5)",
  "author": "Douglas Adams",
  "rating":4.38,
  "isbn":"517226952",
  "language":"eng",
  "numberOfRatings": 815},

  {"bookId":13,
  "title": "The Ultimate Hitchhiker's Guide to the Galaxy (Hitchhiker's Guide to the Galaxy  #1-5)",
  "author": "Douglas Adams",
  "rating":4.38,
  "isbn":"345453743",
  "language":"eng",
  "numberOfRatings": 815},

  {"bookId":14,
  "title": "The Hitchhiker's Guide to the Galaxy (Hitchhiker's Guide to the Galaxy  #1)",
  "author": "Douglas Adams",
  "rating":4.22,
  "isbn":"1400052920",
  "language":"eng",
  "numberOfRatings": 215},

  {"bookId":16,
  "title": "The Hitchhiker's Guide to the Galaxy (Hitchhiker's Guide to the Galaxy  #1)",
  "author": "Douglas Adams/Stephen Fry",
  "rating":4.22,
  "isbn":"739322206",
  "language":"eng",
  "numberOfRatings": 6},

  {"bookId":18,
  "title": "The Ultimate Hitchhiker's Guide (Hitchhiker's Guide to the Galaxy  #1-5)",
  "author": "Douglas Adams",
  "rating":4.38,
  "isbn":"517149257",
  "language":"eng",
  "numberOfRatings": 815},

  {"bookId":21,
  "title": "A Short History of Nearly Everything",
  "author": "Bill Bryson",
  "rating":4.21,
  "isbn":"076790818X",
  "language":"eng",
  "numberOfRatings": 544},

  {"bookId":22,
  "title": "Bill Bryson's African Diary",
  "author": "Bill Bryson",
  "rating":3.44,
  "isbn":"767915062",
  "language":"eng",
  "numberOfRatings": 55},

  {"bookId":23,
  "title": "Bryson's Dictionary of Troublesome Words: A Writer's Guide to Getting It Right",
  "author": "Bill Bryson",
  "rating":3.87,
  "isbn":"767910435",
  "language":"eng",
  "numberOfRatings": 256},

  {"bookId":24,
  "title": "In a Sunburned Country",
  "author": "Bill Bryson",
  "rating":4.07,
  "isbn":"767903862",
  "language":"eng",
  "numberOfRatings": 335},

  {"bookId":25,
  "title": "I'm a Stranger Here Myself: Notes on Returning to America After Twenty Years Away",
  "author": "Bill Bryson",
  "rating":3.9,
  "isbn":"076790382X",
  "language":"eng",
  "numberOfRatings": 304},

  {"bookId":26,
  "title": "The Lost Continent: Travels in Small Town America",
  "author": "Bill Bryson",
  "rating":3.83,
  "isbn":"60920084",
  "language":"eng",
  "numberOfRatings": 299},

  {"bookId":27,
  "title": "Neither Here nor There: Travels in Europe",
  "author": "Bill Bryson",
  "rating":3.86,
  "isbn":"380713802",
  "language":"eng",
  "numberOfRatings": 254},

  {"bookId":28,
  "title": "Notes from a Small Island",
  "author": "Bill Bryson",
  "rating":3.91,
  "isbn":"380727501",
  "language":"eng",
  "numberOfRatings": 324},

  {"bookId":29,
  "title": "The Mother Tongue: English and How It Got That Way",
  "author": "Bill Bryson",
  "rating":3.93,
  "isbn":"380715430",
  "language":"eng",
  "numberOfRatings": 270},

  {"bookId":30,
  "title": "J.R.R. Tolkien 4-Book Boxed Set: The Hobbit and The Lord of the Rings",
  "author": "J.R.R. Tolkien",
  "rating":4.59,
  "isbn":"345538374",
  "language":"eng",
  "numberOfRatings": 1728},

  {"bookId":31,
  "title": "The Lord of the Rings (The Lord of the Rings  #1-3)",
  "author": "J.R.R. Tolkien",
  "rating":4.5,
  "isbn":"618517650",
  "language":"eng",
  "numberOfRatings": 1184},

  {"bookId":34,
  "title": "The Fellowship of the Ring (The Lord of the Rings  #1)",
  "author": "J.R.R. Tolkien",
  "rating":4.36,
  "isbn":"618346252",
  "language":"eng",
  "numberOfRatings": 398},

  {"bookId":35,
  "title": "The Lord of the Rings (The Lord of the Rings  #1-3)",
  "author": "J.R.R. Tolkien/Alan  Lee",
  "rating":4.5,
  "isbn":"618260587",
  "language":"en-US",
  "numberOfRatings": 1216},

  {"bookId":36,
  "title": "The Lord of the Rings: Weapons and Warfare",
  "author": "Chris   Smith/Christopher  Lee/Richard Taylor",
  "rating":4.53,
  "isbn":"618391002",
  "language":"eng",
  "numberOfRatings": 218},

  {"bookId":37,
  "title": "The Lord of the Rings: Complete Visual Companion",
  "author": "Jude Fisher",
  "rating":4.5,
  "isbn":"618510826",
  "language":"eng",
  "numberOfRatings": 224},

  {"bookId":45,
  "title": "Agile Web Development with Rails: A Pragmatic Guide",
  "author": "Dave Thomas/David Heinemeier Hansson/Leon Breedt/Mike Clark/Thomas  Fuchs/Andreas  Schwarz",
  "rating":3.84,
  "isbn":"097669400X",
  "language":"eng",
  "numberOfRatings": 558},

  {"bookId":50,
  "title": "Hatchet (Brian's Saga  #1)",
  "author": "Gary Paulsen",
  "rating":3.72,
  "isbn":"689840926",
  "language":"eng",
  "numberOfRatings": 208},

  {"bookId":53,
  "title": "Guts: The True Stories behind Hatchet and the Brian Books",
  "author": "Gary Paulsen",
  "rating":3.88,
  "isbn":"385326505",
  "language":"eng",
  "numberOfRatings": 144},

  {"bookId":54,
  "title": "Molly Hatchet - 5 of the Best",
  "author": "Molly Hatchet",
  "rating":4.33,
  "isbn":"1575606240",
  "language":"eng",
  "numberOfRatings": 56},

  {"bookId":55,
  "title": "Hatchet Jobs: Writings on Contemporary Fiction",
  "author": "Dale Peck",
  "rating":3.45,
  "isbn":"1595580271",
  "language":"en-US",
  "numberOfRatings": 228},


  {"bookId": 57,
  "title": "A Changeling for All Seasons (Changeling Seasons #1)",
  "author": "Angela Knight/Sahara Kelly/Judy Mays/Marteeka Karland/Kate Douglas/Shelby Morgen/Lacey Savage/Kate Hill/Willa {Okati",
  "rating":3.76,
  "isbn":"1595962808",
  "language":"eng",
  "numberOfRatings": 304},

  {"bookId":58,
  "title": "Changeling (Changeling  #1)",
  "author": "Delia Sherman",
  "rating":3.6,
  "isbn":"670059676",
  "language":"eng",
  "numberOfRatings": 256},

  {"bookId":59,
  "title": "The Changeling Sea",
  "author": "Patricia A. McKillip",
  "rating":4.06,
  "isbn":"141312629",
  "language":"eng",
  "numberOfRatings": 137},

  {"bookId":61,
  "title": "The Changeling",
  "author": "Zilpha Keatley Snyder",
  "rating":4.17,
  "isbn":"595321801",
  "language":"eng",
  "numberOfRatings": 228},

  {"bookId":63,
  "title": "The Changeling",
  "author": "Kate Horsley",
  "rating":3.55,
  "isbn":"1590301943",
  "language":"eng",
  "numberOfRatings": 339},

  {"bookId":66,
  "title": "The Changeling (Daughters of England  #15)",
  "author": "Philippa Carr",
  "rating":3.98,
  "isbn":"449146979",
  "language":"eng",
  "numberOfRatings": 369},

  {"bookId":67,
  "title": "The Known World",
  "author": "Edward P. Jones",
  "rating":3.83,
  "isbn":"61159174",
  "language":"eng",
  "numberOfRatings": 388},

  {"bookId":68,
  "title": "The Known World",
  "author": "Edward P. Jones/Kevin R. Free",
  "rating":3.83,
  "isbn":"006076273X",
  "language":"en-US",
  "numberOfRatings": 14},

  {"bookId":69,
  "title": "The Known World",
  "author": "Edward P. Jones",
  "rating":3.83,
  "isbn":"60749911",
  "language":"eng",
  "numberOfRatings": 576},

  {"bookId":71,
  "title": "Traders  Guns & Money: Knowns and Unknowns in the Dazzling World of Derivatives",
  "author": "Satyajit Das",
  "rating":3.83,
  "isbn":"273704745",
  "language":"eng",
  "numberOfRatings": 334},

  {"bookId":72,
  "title": "Artesia: Adventures in the Known World",
  "author": "Mark Smylie",
  "rating":4.13,
  "isbn":"1932386106",
  "language":"eng",
  "numberOfRatings": 352},

  {"bookId":74,
  "title": "The John McPhee Reader (John McPhee Reader  #1)",
  "author": "John McPhee/William Howarth",
  "rating":4.42,
  "isbn":"374517193",
  "language":"eng",
  "numberOfRatings": 416},

  {"bookId":75,
  "title": "Uncommon Carriers",
  "author": "John McPhee",
  "rating":3.95,
  "isbn":"374280398",
  "language":"en-US",
  "numberOfRatings": 248},

  {"bookId":76,
  "title": "Heirs of General Practice",
  "author": "John McPhee",
  "rating":4.17,
  "isbn":"374519749",
  "language":"eng",
  "numberOfRatings": 128},

  {"bookId":77,
  "title": "The Control of Nature",
  "author": "John McPhee",
  "rating":4.24,
  "isbn":"374522596",
  "language":"en-US",
  "numberOfRatings": 288},

  {"bookId":78,
  "title": "Annals of the Former World",
  "author": "John McPhee",
  "rating":4.34,
  "isbn":"374518734",
  "language":"eng",
  "numberOfRatings": 720},

  {"bookId":79,
  "title": "Coming Into the Country",
  "author": "John McPhee",
  "rating":4.22,
  "isbn":"374522871",
  "language":"eng",
  "numberOfRatings": 448},

  {"bookId":80,
  "title": "La Place de la Concorde Suisse",
  "author": "John McPhee",
  "rating":3.92,
  "isbn":"374519323",
  "language":"fre",
  "numberOfRatings": 160},

  {"bookId":81,
  "title": "Giving Good Weight",
  "author": "John McPhee",
  "rating":4.23,
  "isbn":"374516006",
  "language":"eng",
  "numberOfRatings": 288},

  {"bookId":83,
  "title": "Rising from the Plains",
  "author": "John McPhee",
  "rating":4.23,
  "isbn":"374520658",
  "language":"eng",
  "numberOfRatings": 208},

  {"bookId":85,
  "title": "The Heidi Chronicles",
  "author": "Wendy Wasserstein",
  "rating":3.75,
  "isbn":"822205106",
  "language":"eng",
  "numberOfRatings": 81},

  {"bookId":86,
  "title": "The Heidi Chronicles: Uncommon Women and Others & Isn't It Romantic",
  "author": "Wendy Wasserstein",
  "rating":3.84,
  "isbn":"679734996",
  "language":"eng",
  "numberOfRatings": 249},

  {"bookId":89,
  "title": "Active Literacy Across the Curriculum: Strategies for Reading  Writing  Speaking  and Listening",
  "author": "Heidi Hayes Jacobs",
  "rating":3.94,
  "isbn":"1596670231",
  "language":"eng",
  "numberOfRatings": 138},

  {"bookId":90,
  "title": "Simply Beautiful Beaded Jewelry",
  "author": "Heidi Boyd",
  "rating":3.77,
  "isbn":"1581807740",
  "language":"en-US",
  "numberOfRatings": 128},

  {"bookId":91,
  "title": "Always Enough: God's Miraculous Provision Among the Poorest Children on Earth",
  "author": "Heidi Baker/Rolland Baker",
  "rating":4.46,
  "isbn":"800793617",
  "language":"eng",
  "numberOfRatings": 192},

  {"bookId":92,
  "title": "Mapping the Big Picture: Integrating Curriculum & Assessment K-12",
  "author": "Heidi Hayes Jacobs",
  "rating":3.68,
  "isbn":"871202867",
  "language":"en-US",
  "numberOfRatings": 108},

  {"bookId":93,
  "title": "Heidi (Heidi  #1-2)",
  "author": "Johanna Spyri/Beverly Cleary/Angelo  Rinaldi",
  "rating":3.99,
  "isbn":"753454947",
  "language":"eng",
  "numberOfRatings": 352},

  {"bookId":94,
  "title": "Getting Results with Curriculum Mapping",
  "author": "Heidi Hayes Jacobs",
  "rating":3.25,
  "isbn":"871209993",
  "language":"eng",
  "numberOfRatings": 192},

  {"bookId":96,
  "title": "There's Always Enough: The Miraculous Move of God in Mozambique",
  "author": "Rolland Baker/Heidi Baker",
  "rating":4.46,
  "isbn":"1852402873",
  "language":"eng",
  "numberOfRatings": 192},

  {"bookId":98,
  "title": "What to Expect the First Year (What to Expect)",
  "author": "Heidi Murkoff/Sharon Mazel/Arlene Eisenberg/Sandee Hathaway/Mark D. Widome",
  "rating":3.89,
  "isbn":"761129588",
  "language":"eng",
  "numberOfRatings": 832},

  {"bookId":99,
  "title": "The Player's Handbook: The Ultimate Guide on Dating and Relationships",
  "author": "Heidi Fleiss/Libby Keatinge",
  "rating":3.82,
  "isbn":"972016414",
  "language":"eng",
  "numberOfRatings": 123},

  {"bookId":100,
  "title": "Simply Beautiful Beading: 53 Quick and Easy Projects",
  "author": "Heidi Boyd",
  "rating":3.78,
  "isbn":"1581805632",
  "language":"en-US",
  "numberOfRatings": 128},

  {"bookId":103,
  "title": "God Emperor of Dune (Dune Chronicles  #4)",
  "author": "Frank Herbert",
  "rating":3.84,
  "isbn":"441294677",
  "language":"eng",
  "numberOfRatings": 423},

  {"bookId":105,
  "title": "Chapterhouse: Dune (Dune Chronicles #6)",
  "author": "Frank Herbert",
  "rating":3.91,
  "isbn":"441102670",
  "language":"eng",
  "numberOfRatings": 436},

  {"bookId":106,
  "title": "Dune Messiah (Dune Chronicles #2)",
  "author": "Frank Herbert",
  "rating":3.88,
  "isbn":"441172695",
  "language":"eng",
  "numberOfRatings": 331},

  {"bookId":107,
  "title": "Dreamer of Dune: The Biography of Frank Herbert",
  "author": "Brian Herbert",
  "rating":4.01,
  "isbn":"765306476",
  "language":"en-US",
  "numberOfRatings": 592},

  {"bookId":109,
  "title": "Heretics of Dune (Dune Chronicles  #5)",
  "author": "Frank Herbert",
  "rating":3.86,
  "isbn":"399128980",
  "language":"eng",
  "numberOfRatings": 480},

  {"bookId":110,
  "title": "The Road to Dune",
  "author": "Frank Herbert/Brian Herbert/Kevin J. Anderson",
  "rating":3.88,
  "isbn":"765353709",
  "language":"eng",
  "numberOfRatings": 426},

  {"bookId":117,
  "title": "Heretics of Dune (Dune Chronicles #5)",
  "author": "Frank Herbert",
  "rating":3.86,
  "isbn":"441328008",
  "language":"eng",
  "numberOfRatings": 471},

  {"bookId":119,
  "title": "The Lord of the Rings: The Art of the Fellowship of the Ring",
  "author": "Gary Russell",
  "rating":4.59,
  "isbn":"618212906",
  "language":"eng",
  "numberOfRatings": 192},

  {"bookId":122,
  "title": "The Power of One (The Power of One  #1)",
  "author": "Bryce Courtenay",
  "rating":4.35,
  "isbn":"034541005X",
  "language":"eng",
  "numberOfRatings": 544},

  {"bookId":123,
  "title": "The Power of One (The Power of One  #1)",
  "author": "Bryce Courtenay",
  "rating":4.35,
  "isbn":"385732546",
  "language":"eng",
  "numberOfRatings": 291},

  {"bookId":129,
  "title": "The Power of One: One Person  One Rule  One Month",
  "author": "John C. Maxwell/Stephen R. Graves/Thomas G. Addington",
  "rating":4.28,
  "isbn":"785260056",
  "language":"en-US",
  "numberOfRatings": 256},

  {"bookId":130,
  "title": "Power of an Hour: Business and Life Mastery in One Hour a Week",
  "author": "Dave Lakhani",
  "rating":3.34,
  "isbn":"471780936",
  "language":"eng",
  "numberOfRatings": 205},

  {"bookId":131,
  "title": "The Power of One: The Solo Play for Playwrights  Actors  and Directors",
  "author": "Louis E. Catron",
  "rating":3.67,
  "isbn":"325001537",
  "language":"eng",
  "numberOfRatings": 240},

  {"bookId":132,
  "title": "How to Buy  Sell & Profit on eBay: Kick-Start Your Home-Based Business in Just Thirty Days",
  "author": "Adam Ginsberg",
  "rating":3.48,
  "isbn":"006076287X",
  "language":"eng",
  "numberOfRatings": 336},

  {"bookId":133,
  "title": "eBay for Dummies",
  "author": "Marsha Collier",
  "rating":3.5,
  "isbn":"470045299",
  "language":"eng",
  "numberOfRatings": 386},

  {"bookId":135,
  "title": "What to Sell on ebay and Where to Get It: The Definitive Guide to Product Sourcing for eBay and Beyond",
  "author": "Chris Malta/Lisa Suttora",
  "rating":3.62,
  "isbn":"72262788",
  "language":"eng",
  "numberOfRatings": 260},

  {"bookId":137,
  "title": "Starting an eBay Business for Dummies",
  "author": "Marsha Collier",
  "rating":3.55,
  "isbn":"764569244",
  "language":"eng",
  "numberOfRatings": 384},

  {"bookId":138,
  "title": "eBay: Top 100 Simplified Tips & Tricks",
  "author": "Julia Wilkinson",
  "rating":4.27,
  "isbn":"471933821",
  "language":"eng",
  "numberOfRatings": 260},

  {"bookId":139,
  "title": "ebay Timesaving Techniques for Dummies",
  "author": "Marsha Collier",
  "rating":3.39,
  "isbn":"764559915",
  "language":"en-US",
  "numberOfRatings": 391},

  {"bookId":140,
  "title": "eBay Business All-in-One Desk Reference for Dummies",
  "author": "Marsha Collier",
  "rating":3.89,
  "isbn":"764584383",
  "language":"en-US",
  "numberOfRatings": 864},

  {"bookId":141,
  "title": "Ruby Cookbook",
  "author": "Lucas Carlson/Leonard Richardson",
  "rating":3.84,
  "isbn":"596523696",
  "language":"eng",
  "numberOfRatings": 873},

  {"bookId":142,
  "title": "Ruby Ann's Down Home Trailer Park Cookbook",
  "author": "Ruby Ann Boxcar",
  "rating":4.12,
  "isbn":"806523492",
  "language":"eng",
  "numberOfRatings": 240},

  {"bookId":144,
  "title": "Ruby Ann's Down Home Trailer Park BBQin' Cookbook",
  "author": "Ruby Ann Boxcar",
  "rating":4.08,
  "isbn":"806525363",
  "language":"eng",
  "numberOfRatings": 206},

  {"bookId":147,
  "title": "Rails Cookbook: Recipes for Rapid Web Development with Ruby",
  "author": "Rob Orsini",
  "rating":3.48,
  "isbn":"596527314",
  "language":"eng",
  "numberOfRatings": 514},

  {"bookId":151,
  "title": "Anna Karenina",
  "author": "Leo Tolstoy/Richard Pevear/Larissa Volokhonsky",
  "rating":4.05,
  "isbn":"143035002",
  "language":"eng",
  "numberOfRatings": 838},

  {"bookId":154,
  "title": "CliffsNotes on Tolstoy's Anna Karenina",
  "author": "Marianne Sturman/Leo Tolstoy",
  "rating":3.85,
  "isbn":"822001837",
  "language":"eng",
  "numberOfRatings": 80},

  {"bookId":159,
  "title": "Dinner with Anna Karenina",
  "author": "Gloria Goldreich",
  "rating":2.99,
  "isbn":"778322270",
  "language":"eng",
  "numberOfRatings": 360},

  {"bookId":160,
  "title": "Tolstoy: Anna Karenina",
  "author": "Anthony Thorlby",
  "rating":4.19,
  "isbn":"521313252",
  "language":"eng",
  "numberOfRatings": 128},

  {"bookId":162,
  "title": "Untouchable",
  "author": "Mulk Raj Anand/E.M. Forster",
  "rating":3.71,
  "isbn":"140183957",
  "language":"eng",
  "numberOfRatings": 160},
  ]
}



