<svelte:options customElement="proof-overlay" />

<script>
  import BaseButton from "./BaseButton.svelte"

  const name = "Ricky"
  console.log("helllooooo therrreeee")
</script>

<h1>Hey, {name} this is from a web component</h1>

<BaseButton />

<style>
  h1 {
    color: orangered;
  }
</style>
