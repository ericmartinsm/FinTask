<template>
  
    <div class="ui grid-card forceheight ">
      <div class="ui link cards three column row">
        <Card
          class="card"
          v-for="(iten, i) in itens"
          :key="iten.url"
          :gifInfo="iten"
          @gifSaved="$emit('gifSaved', i)"
        />
       
      </div>
       <div class="setposition" v-observe-visibility="visibilityChanged"></div>
    </div>
 
</template>

<script>
import Card from "./CardItem.vue";

export default {
  data: () => ({
    searchInput: "",
  }),

  props: {
    itens: { type: Array },
  },

  created() {
    // this.initialize();
  },

  components: {
    Card,
    // InfiniteLoading,
  },
  methods: {
    exibe() {
      console.log(this.itens);
    },

    chama() {
      this.teste1 = !this.teste1;
    },

    visibilityChanged(isVisible){
      if(!isVisible) return ;
      this.$emit('callNewPage', isVisible )
    },

    // teste123() {
    //   //   console.log(this.itens)
    //   console.log(this.itens);
    // },

    // extract(item) {
    //   return this.itens.push({
    //     url: item.images.fixed_height.url,
    //     type: item.type,
    //     username: item.username,
    //   });
    // },

    // async initialize() {
    //   await this.$http
    //     .get("trending", {
    //       params: {
    //         api_key: this.api_key,
    //         limit: "6",
    //       },
    //     })
    //     .then((resp) => {
    //       console.log(resp.data.data);
    //       resp.data.data.forEach(this.extract);
    //     });
    // },

    // async searchGif() {
    //   console.log(this.itens);
    //   this.itens = [];
    //   await this.$http
    //     .get("search", {
    //       params: {
    //         api_key: this.api_key,
    //         limit: "3",
    //         q: this.searchInput,
    //       },
    //     })
    //     .then((resp) => {
    //       resp.data.data.forEach(this.extract);
    //       console.log(this.itens);
    //     });
    // },
    // saveGif() {
    //   console.log("camaleão");
    // },
  },
};
</script>

<style>
.grid-card{
  min-height: 100vh!important;
  position: relative;
}
.setposition{
  position: absolute;
  bottom: 0;
}
</style>