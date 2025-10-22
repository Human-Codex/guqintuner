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
const harmonicChips = document.querySelectorAll('.harmonic-chip');
const noteMain = document.querySelector('.note-main');
const noteSub = document.querySelector('.note-sub');
const frequencyValue = document.querySelector('.frequency');
const meterBar = document.querySelector('.meter-bar');
const needleMeter = document.querySelector('.needle-meter');

const tuningDefinitions = [
  {
    key: 'zheng',
    label: '正调（仲吕均 / 清角调）',
    strings: [
      { string: '一弦', note: 'C₂', frequency: 65.41 },
      { string: '二弦', note: 'D₂', frequency: 73.42 },
      { string: '三弦', note: 'F₂', frequency: 87.31 },
      { string: '四弦', note: 'G₂', frequency: 98.0 },
      { string: '五弦', note: 'A₂', frequency: 110.0 },
      { string: '六弦', note: 'c₃', frequency: 130.81 },
      { string: '七弦', note: 'd₃', frequency: 146.83 },
    ],
  },
  {
    key: 'ruibin',
    label: '蕤宾调（无射均 / 金羽调）',
    strings: [
      { string: '一弦', note: 'C₂', frequency: 65.41 },
      { string: '二弦', note: 'D₂', frequency: 73.42 },
      { string: '三弦', note: 'F₂', frequency: 87.31 },
      { string: '四弦', note: 'G₂', frequency: 98.0 },
      { string: '五弦', note: 'B♭₂', frequency: 116.54 },
      { string: '六弦', note: 'c₃', frequency: 130.81 },
      { string: '七弦', note: 'd₃', frequency: 146.83 },
    ],
  },
  {
    key: 'manjiao',
    label: '慢角调（林钟调 / 黄钟均）',
    strings: [
      { string: '一弦', note: 'C₂', frequency: 65.41 },
      { string: '二弦', note: 'D₂', frequency: 73.42 },
      { string: '三弦', note: 'E₂', frequency: 82.41 },
      { string: '四弦', note: 'G₂', frequency: 98.0 },
      { string: '五弦', note: 'A₂', frequency: 110.0 },
      { string: '六弦', note: 'c₃', frequency: 130.81 },
      { string: '七弦', note: 'd₃', frequency: 146.83 },
    ],
  },
  {
    key: 'qingshang',
    label: '清商调（夹钟均 / 小碧玉调）',
    strings: [
      { string: '一弦', note: 'C₂', frequency: 65.41 },
      { string: '二弦', note: 'E♭₂', frequency: 77.78 },
      { string: '三弦', note: 'F₂', frequency: 87.31 },
      { string: '四弦', note: 'G₂', frequency: 98.0 },
      { string: '五弦', note: 'B♭₂', frequency: 116.54 },
      { string: '六弦', note: 'c₃', frequency: 130.81 },
      { string: '七弦', note: 'e♭₃', frequency: 155.56 },
    ],
  },
  {
    key: 'taicu',
    label: '太簇调（夷则均 / 慢宫调）',
    strings: [
      { string: '一弦', note: 'B♭₁', frequency: 61.74 },
      { string: '二弦', note: 'D₂', frequency: 73.42 },
      { string: '三弦', note: 'E₂', frequency: 82.41 },
      { string: '四弦', note: 'G₂', frequency: 98.0 },
      { string: '五弦', note: 'A₂', frequency: 110.0 },
      { string: '六弦', note: 'B₂', frequency: 123.47 },
      { string: '七弦', note: 'd₃', frequency: 146.83 },
    ],
  },
  {
    key: 'manshang',
    label: '慢商调（慢二弦）',
    strings: [
      { string: '一弦', note: 'C₂', frequency: 65.41 },
      { string: '二弦', note: 'C₂', frequency: 65.41 },
      { string: '三弦', note: 'F₂', frequency: 87.31 },
      { string: '四弦', note: 'G₂', frequency: 98.0 },
      { string: '五弦', note: 'A₂', frequency: 110.0 },
      { string: '六弦', note: 'c₃', frequency: 130.81 },
      { string: '七弦', note: 'd₃', frequency: 146.83 },
    ],
  },
  {
    key: 'wushe',
    label: '无射调（紧五慢一 / 胡笳调）',
    strings: [
      { string: '一弦', note: 'B♭₁', frequency: 58.27 },
      { string: '二弦', note: 'D₂', frequency: 73.42 },
      { string: '三弦', note: 'F₂', frequency: 87.31 },
      { string: '四弦', note: 'G₂', frequency: 98.0 },
      { string: '五弦', note: 'B♭₂', frequency: 116.54 },
      { string: '六弦', note: 'c₃', frequency: 130.81 },
      { string: '七弦', note: 'd₃', frequency: 146.83 },
    ],
  },
  {
    key: 'qiliang',
    label: '凄凉调（楚商调）',
    strings: [
      { string: '一弦', note: 'C₂', frequency: 65.41 },
      { string: '二弦', note: 'E♭₂', frequency: 77.78 },
      { string: '三弦', note: 'F₂', frequency: 87.31 },
      { string: '四弦', note: 'G₂', frequency: 98.0 },
      { string: '五弦', note: 'B♭₂', frequency: 116.54 },
      { string: '六弦', note: 'c₃', frequency: 130.81 },
      { string: '七弦', note: 'd₃', frequency: 146.83 },
    ],
  },
  {
    key: 'ceshang',
    label: '侧商调（D调外调）',
    strings: [
      { string: '一弦', note: 'C₂', frequency: 65.41 },
      { string: '二弦', note: 'D₂', frequency: 73.42 },
      { string: '三弦', note: 'E₂', frequency: 82.41 },
      { string: '四弦', note: 'F♯₂', frequency: 92.5 },
      { string: '五弦', note: 'A₂', frequency: 110.0 },
      { string: '六弦', note: 'B₂', frequency: 123.47 },
      { string: '七弦', note: 'd₃', frequency: 146.83 },
    ],
  },
  {
    key: 'wumei',
    label: '无媒调（缺清角变体）',
    strings: [
      { string: '一弦', note: 'C₂', frequency: 65.41 },
      { string: '二弦', note: 'D₂', frequency: 73.42 },
      { string: '三弦', note: 'E₂', frequency: 82.41 },
      { string: '四弦', note: 'G₂', frequency: 98.0 },
      { string: '五弦', note: 'A₂', frequency: 110.0 },
      { string: '六弦', note: 'B₂', frequency: 123.47 },
      { string: '七弦', note: 'd₃', frequency: 146.83 },
    ],
  },
];

const tuningMap = new Map(tuningDefinitions.map((definition) => [definition.label, definition]));
const tuningKeyMap = new Map(tuningDefinitions.map((definition) => [definition.key, definition]));

let pendingMode = modeName ? modeName.textContent.trim() : tuningDefinitions[0]?.label || '';
let currentHarmonic = document.querySelector('.harmonic-chip.active')?.dataset.harmonic || '';

function applyModeFrequencies(modeLabel) {
  const definition = tuningMap.get(modeLabel);
  if (!definition) return;
  harmonicChips.forEach((chip, index) => {
    const stringInfo = definition.strings[index];
    if (!stringInfo) return;
    chip.dataset.string = stringInfo.string;
    chip.dataset.frequency = stringInfo.frequency.toFixed(2);
    if (stringInfo.note) {
      chip.dataset.note = stringInfo.note;
    } else {
      chip.removeAttribute('data-note');
    }
    chip.setAttribute(
      'aria-label',
      `${stringInfo.string}散音 ${stringInfo.frequency.toFixed(2)} 赫兹`,
    );
  });
  const activeChip = document.querySelector('.harmonic-chip.active');
  if (activeChip) {
    applyChipContext(activeChip);
  }
}

function applyChipContext(chip) {
  if (!chip) return;
  const stringName = chip.dataset.string || '';
  const harmonicLabel = chip.dataset.harmonic || chip.textContent.trim();
  const frequency = chip.dataset.frequency;
  if (noteMain && stringName) {
    noteMain.textContent = stringName;
  } else if (noteMain) {
    noteMain.textContent = harmonicLabel;
  }
  if (noteSub) {
    noteSub.textContent = chip.dataset.note ? `散音 · ${chip.dataset.note}` : '散音';
  }
  if (frequencyValue) {
    const parsed = Number.parseFloat(frequency);
    if (!Number.isNaN(parsed)) {
      frequencyValue.textContent = parsed.toFixed(1);
    } else if (typeof frequency === 'string' && frequency.trim()) {
      frequencyValue.textContent = frequency;
    }
  }
  currentHarmonic = harmonicLabel;
}

function getButtonMode(button) {
  const modeKey = button.dataset.modeKey;
  if (modeKey) {
    const byKey = tuningKeyMap.get(modeKey);
    if (byKey) {
      return byKey.label;
    }
  }
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
      applyModeFrequencies(pendingMode);
      syncModeHighlight(pendingMode);
    } else if (modeName) {
      pendingMode = modeName.textContent.trim();
      applyModeFrequencies(pendingMode);
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
applyModeFrequencies(pendingMode);

harmonicChips.forEach((chip) => {
  chip.addEventListener('click', () => {
    harmonicChips.forEach((btn) => btn.classList.toggle('active', btn === chip));
    applyChipContext(chip);
    setNeedlePosition(0);
  });
});

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function setNeedlePosition(cents = 0) {
  if (!meterBar) return;
  const normalized = (clamp(cents, -50, 50) + 50) / 100;
  const pointer = meterBar.querySelector('.meter-pointer');
  if (pointer) {
    pointer.style.setProperty('--target', normalized.toString());
  }
  meterBar.classList.add('active');
  window.clearTimeout(setNeedlePosition.resetTimer);
  setNeedlePosition.resetTimer = window.setTimeout(() => {
    meterBar.classList.remove('active');
  }, 1400);
  if (needleMeter) {
    const centsLabel = cents > 0 ? `+${cents}` : `${cents}`;
    needleMeter.setAttribute('aria-label', `当前音高偏差 ${centsLabel} 音分`);
  }
}

function updateTunerDisplay({
  note,
  harmonic,
  frequency,
  cents,
} = {}) {
  if (typeof harmonic === 'string') {
    let matchedChip = null;
    harmonicChips.forEach((chip) => {
      const chipValue = chip.dataset.harmonic || chip.textContent.trim();
      const isActive = chipValue === harmonic;
      chip.classList.toggle('active', isActive);
      if (isActive) {
        matchedChip = chip;
      }
    });
    if (matchedChip) {
      applyChipContext(matchedChip);
    } else {
      currentHarmonic = harmonic;
      if (noteSub) {
        noteSub.textContent = '散音';
      }
    }
  }
  if (typeof note === 'string' && noteMain) {
    noteMain.textContent = note;
  }
  if (typeof frequency === 'number' && frequencyValue) {
    frequencyValue.textContent = frequency.toFixed(1);
  } else if (typeof frequency === 'string' && frequencyValue && frequency.trim()) {
    frequencyValue.textContent = frequency;
  }
  if (typeof cents === 'number') {
    setNeedlePosition(Math.round(cents));
  }
}

const app = {
  openSheet,
  closeSheet,
  syncModeHighlight,
  tuningDefinitions,
  applyModeFrequencies,
  selectMode(mode) {
    if (!mode || !modeName) return;
    pendingMode = mode;
    modeName.textContent = mode;
    applyModeFrequencies(mode);
    syncModeHighlight(mode);
  },
  updateTuner: updateTunerDisplay,
  setHarmonic(harmonic) {
    if (!harmonic) return;
    updateTunerDisplay({ harmonic });
  },
  setNeedlePosition,
};

if (typeof window !== 'undefined') {
  window.app = app;
}
