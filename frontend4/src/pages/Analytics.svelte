<script>
  export let tasks;
  
  let timeRange = 'month';
  let chartData = {
    productivity: [85, 78, 92, 88, 95, 87, 90, 93, 89, 91, 86, 94],
    tasksCompleted: [12, 15, 18, 14, 20, 16, 19, 22, 17, 21, 15, 23],
    teamPerformance: [
      { name: 'John Doe', tasks: 45, efficiency: 92 },
      { name: 'Jane Smith', tasks: 38, efficiency: 88 },
      { name: 'Mike Johnson', tasks: 52, efficiency: 95 },
      { name: 'Sarah Wilson', tasks: 41, efficiency: 89 }
    ]
  };

  $: totalTasks = tasks.length;
  $: completedTasks = tasks.filter(t => t.status === 'done').length;
  $: inProgressTasks = tasks.filter(t => t.status === 'in-progress').length;
  $: productivity = Math.round((completedTasks / totalTasks) * 100) || 0;
  $: avgTaskDuration = 2.3;
  $: teamEfficiency = 91;
</script>

<div class="analytics-page">
  <div class="page-header">
    <h1>Performance Analytics</h1>
    <p>Track team performance and project metrics</p>
  </div>

  <!-- Key Metrics -->
  <div class="metrics-grid">
    <div class="metric-card">
      <div class="metric-icon">📊</div>
      <div class="metric-value">{productivity}%</div>
      <div class="metric-label">Productivity Rate</div>
      <div class="metric-trend positive">+5.2% vs last month</div>
    </div>
    <div class="metric-card">
      <div class="metric-icon">✅</div>
      <div class="metric-value">{completedTasks}</div>
      <div class="metric-label">Tasks Completed</div>
      <div class="metric-trend positive">+12% vs last month</div>
    </div>
    <div class="metric-card">
      <div class="metric-icon">⏱️</div>
      <div class="metric-value">{avgTaskDuration}d</div>
      <div class="metric-label">Avg Task Duration</div>
      <div class="metric-trend negative">+0.3d vs last month</div>
    </div>
    <div class="metric-card">
      <div class="metric-icon">👥</div>
      <div class="metric-value">{teamEfficiency}%</div>
      <div class="metric-label">Team Efficiency</div>
      <div class="metric-trend positive">+3.1% vs last month</div>
    </div>
  </div>

  <!-- Charts Section -->
  <div class="charts-section">
    <div class="chart-card">
      <h3>Productivity Trends</h3>
      <div class="chart-container">
        <canvas id="productivityChart" width="400" height="200"></canvas>
      </div>
    </div>
    <div class="chart-card">
      <h3>Task Completion Rate</h3>
      <div class="chart-container">
        <canvas id="tasksChart" width="400" height="200"></canvas>
      </div>
    </div>
  </div>

  <!-- Team Performance -->
  <div class="team-performance">
    <h2>Team Performance</h2>
    <div class="team-grid">
      {#each chartData.teamPerformance as member}
        <div class="member-card">
          <div class="member-avatar">{member.name.charAt(0)}</div>
          <div class="member-info">
            <h4>{member.name}</h4>
            <div class="member-stats">
              <span>Tasks: {member.tasks}</span>
              <span>Efficiency: {member.efficiency}%</span>
            </div>
            <div class="efficiency-bar">
              <div class="efficiency-fill" style="width: {member.efficiency}%"></div>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <!-- Detailed Analytics -->
  <div class="detailed-analytics">
    <div class="analytics-card">
      <h3>Task Status Distribution</h3>
      <div class="status-chart">
        <div class="status-item">
          <span class="status-label">Completed</span>
          <div class="status-bar">
            <div class="status-fill completed" style="width: {(completedTasks/totalTasks)*100}%"></div>
          </div>
          <span class="status-value">{completedTasks}</span>
        </div>
        <div class="status-item">
          <span class="status-label">In Progress</span>
          <div class="status-bar">
            <div class="status-fill in-progress" style="width: {(inProgressTasks/totalTasks)*100}%"></div>
          </div>
          <span class="status-value">{inProgressTasks}</span>
        </div>
        <div class="status-item">
          <span class="status-label">Pending</span>
          <div class="status-bar">
            <div class="status-fill pending" style="width: {((totalTasks-completedTasks-inProgressTasks)/totalTasks)*100}%"></div>
          </div>
          <span class="status-value">{totalTasks-completedTasks-inProgressTasks}</span>
        </div>
      </div>
    </div>

    <div class="analytics-card">
      <h3>Performance Insights</h3>
      <div class="insights-list">
        <div class="insight-item positive">
          <span class="insight-icon">📈</span>
          <div class="insight-content">
            <h4>Productivity Increased</h4>
            <p>Team productivity has improved by 5.2% this month</p>
          </div>
        </div>
        <div class="insight-item warning">
          <span class="insight-icon">⚠️</span>
          <div class="insight-content">
            <h4>Task Duration Alert</h4>
            <p>Average task duration increased by 0.3 days</p>
          </div>
        </div>
        <div class="insight-item positive">
          <span class="insight-icon">🎯</span>
          <div class="insight-content">
            <h4>High Completion Rate</h4>
            <p>Task completion rate is above target at 87%</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .analytics-page {
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

  .metrics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .metric-card {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 15px;
    padding: 2rem;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  }

  .metric-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .metric-value {
    font-size: 2.5rem;
    font-weight: bold;
    color: #ff6b35;
    margin-bottom: 0.5rem;
  }

  .metric-label {
    color: #666;
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .metric-trend {
    font-size: 0.9rem;
    font-weight: 500;
  }

  .metric-trend.positive {
    color: #28a745;
  }

  .metric-trend.negative {
    color: #dc3545;
  }

  .charts-section {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .chart-card {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    padding: 2rem;
  }

  .chart-card h3 {
    text-align: center;
    margin-bottom: 2rem;
    color: #333;
  }

  .chart-container {
    height: 200px;
    background: #f8f9fa;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
  }

  .team-performance {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    padding: 3rem;
    margin-bottom: 3rem;
  }

  .team-performance h2 {
    text-align: center;
    margin-bottom: 2rem;
    color: #333;
  }

  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .member-card {
    background: #f8f9fa;
    border-radius: 15px;
    padding: 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    border-left: 4px solid #ff6b35;
  }

  .member-avatar {
    width: 60px;
    height: 60px;
    background: #ff6b35;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .member-info {
    flex: 1;
  }

  .member-info h4 {
    margin-bottom: 0.5rem;
    color: #333;
  }

  .member-stats {
    display: flex;
    gap: 1rem;
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 1rem;
  }

  .efficiency-bar {
    background: #e9ecef;
    border-radius: 10px;
    height: 8px;
    overflow: hidden;
  }

  .efficiency-fill {
    background: #ff6b35;
    height: 100%;
    border-radius: 10px;
    transition: width 0.3s ease;
  }

  .detailed-analytics {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 2rem;
  }

  .analytics-card {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    padding: 2rem;
  }

  .analytics-card h3 {
    margin-bottom: 2rem;
    color: #333;
  }

  .status-chart {
    display: grid;
    gap: 1rem;
  }

  .status-item {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .status-label {
    min-width: 100px;
    font-weight: 500;
    color: #333;
  }

  .status-bar {
    flex: 1;
    background: #e9ecef;
    border-radius: 10px;
    height: 12px;
    overflow: hidden;
  }

  .status-fill {
    height: 100%;
    border-radius: 10px;
    transition: width 0.3s ease;
  }

  .status-fill.completed {
    background: #28a745;
  }

  .status-fill.in-progress {
    background: #17a2b8;
  }

  .status-fill.pending {
    background: #ffc107;
  }

  .status-value {
    min-width: 40px;
    text-align: right;
    font-weight: bold;
    color: #333;
  }

  .insights-list {
    display: grid;
    gap: 1rem;
  }

  .insight-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1rem;
    border-radius: 10px;
    border-left: 4px solid;
  }

  .insight-item.positive {
    background: #d4edda;
    border-left-color: #28a745;
  }

  .insight-item.warning {
    background: #fff3cd;
    border-left-color: #ffc107;
  }

  .insight-icon {
    font-size: 1.5rem;
  }

  .insight-content h4 {
    margin-bottom: 0.5rem;
    color: #333;
  }

  .insight-content p {
    color: #666;
    font-size: 0.9rem;
    line-height: 1.4;
  }

  @media (max-width: 768px) {
    .metrics-grid {
      grid-template-columns: 1fr;
    }

    .charts-section {
      grid-template-columns: 1fr;
    }

    .team-grid {
      grid-template-columns: 1fr;
    }

    .detailed-analytics {
      grid-template-columns: 1fr;
    }
  }
</style> 