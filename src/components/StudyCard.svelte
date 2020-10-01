<script>
    let cardFront = true;
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
    class:flipped={cardFront === false}
    class="relative bg-gray-400 border-4 border-gray-400 hover:border-gray-500 cursor-pointer text-center h-64 p-8 mb-4 break-words"
    on:click={() => (cardFront = !cardFront)}>
    {#if cardFront}
        <slot name="question" />
    {:else}
        <slot name="answer" />
    {/if}
    <div class="absolute right-0 bottom-0 text-indigo-600 px-4 py-2">
        Click To See
        {#if cardFront}Answer{:else}Question{/if}
    </div>
</div>
