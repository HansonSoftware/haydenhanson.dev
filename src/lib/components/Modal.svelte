<script lang="ts">
  import { X } from 'lucide-svelte';

  export let showModal: Boolean;
  let dialog: HTMLDialogElement;
  $: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
  bind:this={dialog}
  on:close={() => (showModal = false)}
  on:click|self={() => dialog.close()}
  class="place-self-center mx-4 sm:mx-auto bg-card text-card-foreground rounded-3xl"
>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div on:click|stopPropagation class="mx-4 flex flex-col gap-4">
    <div>
      <slot name="header" />
    </div>
    <slot />
    <div class="flex justify-end">
      <hr />
      <!-- svelte-ignore a11y-autofocus -->
      <button autofocus class="text-destructive" on:click={() => dialog.close()}
        ><X /></button
      >
    </div>
  </div>
</dialog>

<style>
  dialog {
    max-width: 32em;
    border-radius: 0.2em;
    border: none;
    padding: 0;
  }
  dialog::backdrop {
    background: rgba(0, 0, 0, 0.3);
  }
  dialog > div {
    padding: 1em;
  }
  dialog[open] {
    animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  @keyframes zoom {
    from {
      transform: scale(0.95);
    }
    to {
      transform: scale(1);
    }
  }
  dialog[open]::backdrop {
    animation: fade 0.2s ease-out;
  }
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  button {
    display: block;
  }
</style>
