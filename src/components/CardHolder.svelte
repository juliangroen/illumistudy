<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    import StudyCard from './StudyCard.svelte';

    export let allCards = [];
</script>

{#each allCards as { id, question, answer } (id)}
    <StudyCard on:delCard={dispatch('handleDelCard', id)}>
        <span slot="question">{question}</span><span slot="answer">{answer}</span>
    </StudyCard>
{/each}
