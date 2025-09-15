<script>
  import Task from "./Task.svelte";
  import { getContext } from "svelte";

  let tasks = getContext("tasks");
  let time = $state('')

  setInterval(() => {
    time = new Intl.DateTimeFormat('es-CL', {
  hour: 'numeric', minute: 'numeric', hour12: false
}).format(new Date()) 
  }, 100)
</script>

<div
  class="taskbar-container flex justify-between items-center bg-violet-950 p-2 fixed bottom-0 left-0 right-0 w-full z-50
"
>
  <div class="taskbar-items flex gap-2">
    <!-- Taskbar items can be added here -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 200 200"
      width="32"
      height="32"
      class="coolshapes star-3"
      ><g clip-path="url(#cs_clip_1_star-3)"
        ><mask
          id="cs_mask_1_star-3"
          style="mask-type:alpha"
          width="200"
          height="200"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
          ><path
            fill="#fff"
            d="M58.579 0L100 31.485 141.421 0l7.027 51.552L200 58.58 168.515 100 200 141.421l-51.552 7.027L141.421 200 100 168.515 58.579 200l-7.027-51.552L0 141.421 31.485 100 0 58.579l51.552-7.027L58.58 0z"
          ></path></mask
        ><g mask="url(#cs_mask_1_star-3)"
          ><path fill="#fff" d="M200 0H0v200h200V0z"></path><path
            fill="#FFF500"
            fill-opacity="0.44"
            d="M200 0H0v200h200V0z"
          ></path><g filter="url(#filter0_f_748_4229)"
            ><ellipse cx="106" cy="22.5" fill="#fff" rx="88" ry="49.5"
            ></ellipse><ellipse cx="64.5" cy="155" fill="#fff" rx="64.5" ry="45"
            ></ellipse><path fill="#fff" d="M218 126H100v120h118V126z"
            ></path></g
          ></g
        ></g
      ><defs
        ><filter
          id="filter0_f_748_4229"
          width="378"
          height="433"
          x="-80"
          y="-107"
          color-interpolation-filters="sRGB"
          filterUnits="userSpaceOnUse"
          ><feFlood flood-opacity="0" result="BackgroundImageFix"
          ></feFlood><feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend><feGaussianBlur
            result="effect1_foregroundBlur_748_4229"
            stdDeviation="40"
          ></feGaussianBlur></filter
        ><clipPath id="cs_clip_1_star-3"
          ><path fill="#fff" d="M0 0H200V200H0z"></path></clipPath
        ></defs
      ><g style="mix-blend-mode:overlay" mask="url(#cs_mask_1_star-3)"
        ><path
          fill="gray"
          stroke="transparent"
          d="M200 0H0v200h200V0z"
          filter="url(#cs_noise_1_star-3)"
        ></path></g
      ><defs
        ><filter
          id="cs_noise_1_star-3"
          width="100%"
          height="100%"
          x="0%"
          y="0%"
          filterUnits="objectBoundingBox"
          ><feTurbulence
            baseFrequency="0.6"
            numOctaves="5"
            result="out1"
            seed="4"
          ></feTurbulence><feComposite
            in="out1"
            in2="SourceGraphic"
            operator="in"
            result="out2"
          ></feComposite><feBlend
            in="SourceGraphic"
            in2="out2"
            mode="overlay"
            result="out3"
          ></feBlend></filter
        ></defs
      ></svg
    >

    {#each Object.entries(tasks) as [taskId, task], index}
      <Task title={task.title} {taskId}>
      </Task>
    {/each}
  </div>
  <span class="text-white">{time}</span>
</div>
