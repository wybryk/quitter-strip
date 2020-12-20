import { createStore } from "vuex";
import firebase from "firebase/app";
import "firebase/firestore";
import FIREBASE_CONFIG from "./.env.firebase";

if (firebase.apps.length === 0) {
  firebase.initializeApp(FIREBASE_CONFIG);
}

const store = createStore({
  state() {
    return {
      books: [],
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
    loadBooks: ({ commit }) => {
      firebase
        .firestore()
        .collection("books")
        .get()
        .then((response) => {
          let books = [];
          response.forEach((value) => {
            books.push(Object.assign({ id: value.id }, value.data()));
          });
          commit("setBooks", books);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    addBook: ({ commit }, book) => {
      commit("addBook", book);
      firebase
        .firestore()
        .collection("books")
        .add(book)
        .then((value) => {
          console.log(value);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    updateBook: ({ commit }, book) => {
      commit("updateBook", book);
    },
    deleteBook: ({ commit }, bookId) => {
      commit("deleteBook", bookId);
    },
  },
  getters: {
    books(state) {
      return state.books;
    },
    book(state) {
      return (bookId) => {
        return state.books.find((book) => book.id == bookId);
      };
    },
  },
});

export default store;
