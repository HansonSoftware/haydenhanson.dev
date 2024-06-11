<script lang="ts">
  export let toggleModal;
  export let i;
  export let jobTitle: String;
  export let company: String;
  export let datesWorked: String;
</script>

<button
  on:click={() => toggleModal(i)}
  class="px-10 py-2 max-w-3xl w-full bg-card text-card-foreground rounded-md border border-crust drop-shadow-lg"
>
  <h2 class="text-lg font-bold">{jobTitle}</h2>
  <h3 class="font-thin text-secondary">{company}</h3>
  <br />
  <p class="font-semibold">{datesWorked}</p>
</button>
