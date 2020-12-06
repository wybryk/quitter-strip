<template>
  <ion-grid>
    <ion-row>
      <ion-label>{{ book.author }}</ion-label>
    </ion-row>
    <ion-row>
      <ion-label>{{ book.state }}</ion-label>
    </ion-row>
    <ion-row>
      <ion-label v-if="book.description">{{ book.description }}</ion-label>
    </ion-row>
    <ion-row>
      <ion-label>details</ion-label>
    </ion-row>
  </ion-grid>
</template>

<script>
import { IonGrid, IonRow, /* IonCol, */ IonLabel } from "@ionic/vue";

export default {
  props: ["book"],
  components: {
    IonGrid,
    IonRow,
    // IonCol,
    IonLabel,
  },
};
</script>

<style scoped>
  ion-row {
    padding: 5px;
  }
</style>