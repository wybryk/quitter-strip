<template>
  <ion-list>
    <book-list-item
      v-for="book in books"
      :key="book.id"
      :book="book"
    ></book-list-item>
  </ion-list>
</template>

<script>
import { IonList } from "@ionic/vue";
import BookListItem from "./BookListItem.vue";

export default {
  props: ["books"],
  components: {
    IonList,
    BookListItem,
  },
};
</script>
