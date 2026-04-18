document.addEventListener('DOMContentLoaded', async () => {
  const toggle = document.getElementById('enableToggle');
  const statusText = document.getElementById('statusText');
  const countDisplay = document.getElementById('domainCount');
  const optionsLink = document.getElementById('optionsLink');
  const helpLink = document.getElementById('helpLink');

  // 1. Load current state
  const result = await chrome.storage.sync.get({
    isEnabled: true,
    blockedDomains: []
  });

  // Set UI state
  toggle.checked = result.isEnabled;
  updateStatusUI(result.isEnabled);
  countDisplay.textContent = `${result.blockedDomains.length} domains blocked`;

  // 2. Handle Toggle Change
  toggle.addEventListener('change', async () => {
    const newState = toggle.checked;
    
    // Save state
    await chrome.storage.sync.set({ isEnabled: newState });
    
    // Update rules immediately
    if (newState) {
      await refreshRules(result.blockedDomains);
    } else {
      // Remove all dynamic rules to disable blocking
      const existingRules = await chrome.declarativeNetRequest.getDynamicRules();
      if (existingRules.length > 0) {
        await chrome.declarativeNetRequest.updateDynamicRules({
          removeRuleIds: existingRules.map(r => r.id)
        });
      }
    }
    
    updateStatusUI(newState);
  });

  // 3. Open Options Page
  optionsLink.addEventListener('click', (e) => {
    e.preventDefault();
    chrome.runtime.openOptionsPage();
  });

  // 4. Help Link (optional)
  helpLink.addEventListener('click', (e) => {
    e.preventDefault();
    window.open('https://proton.me/support', '_blank'); // Or your own help URL
  });

  // Helper to update UI text
  function updateStatusUI(enabled) {
    statusText.textContent = enabled ? "Enabled" : "Disabled";
    statusText.style.color = enabled ? "#2196F3" : "#999";
  }

  // Helper to refresh rules (reused logic from background.js)
  async function refreshRules(domains) {
    const newRules = domains.map((domain, index) => ({
      id: 1000 + index,
      priority: 1,
      action: { type: "block" },
      condition: {
        urlFilter: `||${domain.trim()}^`,
        resourceTypes: ["main_frame", "sub_frame", "xmlhttprequest", "script", "image", "stylesheet"]
      }
    }));

    const existingRules = await chrome.declarativeNetRequest.getDynamicRules();
    const existingIds = existingRules.map(rule => rule.id);

    if (existingIds.length > 0) {
      await chrome.declarativeNetRequest.updateDynamicRules({
        removeRuleIds: existingIds
      });
    }

    if (newRules.length > 0) {
      await chrome.declarativeNetRequest.updateDynamicRules({
        addRules: newRules
      });
    }
  }
});