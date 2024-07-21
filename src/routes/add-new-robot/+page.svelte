<script lang="ts">
    import '../../styles/add-new-styles.css';
    import {goto} from '$app/navigation';
    import {addRobot} from '../../api';

    let robotName: string = "Robot's name...";

    async function checkSubmission() {
        try {
            if (robotName.includes('/')) {
                throw new Error('Name should not include special symbols');
                return;
            } else {
                console.log('checkToUpdate')
                await addRobot(robotName);
                await goto('/');
            }
        } catch (error) {
            alert(error);
            return;
        }
    }
</script>

<head>
    <title>Add new robot</title>
    <meta name="description" content="The page with add new robot"/>
</head>
<div class="page-container">
    Add new robot
    <input id="name-field" class="input-element" bind:value={robotName}/>
    <button class="submission" on:click={() => checkSubmission()}> Submit</button>
</div>
