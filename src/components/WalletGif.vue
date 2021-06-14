<template>


    <div class="ui grid">
    <h1>WALLET</h1>
      <div class="ui link cards three column row">
        <Card
         class="card"
          v-for="(iten, i) in savedGifs"
          :key="iten.url"
          :gifInfo="iten"
          :fromWallet="true"
          @gifEdit="$emit('gifEdit', i)"
          @gifSaved="$emit('gifSaved', i)"
          @gifDelete="$emit('gifDelete', i)"
        />
      </div>
    </div>
  
</template>

<script>
import Card from "./CardItem.vue";

export default {
  data: () => ({}),

  props: ["savedGifs"],

  components: {
    Card,
  },

  methods: {
    exibe() {
      console.log(this.itens);
    },
    teste123() {
      console.log(this.savedGifs);
    },
  },
};
</script>

<style>
</style>