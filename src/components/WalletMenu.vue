<template>
  <div>
    <h2>Quantidade de Items: {{ walletLength }}</h2>
    <div className="navBar">
      <ul>
        <li>
          <span role="img" aria-label="shop"> 🏪</span>
          <span></span>
        </li>
        <li>
          <span role="img" aria-label="shop"> 🛒{{ walletLength }} </span>
          <span></span>
          <span className="cartQuantity"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    walletLength: { Number },
  },
};
</script>

<style>
.navBar {
  position: fixed;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 800;
  text-align: right;
  right: 0;
  top: 0;
  background: #fff;
  z-index: 999;
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.2);
  border-radius: 0 0 0 6px;
}

.navBar li {
  position: relative;
  display: inline-block;
  padding-right: 50px;
  cursor: pointer;
}

.navBar li:hover {
  font-style: italic;
}
</style>