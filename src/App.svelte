<script>
    import CardHolder from './components/CardHolder.svelte';
    import CreateCardForm from './components/CreateCardForm.svelte';
    import Footer from './components/Footer.svelte';
    import Header from './components/Header.svelte';
    import Nav from './components/Nav.svelte';
    import Tailwindcss from './Tailwindcss.svelte';

    let currentPage = 'study';
    const changeSelected = (e) => (currentPage = e.detail);

    let allCards = [
        {
            id: Math.random(),
            question:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, excepturi dolor consequuntur quae nulla doloribus molestias. Nostrum exercitationem neque aliquam, necessitatibus atque odit accusamus veritatis, est consequatur ex placeat tenetur repudiandae quidem.',
            answer:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit delectus ratione, veniam quisquam id excepturi fugit.',
        },
        {
            id: Math.random(),
            question:
                'Doloremque saepe repellat exercitationem, velit magnam corporis harum fuga vel sit cum reprehenderit. Magni nesciunt aliquid ab est incidunt! Nulla illo fuga debitis, iusto ipsam expedita quis optio molestias perferendis numquam sed!',
            answer:
                'Voluptatem, maxime error blanditiis consequuntur eaque illo, nulla, esse in pariatur quod consectetur fugiat neque accusantium.',
        },
    ];

    const handleNewCard = (e) => {
        allCards = [...allCards, e.detail];
        currentPage = 'study';
    };

    const handleDelCard = (e) => {
        let updatedCards = [...allCards].filter((card) => card.id !== e.detail);
        allCards = updatedCards;
    };
</script>

<style lang="postcss">
    :global(body) {
        @apply text-gray-800 font-mono;
    }
</style>

<Tailwindcss />

<main>
    <div class="max-w-screen-lg mx-auto">
        <Header />
        <Nav {currentPage} on:changeSelected={changeSelected} />
        <div class="p-2 sm:p-4 lg:px-0">
            {#if currentPage === 'study'}
                <CardHolder {allCards} on:handleDelCard={handleDelCard} />
            {:else if currentPage === 'create'}
                <CreateCardForm on:handleNewCard={handleNewCard} />
            {/if}
        </div>
        <Footer />
    </div>
</main>
