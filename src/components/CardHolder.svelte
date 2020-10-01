<script>
    import { createEventDispatcher } from 'svelte';
    import { flip } from 'svelte/animate';
    import { fade } from 'svelte/transition';
    const dispatch = createEventDispatcher();
    import StudyCard from './StudyCard.svelte';

    export let allCards = [];
</script>

<div class="lg:flex lg:flex-wrap lg:-mx-2">
    {#each allCards as { id, question, answer } (id)}
        <div class="lg:w-1/2 lg:px-2 lg:my-2" out:fade|local={{ duration: 100 }} animate:flip={{ duration: 500 }}>
            <StudyCard on:delCard={dispatch('handleDelCard', id)}>
                <span slot="question">{question}</span><span slot="answer">{answer}</span>
            </StudyCard>
        </div>
    {:else}
        <div class="text-center w-full pt-4">Nothing to see here... <span role="img" aria-label="alien">👽</span></div>
    {/each}
</div>
