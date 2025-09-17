const _tasks = {}
_tasks[window.crypto.randomUUID()] = {
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

export const tasks = $state(_tasks)