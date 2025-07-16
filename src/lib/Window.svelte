<script>
  let win;
  let offsetX = $state(0);
  let offsetY = $state(0);
  let lastMouseX = $state(0);
  let lastMouseY = $state(0);

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
    win.style.left = `${lastMouseX - offsetX}px`;
    win.style.top = `${lastMouseY - offsetY}px`;
  }
</script>

<svelte:document {ondragover} />

<div 
  bind:this={win} 
  class="window backdrop-blur-sm" 
  draggable="true" 
  ondragstart={ondragstart} 
  ondrag={ondrag} 
  ondragend={ondragend}
  role="dialog" 
  tabindex="0"
  >
  <div class="window-header">
    <div class="window-title">Window Title</div>
    <div class="window-controls">
      <button class="minimize-button bg-yellow-500 w-3 h-3 rounded-full" aria-label="Minimize"></button>
      <button class="maximize-button bg-green-500 w-3 h-3 rounded-full" aria-label="Maximize"></button>
      <button class="close-button bg-red-500 w-3 h-3 rounded-full" aria-label="Close"></button>
    </div>
  </div>
  <div class="window-content">
    <!-- Content goes here -->
  </div>
</div>

<style>
  .window {
    position: absolute;
    width: 640px;
    height: 320px;
    top: 10%;
    left: 30%;
    border-radius: 16px;
    border: solid 1px;
  }
  .window-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .25rem .5rem;
    font-weight: 600;
  }
  .window-controls {
    display: flex;
    gap: .25rem;
    align-items: center;
  }
  #drag-image {
    position: absolute;
    top: -9999px;
    pointer-events: none;
  }
</style>