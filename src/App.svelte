<script>
  import Taskbar from "./lib/Taskbar.svelte";
  import Window from "./lib/Window.svelte";
  import { setContext } from "svelte";

  let tasks = $state({});

  $effect(() => {
    // TODO: add tasks
    tasks[window.crypto.randomUUID()] = {
      open: false,
      top: '10%',
      left: '30%',
      title: "My Custom Window",
      isFolder: true,
      children: [
        {
          title: '',
          description: '',
          repo: '',
          package: '',
          icon: ''
        }
      ],
      content:
        "<p>This is the content of the window.</p><p>You can add more elements here as needed.</p>",
    };
  });

  setContext("tasks", tasks);
  setContext("taskManager", {
    show(taskId) {
      // Logic to show the task window
      if (tasks[taskId]) {
        $effect(() => {
          tasks[taskId].open = true;
        });
      }
    },
    hide(taskId) {
      // Logic to hide the task window
      if (tasks[taskId]) {
        $effect(() => {
          tasks[taskId].open = false;
        });
      }
    },
    toggle(taskId, state) {
      // Logic to toggle the task window
      $effect(() => {
        if (tasks[taskId]) {
          tasks[taskId].open = state;
        }
      });
    },
    move(taskId, x, y) {
      // Logic to move the task window
      $effect(() => {
        if (tasks[taskId]) {
          tasks[taskId].left = `${x}`;
          tasks[taskId].top = `${y}`;
        }
      });
    }
  });
</script>

{#each Object.entries(tasks) as [taskId, task] (taskId)}
  {#if task.open}
    <Window title={task.title} {taskId} isFolder={task.isFolder}>
      {@html task.content}
    </Window>
  {/if}
{/each}

<Taskbar></Taskbar>
