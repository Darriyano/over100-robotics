<script lang="ts">
	import '../../styles/menu.css';
	import { showMenu } from '../../stores';

	export let closeMenu: () => void;

	function logout() {
		closeMenu();
		showMenu.set(false);
		localStorage.removeItem('current');
	}
</script>

<div class="dropdown-menu">
	<div class="h1">Menu</div>
	<div class="marg"><a href="/choose" on:click={closeMenu}>Your robots</a></div>
	<nav></nav>
	<div><a href="/map" on:click={closeMenu}>Robot's map</a></div>
	<nav></nav>
	<div><a href="/settings" on:click={closeMenu}>Robot's settings</a></div>
	<nav></nav>
	<div><a href="/diagnosis" on:click={closeMenu}>Robot's diagnosics</a></div>
	<nav></nav>
	<div><a href="/about-project" on:click={closeMenu}>About project</a></div>
	<nav></nav>
	<div><a href="/about-us" on:click={closeMenu}>About us</a></div>
	<nav></nav>
	<div><a href="/" on:click={logout}>Log out</a></div>
</div>
