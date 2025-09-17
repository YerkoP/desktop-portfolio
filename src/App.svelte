<script>
  import Taskbar from "./lib/Taskbar.svelte";
  import Window from "./lib/Window.svelte";
  import { tasks } from './lib/tasks.svelte.js'
</script>

{#each Object.entries(tasks) as [taskId, task] (taskId)}
  {#if task.open}
    <Window title={task.title} {taskId} isFolder={task.isFolder}>
      {@html task.content}
    </Window>
  {/if}
{/each}

<Taskbar></Taskbar>
