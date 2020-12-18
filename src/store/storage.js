import LocalForage from "localforage";
import CordovaSQLiteDriver from "localforage-cordovasqlitedriver";

export default class Storage {
  // dbPromise;
  // booksKey = "books";

  /*  constructor() {
    console.log(this.dbPromise);
    this.dbPromise = new Promise((resolve, reject) => {
      let db;
      LocalForage.defineDriver(CordovaSQLiteDriver)
        .then(() => {
          db = LocalForage.createInstance({
            name: "quitter-strip",
            storeName: "quitterstripkv",
          });
        })
        .then(() =>
          db.setDriver([
            // CordovaSQLiteDriver._driver,
            // LocalForage.INDEXEDDB,
            // LocalForage.WEBSQL,
            LocalForage.LOCALSTORAGE,
          ])
        )
        .then(() => {
          resolve(db);
        })
        .catch((reason) => reject(reason));
    });
    console.log(this.dbPromise);
  } */

  constructor() {
    LocalForage.defineDriver(CordovaSQLiteDriver).then(function() {
      return LocalForage.setDriver([
        CordovaSQLiteDriver._driver,
        LocalForage.INDEXEDDB,
        LocalForage.WEBSQL,
        LocalForage.LOCALSTORAGE
      ]);
  }).then(function() {
    // this should alert "cordovaSQLiteDriver" when in an emulator or a device
    alert(LocalForage.driver());
    // set a value;
    return LocalForage.setItem('testPromiseKey', 'testPromiseValue');
  }).then(function() {
    return LocalForage.getItem('testPromiseKey');
  }).then(function(value) {
    alert(value);
  }).catch(function(err) {
    alert(err);
  });
  }
  ready() {
    return this.dbPromise;
  }

  addBook(book) {
    // return this.dbPromise.then((db) => db.setItem("books", "{book123123}")).catch((error) => console.error(error));
    LocalForage.ready().then(() => {LocalForage.setItem("books", JSON.stringify(book))
      .then((value) => {
        console.log(value);
      })
      .catch((error) => {
        console.error(error);
      })
    }).catch((error) => {
        console.error(error);
      });
  }

  getBooks() {
    // return this.dbPromise.then((db) => db.get("books"));
    return LocalForage.ready().then(() => {
      LocalForage.getItem("books")
        .then((value) => {
          console.log(value);
        })
        .catch((error) => {
          console.error(error);
        });
    }).catch((error) => {
      console.error(error);
    });
  }
}
