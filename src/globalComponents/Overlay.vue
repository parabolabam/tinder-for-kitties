<template>
  <div class="spinnerContainer">
    <div class="loader"></div>
  </div>
</template>

<script>
export default {
  name: 'overlay',

};
</script>

<style lang="scss" scoped>
.spinnerContainer {
  @keyframes load8 {
    100% {
      transform: rotate(360deg);
    }
  }

  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(255,255,255, 0.8);

  .loader {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    &:before {
      content: '';
      display: flex;
      color: white;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      width:1rem;
      height: 1rem;
      padding: 1rem;
      border-radius: 50%;
      border: 10px solid blue;
      border-color: #0277BD #0277BD #0277BD #81D4FA;
      box-shadow: 0px 0px 40px -2px skyblue;
      animation: load8 1s infinite ease-in-out;
    }
  }
}
</style>
