<script>
    import Footer from './components/Footer.svelte';
    import Header from './components/Header.svelte';
    import Nav from './components/Nav.svelte';
    import Logo from './shared/Logo.svelte';
    import Tailwindcss from './Tailwindcss.svelte';

    let currentPage = 'study';
    const changeSelected = (e) => (currentPage = e.detail);
</script>

<style>
</style>

<Tailwindcss />
<Header />
<Nav {currentPage} on:changeSelected={changeSelected} />
<main>
    {#if currentPage === 'study'}
        <div>Study Cards Page</div>
    {:else if currentPage === 'create'}
        <div>Create New Cards Page</div>
    {/if}
</main>
<Footer />
