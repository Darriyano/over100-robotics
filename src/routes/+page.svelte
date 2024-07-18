<script lang="ts">
    import '../styles/signpage.css';
    import {onMount} from 'svelte';
    import {fetchRobotData, sendRobotByName} from '../../api';
    import type {RobotData} from '../../api';
    import type {Names} from '../../api';
    import {goto} from "$app/navigation";

    let robots: Names[] = [];
    let selectedRobotName: string | null = null;

    onMount(async () => {
        try {
            robots = await fetchRobotData();
        } catch (error) {
            console.error('Failed to fetch robot data:', error);
        }
    });

    function handleSelectChange(event: any) {
        selectedRobotName = event.target.value;
    }

    async function sendData() {
        if (selectedRobotName === null) {
            console.error('No robot selected');
            return;
        }

        try {
            const res = await sendRobotByName(selectedRobotName);
            if (res) {
                /* Storing current session name*/
                localStorage.setItem('current', selectedRobotName);
            }
            await goto('/map')
        } catch (error) {
            console.error('Failed to fetch robot data by ID:', error);
        }
    }

</script>

<head>
    <title>Login page</title>
    <meta name="description" content="The page with the connection to the robot"/>
</head>

<div class="page-container">
    Connect to the robot
    <select class="robotID" id="robotID" name="robotID" required on:change={handleSelectChange}>
        {#each robots as robot}
            <option value={robot.name}>{robot.name}</option>
        {/each}
    </select>
    <button class="connect-btn">
        <a href="/diagnosis" style="text-decoration: none; color: #393b43" on:click={sendData}>Connect</a>
    </button>
    <div class="add-txt">Has no robot?</div>
    <button class="add-btn">
        <a href="add-new-robot" style="text-decoration: none; color: #FFFFFF">Add</a>
    </button>
</div>
