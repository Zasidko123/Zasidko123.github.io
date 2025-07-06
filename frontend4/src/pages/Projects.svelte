<script>
  import { onMount } from 'svelte';
  
  let projects = [
    {
      id: 1,
      name: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration',
      status: 'active',
      progress: 65,
      budget: 50000,
      spent: 32500,
      startDate: '2024-01-01',
      endDate: '2024-06-30',
      team: ['John Doe', 'Jane Smith', 'Mike Johnson'],
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      priority: 'high',
      client: 'TechCorp Inc.',
      milestones: [
        { name: 'Design Phase', completed: true, dueDate: '2024-01-15' },
        { name: 'Frontend Development', completed: true, dueDate: '2024-03-01' },
        { name: 'Backend Development', completed: false, dueDate: '2024-04-15' },
        { name: 'Testing & Deployment', completed: false, dueDate: '2024-06-15' }
      ]
    },
    {
      id: 2,
      name: 'Mobile Banking App',
      description: 'Cross-platform mobile banking application with biometric authentication',
      status: 'planning',
      progress: 25,
      budget: 75000,
      spent: 18750,
      startDate: '2024-02-01',
      endDate: '2024-09-30',
      team: ['Sarah Wilson', 'Alex Brown', 'David Lee'],
      technologies: ['React Native', 'Firebase', 'AWS', 'Biometric API'],
      priority: 'medium',
      client: 'BankSecure Ltd.',
      milestones: [
        { name: 'Requirements Analysis', completed: true, dueDate: '2024-02-15' },
        { name: 'UI/UX Design', completed: false, dueDate: '2024-03-30' },
        { name: 'Development Phase', completed: false, dueDate: '2024-07-15' },
        { name: 'Security Testing', completed: false, dueDate: '2024-09-15' }
      ]
    },
    {
      id: 3,
      name: 'AI-Powered Analytics Dashboard',
      description: 'Real-time analytics platform with machine learning insights',
      status: 'completed',
      progress: 100,
      budget: 100000,
      spent: 95000,
      startDate: '2023-09-01',
      endDate: '2024-01-31',
      team: ['Emily Chen', 'Robert Davis', 'Lisa Wang'],
      technologies: ['Vue.js', 'Python', 'TensorFlow', 'PostgreSQL'],
      priority: 'high',
      client: 'DataInsight Corp.',
      milestones: [
        { name: 'Data Architecture', completed: true, dueDate: '2023-10-15' },
        { name: 'ML Model Development', completed: true, dueDate: '2023-12-01' },
        { name: 'Frontend Integration', completed: true, dueDate: '2024-01-15' },
        { name: 'Deployment & Training', completed: true, dueDate: '2024-01-31' }
      ]
    }
  ];

  let newProject = {
    name: '',
    description: '',
    status: 'planning',
    budget: 0,
    startDate: '',
    endDate: '',
    team: [],
    technologies: [],
    priority: 'medium',
    client: ''
  };

  let selectedProject = null;
  let showAddForm = false;
  let filterStatus = 'all';
  let searchTerm = '';

  $: filteredProjects = projects.filter(project => {
    const matchesStatus = filterStatus === 'all' || project.status === filterStatus;
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  function addProject() {
    if (newProject.name.trim()) {
      const project = {
        ...newProject,
        id: projects.length + 1,
        progress: 0,
        spent: 0,
        milestones: []
      };
      projects = [...projects, project];
      newProject = {
        name: '', description: '', status: 'planning', budget: 0,
        startDate: '', endDate: '', team: [], technologies: [], priority: 'medium', client: ''
      };
      showAddForm = false;
    }
  }

  function updateProjectProgress(projectId, newProgress) {
    projects = projects.map(p => 
      p.id === projectId ? { ...p, progress: newProgress } : p
    );
  }

  function deleteProject(projectId) {
    if (confirm('Are you sure you want to delete this project?')) {
      projects = projects.filter(p => p.id !== projectId);
    }
  }

  function selectProject(project) {
    selectedProject = project;
  }

  function addTeamMember(projectId, member) {
    projects = projects.map(p => 
      p.id === projectId ? { ...p, team: [...p.team, member] } : p
    );
  }

  function addTechnology(projectId, tech) {
    projects = projects.map(p => 
      p.id === projectId ? { ...p, technologies: [...p.technologies, tech] } : p
    );
  }

  function addMilestone(projectId, milestone) {
    projects = projects.map(p => 
      p.id === projectId ? { ...p, milestones: [...p.milestones, milestone] } : p
    );
  }

  onMount(() => {
    console.log('Projects page loaded');
  });
</script>

<div class="projects-page">
  <div class="page-header">
    <h1>Project Management</h1>
    <p>Track and manage all your projects in one place</p>
  </div>

  <!-- Project Stats -->
  <div class="stats-section">
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon">📊</div>
        <div class="stat-value">{projects.length}</div>
        <div class="stat-label">Total Projects</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">🚀</div>
        <div class="stat-value">{projects.filter(p => p.status === 'active').length}</div>
        <div class="stat-label">Active Projects</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">✅</div>
        <div class="stat-value">{projects.filter(p => p.status === 'completed').length}</div>
        <div class="stat-label">Completed</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">💰</div>
        <div class="stat-value">${projects.reduce((sum, p) => sum + p.budget, 0).toLocaleString()}</div>
        <div class="stat-label">Total Budget</div>
      </div>
    </div>
  </div>

  <!-- Controls -->
  <div class="controls-section">
    <div class="search-filters">
      <div class="search-box">
        <input 
          type="text" 
          bind:value={searchTerm} 
          placeholder="Search projects..." 
          class="search-input"
        >
        🔍
      </div>
      
      <div class="filter-buttons">
        <button 
          class="filter-btn {filterStatus === 'all' ? 'active' : ''}" 
          on:click={() => filterStatus = 'all'}
        >
          All
        </button>
        <button 
          class="filter-btn {filterStatus === 'planning' ? 'active' : ''}" 
          on:click={() => filterStatus = 'planning'}
        >
          Planning
        </button>
        <button 
          class="filter-btn {filterStatus === 'active' ? 'active' : ''}" 
          on:click={() => filterStatus = 'active'}
        >
          Active
        </button>
        <button 
          class="filter-btn {filterStatus === 'completed' ? 'active' : ''}" 
          on:click={() => filterStatus = 'completed'}
        >
          Completed
        </button>
      </div>
    </div>
    
    <button class="add-project-btn" on:click={() => showAddForm = !showAddForm}>
      {showAddForm ? 'Cancel' : '+ Add Project'}
    </button>
  </div>

  <!-- Add Project Form -->
  {#if showAddForm}
    <div class="add-project-section">
      <h2>Add New Project</h2>
      <form on:submit|preventDefault={addProject} class="project-form">
        <div class="form-row">
          <div class="form-group">
            <label for="project-name">Project Name *</label>
            <input 
              type="text" 
              id="project-name" 
              bind:value={newProject.name} 
              placeholder="Enter project name" 
              required
            >
          </div>
          <div class="form-group">
            <label for="project-client">Client</label>
            <input 
              type="text" 
              id="project-client" 
              bind:value={newProject.client} 
              placeholder="Enter client name"
            >
          </div>
        </div>
        
        <div class="form-group">
          <label for="project-description">Description</label>
          <textarea 
            id="project-description" 
            bind:value={newProject.description} 
            rows="3" 
            placeholder="Enter project description"
          ></textarea>
        </div>
        
        <div class="form-row">
          <div class="form-group">
            <label for="project-status">Status</label>
            <select id="project-status" bind:value={newProject.status}>
              <option value="planning">Planning</option>
              <option value="active">Active</option>
              <option value="completed">Completed</option>
              <option value="on-hold">On Hold</option>
            </select>
          </div>
          <div class="form-group">
            <label for="project-priority">Priority</label>
            <select id="project-priority" bind:value={newProject.priority}>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
        
        <div class="form-row">
          <div class="form-group">
            <label for="project-budget">Budget ($)</label>
            <input type="number" id="project-budget" bind:value={newProject.budget} min="0">
          </div>
          <div class="form-group">
            <label for="project-start-date">Start Date</label>
            <input type="date" id="project-start-date" bind:value={newProject.startDate}>
          </div>
          <div class="form-group">
            <label for="project-end-date">End Date</label>
            <input type="date" id="project-end-date" bind:value={newProject.endDate}>
          </div>
        </div>
        
        <button type="submit" class="submit-btn">Create Project</button>
      </form>
    </div>
  {/if}

  <!-- Projects Grid -->
  <div class="projects-grid">
    {#each filteredProjects as project (project.id)}
      <div class="project-card" on:click={() => selectProject(project)}>
        <div class="project-header">
          <div class="project-title-section">
            <h3 class="project-title">{project.name}</h3>
            <span class="project-status status-{project.status}">{project.status}</span>
          </div>
          <div class="project-priority priority-{project.priority}">{project.priority}</div>
        </div>
        
        <p class="project-description">{project.description}</p>
        
        <div class="project-progress">
          <div class="progress-info">
            <span>Progress: {project.progress}%</span>
            <span>Budget: ${project.budget.toLocaleString()}</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: {project.progress}%"></div>
          </div>
        </div>
        
        <div class="project-meta">
          <div class="meta-item">
            <span class="meta-label">Client:</span>
            <span class="meta-value">{project.client}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Team:</span>
            <span class="meta-value">{project.team.length} members</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Duration:</span>
            <span class="meta-value">{project.startDate} - {project.endDate}</span>
          </div>
        </div>
        
        <div class="project-technologies">
          {#each project.technologies.slice(0, 3) as tech}
            <span class="tech-tag">{tech}</span>
          {/each}
          {#if project.technologies.length > 3}
            <span class="tech-tag">+{project.technologies.length - 3} more</span>
          {/if}
        </div>
        
        <div class="project-actions">
          <button class="action-btn edit" on:click|stopPropagation={() => alert(`Editing ${project.name}`)}>✏️</button>
          <button class="action-btn delete" on:click|stopPropagation={() => deleteProject(project.id)}>🗑️</button>
        </div>
      </div>
    {/each}
  </div>

  <!-- Project Details Modal -->
  {#if selectedProject}
    <div class="modal-overlay" on:click={() => selectedProject = null}>
      <div class="modal-content" on:click|stopPropagation>
        <div class="modal-header">
          <h2>{selectedProject.name}</h2>
          <button class="close-btn" on:click={() => selectedProject = null}>×</button>
        </div>
        
        <div class="modal-body">
          <div class="project-details">
            <div class="detail-section">
              <h3>Project Information</h3>
              <p><strong>Description:</strong> {selectedProject.description}</p>
              <p><strong>Client:</strong> {selectedProject.client}</p>
              <p><strong>Status:</strong> <span class="status-{selectedProject.status}">{selectedProject.status}</span></p>
              <p><strong>Priority:</strong> <span class="priority-{selectedProject.priority}">{selectedProject.priority}</span></p>
            </div>
            
            <div class="detail-section">
              <h3>Progress & Budget</h3>
              <div class="progress-details">
                <div class="progress-item">
                  <span>Progress: {selectedProject.progress}%</span>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    bind:value={selectedProject.progress}
                    on:input={() => updateProjectProgress(selectedProject.id, selectedProject.progress)}
                  >
                </div>
                <div class="budget-info">
                  <p><strong>Budget:</strong> ${selectedProject.budget.toLocaleString()}</p>
                  <p><strong>Spent:</strong> ${selectedProject.spent.toLocaleString()}</p>
                  <p><strong>Remaining:</strong> ${(selectedProject.budget - selectedProject.spent).toLocaleString()}</p>
                </div>
              </div>
            </div>
            
            <div class="detail-section">
              <h3>Team Members</h3>
              <div class="team-list">
                {#each selectedProject.team as member}
                  <span class="team-member">{member}</span>
                {/each}
              </div>
            </div>
            
            <div class="detail-section">
              <h3>Technologies</h3>
              <div class="tech-list">
                {#each selectedProject.technologies as tech}
                  <span class="tech-tag">{tech}</span>
                {/each}
              </div>
            </div>
            
            <div class="detail-section">
              <h3>Milestones</h3>
              <div class="milestones-list">
                {#each selectedProject.milestones as milestone}
                  <div class="milestone-item {milestone.completed ? 'completed' : ''}">
                    <span class="milestone-name">{milestone.name}</span>
                    <span class="milestone-date">{milestone.dueDate}</span>
                    <span class="milestone-status">{milestone.completed ? '✅' : '⏳'}</span>
                  </div>
                {/each}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  .projects-page {
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

  .stats-section {
    margin-bottom: 3rem;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
  }

  .stat-card {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 15px;
    padding: 2rem;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  }

  .stat-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .stat-value {
    font-size: 2rem;
    font-weight: bold;
    color: #ff6b35;
    margin-bottom: 0.5rem;
  }

  .stat-label {
    color: #666;
    font-size: 1rem;
  }

  .controls-section {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    padding: 2rem;
    margin-bottom: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .search-filters {
    display: flex;
    gap: 2rem;
    align-items: center;
    flex-wrap: wrap;
  }

  .search-box {
    display: flex;
    align-items: center;
    background: #f8f9fa;
    border-radius: 25px;
    padding: 0.8rem 1.5rem;
  }

  .search-input {
    border: none;
    background: none;
    outline: none;
    padding: 0.5rem;
    width: 250px;
    font-size: 1rem;
  }

  .filter-buttons {
    display: flex;
    gap: 0.5rem;
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

  .add-project-btn {
    background: #ff6b35;
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 25px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .add-project-btn:hover {
    background: #e55a2b;
    transform: translateY(-2px);
  }

  .add-project-section {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    padding: 3rem;
    margin-bottom: 3rem;
  }

  .add-project-section h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;
    color: #333;
  }

  .project-form {
    max-width: 800px;
    margin: 0 auto;
  }

  .form-row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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

  .submit-btn {
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

  .submit-btn:hover {
    background: #e55a2b;
    transform: translateY(-2px);
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 2rem;
  }

  .project-card {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    padding: 2rem;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    cursor: pointer;
    border-left: 4px solid #ff6b35;
  }

  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
  }

  .project-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
  }

  .project-title-section {
    flex: 1;
  }

  .project-title {
    font-size: 1.3rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 0.5rem;
  }

  .project-status {
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
  }

  .status-planning {
    background: #fff3cd;
    color: #856404;
  }

  .status-active {
    background: #d1ecf1;
    color: #0c5460;
  }

  .status-completed {
    background: #d4edda;
    color: #155724;
  }

  .status-on-hold {
    background: #f8d7da;
    color: #721c24;
  }

  .project-priority {
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

  .project-description {
    color: #666;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }

  .project-progress {
    margin-bottom: 1.5rem;
  }

  .progress-info {
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 0.5rem;
  }

  .progress-bar {
    background: #e9ecef;
    border-radius: 10px;
    height: 8px;
    overflow: hidden;
  }

  .progress-fill {
    background: #ff6b35;
    height: 100%;
    border-radius: 10px;
    transition: width 0.3s ease;
  }

  .project-meta {
    margin-bottom: 1rem;
  }

  .meta-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.3rem;
    font-size: 0.9rem;
  }

  .meta-label {
    color: #666;
    font-weight: 500;
  }

  .meta-value {
    color: #333;
  }

  .project-technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .tech-tag {
    background: #f8f9fa;
    color: #666;
    padding: 0.3rem 0.8rem;
    border-radius: 15px;
    font-size: 0.8rem;
    border: 1px solid #ddd;
  }

  .project-actions {
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

  .action-btn.delete {
    color: #dc3545;
  }

  /* Modal Styles */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 2rem;
  }

  .modal-content {
    background: white;
    border-radius: 20px;
    max-width: 800px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    border-bottom: 1px solid #eee;
  }

  .modal-header h2 {
    color: #333;
    margin: 0;
  }

  .close-btn {
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: #666;
  }

  .modal-body {
    padding: 2rem;
  }

  .detail-section {
    margin-bottom: 2rem;
  }

  .detail-section h3 {
    color: #333;
    margin-bottom: 1rem;
    border-bottom: 2px solid #ff6b35;
    padding-bottom: 0.5rem;
  }

  .progress-details {
    display: grid;
    gap: 1rem;
  }

  .progress-item {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .progress-item input[type="range"] {
    flex: 1;
  }

  .budget-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
  }

  .team-list,
  .tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .team-member {
    background: #ff6b35;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
  }

  .milestones-list {
    display: grid;
    gap: 0.5rem;
  }

  .milestone-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem;
    background: #f8f9fa;
    border-radius: 8px;
    border-left: 4px solid #ddd;
  }

  .milestone-item.completed {
    border-left-color: #28a745;
    background: #d4edda;
  }

  .milestone-name {
    font-weight: 500;
  }

  .milestone-date {
    color: #666;
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    .controls-section {
      flex-direction: column;
      align-items: stretch;
    }

    .search-filters {
      flex-direction: column;
      gap: 1rem;
    }

    .projects-grid {
      grid-template-columns: 1fr;
    }

    .form-row {
      grid-template-columns: 1fr;
    }

    .modal-content {
      margin: 1rem;
    }
  }
</style> 