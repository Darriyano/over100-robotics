<script lang="ts">
    export let closeMenu: () => void;
</script>

<div class="dropdown-menu">
    <div class='h1'>Menu</div>

    <div class="marg"><a href="/map" on:click={closeMenu}>Map робота</a></div>
    <nav></nav>
    <div class="marg"><a href="/diagnosis" on:click={closeMenu}>Diagnosis</a></div>
    <nav></nav>
    <div class="marg"><a href="/choose" on:click={closeMenu}>Choosing robots</a></div>
    <nav></nav>
    <div class="marg"><a href="/settings" on:click={closeMenu}>Robot settings</a></div>
    <nav></nav>
    <div class="marg"><a href="/about-us" on:click={closeMenu}>About us</a></div>
    <div class="marg"><a href="/about-project" on:click={closeMenu}>About project</a></div>
</div>

<style>
    /* Add your styles here */
</style>
