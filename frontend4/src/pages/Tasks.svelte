<script>
  import { createEventDispatcher } from 'svelte';
  
  export let tasks;
  const dispatch = createEventDispatcher();

  let newTask = {
    title: '',
    description: '',
    priority: 'medium',
    dueDate: '',
    assignee: ''
  };

  let filterStatus = 'all';
  let searchTerm = '';

  $: filteredTasks = tasks.filter(task => {
    const matchesStatus = filterStatus === 'all' || task.status === filterStatus;
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         task.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  function addTask() {
    if (newTask.title.trim()) {
      dispatch('addTask', { ...newTask, status: 'todo' });
      newTask = { title: '', description: '', priority: 'medium', dueDate: '', assignee: '' };
    }
  }

  function updateTaskStatus(taskId, newStatus) {
    dispatch('updateTask', { id: taskId, status: newStatus });
  }

  function deleteTask(taskId) {
    if (confirm('Are you sure you want to delete this task?')) {
      dispatch('deleteTask', taskId);
    }
  }

  function editTask(task) {
    // In a real app, this would open an edit modal
    alert(`Editing task: ${task.title}`);
  }
</script>

<div class="tasks-page">
  <div class="page-header">
    <h1>Task Management</h1>
    <p>Organize and track your tasks efficiently</p>
  </div>

  <!-- Add Task Form -->
  <div class="add-task-section">
    <h2>Add New Task</h2>
    <form on:submit|preventDefault={addTask} class="task-form">
      <div class="form-row">
        <div class="form-group">
          <label for="task-title">Task Title *</label>
          <input 
            type="text" 
            id="task-title" 
            bind:value={newTask.title} 
            placeholder="Enter task title" 
            required
          >
        </div>
        <div class="form-group">
          <label for="task-priority">Priority</label>
          <select id="task-priority" bind:value={newTask.priority}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
      </div>
      
      <div class="form-group">
        <label for="task-description">Description</label>
        <textarea 
          id="task-description" 
          bind:value={newTask.description} 
          rows="3" 
          placeholder="Enter task description"
        ></textarea>
      </div>
      
      <div class="form-row">
        <div class="form-group">
          <label for="task-due-date">Due Date</label>
          <input type="date" id="task-due-date" bind:value={newTask.dueDate}>
        </div>
        <div class="form-group">
          <label for="task-assignee">Assignee</label>
          <input 
            type="text" 
            id="task-assignee" 
            bind:value={newTask.assignee} 
            placeholder="Enter assignee name"
          >
        </div>
      </div>
      
      <button type="submit" class="add-task-btn">Add Task</button>
    </form>
  </div>

  <!-- Filters and Search -->
  <div class="filters-section">
    <div class="search-box">
      <input 
        type="text" 
        bind:value={searchTerm} 
        placeholder="Search tasks..." 
        class="search-input"
      >
      🔍
    </div>
    
    <div class="filter-buttons">
      <button 
        class="filter-btn {filterStatus === 'all' ? 'active' : ''}" 
        on:click={() => filterStatus = 'all'}
      >
        All ({tasks.length})
      </button>
      <button 
        class="filter-btn {filterStatus === 'todo' ? 'active' : ''}" 
        on:click={() => filterStatus = 'todo'}
      >
        To Do ({tasks.filter(t => t.status === 'todo').length})
      </button>
      <button 
        class="filter-btn {filterStatus === 'in-progress' ? 'active' : ''}" 
        on:click={() => filterStatus = 'in-progress'}
      >
        In Progress ({tasks.filter(t => t.status === 'in-progress').length})
      </button>
      <button 
        class="filter-btn {filterStatus === 'done' ? 'active' : ''}" 
        on:click={() => filterStatus = 'done'}
      >
        Done ({tasks.filter(t => t.status === 'done').length})
      </button>
    </div>
  </div>

  <!-- Task Lists -->
  <div class="task-lists">
    <div class="task-column status-todo">
      <div class="column-header">
        <h3>📋 To Do</h3>
        <span class="task-count">{filteredTasks.filter(t => t.status === 'todo').length}</span>
      </div>
      <div class="task-items">
        {#each filteredTasks.filter(t => t.status === 'todo') as task (task.id)}
          <div class="task-item">
            <div class="task-header">
              <h4 class="task-title">{task.title}</h4>
              <span class="task-priority priority-{task.priority}">{task.priority}</span>
            </div>
            <p class="task-description">{task.description}</p>
            <div class="task-meta">
              <span>Due: {task.dueDate || 'No due date'}</span>
              {#if task.assignee}
                <span>Assigned to: {task.assignee}</span>
              {/if}
            </div>
            <div class="task-actions">
              <button class="action-btn edit" on:click={() => editTask(task)}>✏️</button>
              <button class="action-btn complete" on:click={() => updateTaskStatus(task.id, 'in-progress')}>▶️</button>
              <button class="action-btn delete" on:click={() => deleteTask(task.id)}>🗑️</button>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <div class="task-column status-in-progress">
      <div class="column-header">
        <h3>⏳ In Progress</h3>
        <span class="task-count">{filteredTasks.filter(t => t.status === 'in-progress').length}</span>
      </div>
      <div class="task-items">
        {#each filteredTasks.filter(t => t.status === 'in-progress') as task (task.id)}
          <div class="task-item">
            <div class="task-header">
              <h4 class="task-title">{task.title}</h4>
              <span class="task-priority priority-{task.priority}">{task.priority}</span>
            </div>
            <p class="task-description">{task.description}</p>
            <div class="task-meta">
              <span>Due: {task.dueDate || 'No due date'}</span>
              {#if task.assignee}
                <span>Assigned to: {task.assignee}</span>
              {/if}
            </div>
            <div class="task-actions">
              <button class="action-btn edit" on:click={() => editTask(task)}>✏️</button>
              <button class="action-btn complete" on:click={() => updateTaskStatus(task.id, 'done')}>✅</button>
              <button class="action-btn delete" on:click={() => deleteTask(task.id)}>🗑️</button>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <div class="task-column status-done">
      <div class="column-header">
        <h3>✅ Done</h3>
        <span class="task-count">{filteredTasks.filter(t => t.status === 'done').length}</span>
      </div>
      <div class="task-items">
        {#each filteredTasks.filter(t => t.status === 'done') as task (task.id)}
          <div class="task-item">
            <div class="task-header">
              <h4 class="task-title">{task.title}</h4>
              <span class="task-priority priority-{task.priority}">{task.priority}</span>
            </div>
            <p class="task-description">{task.description}</p>
            <div class="task-meta">
              <span>Due: {task.dueDate || 'No due date'}</span>
              {#if task.assignee}
                <span>Assigned to: {task.assignee}</span>
              {/if}
            </div>
            <div class="task-actions">
              <button class="action-btn edit" on:click={() => editTask(task)}>✏️</button>
              <button class="action-btn delete" on:click={() => deleteTask(task.id)}>🗑️</button>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  .tasks-page {
    max-width: 1200px;
    margin: 0 auto;
  }

  .page-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .page-header h1 {
    font-size: 2.5rem;
    color: white;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  }

  .page-header p {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.1rem;
  }

  .add-task-section {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    padding: 3rem;
    margin-bottom: 3rem;
  }

  .add-task-section h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;
    color: #333;
  }

  .task-form {
    max-width: 800px;
    margin: 0 auto;
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  .form-group {
    margin-bottom: 1.5rem;
  }

  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: #333;
  }

  .form-group input,
  .form-group select,
  .form-group textarea {
    width: 100%;
    padding: 0.8rem;
    border: 2px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
  }

  .form-group input:focus,
  .form-group select:focus,
  .form-group textarea:focus {
    outline: none;
    border-color: #ff6b35;
  }

  .add-task-btn {
    background: #ff6b35;
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 100%;
  }

  .add-task-btn:hover {
    background: #e55a2b;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 107, 53, 0.3);
  }

  .filters-section {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    padding: 2rem;
    margin-bottom: 3rem;
  }

  .search-box {
    display: flex;
    align-items: center;
    background: #f8f9fa;
    border-radius: 25px;
    padding: 0.8rem 1.5rem;
    margin-bottom: 1.5rem;
  }

  .search-input {
    border: none;
    background: none;
    outline: none;
    padding: 0.5rem;
    width: 100%;
    font-size: 1rem;
  }

  .filter-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .filter-btn {
    background: #f8f9fa;
    border: 2px solid #ddd;
    padding: 0.8rem 1.5rem;
    border-radius: 25px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .filter-btn:hover {
    border-color: #ff6b35;
    color: #ff6b35;
  }

  .filter-btn.active {
    background: #ff6b35;
    border-color: #ff6b35;
    color: white;
  }

  .task-lists {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
  }

  .task-column {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    padding: 2rem;
    border-left: 4px solid #ff6b35;
  }

  .column-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  .column-header h3 {
    font-size: 1.3rem;
    color: #333;
  }

  .task-count {
    background: #ff6b35;
    color: white;
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: bold;
  }

  .task-items {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .task-item {
    background: #f8f9fa;
    border-radius: 15px;
    padding: 1.5rem;
    border-left: 4px solid #ff6b35;
    transition: all 0.3s ease;
  }

  .task-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
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
    flex-direction: column;
    gap: 0.3rem;
    font-size: 0.8rem;
    color: #999;
    margin-bottom: 1rem;
  }

  .task-actions {
    display: flex;
    gap: 0.5rem;
  }

  .action-btn {
    background: none;
    border: none;
    padding: 0.5rem;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-size: 1rem;
  }

  .action-btn:hover {
    background: rgba(255, 107, 53, 0.1);
  }

  .action-btn.edit {
    color: #ff6b35;
  }

  .action-btn.complete {
    color: #28a745;
  }

  .action-btn.delete {
    color: #dc3545;
  }

  @media (max-width: 768px) {
    .form-row {
      grid-template-columns: 1fr;
    }

    .task-lists {
      grid-template-columns: 1fr;
    }

    .filter-buttons {
      justify-content: center;
    }
  }
</style> 