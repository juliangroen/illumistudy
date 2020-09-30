<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    export let currentPage;
</script>

<style>
    .selected {
        @apply bg-teal-400;
        @apply text-gray-800;
    }
</style>

<nav class="flex flex-row text-gray-600 text-lg">
    <div
        class:selected={currentPage === 'study'}
        class=" bg-gray-400 cursor-pointer w-full text-center p-4"
        on:click={() => dispatch('changeSelected', 'study')}>
        Study Cards
    </div>
    <div
        class:selected={currentPage === 'create'}
        class="bg-gray-400 cursor-pointer w-full text-center p-4"
        on:click={() => dispatch('changeSelected', 'create')}>
        Create New Cards
    </div>
</nav>
