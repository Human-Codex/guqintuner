const bottomSheet = document.querySelector('.bottom-sheet');
const sheetMask = document.querySelector('.sheet-mask');
const openSheetButtons = document.querySelectorAll('.open-sheet');
const closeSheetButton = document.querySelector('.close-sheet');
const closeApplyButton = document.querySelector('.close-and-apply');
const sheetTabs = document.querySelectorAll('.sheet-tab');
const sheetPanels = document.querySelectorAll('.sheet-panel');
const modeButtons = document.querySelectorAll('.mode-item');
const modeName = document.querySelector('.tuning-summary .mode-name');
const foldables = document.querySelectorAll('.foldable');

let pendingMode = modeName ? modeName.textContent.trim() : '';

function getButtonMode(button) {
  return button.dataset.mode || button.textContent.trim();
}

function syncModeHighlight(currentMode) {
  if (!currentMode) return;
  modeButtons.forEach((button) => {
    const belongsToModePanel = button.closest('.sheet-panel')?.id === 'modes';
    const buttonMode = getButtonMode(button);
    button.classList.toggle('active', belongsToModePanel && buttonMode === currentMode);
    if (!belongsToModePanel) {
      button.classList.remove('active');
    }
  });
}

function openSheet() {
  if (!bottomSheet || !sheetMask) return;
  bottomSheet.hidden = false;
  sheetMask.hidden = false;
  requestAnimationFrame(() => {
    bottomSheet.classList.add('visible');
    sheetMask.classList.add('visible');
  });
}

function closeSheet(applySelection = false) {
  if (!bottomSheet || !sheetMask) return;
  bottomSheet.classList.remove('visible');
  sheetMask.classList.remove('visible');
  const handleTransitionEnd = () => {
    bottomSheet.hidden = true;
    sheetMask.hidden = true;
    bottomSheet.removeEventListener('transitionend', handleTransitionEnd);
    clearTimeout(fallbackTimeout);
    if (applySelection && modeName) {
      modeName.textContent = pendingMode;
      syncModeHighlight(pendingMode);
    } else if (modeName) {
      pendingMode = modeName.textContent.trim();
      syncModeHighlight(pendingMode);
    }
  };
  const fallbackTimeout = setTimeout(handleTransitionEnd, 400);
  bottomSheet.addEventListener('transitionend', handleTransitionEnd);
}

openSheetButtons.forEach((btn) => btn.addEventListener('click', openSheet));
sheetMask?.addEventListener('click', () => closeSheet(false));
closeSheetButton?.addEventListener('click', () => closeSheet(false));
closeApplyButton?.addEventListener('click', () => closeSheet(true));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && bottomSheet && !bottomSheet.hidden) {
    closeSheet(false);
  }
});

sheetTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const targetId = tab.dataset.target;
    if (!targetId) return;
    sheetTabs.forEach((t) => t.classList.toggle('active', t === tab));
    sheetPanels.forEach((panel) => {
      const isActive = panel.id === targetId;
      panel.hidden = !isActive;
      panel.classList.toggle('active', isActive);
    });
  });
});

modeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const panel = button.closest('.sheet-panel');
    const isModePanel = panel?.id === 'modes';
    if (isModePanel) {
      modeButtons.forEach((b) => b.classList.toggle('active', b === button));
      pendingMode = getButtonMode(button);
    } else if (panel) {
      pendingMode = getButtonMode(button);
      modeButtons.forEach((b) => b.classList.remove('active'));
      closeSheet(true);
    }
  });
});

foldables.forEach((section) => {
  const toggle = section.querySelector('.fold-toggle');
  const content = section.querySelector('.fold-content');
  if (!toggle || !content) return;
  toggle.addEventListener('click', () => {
    const willOpen = content.hasAttribute('hidden');
    if (willOpen) {
      content.removeAttribute('hidden');
      section.classList.add('expanded');
    } else {
      content.setAttribute('hidden', '');
      section.classList.remove('expanded');
    }
  });
});

syncModeHighlight(pendingMode);

const app = {
  openSheet,
  closeSheet,
  syncModeHighlight,
  selectMode(mode) {
    if (!mode || !modeName) return;
    pendingMode = mode;
    modeName.textContent = mode;
    syncModeHighlight(mode);
  },
};

if (typeof window !== 'undefined') {
  window.app = app;
}
