<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    export let currentPage;
</script>

<style lang="postcss">
    .selected {
        @apply bg-gray-300 text-teal-400 border-teal-400;
    }
</style>

<nav class="flex flex-row bg-gray-400 text-gray-600 text-sm sm:text-base">
    <div
        class:selected={currentPage === 'study'}
        class="border-b-4 border-gray-400 hover:border-gray-500 cursor-pointer w-full text-center p-4"
        on:click={() => dispatch('changeSelected', 'study')}>
        Study Cards
    </div>
    <div
        class:selected={currentPage === 'create'}
        class="border-b-4 border-gray-400 hover:border-gray-500 cursor-pointer w-full text-center p-4"
        on:click={() => dispatch('changeSelected', 'create')}>
        Create New Cards
    </div>
</nav>
