<script lang="ts">
	import '../../styles/choose.css';

	let isRobotModalOpen: boolean = false;

	function openRobotModal() {
		isRobotModalOpen = true;
	}

	function closeRobotModal() {
		isRobotModalOpen = false;
	}
</script>

<head>
	<title>Your robots</title>
	<meta
		name="description"
		content="The page with the list of the robots and info about the Camera, Wheels and Battery charge"
	/>
</head>
<div class="page-container {isRobotModalOpen ? 'blur' : ''}">
	Your robots
	<div class="all-elements">
		<button class="element" on:click={openRobotModal}> Robot_1 </button>
		<button class="element" on:click={openRobotModal}> Robot_2 </button>
		<button class="element" on:click={openRobotModal}> Robot_3 </button>
	</div>
</div>
{#if isRobotModalOpen}
	<div class="modal-overlay">
		<div class="modal">
			<button class="close-button" on:click={closeRobotModal}>X</button>
			<div class="text-font">Robot</div>
		</div>
	</div>
{/if}
