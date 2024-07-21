<script lang="ts">
	import '../../styles/choose.css';
	import { fetchRobotsData } from '../../api';
	import type { RobotData } from '../../api';

	import { onMount } from 'svelte';

	let robots: RobotData[] = [];
	let currName: string = '';
	let currId: number = 0;
	let currBattery: number = 0;

	let isRobotModalOpen: boolean = false;

	onMount(async () => {
		try {
			robots = await fetchRobotsData();
		} catch (error) {
			console.error('Failed to fetch robot data:', error);
		}
	});

	function openRobotModal(robotName: string, robotId: number, robotBattery: number) {
		currName = robotName;
		currId = robotId;
		currBattery = robotBattery;
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
		{#each robots as robot}
			{#if robot.name !== 'Robot/not robot'}
				<button
					class="element"
					on:click={() => openRobotModal(robot.name, robot.id, robot.battery)}
					id={robot.name}
				>
					{robot.name}</button
				>
			{/if}
		{/each}
	</div>
</div>
{#if isRobotModalOpen}
	<div class="modal-overlay">
		<div class="modal">
			<button class="close-button" on:click={closeRobotModal}>X</button>
			<div class="text-font">Robot info</div>
			<div>Name: {currName}</div>
			<div>ID: {currId}</div>
			<div>Battery: {currBattery}%</div>
		</div>
	</div>
{/if}
