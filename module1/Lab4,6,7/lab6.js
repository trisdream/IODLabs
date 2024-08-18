const Weapon = {
  Title: "Weapon",
  Description:
    "After escaping Lengard and finding sanctuary with the Remnants, Alyssa Scott is desperate to save those she left behind and the rest of the world from the power-hungry scientist, Kendall Vanik. But secrets and lies block her at every turn, and soon Lyss is questioning everything she has ever believed.",
  Author: "Lynette Noni",
  NumberOfPages: 391,
};

const Whisper = {
  Title: "Whisper",
  Description:
    "A gripping fantasy novel where secrets and whispers lead to a thrilling adventure.",
  Author: "Lynette Noni",
  NumberOfPages: 320,
};

const HarryPotter = {
  Title: "Harry Potter and the Sorcerer's Stone",
  Description:
    "A young wizard's journey begins as he discovers his magical heritage and attends Hogwarts School of Witchcraft and Wizardry.",
  Author: "J.K. Rowling",
  NumberOfPages: 309,
};

const Tarot = {
  Title: "Tarot: The Complete Guide",
  Description:
    "An in-depth guide to reading and interpreting tarot cards for personal and professional use.",
  Author: null,
  NumberOfPages: 256,
};

const SerialKillers = {
  Title: "Serial Killers: The Method and Madness",
  Description:
    "An exploration of the psychology and methods behind some of the most notorious serial killers in history.",
  Author: "Jane Smith",
  NumberOfPages: 480,
};

let bookList = [Weapon, Whisper, HarryPotter, Tarot, SerialKillers];

console.log(bookList[0].Title);
console.log(bookList[0].Description);
console.log(bookList[0].Author);
console.log(bookList[0].NumberOfPages);

console.log(bookList[0]);

// Example of updating the description of the first book
bookList[0].Description =
  "In a world torn apart by conflict, Alyssa Scott, a former operative of the mysterious organization Lengard, finds herself at the heart of a struggle against a ruthless scientist, Kendall Vanik. As Alyssa seeks to rescue those she left behind and thwart Vanik's dangerous plans, she uncovers hidden truths and faces formidable challenges. With trust and betrayal intertwining, Alyssa must confront her own past while navigating a treacherous path to protect what remains of her world.";
console.log(bookList[0].Description);

console.log(bookList);
bookList.forEach((book, index) => {
  console.log(book.Title);
  console.log(book.Description);
  console.log(book.Author);
  console.log(book.NumberOfPages);
});
