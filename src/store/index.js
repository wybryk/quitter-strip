import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      books: [
        {
          id: 1,
          title: "Book title",
          author: "Author name",
          description: "description",
          state: "BORROWED",
          creationDate: "2018-01-01T09:47:03Z",
          states: [
            {
              creationDate: "2020-06-05T09:47:03Z",
              endDate: "2020-06-06T17:12:58Z",
              name: "WANTED_TO_READ",
            },
            {
              creationDate: "2020-06-06T18:47:03Z",
              endDate: "2020-07-01T18:47:03Z",
              name: "BORROWED",
              personName: "Name of person",
            },
            {
              creationDate: "2020-08-06T06:47:03Z",
              endDate: "",
              name: "BORROWED",
              personName: "Name of person 2",
            },
          ],
        },
        {
          id: 2,
          title: "Book title 2",
          author: "Author name 2",
          description: "description 2",
          state: "READED",
          creationDate: "2020-06-01T09:47:03Z",
          states: [
            {
              creationDate: "2020-06-05T09:47:03Z",
              endDate: "2020-06-06T17:12:58Z",
              name: "WANTED_TO_READ",
            },
            {
              creationDate: "2021-06-05T09:47:03Z",
              endDate: "",
              name: "READED",
            },
          ],
        },
      ],
      bookStates: [
        "IN_LIBRARY",
        "WANTED_TO_READ",
        "READING_NOW",
        "READED",
        "BORROWED",
        "REMOVED",
      ],
    };
  },
  mutations: {
    setBooks(state, books) {
      console.log(books);
      state.books = books;
    },
    addBook(state, book) {
      state.books.push(book);
    },
    updateBook(state, book) {
      state.books.forEach((value) => {
        if (book.id === value.id) {
          Object.assign(value, book);
        }
      });
    },
    deleteBook(state, bookId) {
      state.books.splice(
        state.books.findIndex((value) => value.id === bookId),
        1
      );
    },
  },
  actions: {
    /*  loadBooks: ({commit}) => {
      commit('setBooks', );
    }, */
    addBook: ({ commit }, book) => {
      commit("addBook", book);
    },
    updateBook: ({ commit }, book) => {
      commit("updateBook", book);
    },
    deleteBook: ({ commit }, bookId) => {
      commit("deleteBook", bookId);
    },
  },
  getters: {
    books: (state) => state.books,
    bookoo: (state, bookId) => state.books.find((book) => book.id === bookId),
    book(state) {
      return (bookId) => {
        return state.books.find((book) => book.id == bookId);
      };
    },
  },
});

export default store;
