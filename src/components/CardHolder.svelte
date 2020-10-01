<script>
    import { createEventDispatcher } from 'svelte';
    import { flip } from 'svelte/animate';
    import { fade } from 'svelte/transition';
    const dispatch = createEventDispatcher();
    import StudyCard from './StudyCard.svelte';

    export let allCards = [];
</script>

{#each allCards as { id, question, answer } (id)}
    <div out:fade={{ duration: 100 }} animate:flip={{ duration: 500 }}>
        <StudyCard on:delCard={dispatch('handleDelCard', id)}>
            <span slot="question">{question}</span><span slot="answer">{answer}</span>
        </StudyCard>
    </div>
{:else}
    <div class="text-center">Nothing to see here... <span role="img" aria-label="alien">👽</span></div>
{/each}
