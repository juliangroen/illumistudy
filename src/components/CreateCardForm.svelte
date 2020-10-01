<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    let maxLength = 400;
    $: newQuestion = '';
    $: newAnswer = '';
    $: questionTotal = `( ${newQuestion.trim().length} / ${maxLength} remaining)`;
    $: answerTotal = `( ${newAnswer.trim().length} / ${maxLength} remaining)`;
    $: newCard = {
        question: newQuestion.trim(),
        answer: newAnswer.trim(),
    };
    let flags = {
        question: false,
        answer: false,
    };
    const handleLength = (string, field) => {
        if (string.length > maxLength) {
            let newFlags = { ...flags };
            newFlags[field] = true;
            flags = newFlags;
        } else {
            let newFlags = { ...flags };
            newFlags[field] = false;
            flags = newFlags;
        }
    };
    const handleCreate = () => {
        for (const flag in flags) {
            if (flags[flag]) {
                return;
            }
        }
        let id = Math.random();
        let createdCard = { id, ...newCard };
        dispatch('handleNewCard', createdCard);
    };
</script>

<form class="flex flex-col justify-center items-center max-w-screen-md p-2 mx-auto">
    <legend class="border-b-4 border-teal-400 text-sm sm:text-base text-center w-3/4 sm:w-1/2 pb-2 mb-6">
        Add A New Study Card
    </legend>
    <label class="relative text-sm sm:text-base w-full mb-2" for="question">
        Question:
        <span class="absolute right-0 bottom-0 text-xs">{questionTotal}</span>
    </label>
    <p class:hidden={flags.question === false} class="text-red-400 text-xs sm:text-sm w-full mb-2">
        Questions can only be
        {maxLength}
        characters long at most.
    </p>
    <textarea
        class="border-2 border-gray-300 w-full p-2 mb-4"
        name="question"
        rows="4"
        bind:value={newQuestion}
        on:input={() => handleLength(newQuestion.trim(), 'question')} />
    <label class="relative text-sm sm:text-base w-full mb-2" for="answer">
        Answer:
        <span class="absolute right-0 bottom-0 text-xs">{answerTotal}</span>
    </label>
    <p class:hidden={flags.answer === false} class="text-red-400 text-xs sm:text-sm w-full mb-2">
        Answers can only be
        {maxLength}
        characters long at most.
    </p>
    <textarea
        class="border-2 border-gray-300 w-full p-2 mb-4"
        name="answer"
        rows="4"
        bind:value={newAnswer}
        on:input={() => handleLength(newAnswer.trim(), 'answer')} />
    <input
        class="bg-teal-400 border-4 border-teal-400 hover:border-teal-500 text-xs sm:text-base cursor-pointer p-2"
        type="button"
        value="Create Study Card"
        on:click={handleCreate} />
</form>
