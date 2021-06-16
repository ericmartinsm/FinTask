<template>
  <div id="app">
    <div class="ui two column centered grid">
      <div class="two column centered row">
        <Wallet class="column" :savedGifs="savedItens" @gifDelete="gifDelete" />
      </div>
      <div class="two column centered row">
        <Search @SearchData="initialize" />
        <CardGrid
          id="forceHeight"
          class="column"
          :itens="itens"
          @gifSaved="saveGif"
          @callNewPage="callNewPage"
        />
        <div
          style="margin-top: 50px"
          class="ui active centered inline loader"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import CardGrid from "./components/CardGrid.vue";
import Search from "./components/Search.vue";
import Wallet from "./components/Wallet.vue";
export default {
  name: "App",
  components: {
    CardGrid,
    Search,
    Wallet,
  },
  data: () => ({
    api_key: "fKBiqixYUcXzaAMUl8G2iV6jY4bk0HBv",
    itens: [],
    savedItens: [],
    pageNumber: 1,
    numberPerPage: 18,
  }),

  created() {
    this.initialize();

    const json = localStorage.getItem("savedItens");
    const array = JSON.parse(json);
    this.savedItens = Array.isArray(array) ? array : [];
  },
  watch: {
    savedItens: {
      deep: true,
      handler() {
        localStorage.setItem("savedItens", JSON.stringify(this.savedItens));
      },
    },
  },

  methods: {
    async initialize(item) {
      if (!item) {
        await this.$http
          .get("trending", {
            params: {
              api_key: this.api_key,
              limit: this.numberPerPage,
              offset: this.pageNumber,
            },
          })
          .then((resp) => {
            resp.data.data.forEach(this.extract);
            console.log("deus");
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        this.itens = [];
        await this.$http
          .get("search", {
            params: {
              api_key: this.api_key,
              limit: this.numberPerPage,
              offset: this.pageNumber,
              q: item,
            },
          })
          .then((resp) => {
            resp.data.data.forEach(this.extract);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },

    async saveGif(item) {
      this.savedItens.push(this.itens[item]);
    },
    async gifDelete(item) {
      this.savedItens.splice(item, 1);
    },

    async getItensSaved(item) {
      await this.$JSON_SERVER.get(`/${item + 1}`).then((resp) => {
        this.savedItens.push(resp.data);
      });
    },

    callNewPage() {
      this.initialize();
      this.pageNumber++;
    },

    extract(item) {
      return this.itens.push({
        src: item.images.fixed_height.url,
        type: item.type,
        username: item.username,
        title: item.title,
        originalW: item.images.original.width,
        originalH: item.images.original.height,
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #bcbabd;
}
.forceHeight {
  min-height: 100vh;
  border: 1px solid red;
}
</style>
