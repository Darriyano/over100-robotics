<script lang="ts">
	import '../../../styles/diagnostic-styles.css';
	import { onMount } from 'svelte';
	import { fetchRobotDataByName } from '../../../api';

	let cameraStatus: string = 'Connected';
	let wheelsStatus: string = 'No signal';
	let batteryStatus: string = 'No signal';
	let currentID: number = 0;

	onMount(async () => {
		try {
			const roboName: string | null = localStorage.getItem('current');
			const robot = await fetchRobotDataByName(roboName);
			if (robot.camera === 'port1' || robot.camera === 'port2') {
				cameraStatus = 'disconnected';
			}
			if (robot.wheels) {
				wheelsStatus = 'OK';
			}
			currentID = robot.id;
			batteryStatus = robot.battery.toString();
		} catch (error) {
			console.error('Failed to fetch robot data:', error);
		}
	});
</script>

<head>
	<title>Robot diagnostics</title>
	<meta
		name="description"
		content="The page with the diagnostic of robot's Camera, Wheels and Battery charge"
	/>
</head>
<div class="page-container">
	Robot diagnostics
	<div class="diagnostic-id">
		<div class="diagnostic-text">ID of the robot:</div>
		<div class="robot-ID">{currentID}</div>
	</div>
	<div class="diagnostic-element">
		<div class="diagnostic-text">Camera</div>
		<div class="bad">{cameraStatus}</div>
	</div>
	<div class="diagnostic-element">
		<div class="diagnostic-text">Wheels</div>
		<div class="bad">{wheelsStatus}</div>
	</div>
	<div class="diagnostic-element">
		<div class="diagnostic-text">Battery charge</div>
		<div class="bad">{batteryStatus}%</div>
	</div>
</div>
