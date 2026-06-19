async function updateBlockingRules(blockedSites) {
  const oldRules = await chrome.declarativeNetRequest.getDynamicRules();
  const oldRuleIds = oldRules.map(rule => rule.id);

  const newRules = [];
  let idCounter = 1;

  blockedSites.forEach((site) => {
    // Rule 1: matches www.x.com, sub.x.com, etc.
    newRules.push({
      id: idCounter++,
      priority: 1,
      action: {
        type: "redirect",
        redirect: { extensionPath: "/blocked.html" }
      },
      condition: {
        urlFilter: `*://*.${site}/*`,
        resourceTypes: ["main_frame"]
      }
    });

    // Rule 2: matches bare x.com (no subdomain)
    newRules.push({
      id: idCounter++,
      priority: 1,
      action: {
        type: "redirect",
        redirect: { extensionPath: "/blocked.html" }
      },
      condition: {
        urlFilter: `*://${site}/*`,
        resourceTypes: ["main_frame"]
      }
    });
  });

  await chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: oldRuleIds,
    addRules: newRules
  });
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "updateRules") {
    updateBlockingRules(request.sites)
      .then(() => sendResponse({ success: true }))
      .catch((err) => sendResponse({ success: false, error: err.message }));
    return true;
  }
});