<script>
  import { createEventDispatcher } from 'svelte';
  
  export let currentPage;
  const dispatch = createEventDispatcher();

  function navigate(page) {
    dispatch('pageChange', page);
  }
</script>

<nav class="navbar">
  <div class="nav-content">
    <a href="#" class="logo" on:click={() => navigate('dashboard')}>📋 TaskFlow</a>
    <ul class="nav-links">
      <li><a href="#" class:active={currentPage === 'dashboard'} on:click={() => navigate('dashboard')}>Dashboard</a></li>
      <li><a href="#" class:active={currentPage === 'tasks'} on:click={() => navigate('tasks')}>Tasks</a></li>
      <li><a href="#" class:active={currentPage === 'projects'} on:click={() => navigate('projects')}>Projects</a></li>
      <li><a href="#" class:active={currentPage === 'analytics'} on:click={() => navigate('analytics')}>Analytics</a></li>
    </ul>
  </div>
</nav>

<style>
  .navbar {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    padding: 1rem 2rem;
    box-shadow: 0 2px 20px rgba(0,0,0,0.1);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
  }

  .nav-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-size: 1.8rem;
    font-weight: bold;
    color: #ff6b35;
    text-decoration: none;
  }

  .nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
  }

  .nav-links a {
    color: #333;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
    padding: 0.5rem 1rem;
    border-radius: 8px;
  }

  .nav-links a:hover {
    color: #ff6b35;
    background: rgba(255, 107, 53, 0.1);
  }

  .nav-links a.active {
    color: #ff6b35;
    background: rgba(255, 107, 53, 0.1);
  }

  @media (max-width: 768px) {
    .nav-links {
      display: none;
    }
  }
</style> 