<script>
    import { createEventDispatcher } from 'svelte';
    import { fade, slide } from 'svelte/transition';
    const dispatch = createEventDispatcher();
    let cardFront = true;
    let visible = true;
    const handleDelete = () => {
        visible = false;
        dispatch('delCard');
    };
</script>

<style lang="postcss">
    .flipped {
        @apply bg-teal-400 border-teal-400;
    }
    .flipped:hover {
        @apply border-teal-500;
    }
</style>

<div
    class:flipped={cardFront === false && visible === true}
    class="relative bg-gray-400 border-4 border-gray-400 hover:border-gray-500 cursor-pointer text-xs sm:text-base text-center h-56 sm:h-64 p-2 pt-8 sm:p-8 mb-2 lg:mb-0 break-words"
    on:click={() => (cardFront = !cardFront)}>
    <span
        class="absolute right-0 top-0 bg-gray-500 hover:bg-red-400 hover:text-red-800 text-lg font-bold leading-none opacity-50 hover:opacity-100 py-1 px-2 m-2"
        on:click|self={handleDelete}>x</span>
    {#if cardFront}
        <div in:fade|local={{ duration: 200 }}>
            <slot name="question">No Question</slot>
        </div>
    {:else}
        <div in:fade|local={{ duration: 200 }}>
            <slot name="answer">No Answer</slot>
        </div>
    {/if}
    <div class="absolute right-0 bottom-0 text-indigo-600 px-4 py-2">
        Click To See
        {#if cardFront}Answer{:else}Question{/if}
    </div>
</div>
