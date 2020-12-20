<template>
  <ion-item :router-link="`/books/${book.id}`">
    <ion-label slot="start">
      <p>Title</p>
      <h2>{{ book.title }}</h2>
      <p>Author</p>
      <h2>{{ book.author }}</h2>
    </ion-label>
    <ion-label>
      <p>Creation date</p>
      <h2>{{ $filters.toDate(book.creationDate) }}</h2>
      <p>State</p>
      <h2>{{ book.state }}</h2>
    </ion-label>
  </ion-item>
</template>

<script>
import { IonItem, IonLabel } from "@ionic/vue";

export default {
  props: ["book"],
  components: {
    IonItem,
    IonLabel,
  },
};
</script>
