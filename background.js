// background.js

// Function to generate a unique ID for rules
let nextId = 1000; // Start IDs high to avoid conflicts with future static rules

async function updateBlockingRules() {
  try {
    // 1. Get saved domains from storage
    const result = await chrome.storage.sync.get({
      blockedDomains: []
    });
    
    const domains = result.blockedDomains || [];

    // 2. Prepare the new rules array
    const newRules = domains.map((domain, index) => ({
      id: 1000 + index, // Unique ID based on index
      priority: 1,
      action: { type: "block" },
      condition: {
        urlFilter: `||${domain.trim()}^`,
        resourceTypes: ["main_frame", "sub_frame", "xmlhttprequest", "script", "image", "stylesheet"]
      }
    }));

    // 3. Remove all existing dynamic rules first
    const existingRules = await chrome.declarativeNetRequest.getDynamicRules();
    const existingIds = existingRules.map(rule => rule.id);
    
    if (existingIds.length > 0) {
      await chrome.declarativeNetRequest.updateDynamicRules({
        removeRuleIds: existingIds
      });
    }

    // 4. Add the new rules
    if (newRules.length > 0) {
      await chrome.declarativeNetRequest.updateDynamicRules({
        addRules: newRules
      });
    }

    console.log(`Updated blocking rules for ${domains.length} domains.`);
  } catch (error) {
    console.error("Error updating rules:", error);
  }
}

// Listen for changes in storage (triggered by options page)
// ... inside background.js

chrome.storage.onChanged.addListener(async (changes, namespace) => {
  if (namespace === 'sync') {
    // Check if we got the enabled flag or the domain list
    const isEnabled = await chrome.storage.sync.get('isEnabled').then(r => r.isEnabled !== false); // Default to true
    
    if (changes.blockedDomains || changes.isEnabled) {
      if (!isEnabled) {
        // If disabled, ensure all rules are removed
        const existingRules = await chrome.declarativeNetRequest.getDynamicRules();
        if (existingRules.length > 0) {
          await chrome.declarativeNetRequest.updateDynamicRules({
            removeRuleIds: existingRules.map(r => r.id)
          });
        }
      } else {
        // If enabled, refresh rules
        const result = await chrome.storage.sync.get({ blockedDomains: [] });
        const domains = result.blockedDomains || [];
        
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
    }
  }
});
// Initialize rules on startup
updateBlockingRules();