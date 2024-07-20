<script lang="ts">
	import '../../styles/settings.css';
	import { onMount } from 'svelte';
	import {
		fetchCameraChanges,
		fetchDisconnect,
		fetchRobotDataByName,
		fetchSpeedChanges
	} from '../../api';
	import { goto } from '$app/navigation';
	import { showMenu } from '../../stores';

	let id: string = '000';
	let speed: string = '1';
	let port: string = 'Port 1';

	let isCameraModalOpen: boolean = false;

	const options = Array.from({ length: 100 }, (_, i) => i + 1);

	// eslint-disable-next-line no-use-before-define
	let robot: any = {};

	onMount(async () => {
		try {
			const roboName = localStorage.getItem('current');
			robot = await fetchRobotDataByName(roboName);
			id = robot.id;
			port = robot.camera;
			speed = robot.speed.toString();
		} catch (error) {
			console.error('Failed to fetch robot data:', error);
		}
	});

	function openCameraModal() {
		isCameraModalOpen = true;
	}

	function closeCameraModal() {
		isCameraModalOpen = false;
	}

	async function handleCameraChange(event: Event) {
		const target = event.target as HTMLInputElement;
		port = target.value;
		try {
			let roboName = localStorage.getItem('current');
			if (!roboName) {
				roboName = '';
			}
			await fetchCameraChanges(roboName, port);
		} catch (e) {
			console.log(e);
		}
		closeCameraModal();
	}

	let isSpeedModalOpen: boolean = false;

	function openSpeedModal() {
		isSpeedModalOpen = true;
	}

	function closeSpeedModal() {
		isSpeedModalOpen = false;
	}

	async function handleSpeedChange(event: Event) {
		const target2 = event.target as HTMLInputElement;
		speed = target2.value;
		try {
			let roboName = localStorage.getItem('current');
			if (!roboName) {
				roboName = '';
			}
			await fetchSpeedChanges(roboName, Number(speed));
		} catch (e) {
			console.log(e);
		}
		closeSpeedModal();
	}

	function addingRobot() {
		localStorage.removeItem('current');
		goto('/add-new-robot');
	}

	async function exiting() {
		const roboName: string | null = localStorage.getItem('current');
		await fetchDisconnect(roboName);
		localStorage.removeItem('current');
		showMenu.set(false);
		await goto('/');
	}
</script>

<head>
	<title>Robot's settings</title>
	<meta name="description" content="The page with the Robot's settings" />
</head>

<div class="page-container {isCameraModalOpen || isSpeedModalOpen ? 'blur' : ''}">
	Robot's settings

	<button class="setting-element" on:click={() => exiting()}>
		<div class="left">
			<svg
				class="svg"
				width="60"
				height="40"
				viewBox="0 0 27 27"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M24.7716 2.23077C21.7976 -0.743591 16.9849 -0.743591 14.0144 2.23077L10.6079 5.63758L12.4008 7.43064L15.8072 4.02383C17.6986 2.13233 20.8906 1.93193 22.9788 4.02383C25.0705 6.11573 24.8701 9.30456 22.9788 11.1961L19.5723 14.6029L21.3687 16.3994L24.7752 12.9926C27.7422 10.0183 27.7422 5.20514 24.7716 2.23077ZM11.1985 22.981C9.30716 24.8725 6.11513 25.0729 4.02695 22.981C1.93526 20.8891 2.13564 17.7003 4.02695 15.8088L7.43343 12.402L5.63703 10.6054L2.23056 14.0122C-0.743518 16.9866 -0.743518 21.7997 2.23056 24.7705C5.20463 27.7414 10.0173 27.7449 12.9878 24.7705L16.3943 21.3637L14.6014 19.5707L11.1985 22.981ZM4.6527 2.86362C4.59984 2.81127 4.52847 2.78191 4.45408 2.78191C4.37969 2.78191 4.30831 2.81127 4.25546 2.86362L2.86334 4.25587C2.811 4.30873 2.78164 4.38012 2.78164 4.45451C2.78164 4.52891 2.811 4.60029 2.86334 4.65316L22.353 24.1447C22.462 24.2537 22.6413 24.2537 22.7503 24.1447L24.1424 22.7525C24.2514 22.6435 24.2514 22.4642 24.1424 22.3552L4.6527 2.86362Z"
					fill="#393B43"
				/>
			</svg>
			<div class="text">Disconnect</div>
		</div>
		<div class="selectedID">ID: {id}</div>
	</button>

	<button class="setting-element" on:click={addingRobot}>
		<div class="left">
			<svg
				class="svg"
				width="60"
				height="40"
				viewBox="0 0 16 17"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M6.335 16.65V9.54H0.0350001V7.02H6.335V-1.07288e-06H8.81V7.02H15.155V9.54H8.81V16.65H6.335Z"
					fill="#393B43"
				/>
			</svg>
			<div class="text">Add a robot</div>
		</div>
	</button>

	<button class="setting-element" on:click={openCameraModal}>
		<div class="left">
			<svg
				class="svg"
				width="50"
				height="40"
				viewBox="0 0 25 34"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M4.2 1.0625C4.2 0.780707 4.31062 0.510457 4.50754 0.311199C4.70445 0.111942 4.97152 0 5.25 0H15.75C16.0285 0 16.2955 0.111942 16.4925 0.311199C16.6894 0.510457 16.8 0.780707 16.8 1.0625V8.5H16.9659C19.1877 8.5 21 10.3126 21 12.563V23.562C20.9989 24.0969 20.8937 24.6263 20.6903 25.1199C20.487 25.6136 20.1895 26.0619 19.8148 26.4393C19.4402 26.8166 18.9958 27.1155 18.507 27.3189C18.0181 27.5224 17.4945 27.6264 16.9659 27.625H14.7V32.9375C14.7 33.2193 14.5894 33.4895 14.3925 33.6888C14.1955 33.8881 13.9285 34 13.65 34C13.3715 34 13.1044 33.8881 12.9075 33.6888C12.7106 33.4895 12.6 33.2193 12.6 32.9375V27.625H8.4V32.9375C8.4 33.2193 8.28938 33.4895 8.09246 33.6888C7.89555 33.8881 7.62848 34 7.35 34C7.07152 34 6.80445 33.8881 6.60754 33.6888C6.41062 33.4895 6.3 33.2193 6.3 32.9375V27.625H4.0341C3.50554 27.6264 2.98188 27.5224 2.49305 27.3189C2.00422 27.1155 1.55979 26.8166 1.18516 26.4393C0.810536 26.0619 0.513046 25.6136 0.309691 25.1199C0.106336 24.6263 0.00110167 24.0969 0 23.562V12.563C0 10.3105 1.8123 8.5 4.0341 8.5H4.2V1.0625ZM6.3 8.5H14.7V2.125H6.3V8.5Z"
					fill="#2D3037"
				/>
			</svg>
			<div class="text">Select camera</div>
		</div>
		<div class="selected">{port}</div>
	</button>
	<button class="setting-element" on:click={openSpeedModal}>
		<div class="left">
			<svg
				class="svg"
				width="50"
				height="40"
				viewBox="0 0 40 25"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M12.691 17.4787C13.2917 18.0866 14.0677 18.3845 15.0189 18.3724C15.9701 18.3602 16.671 18.0117 17.1215 17.3267L25.5321 4.55966L12.9163 13.071C12.2404 13.527 11.884 14.2236 11.8469 15.1609C11.8099 16.0981 12.0912 16.8707 12.691 17.4787ZM15.0189 0C16.4958 0 17.9165 0.208731 19.2813 0.626193C20.646 1.04366 21.9286 1.67086 23.1291 2.50781L20.2755 4.33168C19.4495 3.90104 18.5924 3.57832 17.7043 3.36351C16.8162 3.1487 15.921 3.04079 15.0189 3.03977C11.6897 3.03977 8.85464 4.22427 6.51369 6.59327C4.17275 8.96226 3.00278 11.8308 3.00378 15.1989C3.00378 16.2628 3.14796 17.314 3.43632 18.3526C3.72469 19.3912 4.1312 20.3665 4.65586 21.2784H25.3819C25.9577 20.3158 26.3772 19.3152 26.6405 18.2766C26.9038 17.238 27.035 16.1615 27.034 15.0469C27.034 14.1349 26.9274 13.2483 26.7141 12.3871C26.5008 11.5258 26.1819 10.6899 25.7574 9.87926L27.5597 6.99148C28.3106 8.18206 28.9054 9.44863 29.3439 10.7912C29.7825 12.1338 30.0138 13.527 30.0378 14.9709C30.0618 16.4148 29.8991 17.7953 29.5497 19.1126C29.2002 20.4298 28.6871 21.6837 28.0102 22.8743C27.7349 23.3303 27.3594 23.6849 26.8838 23.9382C26.4082 24.1915 25.9076 24.3182 25.3819 24.3182H4.65586C4.1302 24.3182 3.62957 24.1915 3.15397 23.9382C2.67837 23.6849 2.3029 23.3303 2.02755 22.8743C1.37673 21.7344 0.876102 20.5251 0.525661 19.2463C0.17522 17.9676 0 16.6184 0 15.1989C0 13.0964 0.394496 11.1271 1.18349 9.29107C1.97248 7.45504 3.04884 5.8465 4.41255 4.46543C5.77627 3.08436 7.37177 1.9951 9.19907 1.19767C11.0264 0.400237 12.9663 0.00101326 15.0189 0Z"
					fill="#2D3037"
				/>
			</svg>
			<div class="text">Select speed</div>
		</div>
		<div class="selected">{speed}X</div>
	</button>
</div>
{#if isCameraModalOpen}
	<div class="modal-overlay">
		<div class="modal">
			<button class="close-button" on:click={closeCameraModal}>X</button>
			<div class="text-font">Select Camera</div>
			<form on:change={handleCameraChange} class="form-styles">
				<label>
					<input
						type="radio"
						class="variant"
						name="camera"
						value="Port 1"
						checked={port === 'Port 1'}
					/>
					Port 1
				</label>
				<label>
					<input
						type="radio"
						class="variant"
						name="camera"
						value="Port 2"
						checked={port === 'Port 2'}
					/>
					Port 2
				</label>
				<label>
					<input
						type="radio"
						class="variant"
						name="camera"
						value="Port 3"
						checked={port === 'Port 3'}
					/>
					Port 3
				</label>
			</form>
		</div>
	</div>
{/if}
{#if isSpeedModalOpen}
	<div class="modal-overlay">
		<div class="modal">
			<button class="close-button" on:click={closeSpeedModal}>X</button>
			<div class="text-font">Select Speed</div>
			<form on:change={handleSpeedChange} class="form-styles">
				<select bind:value={speed} class="variant-input">
					{#each options as option}
						<option value={option}>{option}</option>
					{/each}
				</select>
			</form>
		</div>
	</div>
{/if}
