<script lang="ts">
    import '../styles/signpage.css';
    import {onMount} from 'svelte';
    import {fetchRobotData} from '../api';
    import type {Names} from '../api';
    import {goto} from '$app/navigation';
    import {showMenu} from '../../src/stores';

    let robots: Names[] = [];
    let selectedRobotName: string = '';

    onMount(async () => {
        try {
            robots = await fetchRobotData();
        } catch (error) {
            console.error('Failed to fetch robot data:', error);
        }
    });

    function handleSelectChange(event: Event) {
        const target = event.target as HTMLSelectElement;
        selectedRobotName = target.value;
    }

    function sendData() {
        if (
            selectedRobotName === '' ||
            selectedRobotName === 'Choose the robot' ||
            selectedRobotName === 'No robot selected'
        ) {
            alert('No robot selected');
        } else {
            showMenu.set(true);
            localStorage.setItem('current', selectedRobotName);
            goto(`/map/${selectedRobotName}`);
        }
    }
</script>

<head>
    <title>Login page</title>
    <meta name="description" content="The page with the connection to the robot"/>
</head>

<div class="page-container">
    Connect to the robot!
    <select class="robotID" id="robotID" name="robotID" required on:change={handleSelectChange}>
        <option value="Choose the robot">Choose the robot</option>
        {#each robots as robot}
            {#if robot.name !== 'Robot/not robot'}
                <option value={robot.name}>{robot.name}</option>
            {/if}
        {/each}
    </select>
    <button class="connect-btn" on:click={sendData}>Connect</button>
    <div class="add-txt">Has no robot?</div>
    <button class="add-btn">
        <a href="add-new-robot" style="text-decoration: none; color: #FFFFFF">Add</a>
    </button>
</div>
