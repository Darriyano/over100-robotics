<script lang="ts">
    import '../../styles/menu.css';
    import {showMenu} from '../../stores';

    export let closeMenu: () => void;
    // export let [robotId]: string; // The ID of the robot, passed as a prop
    let robotId = localStorage.getItem('current') || '';

    function logout() {
        closeMenu();
        showMenu.set(false);
        localStorage.removeItem('current');
    }
</script>

<div class="dropdown-menu">
    <div class="h1">Menu</div>
    <div class="marg"><a href={`/choose/${robotId}`} on:click={closeMenu}>Your robots</a></div>
    <nav></nav>
    <div><a href={`/map/${robotId}`} on:click={closeMenu}>Robot's map</a></div>
    <nav></nav>
    <div><a href={`/settings/${robotId}`} on:click={closeMenu}>Robot's settings</a></div>
    <nav></nav>
    <div><a href={`/diagnosis/${robotId}`} on:click={closeMenu}>Robot's diagnosis</a></div>
    <nav></nav>
    <div><a href="/about-project" on:click={closeMenu}>About project</a></div>
    <nav></nav>
    <div><a href="/about-us" on:click={closeMenu}>About us</a></div>
    <nav></nav>
    <div><a href="/" on:click={logout}>Log out</a></div>
</div>
