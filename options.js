document.addEventListener('DOMContentLoaded', async () => {
  const input = document.getElementById('domainInput');
  const saveBtn = document.getElementById('saveBtn');
  const statusDiv = document.getElementById('status');

  // Load existing domains
  const result = await chrome.storage.sync.get({ blockedDomains: [] });
  const domains = result.blockedDomains || [];
  
  // Populate textarea (join with newlines)
  input.value = domains.join('\n');

  saveBtn.addEventListener('click', async () => {
    const rawText = input.value;
    // Split by newline, trim whitespace, filter empty lines
    const newDomains = rawText.split('\n')
      .map(d => d.trim())
      .filter(d => d.length > 0);

    // Save to storage (this triggers background.js listener)
    await chrome.storage.sync.set({ blockedDomains: newDomains });
    
    statusDiv.textContent = "Saved! Rules updated.";
    setTimeout(() => statusDiv.textContent = "", 3000);
  });
});