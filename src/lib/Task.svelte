<script>
  import { tasks } from './tasks.svelte.js'

  let { title = 'Task Title', taskId } = $props();
</script>

<button type="button" onclick={() => tasks[taskId].open = !tasks[taskId].open} class="bg-indigo-600 text-pink-100 px-3 py-1 rounded hover:bg-indigo-700 flex items-center gap-2">
  <span>{title}</span>
</button>