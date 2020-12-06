<template>
  <ion-item :router-link="`/books/${book.id}`">
    <ion-label>
      {{ book.title }}
    </ion-label>
    <ion-label>
      {{ book.author }}
    </ion-label>
    <ion-label>
      {{ book.state }}
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
