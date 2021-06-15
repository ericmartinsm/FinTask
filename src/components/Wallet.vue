<template>
  <div ref="elemento" style="margin-top: 30px; height: auto">
    <div class="ui link grid centered">
      <div ref="gif" class="ui link cards three column row env">
        <Card
          class="card"
          v-for="(iten, i) in savedGifs"
          :key="iten.i"
          :gifInfo="iten"
          :fromWallet="true"
          @gifEdit="$emit('gifEdit', i)"
          @gifSaved="$emit('gifSaved', i)"
          @gifDelete="$emit('gifDelete', i)"
        />
      </div>
      <button
        style="z-index: 99; margin-bottom: 30px"
        class="ui bounce red button"
        @click="hasClass"
      >
        🛒 {{ savedGifs.length }}
      </button>
    </div>
  </div>
</template>

<script>
import Card from "./CardItem.vue";
export default {
  props: ["savedGifs"],
  components: {
    Card,
  },
  methods: {
    hasClass() {
      const element = this.$refs.elemento;

      if (this.savedGifs.length > 0) {
        if (element.classList.contains("open")) {
          this.$refs.elemento.classList.add("close");
          this.$refs.elemento.classList.remove("open");
          this.$refs.gif.classList.add("env");
          this.$refs.gif.classList.remove("block");
        } else {
          this.$refs.elemento.classList.add("open");
          this.$refs.elemento.classList.remove("close");
          this.$refs.gif.classList.add("block");
          this.$refs.gif.classList.remove("env");
        }
      }
    },
  },
};
</script>

<style>
.open {
  transition: all linear 0.3s;
  animation: moveOpen 0.3s alternate;
}
.close {
  height: 0;
  animation: moveClose 0.3s alternate;
}
.bounce {
  animation: bounce 2s infinite;
}
.env {
  display: none !important;
}
.block {
  display: flex !important;
}

@keyframes moveOpen {
  from {
    height: 0;
  }
  to {
    height: auto;
  }
}
@keyframes moveClose {
  from {
    height: auto;
  }
  to {
    height: 1vh;
  }
}

@keyframes bounce {
  0%,
  20%,
  53%,
  80%,
  100% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40% {
    transition-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -6px, 0);
  }

  70% {
    transition-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -4px, 0);
  }

  90% {
    transform: translate3d(0, -2px, 0);
  }
}
</style>
