<script lang="ts">
  export let toggleModal;
  export let i;
  export let jobTitle: string;
  export let company: string;
  export let datesWorked: string;
</script>

<button
  on:click={() => toggleModal(i)}
  class="px-8 py-2 w-76 lg:w-96 bg-card text-card-foreground hover:bg-popover transition-all ease-in-out duration-500 rounded-md border border-crust drop-shadow-lg"
>
  <h2 class="text-lg font-bold">{jobTitle}</h2>
  <h3 class="font-thin text-primary">{company}</h3>
  <br />
  <p class="font-semibold">{datesWorked}</p>
</button>
