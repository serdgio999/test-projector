const database = {
  getUser: (id, callback) => {
    const users = [
      {
        id: 1,
        name: 'Robert',
      },
      {
        id: 2,
        name: 'John'
      }
    ];

    const user = users.find((user) => user.id === id);

    if (!user) {
      callback(`User with id=${id} not found`);
    } else {
      callback(null, user);
    }
  },
  getUsersBook: (userId, callback) => {
    const usersBooks = {
      1: [],
      2: [1, 2],
    };

    const userBook = usersBooks[userId];
    if (!userBook) {
      callback(`Set of books related to userId=${userId} not found`);
    } else {
      callback(null, userBook);
    }
  },
  buyBook: (id, callback) => {
    const books = [
      {
        id: 1,
        name: 'Art of war'
      },
      {
        id: 2,
        name: 'Hunger games'
      },
      {
        id: 3,
        name: '1984'
      }
    ];

    const book = books.find((book) => book.id === id);

    if (!book) {
      callback(`Book with id=${id} not found`);
    } else {
      callback(null, true);
    }
  },
};

const delay = (ms, callback) => setTimeout(callback, ms)

const getUser = (userId) => new Promise((resolve, reject) => {
  database.getUser(userId, (err, user) => (
    err
      ? reject(err)
      : delay(500, () => resolve(user))
  ));
});

const getUsersBook = (userId, bookId) => new Promise((resolve, reject) => {
  database.getUsersBook(userId, (err, books) => {
    if (books.includes(bookId)) {
      reject(`User already has book with id=${bookId}`);
    }

    err
      ? reject(err)
      : delay(250, () => resolve(books))
  });
});

const buyBook = (bookId) => new Promise((resolve, reject) => {
  database.buyBook(bookId, (err, isSuccess) => {
    err
      ? reject(err)
      : delay(250, () => resolve(isSuccess))
  });
});

const buyBookForUser = (bookId, userId) => {
  getUser(userId)
    .then(user => getUsersBook(user.id, bookId))
    .then(() => buyBook(bookId))
    .then(() => console.log('Success'))
    .catch((e) => console.log(e))

    /*.then(books => {
      const promises = books.map(id => buyBook(id));
      Promise.all(promises).then(response => {
        const [promise1data, promise2data] = response;
        console.log(promise1data, promise2data);
      })
    });*/
}

buyBookForUser(3, 2);