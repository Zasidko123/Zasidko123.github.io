<script>
  export let tasks;

  $: totalTasks = tasks.length;
  $: inProgress = tasks.filter(t => t.status === 'in-progress').length;
  $: completed = tasks.filter(t => t.status === 'done').length;
  $: productivity = Math.round((completed / totalTasks) * 100) || 0;

  const projects = [
    { name: 'Website Redesign', progress: 75, color: '#28a745' },
    { name: 'Mobile App', progress: 45, color: '#17a2b8' },
    { name: 'Marketing Campaign', progress: 90, color: '#ffc107' }
  ];
</script>

<div class="dashboard">
  <div class="dashboard-header">
    <h1 class="dashboard-title">Task Management Dashboard</h1>
    <p class="dashboard-subtitle">Organize your work and boost productivity</p>
  </div>

  <!-- Stats Grid -->
  <div class="stats-grid">
    <div class="stat-card">
      <div class="stat-icon">📝</div>
      <div class="stat-value">{totalTasks}</div>
      <div class="stat-label">Total Tasks</div>
    </div>
    <div class="stat-card">
      <div class="stat-icon">⏳</div>
      <div class="stat-value">{inProgress}</div>
      <div class="stat-label">In Progress</div>
    </div>
    <div class="stat-card">
      <div class="stat-icon">✅</div>
      <div class="stat-value">{completed}</div>
      <div class="stat-label">Completed</div>
    </div>
    <div class="stat-card">
      <div class="stat-icon">🎯</div>
      <div class="stat-value">{productivity}%</div>
      <div class="stat-label">Productivity</div>
    </div>
  </div>

  <!-- Progress Section -->
  <div class="progress-section">
    <h2 class="section-title">Project Progress</h2>
    <div class="progress-grid">
      {#each projects as project}
        <div class="progress-card">
          <div class="progress-title">{project.name}</div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: {project.progress}%; background: {project.color};"></div>
          </div>
          <div class="progress-text">{project.progress}% Complete</div>
        </div>
      {/each}
    </div>
  </div>

  <!-- Recent Tasks -->
  <div class="recent-tasks">
    <h2 class="section-title">Recent Tasks</h2>
    <div class="tasks-grid">
      {#each tasks.slice(0, 4) as task}
        <div class="task-card">
          <div class="task-header">
            <h3 class="task-title">{task.title}</h3>
            <span class="task-priority priority-{task.priority}">{task.priority}</span>
          </div>
          <p class="task-description">{task.description}</p>
          <div class="task-meta">
            <span>Due: {task.dueDate}</span>
            <span class="task-status status-{task.status}">{task.status}</span>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .dashboard {
    max-width: 1200px;
    margin: 0 auto;
  }

  .dashboard-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .dashboard-title {
    font-size: 2.5rem;
    color: white;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  }

  .dashboard-subtitle {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.1rem;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .stat-card {
    background: white;
    border-radius: 15px;
    padding: 2rem;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    text-align: center;
    transition: all 0.3s ease;
  }

  .stat-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.3);
  }

  .stat-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .stat-value {
    font-size: 2.5rem;
    font-weight: bold;
    color: #ff6b35;
    margin-bottom: 0.5rem;
  }

  .stat-label {
    color: #666;
    font-size: 1.1rem;
  }

  .progress-section {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    padding: 3rem;
    margin-bottom: 3rem;
  }

  .section-title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;
    color: #333;
  }

  .progress-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .progress-card {
    background: #f8f9fa;
    border-radius: 15px;
    padding: 2rem;
    text-align: center;
    border-left: 4px solid #ff6b35;
  }

  .progress-title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #333;
  }

  .progress-bar {
    background: #e9ecef;
    border-radius: 10px;
    height: 20px;
    overflow: hidden;
    margin-bottom: 1rem;
  }

  .progress-fill {
    height: 100%;
    border-radius: 10px;
    transition: width 1s ease;
  }

  .progress-text {
    font-size: 1.1rem;
    font-weight: bold;
    color: #ff6b35;
  }

  .recent-tasks {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    padding: 3rem;
  }

  .tasks-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .task-card {
    background: #f8f9fa;
    border-radius: 15px;
    padding: 2rem;
    border-left: 4px solid #ff6b35;
  }

  .task-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
  }

  .task-title {
    font-weight: bold;
    color: #333;
    margin-bottom: 0.5rem;
  }

  .task-priority {
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
  }

  .priority-high {
    background: #f8d7da;
    color: #721c24;
  }

  .priority-medium {
    background: #fff3cd;
    color: #856404;
  }

  .priority-low {
    background: #d4edda;
    color: #155724;
  }

  .task-description {
    color: #666;
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 1rem;
  }

  .task-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.8rem;
    color: #999;
  }

  .task-status {
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
  }

  .status-todo {
    background: #fff3cd;
    color: #856404;
  }

  .status-in-progress {
    background: #d1ecf1;
    color: #0c5460;
  }

  .status-done {
    background: #d4edda;
    color: #155724;
  }

  @media (max-width: 768px) {
    .stats-grid {
      grid-template-columns: 1fr;
    }

    .progress-grid {
      grid-template-columns: 1fr;
    }

    .tasks-grid {
      grid-template-columns: 1fr;
    }
  }
</style> 