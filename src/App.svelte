<script>
    import CardHolder from './components/CardHolder.svelte';
    import Footer from './components/Footer.svelte';
    import Header from './components/Header.svelte';
    import Nav from './components/Nav.svelte';
    import Tailwindcss from './Tailwindcss.svelte';

    let currentPage = 'study';
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
        {
            question:
                'Non, nulla error dolores a voluptatum placeat amet laborum ullam earum mollitia iusto repellat modi, sequi perspiciatis magnam inventore sapiente nostrum eos saepe necessitatibus aperiam. Ab exercitationem molestias laboriosam molestiae dolorum asperiores.',
            answer:
                'Sequi, quia eum. Maxime voluptatibus architecto perferendis atque veritatis quasi optio asperiores aperiam, quaerat dolore. Voluptates!',
        },
        {
            question:
                'Temporibus, omnis expedita. Sint odit sed quibusdam sit porro reprehenderit quam cupiditate ad. Quas ut odit quaerat reprehenderit! Iste vero voluptatem assumenda nisi ullam, mollitia saepe rem facere cum at quis incidunt?',
            answer:
                'Error cum aliquam odio deleniti quam, et voluptatem veniam minus ipsum ipsa eaque repellat itaque quas.',
        },
    ];
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
        <div>Create New Cards Page</div>
    {/if}
</main>
<Footer />
