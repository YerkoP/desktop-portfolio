<script>
  import { getContext } from "svelte";
  let win;
  let offsetX = $state(0);
  let offsetY = $state(0);
  let lastMouseX = $state(0);
  let lastMouseY = $state(0);
  let { children, title = 'Window Title', taskId, isFolder = false } = $props();

  let top = $state(getContext('tasks')[taskId].top || '10%');
  let left = $state(getContext('tasks')[taskId].left || '30%');


  $effect(() => {
    getContext('taskManager').move(taskId, left, top)
  })

  function ondrag(event) {
    event.preventDefault();
    // Handle drag events if needed
  }

  function ondragstart(event) {
    const rect = win.getBoundingClientRect();
    offsetX = event.clientX - rect.left;
    offsetY = event.clientY - rect.top;

    // Additional logic for drag start if needed
    const dragImage = win.cloneNode(true);
    dragImage.id = "drag-image";
    document.body.appendChild(dragImage);
    dragImage.style.width = `${rect.width}px`;
    dragImage.style.height = `${rect.height}px`;
    event.dataTransfer.setDragImage(dragImage, offsetX, offsetY);
  }

  function ondragover(event) {
    lastMouseX = event.clientX;
    lastMouseY = event.clientY;
  }

  function ondragend(event) {
    // Clean up the drag image after dragging ends
    const dragImage = document.getElementById("drag-image");
    if (dragImage) {
      document.body.removeChild(dragImage);
    }
    // Reposicionar el div original
    left = `${lastMouseX - offsetX}px`;
    top = `${lastMouseY - offsetY}px`;
  }
</script>

<svelte:document {ondragover} />

<div 
  bind:this={win} 
  style:top={top}
  style:left={left}
  class="window backdrop-blur-sm absolute w-2xl h-[320px] top-[10%] left-[30%] rounded-2xl border border-slate-500 bg-slate-500/50" 
  draggable="true" 
  ondragstart={ondragstart} 
  ondrag={ondrag} 
  ondragend={ondragend}
  role="dialog" 
  tabindex="0"
  >
  <div class="window-header flex justify-between items-center font-semibold py-1 px-2">
    <div class="window-title text-slate-200">{title}</div>
    <div class="window-controls flex gap-1 items-center">
      <button class="minimize-button bg-yellow-500 w-3 h-3 rounded-full" aria-label="Minimize"></button>
      <button class="maximize-button bg-green-500 w-3 h-3 rounded-full" aria-label="Maximize"></button>
      <button class="close-button bg-red-500 w-3 h-3 rounded-full" aria-label="Close"></button>
    </div>
  </div>
  <div class="window-content py-2 px-2 text-slate-200">
    {#if isFolder}
      <div class="bg-slate-600 p-4 rounded-xl w-full h-full">
        {@render children?.()}
      </div>
    {:else}
      {@render children?.()}
    {/if}
    
  </div>
</div>

<style>
  #drag-image {
    position: absolute;
    top: -9999px;
    pointer-events: none;
  }
  .window-content {
    height: calc(100% - 32px);
  }
</style>