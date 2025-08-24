<script>
  let open = $state(false);
  import { getContext } from "svelte";

  let { title = 'Task Title', taskId } = $props();

  $effect(() => {
    getContext('taskManager').toggle(taskId, open)
  })
</script>

<button type="button" onclick={() => open = !open} class="bg-indigo-600 text-pink-100 px-3 py-1 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex items-center gap-2">
  <span>{title}</span>
</button>