<script>
  import { getContext } from "svelte";
  let open = $state(false);

  let { title = 'Task Title', taskId } = $props();

  $effect(() => {
    getContext('taskManager').toggle(taskId, open)
  })
</script>

<button type="button" onclick={() => open = !open} class="bg-indigo-600 text-pink-100 px-3 py-1 rounded hover:bg-indigo-700 flex items-center gap-2">
  <span>{title}</span>
</button>