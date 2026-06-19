const siteInput = document.getElementById('siteInput');
const addBtn = document.getElementById('addBtn');
const siteList = document.getElementById('siteList');

// Load saved sites when popup opens
chrome.storage.local.get(['blockedSites'], (result) => {
  const sites = result.blockedSites || [];
  renderSites(sites);
});

addBtn.addEventListener('click', () => {
  const url = siteInput.value.trim().toLowerCase();
  if (!url) return;

  chrome.storage.local.get(['blockedSites'], (result) => {
    const sites = result.blockedSites || [];
    if (!sites.includes(url)) {
      sites.push(url);
      chrome.storage.local.set({ blockedSites: sites }, () => {
        renderSites(sites);
        syncWithBackground(sites);
        siteInput.value = '';
      });
    }
  });
});

function renderSites(sites) {
  siteList.innerHTML = '';
  sites.forEach((site) => {
    const li = document.createElement('li');
    li.textContent = site;

    const delBtn = document.createElement('button');
    delBtn.textContent = '❌';
    delBtn.className = 'delete-btn';
    delBtn.onclick = () => removeSite(site);

    li.appendChild(delBtn);
    siteList.appendChild(li);
  });
}

function removeSite(siteToRemove) {
  chrome.storage.local.get(['blockedSites'], (result) => {
    let sites = result.blockedSites || [];
    sites = sites.filter(s => s !== siteToRemove);
    chrome.storage.local.set({ blockedSites: sites }, () => {
      renderSites(sites);
      syncWithBackground(sites);
    });
  });
}

function syncWithBackground(sites) {
  chrome.runtime.sendMessage({ action: "updateRules", sites: sites });
}