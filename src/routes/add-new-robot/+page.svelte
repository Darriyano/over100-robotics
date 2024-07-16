<script lang="ts">
    import '../../styles/add-new-styles.css';
    import {goto} from "$app/navigation";

    const checkSubmission = () => {
        goto('/');
    }
</script>

<div class='page-container'>
    Add new robot
    <div class="all-elements">
        <input id="name-field" class="element" value="Robot's name..."/>
        <button class="submission" on:click={() => checkSubmission()}>
            Submit robot!
        </button>
    </div>
</div>