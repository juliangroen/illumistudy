<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    export let currentPage;
</script>

<style>
    .selected {
        @apply bg-gray-300;
        @apply text-teal-400;
    }
</style>

<nav class="flex flex-row bg-gray-400 text-gray-600 text-lg">
    <div
        class:selected={currentPage === 'study'}
        class="cursor-pointer w-full text-center p-4"
        on:click={() => dispatch('changeSelected', 'study')}>
        Study Cards
    </div>
    <div
        class:selected={currentPage === 'create'}
        class="cursor-pointer w-full text-center p-4"
        on:click={() => dispatch('changeSelected', 'create')}>
        Create New Cards
    </div>
</nav>
