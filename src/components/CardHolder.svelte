<script>
    import StudyCard from './StudyCard.svelte';

    export let allCards = [
        {
            question:
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, voluptatibus quas magnam laborum molestias dignissimos eum tempore, sequi dolorem deserunt ducimus vero? Commodi adipisci corporis hic nihil tenetur sunt eligendi exercitationem doloremque?',
            answer:
                'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis enim et doloremque, eligendi rem reprehenderit corrupti.',
        },
    ];
</script>

<div>
    {#each allCards as card}
        <StudyCard>
            <p slot="question">{card.question}</p>
            <p slot="answer">{card.answer}</p>
        </StudyCard>
    {/each}
</div>
