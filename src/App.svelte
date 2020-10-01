<script>
    import CardHolder from './components/CardHolder.svelte';
    import CreateCardForm from './components/CreateCardForm.svelte';
    import Footer from './components/Footer.svelte';
    import Header from './components/Header.svelte';
    import Nav from './components/Nav.svelte';
    import Tailwindcss from './Tailwindcss.svelte';

    //let currentPage = 'study';
    let currentPage = 'create';
    const changeSelected = (e) => (currentPage = e.detail);

    let allCards = [
        {
            question:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, excepturi dolor consequuntur quae nulla doloribus molestias. Nostrum exercitationem neque aliquam, necessitatibus atque odit accusamus veritatis, est consequatur ex placeat tenetur repudiandae quidem.',
            answer:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit delectus ratione, veniam quisquam id excepturi fugit.',
        },
        {
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
</script>

<style>
</style>

<Tailwindcss />
<Header />
<Nav {currentPage} on:changeSelected={changeSelected} />
<main class="px-4 pt-6">
    {#if currentPage === 'study'}
        <CardHolder {allCards} />
    {:else if currentPage === 'create'}
        <CreateCardForm on:handleNewCard={handleNewCard} />
    {/if}
</main>
<Footer />
