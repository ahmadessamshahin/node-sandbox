module.exports = {
  plugins: ['commitlint-plugin-jira-rules'],
  extends: ['jira'],
  rules: {
    'jira-commit-status-case': [2, 'always', 'uppercase'],
    'jira-task-id-empty': [2, 'always'],
    'jira-task-id-separator': [2, 'always'],
    'jira-task-id-project-key': [2, 'always', 'NSB'],
    'jira-task-id-max-length': [2, 'always', 8]
  }
};
