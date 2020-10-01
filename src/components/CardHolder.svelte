<script>
    import { createEventDispatcher } from 'svelte';
    import { flip } from 'svelte/animate';
    const dispatch = createEventDispatcher();
    import StudyCard from './StudyCard.svelte';

    export let allCards = [];
</script>

{#each allCards as { id, question, answer } (id)}
    <div animate:flip={{ duration: 500 }}>
        <StudyCard on:delCard={dispatch('handleDelCard', id)}>
            <span slot="question">{question}</span><span slot="answer">{answer}</span>
        </StudyCard>
    </div>
{/each}
