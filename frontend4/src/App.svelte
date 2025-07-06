<script>
  import { onMount } from 'svelte';
  import Navbar from './components/Navbar.svelte';
  import Dashboard from './pages/Dashboard.svelte';
  import Tasks from './pages/Tasks.svelte';
  import Projects from './pages/Projects.svelte';
  import Analytics from './pages/Analytics.svelte';

  let currentPage = 'dashboard';
  let tasks = [
    { id: 1, title: 'Design Homepage', description: 'Create modern homepage design', priority: 'high', status: 'todo', dueDate: '2024-01-20' },
    { id: 2, title: 'Update Documentation', description: 'Update API documentation', priority: 'medium', status: 'todo', dueDate: '2024-01-22' },
    { id: 3, title: 'Implement Authentication', description: 'Set up user authentication', priority: 'high', status: 'in-progress', dueDate: '2024-01-18' },
    { id: 4, title: 'Database Optimization', description: 'Optimize database queries', priority: 'medium', status: 'in-progress', dueDate: '2024-01-25' },
    { id: 5, title: 'Setup Development Environment', description: 'Configure dev tools', priority: 'low', status: 'done', dueDate: '2024-01-15' },
    { id: 6, title: 'Code Review', description: 'Review pull requests', priority: 'medium', status: 'done', dueDate: '2024-01-14' }
  ];

  function setPage(page) {
    currentPage = page;
  }

  function addTask(newTask) {
    tasks = [...tasks, { ...newTask, id: tasks.length + 1 }];
  }

  function updateTask(id, updates) {
    tasks = tasks.map(task => task.id === id ? { ...task, ...updates } : task);
  }

  function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
  }

  onMount(() => {
    console.log('Svelte Task Manager loaded');
  });
</script>

<main>
  <Navbar {currentPage} on:pageChange={(e) => setPage(e.detail)} />
  
  <div class="main-content">
    {#if currentPage === 'dashboard'}
      <Dashboard {tasks} />
    {:else if currentPage === 'tasks'}
      <Tasks {tasks} on:addTask on:updateTask on:deleteTask />
    {:else if currentPage === 'projects'}
      <Projects />
    {:else if currentPage === 'analytics'}
      <Analytics {tasks} />
    {/if}
  </div>
</main>

<style>
  main {
    min-height: 100vh;
    background: linear-gradient(135deg, #ff6b35 0%, #f7931e 100%);
  }

  .main-content {
    margin-top: 80px;
    padding: 2rem;
  }
</style> 