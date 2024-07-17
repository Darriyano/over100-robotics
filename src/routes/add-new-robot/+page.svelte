<script lang="ts">
    import '../../styles/add-new-styles.css';
    import {goto} from "$app/navigation";

    const checkSubmission = () => {
        goto('/');
    }
</script>
<head>
	<title>Add new robot</title>
	<meta name="description" content="The page with add new robot" />
</head>
<div class='page-container'>
    Add new robot
    <div class="all-elements">
        <input id="name-field" class="element" value="Robot's name..."/>
        <button class="submission" on:click={() => checkSubmission()}>
            Submit
        </button>
    </div>
</div>