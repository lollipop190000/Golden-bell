const ROLE_LABELS = {
  superadmin: '총괄 운영자',
  operator: '운영자',
  author: '출제자',
  player: '일반 회원',
  guest: '게스트'
};

const STATUS_LABELS = {
  draft: '초안',
  submitted: '검토 요청',
  approved: '승인',
  rejected: '반려'
};

const GAME_PHASE_LABELS = {
  idle: '대기 중입니다.',
  lobby: '로비 진행 중입니다.',
  waiting: '문제 대기 중입니다.',
  live: '문제 진행 중입니다.',
  countdown: '문제 시작 전 카운트다운입니다.',
  reveal: '정답 공개 중입니다.',
  closed: '제출 마감 상태입니다.',
  ended: '게임이 종료되었습니다.'
};

const CURRICULUM = {
  '1학년': {
    '1학기': {
      '수리물리': ['수리물리'],
      '물리학I': ['역학']
    },
    '2학기': {
      '물리학II': ['전자기']
    }
  },
  '2학년': {
    '1학기': {
      '물리학III': ['열역학', '파동', '전자기', '광학']
    },
    '2학기': {
      '물리학IV': ['상대론', '양자역학'],
      '고급물리학I': ['역학', '열통계'],
      '양자역학': ['양자역학']
    }
  },
  '3학년': {
    '1학기': {
      '고급물리학II': ['전자기'],
      '고체물리': ['고체물리']
    },
    '2학기': {
      '양자장론': ['양자장론'],
      '다체론': ['다체론'],
      '일반상대론': ['일반상대론']
    }
  },
  '+α': {
    '기타': {
      '창의사고력': ['창의사고력'],
      '???': ['???']
    }
  }
};

const CONFIG = {
  themeKey: 'gb-theme-v11',
  sidebarKey: 'gb-sidebar-v11',
  previewKey: 'gb-preview-v11',
  grades: Object.keys(CURRICULUM),
  gameStateDocId: 'main'
};

const els = {
  appShell: document.getElementById('app-shell'),
  homeLogo: document.getElementById('home-logo'),
  sidebar: document.getElementById('sidebar'),
  sidebarToggle: document.getElementById('sidebar-toggle'),
  themeToggle: document.getElementById('theme-toggle'),
  userSummary: document.getElementById('user-summary'),
  authForms: document.getElementById('auth-forms'),
  loginForm: document.getElementById('login-form'),
  registerForm: document.getElementById('register-form'),
  guestForm: document.getElementById('guest-form'),
  loginButton: document.getElementById('login-button'),
  registerButton: document.getElementById('register-button'),
  guestButton: document.getElementById('guest-button'),
  logoutButton: document.getElementById('logout-button'),
  navButtons: [...document.querySelectorAll('.nav-btn')],
  views: [...document.querySelectorAll('.view')],
  toastRegion: document.getElementById('toast-region'),
  metrics: document.getElementById('metrics'),
  recentProblems: document.getElementById('recent-problems'),
  recentUsers: document.getElementById('recent-users'),
  storyline: document.getElementById('storyline'),
  overviewExportPdf: document.getElementById('overview-export-pdf'),

  form: document.getElementById('problem-form'),
  problemGrade: document.getElementById('problem-grade'),
  problemSemester: document.getElementById('problem-semester'),
  problemDetail: document.getElementById('problem-detail'),
  problemTrack: document.getElementById('problem-track'),
  problemSolveTime: document.getElementById('problem-solve-time'),
  authorAnswerFields: document.getElementById('author-answer-fields'),
  answerHidden: document.getElementById('answer-hidden'),
  image1: document.getElementById('image1'),
  image2: document.getElementById('image2'),
  editorImages: document.getElementById('editor-images'),
  previewShell: document.getElementById('preview-shell'),
  compilePreview: document.getElementById('compile-preview'),
  downloadJpg: document.getElementById('download-jpg'),
  downloadPdf: document.getElementById('download-pdf'),
  authorSplitRange: document.getElementById('author-split-range'),
  authorEditorGrid: document.getElementById('author-editor-grid'),
  previewButtons: [...document.querySelectorAll('.preview-btn')],
  newProblem: document.getElementById('new-problem'),
  cloneProblem: document.getElementById('clone-problem'),
  editProblem: document.getElementById('edit-problem'),
  saveProblem: document.getElementById('save-problem'),
  saveSubmit: document.getElementById('save-submit'),
  approveProblem: document.getElementById('approve-problem'),
  saveChoiceDialog: document.getElementById('save-choice-dialog'),
  saveChoiceText: document.getElementById('save-choice-text'),
  saveChoiceNew: document.getElementById('save-choice-new'),
  saveChoiceOverwrite: document.getElementById('save-choice-overwrite'),
  saveChoiceCancel: document.getElementById('save-choice-cancel'),
  deleteProblem: document.getElementById('delete-problem'),
  authorGradeFilter: document.getElementById('author-grade-filter'),
  authorStatusFilter: document.getElementById('author-status-filter'),
  authorDifficultyFilter: document.getElementById('author-difficulty-filter'),
  authorAuthorFilter: document.getElementById('author-author-filter'),
  authorSearch: document.getElementById('author-search'),
  authorList: document.getElementById('author-list'),
  authorViewNote: document.getElementById('author-view-note'),
  authorListTitle: document.getElementById('author-list-title'),
  authorListNote: document.getElementById('author-list-note'),
  authorBrowserPanel: document.getElementById('author-browser-panel'),
  authorSplitPanel: document.getElementById('author-split-panel'),
  backToAuthorBrowser: document.getElementById('back-to-author-browser'),

  userList: document.getElementById('user-list'),
  reviewList: document.getElementById('review-list'),
  reviewDetail: document.getElementById('review-detail'),
  reviewShell: document.getElementById('review-shell'),
  reviewApprove: document.getElementById('review-approve'),
  reviewReject: document.getElementById('review-reject'),

  gameStatusBadge: document.getElementById('game-status-badge'),
  sessionMeta: document.getElementById('session-meta'),
  openLobby: document.getElementById('open-lobby'),
  startGame: document.getElementById('start-game'),
  endGame: document.getElementById('end-game'),
  teamNameInput: document.getElementById('team-name-input'),
  addTeam: document.getElementById('add-team'),
  teamList: document.getElementById('team-list'),
  rosterCount: document.getElementById('roster-count'),
  participantList: document.getElementById('participant-list'),
  cleanupInactive: document.getElementById('cleanup-inactive'),
  requestReady: document.getElementById('request-ready'),
  gameGradeFilter: document.getElementById('game-grade-filter'),
  gameDetailFilter: document.getElementById('game-detail-filter'),
  gameProblemSearch: document.getElementById('game-problem-search'),
  gameProblemList: document.getElementById('game-problem-list'),
  presenterShell: document.getElementById('presenter-shell'),
  roundTimer: document.getElementById('round-timer'),
  currentRoundLabel: document.getElementById('current-round-label'),
  roundResults: document.getElementById('round-results'),
  adminScoreboard: document.getElementById('admin-scoreboard'),
  openSelectedProblem: document.getElementById('open-selected-problem'),
  closeSubmission: document.getElementById('close-submission'),
  resetRoundSubmissions: document.getElementById('reset-round-submissions'),
  toggleAnswer: document.getElementById('toggle-answer'),
  fullscreenBtn: document.getElementById('fullscreen-btn'),
  jeopardyOpen: document.getElementById('jeopardy-open'),
  jeopardyOverlay: document.getElementById('jeopardy-overlay'),
  jeopardyPrev: document.getElementById('jeopardy-prev'),
  jeopardyNext: document.getElementById('jeopardy-next'),
  jeopardyTitle: document.getElementById('jeopardy-title'),
  jeopardyTimer: document.getElementById('jeopardy-timer'),
  jeopardyBack: document.getElementById('jeopardy-back'),
  jeopardyClose: document.getElementById('jeopardy-close'),
  jeopardyBody: document.getElementById('jeopardy-body'),

  playShell: document.getElementById('play-shell'),
  playerRoundTimer: document.getElementById('player-round-timer'),
  playerStatusBadge: document.getElementById('player-status-badge'),
  playerJoinPanel: document.getElementById('player-join-panel'),
  playerTeamPanel: document.getElementById('player-team-panel'),
  playerAnswerPanel: document.getElementById('player-answer-panel'),
  playerResultPanel: document.getElementById('player-result-panel'),
  readyRequestModal: document.getElementById('ready-request-modal'),
  readyRequestText: document.getElementById('ready-request-text'),
  readyRequestAccept: document.getElementById('ready-request-accept'),
  readyRequestWait: document.getElementById('ready-request-wait'),

  exportArea: document.getElementById('export-area'),
  importArea: document.getElementById('import-area'),
  importFile: document.getElementById('import-file'),
  exportJson: document.getElementById('export-json'),
  copyJson: document.getElementById('copy-json'),
  mergeImport: document.getElementById('merge-import'),
  replaceImport: document.getElementById('replace-import')
};

const state = {
  firebase: null,
  auth: null,
  db: null,
  currentUser: null,
  users: [],
  problems: [],
  gameState: defaultGameState(),
  participants: [],
  teams: [],
  submissions: [],
  selectedProblemId: '',
  loadedProblemId: '',
  authorMode: 'browser',
  selectedReviewProblemId: '',
  selectedGameProblemId: '',
  previewMode: localStorage.getItem(CONFIG.previewKey) || 'desktop',
  editingImages: [],
  previewDirty: true,
  unsubscribeFns: [],
  isReady: false,
  roundTimerHandle: null,
  jeopardyPageIndex: 0,
  jeopardyMode: 'board',
  presenceHandle: null,
  presenceId: sessionStorage.getItem('gb-presence-id') || uid('presence'),
  readyPromptSeenId: localStorage.getItem('gb-ready-prompt-seen') || '',
  answerDrafts: {},
  formEditMode: true
};
sessionStorage.setItem('gb-presence-id', state.presenceId);


function startRoundTicker() {
  if (state.roundTimerHandle) clearInterval(state.roundTimerHandle);
  state.roundTimerHandle = setInterval(async () => {
    updateRoundTimerOnly();
    if (isOperator() && state.gameState.phase === 'countdown' && state.gameState.roundStartsAt && Date.now() >= state.gameState.roundStartsAt) {
      try {
        const problem = currentLiveProblem();
        await setGameState({ phase: 'live', publicProblem: publicProblemPayload(problem, false), roundStartsAt: null, roundEndsAt: Date.now() + Number(problem?.solveTimeMinutes || 3) * 60000 });
      } catch (error) {
        console.error(error);
      }
    }
    if (isOperator() && state.gameState.phase === 'live' && state.gameState.roundEndsAt && Date.now() >= state.gameState.roundEndsAt && !state.gameState.submissionClosed) {
      try {
        await finishRoundAndClose();
      } catch (error) {
        console.error(error);
      }
    }
  }, 1000);
}


function jeopardyPages() {
  return [
    { grade: '1학년', semester: '1학기' },
    { grade: '1학년', semester: '2학기' },
    { grade: '2학년', semester: '1학기' },
    { grade: '2학년', semester: '2학기' },
    { grade: '3학년', semester: '1학기' },
    { grade: '3학년', semester: '2학기' }
  ];
}

function countdownNumber(forParticipant = false) {
  if (forParticipant && state.gameState.phase === 'countdown' && state.gameState.roundStartsAt) {
    const secs = Math.ceil((state.gameState.roundStartsAt - Date.now()) / 1000);
    if (secs >= 0 && secs <= 3) return secs;
    return null;
  }
  if (!state.gameState.roundEndsAt || state.gameState.phase !== 'live') return null;
  const secs = Math.ceil((state.gameState.roundEndsAt - Date.now()) / 1000);
  if (secs >= 0 && secs <= 3) return secs;
  return null;
}

function countdownOverlayMarkup(forParticipant = false) {
  const n = countdownNumber(forParticipant);
  return n === null ? '' : `<div class="countdown-overlay"><div class="countdown-number">${n}</div></div>`;
}


function applyCountdownOverlay(root, forParticipant = false) {
  if (!root) return;
  const n = countdownNumber(forParticipant);
  let overlay = root.querySelector('.countdown-overlay');
  if (n === null) {
    if (overlay) overlay.remove();
    return;
  }
  if (!overlay) {
    const host = root.querySelector('.play-problem-wrap, .present-problem-wrap, .jeopardy-problem-wrap') || root;
    overlay = document.createElement('div');
    overlay.className = 'countdown-overlay';
    overlay.innerHTML = '<div class="countdown-number"></div>';
    host.appendChild(overlay);
  }
  const num = overlay.querySelector('.countdown-number');
  if (num) num.textContent = String(n);
}

function isAnswerFormActive() {
  const form = document.getElementById('team-answer-form');
  return Boolean(form && document.activeElement && form.contains(document.activeElement));
}

function currentDraftKey() {
  const participant = currentParticipant();
  const problem = currentLiveProblem();
  if (!participant || !problem) return '';
  return `${participant.teamId || 'no-team'}::${problem.id}`;
}

function captureAnswerDraft() {
  const form = document.getElementById('team-answer-form');
  const key = currentDraftKey();
  if (!form || !key) return;
  const data = {};
  [...form.querySelectorAll('input[name^="slot-"]')].forEach((input) => { data[input.name] = input.value; });
  state.answerDrafts[key] = data;
}

function restoreAnswerDraft() {
  const form = document.getElementById('team-answer-form');
  const key = currentDraftKey();
  if (!form || !key || !state.answerDrafts[key]) return;
  [...form.querySelectorAll('input[name^="slot-"]')].forEach((input) => {
    if (Object.prototype.hasOwnProperty.call(state.answerDrafts[key], input.name)) input.value = state.answerDrafts[key][input.name];
  });
}

function updateRoundTimerOnly() {
  const applyText = (el, forParticipant = false) => {
    if (!el) return;
    if (forParticipant && state.gameState.phase === 'countdown' && state.gameState.roundStartsAt) {
      const diff = Math.max(0, state.gameState.roundStartsAt - Date.now());
      const totalSec = Math.floor(diff / 1000);
      const m = Math.floor(totalSec / 60);
      const s = totalSec % 60;
      el.textContent = `문제 시작 ${m}:${String(s).padStart(2, '0')}입니다.`;
      return;
    }
    if (!state.gameState.roundEndsAt || !['live', 'reveal', 'closed'].includes(state.gameState.phase)) {
      el.textContent = '남은 시간이 없습니다.';
      return;
    }
    const diff = Math.max(0, state.gameState.roundEndsAt - Date.now());
    const totalSec = Math.floor(diff / 1000);
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    el.textContent = `남은 시간 ${m}:${String(s).padStart(2, '0')}입니다.`;
  };
  applyText(els.roundTimer);
  applyText(els.playerRoundTimer, true);
  applyText(els.jeopardyTimer);
  applyCountdownOverlay(els.presenterShell, false);
  applyCountdownOverlay(els.playShell, true);
  if (els.jeopardyOverlay && !els.jeopardyOverlay.classList.contains('hidden') && state.jeopardyMode === 'problem') applyCountdownOverlay(els.jeopardyBody, false);
}

function splitExpectedAnswers(problem) {
  const count = Math.max(1, Number(problem.answerSlotCount || 1));
  const raw = normalizeDisplayText(problem.answer || '');
  let lines = raw.split(/\n+/).map((s) => s.trim()).filter(Boolean);
  if (count === 1 && lines.length === 0) lines = [raw.trim()];
  if (count === 1 && lines.length > 1) lines = [raw.trim()];
  const out = [];
  for (let i = 0; i < count; i += 1) out.push(lines[i] || '');
  return out;
}

function normalizeAnswerValue(value) {
  return String(value ?? '')
    .replace(/\$/g, '')
    .replace(/\\(|\\)|\\[|\\]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
}

function autoGradeSubmission(problem, answers) {
  const expected = splitExpectedAnswers(problem);
  const correctness = answers.map((ans, i) => {
    const expectedVariants = String(expected[i] || '').split('|').map((v) => normalizeAnswerValue(v)).filter(Boolean);
    const submitted = normalizeAnswerValue(ans);
    if (!expectedVariants.length) return false;
    return expectedVariants.includes(submitted);
  });
  const correctCount = correctness.filter(Boolean).length;
  const totalSlots = Math.max(1, answers.length || 1);
  const scoreAwarded = Math.round((Number(problem.score || 0) * correctCount) / totalSlots);
  return { correctness, scoreAwarded, expected };
}

function computeTeamTotals() {
  const totals = new Map(state.teams.map((team) => [team.id, 0]));
  state.submissions.forEach((submission) => {
    totals.set(submission.teamId, (totals.get(submission.teamId) || 0) + Number(submission.scoreAwarded || 0));
  });
  return state.teams.map((team) => ({ teamId: team.id, teamName: team.name, total: totals.get(team.id) || 0 })).sort((a, b) => b.total - a.total || a.teamName.localeCompare(b.teamName, 'ko'));
}

async function finishRoundAndClose() {
  await setGameState({ submissionClosed: true, answerVisible: false, phase: 'closed', roundEndsAt: null });
}

function defaultGameState() {
  return {
    id: CONFIG.gameStateDocId,
    phase: 'idle',
    sessionId: '',
    currentRoundId: '',
    currentProblemId: '',
    publicProblem: null,
    answerVisible: false,
    submissionClosed: false,
    rosterIds: [],
    roundStartsAt: null,
    roundEndsAt: null,
    updatedAt: nowISO()
  };
}

function setAuthButtonsReady(ready) {
  [els.loginButton, els.registerButton, els.guestButton].forEach((button) => {
    if (!button) return;
    button.disabled = !ready;
  });
}

function requireFirebaseReady() {
  const authMod = state.firebase?.authMod;
  const fsMod = state.firebase?.fsMod;
  if (!state.isReady || !authMod || !fsMod || !state.auth || !state.db) {
    throw new Error('Firebase 초기화가 아직 완료되지 않았습니다. 잠시 후 다시 시도해 주십시오.');
  }
  return { authMod, fsMod };
}


function visibleParticipants() {
  const cutoff = Date.now() - 25000;
  const selfId = participantDocId();
  return state.participants.filter((p) => {
    if (p.id === selfId) return true;
    if (p.isActive === false) return false;
    return !p.lastSeenAt || p.lastSeenAt >= cutoff;
  });
}

async function markParticipantPresence(active = true) {
  const participant = currentParticipant();
  if (!participant || !state.isReady) return;
  try {
    const { fsMod } = requireFirebaseReady();
    await fsMod.setDoc(fsMod.doc(state.db, 'gameParticipants', participant.id), {
      lastSeenAt: Date.now(),
      isActive: active,
      ready: active ? participant.ready : false,
      presenceId: state.presenceId,
      updatedAt: nowISO()
    }, { merge: true });
  } catch (error) {
    console.error(error);
  }
}

async function pingParticipantPresence() {
  await markParticipantPresence(true);
}

function startPresenceTicker() {
  if (state.presenceHandle) clearInterval(state.presenceHandle);
  state.presenceHandle = setInterval(() => {
    pingParticipantPresence();
  }, 10000);
}

async function tryLeaveOnPageExit() {
  const participant = currentParticipant();
  if (!participant || !state.db || !state.firebase?.fsMod) return;
  try {
    await state.firebase.fsMod.deleteDoc(state.firebase.fsMod.doc(state.db, 'gameParticipants', participant.id));
  } catch (error) {
    console.error(error);
  }
}

init().catch((error) => {
  console.error(error);
  state.isReady = false;
  setAuthButtonsReady(false);
  if (els.userSummary) {
    els.userSummary.textContent = '초기화에 실패했습니다.';
  }
  toast(error.message || '초기화 중 오류가 발생했습니다.', 'error');
});

async function init() {
  applyTheme();
  applySidebarState();
  fillGradeSelects();
  renderAuthorAnswerFields();
  fillSolveTimeOptions();
  bindEvents();
  setAuthButtonsReady(false);
  await setupFirebase();
  await ensureAuthReady();
  await syncCurrentUser();
  await initialLoad();
  subscribeAll();
  state.isReady = true;
  setAuthButtonsReady(true);
  refreshAll();
  startRoundTicker();
  startPresenceTicker();
}

function bindEvents() {
  els.homeLogo.addEventListener('click', () => switchView('overview-view'));
  els.sidebarToggle.addEventListener('click', toggleSidebar);
  els.themeToggle.addEventListener('change', onThemeToggle);
  els.navButtons.forEach((button) => button.addEventListener('click', () => { if (button.dataset.view === 'author-view') { state.authorMode = 'browser'; state.selectedProblemId = ''; state.loadedProblemId = ''; } switchView(button.dataset.view); }));

  els.loginForm.addEventListener('submit', onLogin);
  els.registerForm.addEventListener('submit', onRegister);
  els.guestForm.addEventListener('submit', onGuestRename);
  els.logoutButton.addEventListener('click', onLogout);

  els.problemGrade.addEventListener('change', () => { fillSemesterOptions(els.problemGrade.value, els.problemSemester); fillCourseOptions(els.problemGrade.value, els.problemSemester.value, els.problemDetail); fillTrackOptions(els.problemGrade.value, els.problemSemester.value, els.problemDetail.value, els.problemTrack); });
  els.problemSemester.addEventListener('change', () => { fillCourseOptions(els.problemGrade.value, els.problemSemester.value, els.problemDetail); fillTrackOptions(els.problemGrade.value, els.problemSemester.value, els.problemDetail.value, els.problemTrack); });
  els.problemDetail.addEventListener('change', () => { fillTrackOptions(els.problemGrade.value, els.problemSemester.value, els.problemDetail.value, els.problemTrack); });
  els.form.elements.answerSlotCount.addEventListener('input', renderAuthorAnswerFields);
  els.form.addEventListener('input', () => { state.previewDirty = true; });
  els.saveProblem.addEventListener('click', (event) => requestProblemSave(event, false));
  els.saveSubmit.addEventListener('click', (event) => requestProblemSave(event, true));
  els.compilePreview.addEventListener('click', renderEditorPreview);
  els.editProblem.addEventListener('click', enableProblemEditMode);
  els.approveProblem?.addEventListener('click', approveLoadedProblem);
  els.overviewExportPdf?.addEventListener('click', exportAllProblemsOrderedPdf);
  document.addEventListener('click', async (event) => {
    const jpgBtn = event.target && event.target.closest ? event.target.closest('#download-jpg') : null;
    const pdfBtn = event.target && event.target.closest ? event.target.closest('#download-pdf') : null;
    if (jpgBtn) {
      event.preventDefault();
      await exportCurrentPreview('jpg');
      return;
    }
    if (pdfBtn) {
      event.preventDefault();
      await exportCurrentPreview('pdf');
      return;
    }
  });
  els.newProblem.addEventListener('click', handleNewProblem);
  els.backToAuthorBrowser.addEventListener('click', () => { state.authorMode = 'browser'; renderAuthorView(); });
  els.cloneProblem.addEventListener('click', cloneCurrentProblem);
  els.deleteProblem.addEventListener('click', deleteCurrentProblem);
  els.image1.addEventListener('change', (event) => addImage(event, 0));
  els.image2.addEventListener('change', (event) => addImage(event, 1));
  els.previewButtons.forEach((button) => button.addEventListener('click', () => changePreviewMode(button.dataset.preview)));
  els.authorSplitRange.addEventListener('input', applyAuthorSplit);

  [els.authorGradeFilter, els.authorStatusFilter, els.authorDifficultyFilter, els.authorAuthorFilter, els.authorSearch].forEach((element) => element.addEventListener('input', renderAuthorList));
  els.reviewApprove.addEventListener('click', () => updateProblemStatus('approved'));
  els.reviewReject.addEventListener('click', () => updateProblemStatus('rejected'));

  els.gameGradeFilter.addEventListener('input', onGameFilterChange);
  els.gameDetailFilter.addEventListener('input', renderGameProblemList);
  els.gameProblemSearch.addEventListener('input', renderGameProblemList);
  els.openLobby.addEventListener('click', openLobby);
  els.startGame.addEventListener('click', startGame);
  els.endGame.addEventListener('click', endGame);
  els.addTeam.addEventListener('click', addTeam);
  els.openSelectedProblem.addEventListener('click', openSelectedProblemForGame);
  els.requestReady?.addEventListener('click', requestAllWaitingReady);
  els.cleanupInactive?.addEventListener('click', cleanupInactiveParticipants);
  els.closeSubmission.addEventListener('click', closeSubmissions);
  els.resetRoundSubmissions.addEventListener('click', resetRoundSubmissions);
  els.toggleAnswer.addEventListener('click', toggleAnswerVisible);
  els.fullscreenBtn.addEventListener('click', openFullscreen);
  els.jeopardyOpen.addEventListener('click', openJeopardyOverlay);
  els.jeopardyPrev.addEventListener('click', () => moveJeopardyPage(-1));
  els.jeopardyNext.addEventListener('click', () => moveJeopardyPage(1));
  els.jeopardyClose.addEventListener('click', closeJeopardyOverlay);
  els.jeopardyBack.addEventListener('click', () => { state.jeopardyMode = 'board'; renderJeopardyOverlay(); });

  els.exportJson.addEventListener('click', exportJson);
  els.copyJson.addEventListener('click', copyJson);
  els.importFile.addEventListener('change', onImportFile);
  els.mergeImport.addEventListener('click', () => importJson('merge'));
  els.replaceImport.addEventListener('click', () => importJson('replace'));
  els.readyRequestAccept?.addEventListener('click', () => respondReadyRequest(true));
  els.readyRequestWait?.addEventListener('click', () => respondReadyRequest(false));
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      markParticipantPresence(false);
    } else {
      pingParticipantPresence();
    }
  });
  window.addEventListener('pagehide', () => { markParticipantPresence(false); });
  window.addEventListener('beforeunload', () => { markParticipantPresence(false); });
}


async function setupFirebase() {
  if (!window.GOLDENBELL_FIREBASE?.enabled) {
    throw new Error('Firebase 설정이 필요합니다.');
  }
  const [appMod, authMod, fsMod] = await Promise.all([
    import('https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js'),
    import('https://www.gstatic.com/firebasejs/12.11.0/firebase-auth.js'),
    import('https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js')
  ]);
  const app = appMod.initializeApp(window.GOLDENBELL_FIREBASE.config);
  state.firebase = { appMod, authMod, fsMod };
  state.auth = authMod.getAuth(app);
  state.db = fsMod.getFirestore(app);
}

function ensureAuthReady() {
  if (!state.firebase?.authMod) return Promise.resolve();
  const { authMod } = state.firebase;
  return new Promise((resolve) => {
    const off = authMod.onAuthStateChanged(state.auth, () => {
      off();
      resolve();
    });
  });
}

async function syncCurrentUser() {
  const authUser = state.auth?.currentUser;
  if (!authUser) {
    state.currentUser = null;
    return;
  }
  if (authUser.isAnonymous) {
    const guestName = localStorage.getItem('gb-guest-name') || '게스트';
    state.currentUser = Object.freeze({
      id: authUser.uid,
      authUid: authUser.uid,
      displayName: guestName,
      email: '',
      role: 'guest',
      isApproved: true,
      isGuest: true
    });
    state.problems = [];
    return;
  }
  const fsMod = state.firebase?.fsMod;
  if (!fsMod) {
    state.currentUser = null;
    return;
  }
  const userSnap = await fsMod.getDoc(fsMod.doc(state.db, 'users', authUser.uid));
  if (userSnap.exists()) {
    const data = userSnap.data();
    state.currentUser = Object.freeze({
      id: userSnap.id,
      authUid: authUser.uid,
      email: data.email || authUser.email || '',
      displayName: data.displayName || authUser.displayName || '사용자',
      role: data.role || 'player',
      isApproved: Boolean(data.isApproved),
      isGuest: false
    });
    if (!(state.currentUser.isApproved && ['author', 'operator', 'superadmin'].includes(state.currentUser.role))) state.problems = [];
  } else {
    state.currentUser = Object.freeze({
      id: authUser.uid,
      authUid: authUser.uid,
      email: authUser.email || '',
      displayName: authUser.displayName || '사용자',
      role: 'player',
      isApproved: false,
      isGuest: false
    });
    state.problems = [];
  }
}

async function initialLoad() {
  const [users, problems, participants, teams, submissions, gameState] = await Promise.all([
    isOperator() ? safeGetCollection('users') : [],
    safeGetProblems(),
    safeGetCollection('gameParticipants'),
    safeGetCollection('gameTeams'),
    safeGetCollection('gameSubmissions'),
    safeGetGameState()
  ]);
  state.users = users.sort(byUpdatedDesc);
  state.problems = problems.sort(byUpdatedDesc);
  state.participants = participants.sort(byUpdatedDesc);
  state.teams = teams.sort((a, b) => (a.order || 0) - (b.order || 0));
  state.submissions = submissions.sort(byUpdatedDesc);
  state.gameState = gameState;

  if (!state.selectedReviewProblemId && reviewableProblems()[0]) state.selectedReviewProblemId = reviewableProblems()[0].id;
  if (!state.selectedGameProblemId && approvedProblems()[0]) state.selectedGameProblemId = approvedProblems()[0].id;

  applyAuthorSplit();
  updatePreviewButtons();
  renderEditorPreview();
}

function subscribeAll() {
  clearSubscriptions();
  const fsMod = state.firebase?.fsMod;
  if (!fsMod) return;
  const subscribe = (ref, onData) => {
    const off = fsMod.onSnapshot(ref, (snap) => {
      onData(snap);
    }, (error) => {
      console.error(error);
    });
    state.unsubscribeFns.push(off);
  };

  if (isOperator()) {
    subscribe(fsMod.collection(state.db, 'users'), (snap) => {
      state.users = snap.docs.map(mapDoc).sort(byUpdatedDesc);
      renderOverview();
      renderReview();
    });
  }

  const problemsRef = problemsQueryRef();
  if (problemsRef) subscribe(problemsRef, (snap) => {
    state.problems = snap.docs.map(mapDoc).sort(byUpdatedDesc);
      if (!state.selectedReviewProblemId && reviewableProblems()[0]) state.selectedReviewProblemId = reviewableProblems()[0].id;
    if (!state.selectedGameProblemId && approvedProblems()[0]) state.selectedGameProblemId = approvedProblems()[0].id;
    renderOverview();
    renderAuthorView();
    renderReview();
    renderGameAdmin();
    renderGameStage();
    renderPlayView();
  });
  subscribe(fsMod.collection(state.db, 'gameParticipants'), (snap) => {
    state.participants = snap.docs.map(mapDoc).sort(byUpdatedDesc);
    renderOverview();
    renderGameAdmin();
    if (!isAnswerFormActive()) renderPlayView();
  });
  subscribe(fsMod.collection(state.db, 'gameTeams'), (snap) => {
    state.teams = snap.docs.map(mapDoc).sort((a, b) => (a.order || 0) - (b.order || 0));
    renderGameAdmin();
    if (!isAnswerFormActive()) renderPlayView();
  });
  subscribe(fsMod.collection(state.db, 'gameSubmissions'), (snap) => {
    state.submissions = snap.docs.map(mapDoc).sort(byUpdatedDesc);
    renderPlayView();
    renderAdminScoreboard();
    renderRoundResults();
  });
  subscribe(fsMod.doc(state.db, 'gameState', CONFIG.gameStateDocId), (snap) => {
    state.gameState = snap.exists() ? { id: snap.id, ...snap.data() } : defaultGameState();
    renderGameAdmin();
    renderGameStage();
    renderPlayView();
    renderAdminScoreboard();
    renderRoundResults();
    updateRoundTimerOnly();
  });
}

function clearSubscriptions() {
  state.unsubscribeFns.forEach((off) => off());
  state.unsubscribeFns = [];
}

async function safeGetCollection(name) {
  const fsMod = state.firebase?.fsMod;
  if (!fsMod) return [];
  try {
    const snap = await fsMod.getDocs(fsMod.collection(state.db, name));
    return snap.docs.map(mapDoc);
  } catch (error) {
    console.error(error);
    return [];
  }
}


function problemsQueryRef() {
  const fsMod = state.firebase?.fsMod;
  if (!fsMod || !canBrowseProblemCatalog()) return null;
  return fsMod.collection(state.db, 'problems');
}

async function safeGetProblems() {
  const fsMod = state.firebase?.fsMod;
  if (!fsMod) return [];
  try {
    const ref = problemsQueryRef();
    if (!ref) return [];
    const snap = await fsMod.getDocs(ref);
    return snap.docs.map(mapDoc);
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function safeGetGameState() {
  const fsMod = state.firebase?.fsMod;
  if (!fsMod) return defaultGameState();
  try {
    const snap = await fsMod.getDoc(fsMod.doc(state.db, 'gameState', CONFIG.gameStateDocId));
    return snap.exists() ? { id: snap.id, ...snap.data() } : defaultGameState();
  } catch (error) {
    console.error(error);
    return defaultGameState();
  }
}

function mapDoc(doc) {
  return { id: doc.id, ...doc.data() };
}

function refreshAll() {
  renderUserSummary();
  renderOverview();
  renderAuthorList();
  renderReview();
  renderGameAdmin();
  renderGameStage();
  renderPlayView();
  renderAdminScoreboard();
  updateRoundTimerOnly();
  renderExport();
  applyPermissions();
  applyVisibleViews();
}

function renderUserSummary() {
  if (!state.isReady) {
    els.userSummary.innerHTML = '<strong>초기화 중입니다.</strong><br><small>잠시만 기다려 주십시오.</small>';
    return;
  }
  if (!state.currentUser) {
    els.userSummary.innerHTML = '<strong>로그인이 필요합니다.</strong><br><small>회원가입 또는 비회원 참가가 가능합니다.</small>';
    els.authForms.classList.remove('hidden');
    return;
  }
  els.userSummary.innerHTML = `
    <strong>${escapeHtml(state.currentUser.displayName || '이름이 없습니다.')}</strong><br>
    <small>${escapeHtml(state.currentUser.email || '비회원 참가입니다.')} · ${escapeHtml(ROLE_LABELS[state.currentUser.role] || '게스트')}</small><br>
    <small>${state.currentUser.isGuest ? '게스트로 참가 중입니다.' : (state.currentUser.isApproved ? '승인된 계정입니다.' : '승인 대기 중입니다.')}</small>
  `;
  els.authForms.classList.toggle('hidden', Boolean(state.currentUser));
}

function renderOverview() {
  if (els.overviewExportPdf) els.overviewExportPdf.classList.toggle('hidden', !isOperator());
  const readyCount = visibleParticipants().filter((p) => p.ready).length;
  const canBrowse = canBrowseProblemCatalog();
  const metrics = canBrowse ? [
    { label: '전체 문제', value: state.problems.length, detail: '문제은행 전체입니다.' },
    { label: '검토 요청', value: state.problems.filter((p) => p.status === 'submitted').length, detail: '운영자 확인이 필요합니다.' },
    { label: '승인 완료', value: approvedProblems().length, detail: '게임 송출이 가능합니다.' },
    { label: '준비 인원', value: readyCount, detail: '현재 로비 준비 완료 기준입니다.' }
  ] : [
    { label: '게임 상태', value: GAME_PHASE_LABELS[state.gameState.phase] || '대기 중입니다.', detail: '문제은행은 권한 있는 계정만 확인할 수 있습니다.' },
    { label: '준비 인원', value: readyCount, detail: '현재 로비 준비 완료 기준입니다.' }
  ];
  els.metrics.innerHTML = metrics.map((m) => `
    <div class="metric-card">
      <span>${escapeHtml(m.label)}</span>
      <strong>${escapeHtml(String(m.value))}</strong>
      <span>${escapeHtml(m.detail)}</span>
    </div>
  `).join('');

  if (canBrowse) {
    const recentProblemHtml = state.problems.slice(0, 6).map((problem) => problemCard(problem, 'author')).join('');
    els.recentProblems.innerHTML = recentProblemHtml || '<div class="empty-box">문제가 아직 없습니다.</div>';
    bindProblemCards(els.recentProblems, 'author');
    els.storyline.innerHTML = CONFIG.grades.map((grade) => `
      <div class="story-node">
        <h4>${escapeHtml(grade)}</h4>
        <p>${escapeHtml(curriculumSummary(grade))}</p>
        <small>${escapeHtml(`${state.problems.filter((p) => p.grade === grade).length}문항입니다.`)}</small>
      </div>
    `).join('');
  } else {
    els.recentProblems.innerHTML = '<div class="empty-box">문제은행은 승인된 출제자 및 운영자만 볼 수 있습니다.</div>';
    els.storyline.innerHTML = '<div class="empty-box">커리큘럼별 문제 수는 권한 있는 계정만 확인할 수 있습니다.</div>';
  }

  const people = state.currentUser && !state.currentUser.isGuest ? state.users : visibleParticipants();
  const recentUserHtml = people.slice(0, 6).map(userLikeCard).join('');
  els.recentUsers.innerHTML = recentUserHtml || '<div class="empty-box">표시할 참가자가 아직 없습니다.</div>';
}

function renderAuthorView() {
  const isBrowser = state.authorMode !== 'detail';
  els.authorSplitPanel.classList.toggle('hidden', isBrowser);
  els.authorEditorGrid.classList.toggle('hidden', isBrowser);
  els.backToAuthorBrowser.classList.toggle('hidden', isBrowser);
  els.cloneProblem.classList.toggle('hidden', isBrowser);
  els.authorViewNote.textContent = isBrowser
    ? '문제 전체를 보고 검색하는 화면입니다.'
    : '선택한 문제를 보는 화면입니다. 편집은 편집하기 버튼으로 시작합니다.';
  els.authorListTitle.textContent = isBrowser ? '문제 목록' : '문제 검색';
  els.authorListNote.textContent = isBrowser
    ? '문제 전체를 검색하고 선택합니다.'
    : '검색어를 입력했을 때만 검색 결과를 보여줍니다.';
  renderAuthorList();
}

function renderAuthorList() {
  const filters = {
    grade: els.authorGradeFilter.value,
    status: els.authorStatusFilter.value,
    keyword: els.authorSearch.value.trim().toLowerCase(),
    difficulty: els.authorDifficultyFilter.value,
    authorId: els.authorAuthorFilter.value
  };
  const source = canBrowseProblemCatalog() ? [...state.problems] : state.problems.filter((problem) => problem.authorId === state.currentUser?.id);
  const authors = [...new Map(source.map((problem) => [problem.authorId || '', problem.authorName || '작성자 미상'])).entries()].filter(([id]) => id);
  els.authorAuthorFilter.innerHTML = '<option value="">전체</option>' + authors.map(([id, name]) => `<option value="${escapeAttr(id)}">${escapeHtml(name)}</option>`).join('');
  if (filters.authorId) els.authorAuthorFilter.value = filters.authorId;

  let list = filterProblems(source, filters).filter((problem) => {
    if (filters.difficulty && normalizeDifficulty(problem.difficulty || '') !== filters.difficulty) return false;
    if (filters.authorId && problem.authorId !== filters.authorId) return false;
    return true;
  });

  if (state.authorMode === 'detail' && !filters.keyword) {
    els.authorList.innerHTML = '<div class="empty-box">검색어를 입력하면 문제 검색 결과가 표시됩니다.</div>';
    return;
  }
  els.authorList.innerHTML = list.length ? list.map((problem) => problemCard(problem, 'author')).join('') : '<div class="empty-box">조건에 맞는 문제가 없습니다.</div>';
  bindProblemCards(els.authorList, 'author');
}

function renderReview() {
  els.userList.innerHTML = isOperator() ? (state.users.length ? state.users.map(reviewUserCard).join('') : '<div class="empty-box">사용자가 아직 없습니다.</div>') : '<div class="empty-box">운영자만 확인할 수 있습니다.</div>';
  bindUserControls();

  const list = reviewableProblems();
  if (!list.some((p) => p.id === state.selectedReviewProblemId)) state.selectedReviewProblemId = list[0]?.id || '';
  els.reviewList.innerHTML = list.length ? list.map((problem) => problemCard(problem, 'review')).join('') : '<div class="empty-box">검토할 문제가 없습니다.</div>';
  bindProblemCards(els.reviewList, 'review');
  renderReviewDetail();
}

function renderReviewDetail() {
  const problem = state.problems.find((p) => p.id === state.selectedReviewProblemId);
  if (!problem) {
    els.reviewDetail.classList.add('hidden');
    return;
  }
  els.reviewDetail.classList.remove('hidden');
  els.reviewShell.innerHTML = buildProblemMarkup(problem, 'desktop', true);
  scheduleTypeset(els.reviewShell);
}

function renderGameAdmin() {
  els.gameStatusBadge.textContent = GAME_PHASE_LABELS[state.gameState.phase] || '대기 중입니다.';
  els.sessionMeta.textContent = state.gameState.sessionId ? `세션 ${escapeHtml(state.gameState.sessionId.slice(0, 8))}입니다.` : '세션이 시작되지 않았습니다.';
  const participants = visibleParticipants();
  els.rosterCount.textContent = `${participants.filter((p) => p.ready).length}명이 준비되었습니다.`;
  els.teamList.innerHTML = state.teams.length ? state.teams.map(teamCard).join('') : '<div class="empty-box">팀이 아직 없습니다.</div>';
  els.participantList.innerHTML = participants.length ? participants.map(participantCard).join('') : '<div class="empty-box">참가자가 아직 없습니다.</div>';
  bindTeamAndParticipantControls();
  renderGameProblemList();
}

function renderGameProblemList() {
  const filters = {
    grade: els.gameGradeFilter.value,
    detail: els.gameDetailFilter.value,
    keyword: els.gameProblemSearch.value.trim().toLowerCase()
  };
  const list = filterProblems(approvedProblems(), filters);
  if (!list.some((p) => p.id === state.selectedGameProblemId)) state.selectedGameProblemId = list[0]?.id || '';
  els.gameProblemList.innerHTML = list.length ? list.map((problem) => problemCard(problem, 'game')).join('') : '<div class="empty-box">송출할 승인 문제가 없습니다.</div>';
  bindProblemCards(els.gameProblemList, 'game');
}


function openJeopardyOverlay() {
  state.jeopardyMode = 'board';
  els.jeopardyOverlay.classList.remove('hidden');
  renderJeopardyOverlay();
  if (els.jeopardyOverlay.requestFullscreen) {
    els.jeopardyOverlay.requestFullscreen().catch(() => {});
  }
}

function closeJeopardyOverlay() {
  els.jeopardyOverlay.classList.add('hidden');
  if (document.fullscreenElement === els.jeopardyOverlay && document.exitFullscreen) {
    document.exitFullscreen().catch(() => {});
  }
}

function moveJeopardyPage(delta) {
  const pages = jeopardyPages();
  state.jeopardyPageIndex = Math.max(0, Math.min(pages.length - 1, state.jeopardyPageIndex + delta));
  renderJeopardyOverlay();
}

function renderJeopardyOverlay() {
  if (els.jeopardyOverlay.classList.contains('hidden')) return;
  els.jeopardyBack.classList.toggle('hidden', state.jeopardyMode !== 'problem');
  els.jeopardyPrev.classList.toggle('hidden', state.jeopardyMode !== 'board');
  els.jeopardyNext.classList.toggle('hidden', state.jeopardyMode !== 'board');
  if (state.jeopardyMode === 'problem') {
    renderJeopardyProblem();
  } else {
    renderJeopardyBoard();
  }
}

function renderJeopardyBoard() {
  const pages = jeopardyPages();
  const page = pages[state.jeopardyPageIndex] || pages[0];
  els.jeopardyTitle.textContent = `${page.grade} ${page.semester}`;
  const list = approvedProblems().filter((p) => p.grade === page.grade && p.semester === page.semester);
  els.jeopardyBody.innerHTML = list.length ? `<div class="jeopardy-grid">${list.map((problem) => `
    <button class="jeopardy-card ${problem.id === state.selectedGameProblemId ? 'selected' : ''}" type="button" data-jeopardy-problem="${escapeAttr(problem.id)}">
      <span class="jeopardy-course">${escapeHtml(problem.detail || '수강과목')}</span>
      <strong>${escapeHtml(problem.title || problem.track || '문제')}</strong>
      <div class="story-mini">${escapeHtml(problem.storyStage || '스토리 단계가 없습니다.')}</div>
      <span class="jeopardy-meta">${escapeHtml(problem.track || '분야')} · ${escapeHtml(String(problem.difficulty || '중'))} · ${escapeHtml(String(problem.score || 0))}점</span>
    </button>`).join('')}</div>` : '<div class="empty-box">이 학기에는 승인된 문제가 없습니다.</div>';
  els.jeopardyBody.querySelectorAll('[data-jeopardy-problem]').forEach((button) => button.addEventListener('click', async () => {
    state.selectedGameProblemId = button.dataset.jeopardyProblem;
    await openSelectedProblemForGame();
    state.jeopardyMode = 'problem';
    renderJeopardyOverlay();
  }));
}

function renderJeopardyProblem() {
  const problem = currentLiveProblem();
  els.jeopardyTitle.textContent = problem ? `${problem.title}` : '문제가 없습니다.';
  if (!problem) {
    els.jeopardyBody.innerHTML = '<div class="empty-box">현재 송출 중인 문제가 없습니다.</div>';
    return;
  }
  els.jeopardyBody.innerHTML = `<div class="jeopardy-problem-wrap"><div class="jeopardy-problem-meta"><h2>${escapeHtml(problem.title || '제목 없는 문제')}</h2><div class="chips"><span class="note">${escapeHtml(problem.storyStage || '스토리 단계가 없습니다.')}</span><span class="note">${escapeHtml(problem.detail || '수강과목')}</span><span class="note">${escapeHtml(problem.track || '분야')}</span><span class="note">${escapeHtml(String(problem.score || 0))}점</span><span class="note">${escapeHtml(String(problem.difficulty || '중'))}</span></div></div>${buildProblemMarkup(problem, 'desktop', isOperator() && state.gameState.answerVisible)}${countdownOverlayMarkup(false)}</div>`;
  scheduleTypeset(els.jeopardyBody);
}

function renderGameStage() {
  const problem = currentLiveProblem();
  els.currentRoundLabel.textContent = GAME_PHASE_LABELS[state.gameState.phase] || '문제 대기 중입니다.';
  updateRoundTimerOnly();
  if (!problem) {
    els.presenterShell.innerHTML = '<div class="empty-box">현재 송출 중인 문제가 없습니다.</div>';
    renderRoundResults();
    return;
  }
  const mode = window.innerWidth <= 820 ? 'mobile' : 'desktop';
  els.presenterShell.innerHTML = `<div class="present-problem-wrap">${buildProblemMarkup(problem, mode, isOperator() && state.gameState.answerVisible)}${countdownOverlayMarkup(false)}</div>`;
  scheduleTypeset(els.presenterShell);
  renderRoundResults();
  renderJeopardyOverlay();
}

function renderPlayView() {
  els.playerStatusBadge.textContent = GAME_PHASE_LABELS[state.gameState.phase] || '대기 중입니다.';
  const problem = currentLiveProblem();
  if (!problem) {
    els.playShell.innerHTML = '<div class="empty-box">현재 송출 중인 문제가 없습니다.</div>';
  } else if (state.gameState.phase === 'countdown') {
    els.playShell.innerHTML = `<div class="play-problem-wrap countdown-only-wrap"><div class="summary-box">곧 문제가 시작됩니다.</div>${countdownOverlayMarkup(true)}</div>`;
  } else {
    const mode = window.innerWidth <= 820 ? 'mobile' : 'desktop';
    els.playShell.innerHTML = `<div class="play-problem-wrap">${buildProblemMarkup(problem, mode, Boolean(state.gameState.answerVisible))}${countdownOverlayMarkup(true)}</div>`;
    scheduleTypeset(els.playShell);
  }
  renderPlayerJoinPanel();
  renderPlayerTeamPanel();
  renderPlayerAnswerPanel();
  renderPlayerResultPanel();
  renderReadyRequestPopup();
}


function renderPlayerJoinPanel() {
  const participant = currentParticipant();
  if (!state.currentUser) {
    els.playerJoinPanel.innerHTML = '<div class="empty-box">먼저 로그인하거나 게스트로 참가해야 합니다.</div>';
    return;
  }
  if (!participant) {
    els.playerJoinPanel.innerHTML = `
      <div class="section-head compact"><h3>게임 참가</h3><span class="note">로비 입장입니다.</span></div>
      <p class="muted-text">현재 표시 이름으로 로비에 참가합니다.</p>
      <button id="join-game-button" class="btn primary" type="button">게임 참가</button>
    `;
    document.getElementById('join-game-button')?.addEventListener('click', joinGame);
    return;
  }
  els.playerJoinPanel.innerHTML = `
    <div class="section-head compact"><h3>참가 상태</h3><span class="note">${participant.ready ? '준비 완료입니다.' : '준비 전입니다.'}</span></div>
    <div class="summary-box">${escapeHtml(participant.displayName)} · ${escapeHtml(teamName(participant.teamId) || '팀 미배정입니다.')}</div>
    <div class="action-row">
      <button id="toggle-ready-button" class="btn ${participant.ready ? 'ghost' : 'primary'}" type="button">${participant.ready ? '준비 해제' : '준비 완료'}</button>
      <button id="leave-game-button" class="btn ghost danger" type="button">로비 나가기</button>
    </div>
  `;
  document.getElementById('toggle-ready-button')?.addEventListener('click', toggleReady);
  document.getElementById('leave-game-button')?.addEventListener('click', leaveGame);
}

function renderPlayerTeamPanel() {
  const participant = currentParticipant();
  if (!participant) {
    els.playerTeamPanel.innerHTML = '<div class="empty-box">참가 후 팀 정보를 확인할 수 있습니다.</div>';
    return;
  }
  const teammates = visibleParticipants().filter((p) => p.teamId === participant.teamId && state.gameState.rosterIds.includes(p.id));
  els.playerTeamPanel.innerHTML = `
    <div class="section-head compact"><h3>팀 정보</h3><span class="note">${state.gameState.rosterIds.includes(participant.id) ? '출전 명단 포함입니다.' : '대기 상태입니다.'}</span></div>
    <div class="summary-box">
      팀: ${escapeHtml(teamName(participant.teamId) || '배정되지 않았습니다.')}<br>
      팀원: ${escapeHtml(teammates.map((p) => p.displayName).join(', ') || '표시할 팀원이 없습니다.')}
    </div>
  `;
}

function renderPlayerAnswerPanel() {
  const participant = currentParticipant();
  const problem = currentLiveProblem();
  if (!participant || !problem) {
    els.playerAnswerPanel.innerHTML = '<div class="empty-box">현재 제출할 문제가 없습니다.</div>';
    return;
  }
  if (!participant.teamId) {
    els.playerAnswerPanel.innerHTML = '<div class="empty-box">팀이 배정되면 답안을 제출할 수 있습니다.</div>';
    return;
  }
  const submission = currentTeamSubmission(participant.teamId);
  const labels = answerLabels(problem);
  if (submission) {
    els.playerAnswerPanel.innerHTML = `
      <div class="section-head compact"><h3>답안 제출</h3><span class="note">제출 완료입니다.</span></div>
      <div class="waiting-box">
        <img src="./assets/pocket-watch-icon.png" alt="대기 중 시계" class="waiting-icon" />
        <div class="summary-box">팀 내 한 명이 제출을 완료했습니다.<br>대기 중...</div>
      </div>
    `;
    return;
  }
  if (state.gameState.submissionClosed || state.gameState.phase === 'closed') {
    els.playerAnswerPanel.innerHTML = '<div class="empty-box">제출이 마감되었습니다. 운영자의 정답 공개를 기다립니다.</div>';
    return;
  }
  if (state.gameState.phase !== 'live') {
    els.playerAnswerPanel.innerHTML = '<div class="empty-box">현재 답안을 제출할 수 없는 상태입니다.</div>';
    return;
  }
  els.playerAnswerPanel.innerHTML = `
    <div class="section-head compact"><h3>답안 제출</h3><span class="note">팀원 누구나 제출할 수 있습니다.</span></div>
    <form id="team-answer-form" class="stack form-block">
      ${labels.map((label, i) => `<label><span class="dynamic-answer-label">(${i + 1})</span><input name="slot-${i}" type="text" placeholder="정답 ${i + 1}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" /></label>`).join('')}
      <button id="submit-answer-button" class="btn primary" type="submit">제출하기</button>
    </form>
  `;
  restoreAnswerDraft();
  document.querySelectorAll('#team-answer-form input[name^="slot-"]').forEach((input) => {
    input.addEventListener('input', captureAnswerDraft);
  });
  document.getElementById('team-answer-form')?.addEventListener('submit', submitTeamAnswer);
}

function renderPlayerResultPanel() {
  const participant = currentParticipant();
  const problem = currentLiveProblem();
  if (!participant || !problem) {
    els.playerResultPanel.innerHTML = '<div class="empty-box">표시할 채점 결과가 없습니다.</div>';
    return;
  }
  if (!state.gameState.answerVisible && state.gameState.phase !== 'ended') {
    els.playerResultPanel.innerHTML = '<div class="empty-box">제출은 마감되었지만, 정답 공개 전까지 채점 결과와 모범 답안은 보이지 않습니다.</div>';
    return;
  }
  const submission = currentTeamSubmission(participant.teamId);
  if (!submission) {
    els.playerResultPanel.innerHTML = '<div class="empty-box">현재 팀의 제출 기록이 없습니다.</div>';
    return;
  }
  const totals = computeTeamTotals();
  const rank = totals.findIndex((item) => item.teamId === participant.teamId) + 1;
  els.playerResultPanel.innerHTML = `
    <div class="section-head compact"><h3>채점 결과</h3><span class="note">동시 공개 결과입니다.</span></div>
    <div class="summary-box">이번 문제 점수: ${escapeHtml(String(submission.scoreAwarded || 0))}점<br>현재 팀 순위: ${escapeHtml(String(rank || '-'))}위</div>
    <div class="summary-box">모범 답안:<br>${escapeHtml((splitExpectedAnswers(problem) || []).join(' / ') || '표시할 정답이 없습니다.')}</div>
    <div class="card-list compact-list">
      ${(submission.correctness || []).map((ok, i) => `<div class="item-card score-card"><strong>${escapeHtml(answerLabels(problem)[i])}</strong><span class="${ok ? 'result-good' : 'result-bad'}">${ok ? '정답' : '오답'}</span></div>`).join('')}
    </div>
  `;
}

async function onLogin(event) {
  event.preventDefault();
  const fd = new FormData(els.loginForm);
  const email = String(fd.get('email') || '').trim();
  const password = String(fd.get('password') || '');
  if (!email || !password) return toast('이메일과 비밀번호를 입력해야 합니다.', 'error');
  setButtonLoading(els.loginButton, true, '로그인 중입니다.');
  try {
    const { authMod } = requireFirebaseReady();
    await authMod.signInWithEmailAndPassword(state.auth, email, password);
    await syncCurrentUser();
    await initialLoad();
    subscribeAll();
    refreshAll();
    els.loginForm.reset();
    toast(`${state.currentUser.displayName} 님으로 로그인되었습니다.`, 'success');
  } catch (error) {
    console.error(error);
    toast(`로그인에 실패했습니다: ${friendlyAuthError(error)}`, 'error');
  } finally {
    setButtonLoading(els.loginButton, false, '로그인');
  }
}

async function onRegister(event) {
  event.preventDefault();
  const fd = new FormData(els.registerForm);
  const displayName = String(fd.get('displayName') || '').trim();
  const email = String(fd.get('email') || '').trim();
  const password = String(fd.get('password') || '');
  if (!displayName || !email || !password) return toast('이름, 이메일, 비밀번호를 모두 입력해야 합니다.', 'error');
  setButtonLoading(els.registerButton, true, '가입 중입니다.');
  try {
    const { authMod, fsMod } = requireFirebaseReady();
    const cred = await authMod.createUserWithEmailAndPassword(state.auth, email, password);
    await fsMod.setDoc(fsMod.doc(state.db, 'users', cred.user.uid), {
      displayName,
      email: email.toLowerCase(),
      role: 'player',
      isApproved: false,
      createdAt: nowISO(),
      updatedAt: nowISO()
    });
    await syncCurrentUser();
    await initialLoad();
    subscribeAll();
    refreshAll();
    els.registerForm.reset();
    toast('회원가입이 완료되었습니다. 운영자 승인 후 권한이 적용됩니다.', 'success');
  } catch (error) {
    console.error(error);
    toast(`회원가입에 실패했습니다: ${friendlyAuthError(error)}`, 'error');
  } finally {
    setButtonLoading(els.registerButton, false, '회원가입');
  }
}

async function onGuestRename(event) {
  event.preventDefault();
  const fd = new FormData(els.guestForm);
  const displayName = String(fd.get('displayName') || '').trim();
  if (!displayName) return toast('표시 이름을 입력해야 합니다.', 'error');
  setButtonLoading(els.guestButton, true, '참가 중입니다.');
  try {
    const { authMod } = requireFirebaseReady();
    localStorage.setItem('gb-guest-name', displayName);
    if (!state.auth.currentUser || !state.auth.currentUser.isAnonymous) {
      await authMod.signInAnonymously(state.auth);
    }
    await syncCurrentUser();
    await initialLoad();
    subscribeAll();
    await joinGame();
    refreshAll();
    toast('게스트 참가가 완료되었습니다.', 'success');
    switchView('play-view');
  } catch (error) {
    console.error(error);
    if (error?.code === 'auth/admin-restricted-operation') {
      toast('비회원 참가를 사용하려면 Firebase Authentication에서 Anonymous 제공자를 활성화해야 합니다.', 'error');
    } else {
      toast(`게스트 참가에 실패했습니다: ${friendlyAuthError(error)}`, 'error');
    }
  } finally {
    setButtonLoading(els.guestButton, false, '게스트로 참가');
  }
}


async function handleNewProblem() {
  if (!canEditProblems()) return toast('문제 작성 권한이 필요합니다.', 'error');
  const hasContent = Boolean(str(els.form.elements.title?.value) || str(els.form.elements.statement?.value) || str(els.form.elements.solution?.value) || str(els.form.elements.reviewNote?.value) || state.editingImages.length);
  if (hasContent && state.previewDirty) {
    try {
      const ok = await saveProblem(null, false, true, 'new');
      if (!ok) return;
      toast('현재 작성 중인 문제가 자동 저장된 후 새 문제 작성 화면이 열렸습니다.', 'success');
    } catch (error) {
      console.error(error);
      return;
    }
  }
  state.authorMode = 'detail';
  resetProblemForm();
  renderAuthorView();
}

async function requestProblemSave(event, submitMode) {
  event?.preventDefault();
  if (!canEditProblems()) return toast('문제 작성 권한이 필요합니다.', 'error');
  const loadedProblem = loadedProblemFromForm();
  if (loadedProblem && !canModifyProblem(loadedProblem)) return toast('이 문제를 편집할 권한이 없습니다.', 'error');
  if (loadedProblem && !state.formEditMode) return toast('편집하기 버튼을 눌러야 수정할 수 있습니다.', 'error');

  const draftProblem = collectProblemForm(false);
  if (!draftProblem.title || !draftProblem.statement) return toast('문제 제목과 본문은 필수입니다.', 'error');

  const mode = await chooseSaveMode({ ...draftProblem, id: loadedProblem?.id || '' }, submitMode);
  if (!mode) return false;
  return saveProblem(null, submitMode, false, mode);
}

async function chooseSaveMode(problem, submitMode) {
  const hasExisting = Boolean(problem?.id);
  const dialog = els.saveChoiceDialog;
  const message = submitMode
    ? '검토 요청 저장 전에 새 문서로 저장할지, 현재 문서를 덮어쓸지 선택합니다.'
    : '저장 전에 새 문서로 저장할지, 현재 문서를 덮어쓸지 선택합니다.';

  if (!dialog || typeof dialog.showModal !== 'function') {
    if (!hasExisting) return 'new';
    return window.confirm(message + '\n확인을 누르면 현재 문서를 덮어쓰고, 취소를 누르면 새 문서로 저장합니다.') ? 'overwrite' : 'new';
  }

  els.saveChoiceText.textContent = message;
  els.saveChoiceOverwrite.classList.toggle('hidden', !hasExisting);
  dialog.returnValue = '';
  return new Promise((resolve) => {
    const onClose = () => {
      dialog.removeEventListener('close', onClose);
      const value = dialog.returnValue || 'cancel';
      resolve(value === 'cancel' ? null : value);
    };
    dialog.addEventListener('close', onClose);
    dialog.showModal();
  });
}

async function approveLoadedProblem() {
  const problem = loadedProblemFromForm();
  if (!problem) return toast('승인할 문제가 없습니다.', 'error');
  if (!isOperator()) return toast('운영자 권한이 필요합니다.', 'error');
  try {
    const { fsMod } = requireFirebaseReady();
    await fsMod.setDoc(fsMod.doc(state.db, 'problems', problem.id), { status: 'approved', updatedAt: nowISO() }, { merge: true });
    toast('문제가 승인되었습니다.', 'success');
  } catch (error) {
    console.error(error);
    toast(`문제 승인에 실패했습니다: ${friendlyFirestoreError(error)}`, 'error');
  }
}

async function onLogout() {
  setButtonLoading(els.logoutButton, true, '로그아웃 중입니다.');
  try {
    const participant = currentParticipant();
    if (participant) {
      try {
        const { fsMod } = requireFirebaseReady();
        await fsMod.deleteDoc(fsMod.doc(state.db, 'gameParticipants', participant.id));
      } catch (error) {
        console.error(error);
      }
    }
    const { authMod } = requireFirebaseReady();
    await authMod.signOut(state.auth);
    await syncCurrentUser();
    await initialLoad();
    subscribeAll();
    refreshAll();
    toast('로그아웃되었습니다.', 'success');
  } catch (error) {
    console.error(error);
    toast(`로그아웃에 실패했습니다: ${friendlyAuthError(error)}`, 'error');
  } finally {
    setButtonLoading(els.logoutButton, false, '로그아웃');
  }
}


function applyStatusFieldPermissions() {
  const statusSelect = els.form?.elements?.status;
  if (!statusSelect) return;
  [...statusSelect.options].forEach((option) => {
    if (option.value === 'approved') option.hidden = !isOperator();
  });
  if (!isOperator() && statusSelect.value === 'approved') {
    statusSelect.value = 'draft';
  }
}

function sanitizeStatusForSave(status, submitMode, loadedProblem) {
  if (submitMode) return 'submitted';
  if (isOperator()) return status;
  if (status === 'approved') return loadedProblem?.status === 'submitted' ? 'submitted' : 'draft';
  return status === 'rejected' ? 'draft' : status;
}

function stripAssistiveMath(root) {
  root?.querySelectorAll?.('mjx-assistive-mml, .MJX_Assistive_MathML').forEach((node) => node.remove());
}

async function saveProblem(event, submitMode, silent = false, saveMode = 'overwrite') {
  event?.preventDefault();
  if (!canEditProblems()) return toast('문제 작성 권한이 필요합니다.', 'error');
  const loadedProblem = loadedProblemFromForm();
  if (loadedProblem && !canModifyProblem(loadedProblem)) return toast('이 문제를 편집할 권한이 없습니다.', 'error');
  if (loadedProblem && !state.formEditMode) return toast('편집하기 버튼을 눌러야 수정할 수 있습니다.', 'error');

  const problem = collectProblemForm(saveMode === 'new');
  if (!problem.title || !problem.statement) return toast('문제 제목과 본문은 필수입니다.', 'error');

  const targetButton = submitMode ? els.saveSubmit : els.saveProblem;
  setButtonLoading(targetButton, true, submitMode ? '요청 중입니다.' : '저장 중입니다.');
  try {
    const { fsMod } = requireFirebaseReady();
    const data = { ...problem, status: sanitizeStatusForSave(problem.status, submitMode, loadedProblem), updatedAt: nowISO() };
    const overwriteId = loadedProblem && saveMode !== 'new' ? loadedProblem.id : '';
    const docRef = overwriteId ? fsMod.doc(state.db, 'problems', overwriteId) : fsMod.doc(fsMod.collection(state.db, 'problems'));
    data.id = docRef.id;
    if (!problem.createdAt) data.createdAt = nowISO();
    await fsMod.setDoc(docRef, data, { merge: true });
    state.selectedProblemId = docRef.id;
    state.loadedProblemId = docRef.id;
    if (els.form?.elements?.id) els.form.elements.id.value = docRef.id;
    state.previewDirty = false;
    state.formEditMode = false;
    applyPermissions();
    applyStatusFieldPermissions();
    if (!silent) toast(submitMode ? '문제가 검토 요청 상태로 저장되었습니다.' : '문제가 저장되었습니다.', 'success');
    return true;
  } catch (error) {
    console.error(error);
    toast(`문제 저장에 실패했습니다: ${friendlyFirestoreError(error)}`, 'error');
    return false;
  } finally {
    setButtonLoading(targetButton, false, submitMode ? '검토 요청으로 저장' : '저장');
  }
}

function collectProblemForm(asNew = false) {
  syncAuthorAnswersToHidden();
  const current = asNew ? null : loadedProblemFromForm();
  const valueOf = (name) => String(els.form?.elements?.[name]?.value || '').trim();
  return {
    id: asNew ? '' : valueOf('id'),
    title: valueOf('title'),
    status: valueOf('status') || 'draft',
    grade: valueOf('grade'),
    detail: valueOf('detail'),
    semester: valueOf('semester'),
    track: valueOf('track'),
    difficulty: normalizeDifficulty(valueOf('difficulty')),
    score: Number(valueOf('score') || 10),
    storyStage: valueOf('storyStage'),
    code: valueOf('code'),
    statement: normalizeInputText(String(els.form?.elements?.statement?.value || '')),
    answer: normalizeInputText(String(els.form?.elements?.answer?.value || '')),
    solution: normalizeInputText(String(els.form?.elements?.solution?.value || '')),
    reviewNote: normalizeInputText(String(els.form?.elements?.reviewNote?.value || '')),
    answerSlotCount: Math.max(1, Number(valueOf('answerSlotCount') || 1)),
    solveTimeMinutes: Math.max(1, Number(valueOf('solveTimeMinutes') || 3)),
    images: structuredClone(state.editingImages),
    authorId: current ? current.authorId : (state.currentUser?.id || ''),
    authorName: current ? current.authorName : (state.currentUser?.displayName || ''),
    createdAt: current?.createdAt || ''
  };
}

function renderAuthorAnswerFields(values = null) {
  if (!els.authorAnswerFields) return;
  const count = Math.max(1, Number(els.form.elements.answerSlotCount?.value || 1));
  let source = Array.isArray(values) ? values : parseStoredAnswersForAuthor();
  while (source.length < count) source.push('');
  source = source.slice(0, count);
  els.authorAnswerFields.innerHTML = source.map((value, index) => `
    <label class="dynamic-answer-row">
      <input type="text" placeholder="정답 ${index + 1}" data-author-answer-slot="${index}" value="${escapeAttr(value || '')}" />
    </label>
  `).join('');
  els.authorAnswerFields.querySelectorAll('[data-author-answer-slot]').forEach((input) => {
    input.addEventListener('input', () => {
      syncAuthorAnswersToHidden();
      state.previewDirty = true;
    });
  });
  syncAuthorAnswersToHidden();
}

function parseStoredAnswersForAuthor() {
  const raw = normalizeDisplayText(els.answerHidden?.value || '');
  const count = Math.max(1, Number(els.form.elements.answerSlotCount?.value || 1));
  let lines = raw.split(/\n+/).map((s) => s.trim());
  if (count === 1) return [raw.trim()];
  while (lines.length < count) lines.push('');
  return lines.slice(0, count);
}

function syncAuthorAnswersToHidden() {
  if (!els.answerHidden) return;
  const values = [...document.querySelectorAll('[data-author-answer-slot]')].map((input) => String(input.value || '').trim());
  els.answerHidden.value = values.join('\n');
}

function resetProblemForm() {
  els.form.reset();
  els.form.elements.id.value = '';
  fillSemesterOptions(CONFIG.grades[0], els.problemSemester);
  fillCourseOptions(CONFIG.grades[0], els.problemSemester.value, els.problemDetail);
  fillTrackOptions(CONFIG.grades[0], els.problemSemester.value, els.problemDetail.value, els.problemTrack);
  state.editingImages = [];
  renderAuthorAnswerFields();
  state.previewDirty = true;
  state.selectedProblemId = '';
  state.loadedProblemId = '';
  state.formEditMode = true;
  renderImageStrip();
  renderEditorPreview();
  applyPermissions();
  applyStatusFieldPermissions();
}

function cloneCurrentProblem() {
  const problem = currentProblem();
  if (!problem) return toast('복제할 문제가 없습니다.', 'error');
  loadProblem(problem, true);
  toast('현재 문제가 복제되었습니다.', 'success');
}

async function deleteCurrentProblem() {
  const problem = currentProblem();
  if (!problem) return toast('삭제할 문제가 없습니다.', 'error');
  if (!canModifyProblem(problem)) return toast('이 문제를 삭제할 권한이 없습니다.', 'error');
  if (!confirm('선택한 문제를 삭제하시겠습니까?')) return;
  setButtonLoading(els.deleteProblem, true, '삭제 중입니다.');
  try {
    const { fsMod } = requireFirebaseReady();
    await fsMod.deleteDoc(fsMod.doc(state.db, 'problems', problem.id));
    resetProblemForm();
    toast('문제가 삭제되었습니다.', 'success');
  } catch (error) {
    console.error(error);
    toast(`문제 삭제에 실패했습니다: ${friendlyFirestoreError(error)}`, 'error');
  } finally {
    setButtonLoading(els.deleteProblem, false, '삭제');
  }
}

async function addImage(event, index) {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    const dataUrl = await resizeImage(file, 1600, 0.84);
    state.editingImages[index] = { id: uid('img'), name: file.name, caption: `그림 ${index + 1}`, dataUrl };
    state.editingImages = state.editingImages.filter(Boolean).slice(0, CONFIG.maxImages);
    state.previewDirty = true;
    renderImageStrip();
    toast(`그림 ${index + 1}이 반영되었습니다.`, 'success');
  } catch (error) {
    console.error(error);
    toast('이미지 처리에 실패했습니다.', 'error');
  } finally {
    event.target.value = '';
  }
}

function renderImageStrip() {
  if (!state.editingImages.length) {
    els.editorImages.innerHTML = '<div class="empty-box">첨부된 그림이 아직 없습니다.</div>';
    return;
  }
  els.editorImages.innerHTML = state.editingImages.map((img, index) => `
    <div class="image-card image-card-rich">
      <img src="${escapeAttr(img.dataUrl)}" alt="${escapeAttr(img.caption || `그림 ${index + 1}`)}" />
      <div class="image-card-meta">
        <label><span>문제 표시 이름</span><input type="text" data-image-caption="${index}" value="${escapeAttr(img.caption || `그림 ${index + 1}`)}" /></label>
        <button type="button" data-remove-image="${index}">삭제</button>
      </div>
    </div>
  `).join('');
  els.editorImages.querySelectorAll('[data-remove-image]').forEach((button) => {
    button.addEventListener('click', () => {
      state.editingImages.splice(Number(button.dataset.removeImage), 1);
      state.previewDirty = true;
      renderImageStrip();
    });
  });
  els.editorImages.querySelectorAll('[data-image-caption]').forEach((input) => {
    input.addEventListener('input', () => {
      const idx = Number(input.dataset.imageCaption);
      if (state.editingImages[idx]) state.editingImages[idx].caption = input.value || `그림 ${idx + 1}`;
      state.previewDirty = true;
    });
  });
}

function renderEditorPreview() {
  const problem = collectProblemForm();
  els.previewShell.innerHTML = buildProblemMarkup(problem, state.previewMode, true);
  scheduleTypeset(els.previewShell);
  state.previewDirty = false;
}

function changePreviewMode(mode) {
  state.previewMode = mode;
  localStorage.setItem(CONFIG.previewKey, mode);
  updatePreviewButtons();
  renderEditorPreview();
}

function updatePreviewButtons() {
  els.previewButtons.forEach((button) => button.classList.toggle('active', button.dataset.preview === state.previewMode));
}

function applyAuthorSplit() {
  const left = Number(els.authorSplitRange.value || 54);
  els.authorEditorGrid.style.gridTemplateColumns = `minmax(0, ${left}fr) minmax(0, ${100 - left}fr)`;
}

function onGameFilterChange() {
  fillGameDetailFilter();
  renderGameProblemList();
}

async function updateProblemStatus(status) {
  const problem = state.problems.find((p) => p.id === state.selectedReviewProblemId);
  if (!problem) return;
  try {
    const { fsMod } = requireFirebaseReady();
    await fsMod.setDoc(fsMod.doc(state.db, 'problems', problem.id), { status, updatedAt: nowISO() }, { merge: true });
    toast(`문제가 ${STATUS_LABELS[status]} 상태로 변경되었습니다.`, 'success');
  } catch (error) {
    console.error(error);
    toast(`상태 변경에 실패했습니다: ${friendlyFirestoreError(error)}`, 'error');
  }
}

async function openLobby() {
  if (!isOperator()) return toast('운영자 권한이 필요합니다.', 'error');
  await setGameState({ phase: 'lobby', sessionId: '', currentRoundId: '', currentProblemId: '', publicProblem: null, answerVisible: false, submissionClosed: false, rosterIds: [], readyPrompt: null });
  toast('로비가 열렸습니다.', 'success');
}

async function startGame() {
  if (!isOperator()) return toast('운영자 권한이 필요합니다.', 'error');
  const rosterIds = visibleParticipants().filter((p) => p.ready && p.teamId).map((p) => p.id);
  if (!rosterIds.length) return toast('준비 완료 상태이며 팀이 배정된 참가자가 필요합니다.', 'error');
  await setGameState({ phase: 'waiting', sessionId: uid('session'), rosterIds, currentRoundId: '', currentProblemId: '', publicProblem: null, answerVisible: false, submissionClosed: false, readyPrompt: null });
  toast('게임이 시작되었습니다.', 'success');
}

async function endGame() {
  if (!isOperator()) return toast('운영자 권한이 필요합니다.', 'error');
  await setGameState({ phase: 'ended', currentRoundId: '', currentProblemId: '', publicProblem: null, answerVisible: true, submissionClosed: true, rosterIds: [], roundEndsAt: null });
  if (els.jeopardyOverlay) state.jeopardyMode = 'board';
  toast('게임이 종료되었습니다.', 'success');
}

async function addTeam() {
  if (!isOperator()) return toast('운영자 권한이 필요합니다.', 'error');
  const name = els.teamNameInput.value.trim();
  if (!name) return toast('팀 이름을 입력해야 합니다.', 'error');
  const { fsMod } = requireFirebaseReady();
  const ref = fsMod.doc(fsMod.collection(state.db, 'gameTeams'));
  await fsMod.setDoc(ref, { id: ref.id, name, order: state.teams.length + 1, createdAt: nowISO(), updatedAt: nowISO() });
  els.teamNameInput.value = '';
  toast('팀이 추가되었습니다.', 'success');
}

async function openSelectedProblemForGame() {
  if (!isOperator()) return toast('운영자 권한이 필요합니다.', 'error');
  if (!state.gameState.sessionId) return toast('먼저 게임을 시작해야 합니다.', 'error');
  const problem = state.problems.find((p) => p.id === state.selectedGameProblemId);
  if (!problem) return toast('송출할 문제를 선택해야 합니다.', 'error');
  await setGameState({ phase: 'countdown', currentRoundId: uid('round'), currentProblemId: problem.id, publicProblem: publicProblemPayload(problem, false), answerVisible: false, submissionClosed: false, roundStartsAt: Date.now() + 4000, roundEndsAt: null });
  toast('선택한 문제가 송출되었습니다. 참가자 화면에는 카운트다운 후 표시됩니다.', 'success');
}

async function closeSubmissions() {
  if (!isOperator()) return toast('운영자 권한이 필요합니다.', 'error');
  await finishRoundAndClose();
  toast('제출만 마감되었습니다. 정답 공개 전까지 참가자에게 모범 답안과 결과는 보이지 않습니다.', 'success');
}

async function resetRoundSubmissions() {
  if (!isOperator()) return toast('운영자 권한이 필요합니다.', 'error');
  const currentRoundId = state.gameState.currentRoundId;
  if (!currentRoundId) return;
  const { fsMod } = requireFirebaseReady();
  const snap = await fsMod.getDocs(fsMod.query(fsMod.collection(state.db, 'gameSubmissions'), fsMod.where('roundId', '==', currentRoundId)));
  await Promise.all(snap.docs.map((doc) => fsMod.deleteDoc(doc.ref)));
  await setGameState({ submissionClosed: false, answerVisible: false, phase: 'live', publicProblem: publicProblemPayload(currentLiveProblem(), false), roundStartsAt: null, roundEndsAt: Date.now() + Number((currentLiveProblem()?.solveTimeMinutes || 3)) * 60000 });
  toast('현재 문제 제출이 초기화되었습니다.', 'success');
}

async function toggleAnswerVisible() {
  if (!isOperator()) return toast('운영자 권한이 필요합니다.', 'error');
  const next = !state.gameState.answerVisible;
  if (next && !state.gameState.submissionClosed) return toast('먼저 제출 마감을 해야 합니다.', 'error');
  const nextPhase = next ? 'reveal' : (state.gameState.submissionClosed ? 'closed' : (state.gameState.currentProblemId ? 'live' : state.gameState.phase));
  await setGameState({ answerVisible: next, phase: nextPhase });
  toast(next ? '정답이 공개되었습니다.' : '정답 공개가 해제되었습니다.', 'success');
}

async function joinGame() {
  if (!state.currentUser) return toast('먼저 로그인하거나 게스트로 참가해야 합니다.', 'error');
  const existing = currentParticipant();
  if (existing) return;
  const { fsMod } = requireFirebaseReady();
  const id = participantDocId();
  await fsMod.setDoc(fsMod.doc(state.db, 'gameParticipants', id), {
    id,
    authUid: state.currentUser.authUid || state.currentUser.id,
    displayName: state.currentUser.displayName,
    email: state.currentUser.email || '',
    source: state.currentUser.isGuest ? 'guest' : 'member',
    ready: false,
    teamId: '',
    createdAt: nowISO(),
    updatedAt: nowISO(),
    lastSeenAt: Date.now(),
    presenceId: state.presenceId,
    isActive: true,
    readyPromptResponseId: state.readyPromptSeenId || ''
  }, { merge: true });
  await pingParticipantPresence();
  toast('게임 참가가 완료되었습니다.', 'success');
}

async function toggleReady() {
  const participant = currentParticipant();
  if (!participant) return;
  const { fsMod } = requireFirebaseReady();
  await fsMod.setDoc(fsMod.doc(state.db, 'gameParticipants', participant.id), { ready: !participant.ready, updatedAt: nowISO(), lastSeenAt: Date.now(), presenceId: state.presenceId, isActive: true }, { merge: true });
}

async function leaveGame() {
  const participant = currentParticipant();
  if (!participant) return;
  const { fsMod } = requireFirebaseReady();
  await fsMod.deleteDoc(fsMod.doc(state.db, 'gameParticipants', participant.id));
  toast('로비에서 나갔습니다.', 'success');
}

async function submitTeamAnswer(event) {
  event.preventDefault();
  const participant = currentParticipant();
  const problem = currentLiveProblem();
  if (!participant || !problem) return;
  const labels = answerLabels(problem);
  const fd = new FormData(event.currentTarget);
  const answers = labels.map((_, i) => String(fd.get(`slot-${i}`) || '').trim());
  const submissionId = `${state.gameState.currentRoundId}_${participant.teamId}`;
  const graded = autoGradeSubmission(problem, answers);
  try {
    const { fsMod } = requireFirebaseReady();
    await fsMod.setDoc(fsMod.doc(state.db, 'gameSubmissions', submissionId), {
      id: submissionId,
      roundId: state.gameState.currentRoundId,
      sessionId: state.gameState.sessionId,
      problemId: problem.id,
      teamId: participant.teamId,
      answers,
      correctness: graded.correctness,
      expected: graded.expected,
      scoreAwarded: graded.scoreAwarded,
      submittedBy: participant.id,
      submittedByName: participant.displayName,
      submittedAt: nowISO(),
      updatedAt: nowISO()
    }, { merge: true });
    delete state.answerDrafts[currentDraftKey()];
    toast('팀 답안이 제출되었습니다.', 'success');
  } catch (error) {
    console.error(error);
    toast(`답안 제출에 실패했습니다: ${friendlyFirestoreError(error)}`, 'error');
  }
}

function bindTeamAndParticipantControls() {
  document.querySelectorAll('[data-delete-team]').forEach((button) => button.addEventListener('click', async () => {
    try {
      const { fsMod } = requireFirebaseReady();
      await fsMod.deleteDoc(fsMod.doc(state.db, 'gameTeams', button.dataset.deleteTeam));
      toast('팀이 삭제되었습니다.', 'success');
    } catch (error) {
      console.error(error);
      toast(`팀 삭제에 실패했습니다: ${friendlyFirestoreError(error)}`, 'error');
    }
  }));
  document.querySelectorAll('[data-expel-player]').forEach((button) => button.addEventListener('click', async () => {
    try {
      const { fsMod } = requireFirebaseReady();
      await fsMod.deleteDoc(fsMod.doc(state.db, 'gameParticipants', button.dataset.expelPlayer));
      toast('선택한 참가자를 로비에서 제거했습니다.', 'success');
    } catch (error) {
      console.error(error);
      toast(`참가자 추방에 실패했습니다: ${friendlyFirestoreError(error)}`, 'error');
    }
  }));
  document.querySelectorAll('[data-team-select]').forEach((select) => select.addEventListener('change', async () => {
    try {
      const { fsMod } = requireFirebaseReady();
      await fsMod.setDoc(fsMod.doc(state.db, 'gameParticipants', select.dataset.teamSelect), { teamId: select.value, updatedAt: nowISO(), lastSeenAt: Date.now() }, { merge: true });
    } catch (error) {
      console.error(error);
      toast(`팀 배정에 실패했습니다: ${friendlyFirestoreError(error)}`, 'error');
    }
  }));
}



async function requestAllWaitingReady() {
  try {
    const waiting = visibleParticipants().filter((p) => !p.ready);
    if (!waiting.length) {
      toast('준비 요청을 보낼 대기 인원이 없습니다.', 'info');
      return;
    }
    await setGameState({
      readyPrompt: {
        id: uid('readyprompt'),
        createdAt: Date.now(),
        message: '운영자가 게임 준비 완료 요청을 합니다.'
      }
    });
    toast(`대기 중인 ${waiting.length}명에게 준비 완료 요청을 보냈습니다.`, 'success');
  } catch (error) {
    console.error(error);
    toast(`준비 요청 전송에 실패했습니다: ${friendlyFirestoreError(error)}`, 'error');
  }
}

function currentReadyPrompt() {
  return state.gameState?.readyPrompt || null;
}

function renderReadyRequestPopup() {
  const participant = currentParticipant();
  const prompt = currentReadyPrompt();
  if (!participant || !prompt || participant.ready) {
    els.readyRequestModal?.classList.add('hidden');
    return;
  }
  const alreadySeen = participant.readyPromptResponseId === prompt.id || state.readyPromptSeenId === prompt.id;
  if (alreadySeen) {
    els.readyRequestModal?.classList.add('hidden');
    return;
  }
  if (els.readyRequestText) els.readyRequestText.textContent = prompt.message || '운영자가 게임 준비 완료 요청을 합니다.';
  els.readyRequestModal?.classList.remove('hidden');
}

async function respondReadyRequest(accept) {
  const participant = currentParticipant();
  const prompt = currentReadyPrompt();
  if (!participant || !prompt) return;
  try {
    const { fsMod } = requireFirebaseReady();
    localStorage.setItem('gb-ready-prompt-seen', prompt.id);
    state.readyPromptSeenId = prompt.id;
    await fsMod.setDoc(fsMod.doc(state.db, 'gameParticipants', participant.id), {
      ready: accept,
      readyPromptResponseId: prompt.id,
      updatedAt: nowISO(),
      lastSeenAt: Date.now(),
      isActive: true,
      presenceId: state.presenceId
    }, { merge: true });
    els.readyRequestModal?.classList.add('hidden');
    toast(accept ? '준비 완료로 응답했습니다.' : '대기 상태로 응답했습니다.', 'success');
  } catch (error) {
    console.error(error);
    toast(`준비 요청 응답에 실패했습니다: ${friendlyFirestoreError(error)}`, 'error');
  }
}

async function cleanupInactiveParticipants() {
  try {
    const { fsMod } = requireFirebaseReady();
    const cutoff = Date.now() - 25000;
    const stale = state.participants.filter((p) => p.id !== participantDocId() && p.lastSeenAt && p.lastSeenAt < cutoff);
    if (!stale.length) {
      toast('정리할 비활성 참가자가 없습니다.', 'info');
      return;
    }
    await Promise.all(stale.map((p) => fsMod.deleteDoc(fsMod.doc(state.db, 'gameParticipants', p.id))));
    toast(`비활성 참가자 ${stale.length}명을 정리했습니다.`, 'success');
  } catch (error) {
    console.error(error);
    toast(`비활성 참가자 정리에 실패했습니다: ${friendlyFirestoreError(error)}`, 'error');
  }
}

function bindUserControls() {
  document.querySelectorAll('[data-approve-user]').forEach((button) => button.addEventListener('click', async () => {
    try {
      const { fsMod } = requireFirebaseReady();
      await fsMod.setDoc(fsMod.doc(state.db, 'users', button.dataset.approveUser), { isApproved: true, updatedAt: nowISO() }, { merge: true });
      toast('사용자가 승인되었습니다.', 'success');
    } catch (error) {
      console.error(error);
      toast(`사용자 승인에 실패했습니다: ${friendlyFirestoreError(error)}`, 'error');
    }
  }));
  document.querySelectorAll('[data-reject-user]').forEach((button) => button.addEventListener('click', async () => {
    try {
      const { fsMod } = requireFirebaseReady();
      await fsMod.setDoc(fsMod.doc(state.db, 'users', button.dataset.rejectUser), { isApproved: false, updatedAt: nowISO() }, { merge: true });
      toast('사용자 승인이 거부되었습니다.', 'success');
    } catch (error) {
      console.error(error);
      toast(`사용자 거부에 실패했습니다: ${friendlyFirestoreError(error)}`, 'error');
    }
  }));
  document.querySelectorAll('[data-delete-user]').forEach((button) => button.addEventListener('click', async () => {
    if (!isSuperAdmin()) return;
    if (!confirm('이 사용자의 회원 문서를 삭제하시겠습니까?')) return;
    try {
      const { fsMod } = requireFirebaseReady();
      await fsMod.deleteDoc(fsMod.doc(state.db, 'users', button.dataset.deleteUser));
      toast('사용자 문서가 삭제되었습니다.', 'success');
    } catch (error) {
      console.error(error);
      toast(`사용자 삭제에 실패했습니다: ${friendlyFirestoreError(error)}`, 'error');
    }
  }));
  document.querySelectorAll('[data-role-user]').forEach((select) => select.addEventListener('change', async () => {
    try {
      const { fsMod } = requireFirebaseReady();
      await fsMod.setDoc(fsMod.doc(state.db, 'users', select.dataset.roleUser), { role: select.value, isApproved: true, updatedAt: nowISO() }, { merge: true });
      toast('사용자 권한이 변경되었습니다.', 'success');
    } catch (error) {
      console.error(error);
      toast(`권한 변경에 실패했습니다: ${friendlyFirestoreError(error)}`, 'error');
    }
  }));
}

function bindProblemCards(root, context) {
  root.querySelectorAll('[data-problem-id]').forEach((card) => card.addEventListener('click', () => {
    const id = card.dataset.problemId;
    if (context === 'author') {
      state.selectedProblemId = id;
      state.authorMode = 'detail';
      const problem = state.problems.find((p) => p.id === id);
      if (problem) loadProblem(problem, false);
      switchView('author-view');
      renderAuthorView();
    } else if (context === 'review') {
      state.selectedReviewProblemId = id;
      renderReview();
    } else if (context === 'game') {
      state.selectedGameProblemId = id;
      renderGameProblemList();
    }
  }));
}

function loadProblem(problem, cloneOnly) {
  state.loadedProblemId = cloneOnly ? '' : (problem.id || '');
  els.form.elements.id.value = cloneOnly ? '' : (problem.id || '');
  els.form.elements.title.value = decodeEscapedNewlines(problem.title || '');
  els.form.elements.status.value = problem.status || 'draft';
  els.problemGrade.value = problem.grade || CONFIG.grades[0];
  fillSemesterOptions(els.problemGrade.value, els.problemSemester, problem.semester || '');
  fillCourseOptions(els.problemGrade.value, els.problemSemester.value, els.problemDetail, problem.detail || '');
  fillTrackOptions(els.problemGrade.value, els.problemSemester.value, els.problemDetail.value, els.problemTrack, problem.track || '');
  els.form.elements.difficulty.value = normalizeDifficulty(problem.difficulty || '중');
  els.form.elements.score.value = problem.score || 10;
  els.form.elements.answerSlotCount.value = problem.answerSlotCount || 1;
  renderAuthorAnswerFields(splitExpectedAnswers(problem));
  els.form.elements.solveTimeMinutes.value = problem.solveTimeMinutes || 3;
  els.form.elements.storyStage.value = decodeEscapedNewlines(problem.storyStage || '');
  els.form.elements.code.value = problem.code || '';
  els.form.elements.statement.value = decodeEscapedNewlines(problem.statement || '');
  els.form.elements.answer.value = decodeEscapedNewlines(problem.answer || '');
  syncAuthorAnswersToHidden();
  els.form.elements.solution.value = decodeEscapedNewlines(problem.solution || '');
  els.form.elements.reviewNote.value = decodeEscapedNewlines(problem.reviewNote || '');
  state.editingImages = structuredClone(problem.images || []);
  state.previewDirty = true;
  state.formEditMode = Boolean(cloneOnly);
  renderImageStrip();
  renderEditorPreview();
  applyPermissions();
}

function fillSolveTimeOptions() {
  els.problemSolveTime.innerHTML = Array.from({ length: 60 }, (_, i) => `<option value="${i + 1}">${i + 1}분</option>`).join('');
}

function fillGradeSelects() {
  const optionHtml = CONFIG.grades.map((grade) => `<option value="${escapeAttr(grade)}">${escapeHtml(grade)}</option>`).join('');
  els.problemGrade.innerHTML = optionHtml;
  els.authorGradeFilter.innerHTML = '<option value="">전체</option>' + optionHtml;
  els.gameGradeFilter.innerHTML = '<option value="">전체</option>' + optionHtml;
  fillSemesterOptions(CONFIG.grades[0], els.problemSemester);
  fillCourseOptions(CONFIG.grades[0], els.problemSemester.value, els.problemDetail);
  fillTrackOptions(CONFIG.grades[0], els.problemSemester.value, els.problemDetail.value, els.problemTrack);
  fillGameDetailFilter();
}

function fillSemesterOptions(grade, select, keep = '') {
  const semesters = Object.keys(CURRICULUM[grade] || {});
  select.innerHTML = semesters.map((item) => `<option value="${escapeAttr(item)}">${escapeHtml(item)}</option>`).join('');
  if (keep && semesters.includes(keep)) select.value = keep;
}

function fillCourseOptions(grade, semester, select, keep = '') {
  const courses = Object.keys(((CURRICULUM[grade] || {})[semester] || {}));
  select.innerHTML = courses.map((item) => `<option value="${escapeAttr(item)}">${escapeHtml(item)}</option>`).join('');
  if (keep && courses.includes(keep)) select.value = keep;
}

function fillTrackOptions(grade, semester, detail, select, keep = '') {
  const tracks = ((((CURRICULUM[grade] || {})[semester] || {})[detail]) || []);
  select.innerHTML = tracks.map((item) => `<option value="${escapeAttr(item)}">${escapeHtml(item)}</option>`).join('');
  if (keep && tracks.includes(keep)) select.value = keep;
}

function fillGameDetailFilter() {
  const grade = els.gameGradeFilter.value;
  let items = [];
  if (grade) {
    const set = new Set();
    Object.values(CURRICULUM[grade] || {}).forEach((sem) => Object.keys(sem).forEach((course) => set.add(course)));
    items = [...set];
  }
  els.gameDetailFilter.innerHTML = '<option value="">전체</option>' + items.map((item) => `<option value="${escapeAttr(item)}">${escapeHtml(item)}</option>`).join('');
}

function filterProblems(list, filters) {
  return list.filter((problem) => {
    if (filters.grade && problem.grade !== filters.grade) return false;
    if (filters.detail && problem.detail !== filters.detail) return false;
    if (filters.status && problem.status !== filters.status) return false;
    if (filters.keyword) {
      const haystack = `${problem.title || ''} ${problem.code || ''} ${problem.storyStage || ''}`.toLowerCase();
      if (!haystack.includes(filters.keyword)) return false;
    }
    return true;
  });
}

function approvedProblems() {
  return state.problems.filter((p) => p.status === 'approved').sort(byUpdatedDesc);
}

function reviewableProblems() {
  return state.problems.filter((p) => ['submitted', 'approved', 'rejected'].includes(p.status)).sort(byUpdatedDesc);
}

function currentProblem() {
  return loadedProblemFromForm();
}

function publicProblemPayload(problem, reveal = false) {
  if (!problem) return null;
  return {
    id: problem.id,
    title: problem.title || '',
    status: problem.status || 'approved',
    grade: problem.grade || '',
    semester: problem.semester || '',
    detail: problem.detail || '',
    track: problem.track || '',
    difficulty: problem.difficulty || '',
    score: Number(problem.score || 0),
    storyStage: problem.storyStage || '',
    statement: problem.statement || '',
    answer: reveal ? (problem.answer || '') : '',
    solution: reveal ? (problem.solution || '') : '',
    answerSlotCount: Math.max(1, Number(problem.answerSlotCount || 1)),
    solveTimeMinutes: Math.max(1, Number(problem.solveTimeMinutes || 3)),
    images: Array.isArray(problem.images) ? problem.images : []
  };
}

function currentLiveProblem() {
  if (canBrowseProblemCatalog()) return state.problems.find((p) => p.id === state.gameState.currentProblemId) || null;
  return state.gameState.publicProblem || null;
}

function currentParticipant() {
  return state.participants.find((p) => p.id === participantDocId()) || null;
}

function currentTeamSubmission(teamId) {
  return state.submissions.find((s) => s.roundId === state.gameState.currentRoundId && s.teamId === teamId) || null;
}

function participantDocId() {
  return state.currentUser?.authUid || state.currentUser?.id || '';
}

function teamName(teamId) {
  return state.teams.find((t) => t.id === teamId)?.name || '';
}

function answerLabels(problem) {
  const count = Math.max(1, Number(problem.answerSlotCount || 1));
  return Array.from({ length: count }, (_, i) => `(${i + 1})`);
}

function problemCard(problem, mode) {
  const selected = (mode === 'author' && problem.id === state.selectedProblemId) || (mode === 'review' && problem.id === state.selectedReviewProblemId) || (mode === 'game' && problem.id === state.selectedGameProblemId);
  const editable = mode === 'author' && canModifyProblem(problem);
  const showMetaFooter = mode !== 'game';
  const showStatus = mode !== 'game';
  const story = problem.storyStage || '스토리 단계가 없습니다.';
  return `
    <article class="item-card clickable ${selected ? 'selected' : ''}" data-problem-id="${escapeAttr(problem.id)}">
      <div class="card-head">
        <h4>${escapeHtml(problem.title || '제목 없는 문제')}</h4>
        <div class="chips">
          ${showStatus ? `<span class="status-badge ${escapeAttr(problem.status || 'draft')}">${escapeHtml(STATUS_LABELS[problem.status] || '초안')}</span>` : ''}
          <span class="note">${escapeHtml(problem.grade || '')}</span>
          <span class="note">${escapeHtml(problem.semester || '')}</span>
          <span class="note">${escapeHtml(problem.detail || '')}</span>
          <span class="note">${escapeHtml(problem.track || '')}</span>
          ${problem.solveTimeMinutes ? `<span class="note">${escapeHtml(`${problem.solveTimeMinutes}분`)}</span>` : ''}
        </div>
      </div>
      <p>${escapeHtml(story)}</p>
      ${showMetaFooter ? `<small>${escapeHtml(`${problem.authorName || '작성자 미상'} · ${problem.code || '코드가 없습니다.'}`)}</small>` : ''}
      ${editable ? '<small>선택 후 편집하기 버튼으로 수정할 수 있습니다.</small>' : ''}
    </article>
  `;
}

function userLikeCard(user) {
  const role = user.role || (user.source === 'guest' ? 'guest' : 'player');
  return `
    <article class="item-card">
      <div class="card-head">
        <h4>${escapeHtml(user.displayName || '이름이 없습니다.')}</h4>
        <div class="chips"><span class="role-badge ${escapeAttr(role)}">${escapeHtml(ROLE_LABELS[role] || '참가자')}</span></div>
      </div>
      <p>${escapeHtml(user.email || '비회원 참가입니다.')}</p>
    </article>
  `;
}

function reviewUserCard(user) {
  return `
    <article class="item-card">
      <div class="card-head">
        <h4>${escapeHtml(user.displayName || '이름이 없습니다.')}</h4>
        <div class="chips">
          <span class="role-badge ${escapeAttr(user.role || 'player')}">${escapeHtml(ROLE_LABELS[user.role] || '일반 회원')}</span>
          <span class="status-badge ${user.isApproved ? 'approved' : 'submitted'}">${user.isApproved ? '승인됨' : '대기 중'}</span>
        </div>
      </div>
      <p>${escapeHtml(user.email || '이메일이 없습니다.')}</p>
      <div class="action-row">
        ${!user.isApproved ? `<button class="btn secondary" type="button" data-approve-user="${escapeAttr(user.id)}">승인</button>` : `<button class="btn ghost" type="button" data-reject-user="${escapeAttr(user.id)}">승인 거부</button>`}
        ${isSuperAdmin() ? `<button class="btn ghost danger" type="button" data-delete-user="${escapeAttr(user.id)}">삭제</button>` : ''}
        ${isSuperAdmin() ? `<select data-role-user="${escapeAttr(user.id)}">${['player','author','operator','superadmin'].map((role) => `<option value="${role}" ${user.role===role?'selected':''}>${ROLE_LABELS[role]}</option>`).join('')}</select>` : ''}
      </div>
    </article>
  `;
}

function teamCard(team) {
  return `
    <article class="item-card">
      <div class="participant-top">
        <strong>${escapeHtml(team.name)}</strong>
        <button class="btn ghost danger" type="button" data-delete-team="${escapeAttr(team.id)}">삭제</button>
      </div>
      <small>${escapeHtml(`${visibleParticipants().filter((p) => p.teamId === team.id).length}명이 배정되어 있습니다.`)}</small>
    </article>
  `;
}

function participantCard(participant) {
  return `
    <article class="item-card">
      <div class="participant-top">
        <strong>${escapeHtml(participant.displayName)}</strong>
        <div class="participant-actions">
          <div class="chips"><span class="status-badge ${participant.ready ? 'approved' : 'submitted'}">${participant.ready ? '준비' : '대기'}</span></div>
          ${isOperator() ? `<button class="btn ghost danger" type="button" data-expel-player="${escapeAttr(participant.id)}">추방</button>` : ''}
        </div>
      </div>
      <div class="inline-select-row">
        <select data-team-select="${escapeAttr(participant.id)}">
          <option value="">팀을 선택합니다.</option>
          ${state.teams.map((team) => `<option value="${escapeAttr(team.id)}" ${participant.teamId === team.id ? 'selected' : ''}>${escapeHtml(team.name)}</option>`).join('')}
        </select>
      </div>
    </article>
  `;
}

function buildProblemMarkup(problem, mode, showAnswer) {
  const images = problem.images || [];
  return `
    <div class="problem-screen ${mode}">
      <section class="problem-main">
        <div class="problem-meta">
          <span class="meta-chip">${escapeHtml(problem.grade || '학년 테마')}</span>
          <span class="meta-chip">${escapeHtml(problem.semester || '학기')}</span>
          <span class="meta-chip">${escapeHtml(problem.detail || '수강과목')}</span>
          <span class="meta-chip">${escapeHtml(problem.track || '대분류')}</span>
          <span class="meta-chip">${escapeHtml(problem.difficulty || '난이도')}</span>
          <span class="meta-chip">${escapeHtml(problem.score ? `${problem.score}점` : '점수')}</span>
          <span class="meta-chip">${escapeHtml(problem.solveTimeMinutes ? `${problem.solveTimeMinutes}분` : '풀이 시간')}</span>
        </div>
        <h3 class="problem-title">${escapeHtml(problem.title || '새 문제')}</h3>
        <div class="problem-content math-region">${formatTextHtml(problem.statement || '문제 본문이 아직 없습니다.')}</div>
        ${showAnswer ? `
          <div class="problem-answer math-region">
            <h4>정답</h4>
            ${formatTextHtml(problem.answer || '정답이 아직 없습니다.')}
          </div>
          <div class="problem-solution math-region">
            <h4>풀이 및 메모</h4>
            ${formatTextHtml(problem.solution || problem.reviewNote || '풀이 또는 메모가 아직 없습니다.')}
          </div>` : ''}
      </section>
      <aside class="problem-media">
        <h4>그림 자료</h4>
        ${images.length ? `<div class="media-grid">${images.map((img, i) => `<figure><img src="${escapeAttr(img.dataUrl)}" alt="${escapeAttr(img.caption || `그림 ${i + 1}`)}" /><figcaption>${escapeHtml(img.caption || `그림 ${i + 1}`)}</figcaption></figure>`).join('')}</div>` : '<div class="empty-box">첨부된 그림이 없습니다.</div>'}
      </aside>
    </div>
  `;
}

function formatTextHtml(text) {
  const normalized = normalizeDisplayText(text);
  const mathRe = /(\$\$[\s\S]+?\$\$|\\\[[\s\S]+?\\\])/g;
  const parts = [];
  let lastIndex = 0;
  for (const match of normalized.matchAll(mathRe)) {
    if ((match.index || 0) > lastIndex) {
      parts.push({ type: 'text', value: normalized.slice(lastIndex, match.index) });
    }
    parts.push({ type: 'math', value: match[0] });
    lastIndex = (match.index || 0) + match[0].length;
  }
  if (lastIndex < normalized.length) {
    parts.push({ type: 'text', value: normalized.slice(lastIndex) });
  }
  return parts.map((part) => {
    if (part.type === 'math') {
      return `<div class="display-math-block">${escapeHtml(part.value.trim())}</div>`;
    }
    return part.value.split(/\n{2,}/).map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return '';
      return `<p>${escapeHtml(trimmed).replace(/\n/g, '<br>')}</p>`;
    }).join('');
  }).join('');
}

function normalizeDisplayText(text) {
  let value = String(text ?? '').replace(/\r\n?/g, '\n');
  value = value.replace(/\\n\\n/g, '\n\n');
  value = value.replace(/(^|[\s.,!?;:)>\]}"'])\\n/g, '$1\n');
  return value;
}

function normalizeInputText(text) {
  return String(text ?? '').replace(/\r\n?/g, '\n');
}

function decodeEscapedNewlines(text) {
  return normalizeDisplayText(text);
}

function scheduleTypeset(root, attempts = 0) {
  if (window.MathJax?.typesetPromise) {
    try {
      if (window.MathJax.typesetClear) window.MathJax.typesetClear([root]);
      window.MathJax.typesetPromise([root]).catch(console.error);
    } catch (error) {
      console.error(error);
    }
  } else if (attempts < 20) {
    setTimeout(() => scheduleTypeset(root, attempts + 1), 150);
  }
}

function loadedProblemFromForm() {
  const formId = String(els.form?.elements?.id?.value || '').trim();
  return formId ? state.problems.find((p) => p.id === formId) || null : null;
}

function canModifyProblem(problem) {
  if (!problem) return canEditProblems();
  if (!canEditProblems()) return false;
  if (isOperator()) return true;
  return problem.authorId === state.currentUser?.id;
}

function enableProblemEditMode() {
  const problem = loadedProblemFromForm();
  if (!problem) {
    state.formEditMode = true;
    applyPermissions();
    return;
  }
  if (!canModifyProblem(problem)) {
    toast('이 문제를 편집할 권한이 없습니다.', 'error');
    return;
  }
  state.formEditMode = true;
  applyPermissions();
  toast('편집 모드가 활성화되었습니다.', 'success');
}

function applyPermissions() {
  const roleCanEdit = canEditProblems();
  const loaded = loadedProblemFromForm();
  const canModifyLoaded = canModifyProblem(loaded);
  const formEditable = !loaded ? roleCanEdit : (state.formEditMode && canModifyLoaded);
  els.form.classList.toggle('readonly-mode', !formEditable);
  [...els.form.querySelectorAll('input, select, textarea')].forEach((el) => {
    if (formEditable) {
      el.disabled = false;
      if ('readOnly' in el) el.readOnly = false;
      return;
    }
    if (el.tagName === 'SELECT' || el.type === 'file' || el.type === 'range' || el.type === 'checkbox') {
      el.disabled = true;
    } else if ('readOnly' in el) {
      el.readOnly = true;
      el.disabled = false;
    }
  });
  els.editorImages?.querySelectorAll('button').forEach((button) => { button.disabled = !formEditable; });
  els.compilePreview.disabled = !roleCanEdit;
  els.newProblem.disabled = !roleCanEdit;
  els.cloneProblem.disabled = !loaded;
  els.editProblem.disabled = !(loaded && canModifyLoaded && !state.formEditMode);
  const showApproveButton = Boolean(loaded && isOperator() && loaded.status !== 'approved');
  els.approveProblem?.classList.toggle('hidden', !showApproveButton);
  if (els.approveProblem) els.approveProblem.disabled = !showApproveButton;
  els.saveProblem.disabled = !formEditable;
  els.saveSubmit.disabled = !formEditable;
  els.deleteProblem.disabled = !(loaded && canModifyLoaded && state.formEditMode);
  applyStatusFieldPermissions();
}


function canBrowseProblemCatalog() {
  return Boolean(state.currentUser && state.currentUser.isApproved && ['author', 'operator', 'superadmin'].includes(state.currentUser.role));
}

function applyVisibleViews() {
  const allowed = availableViews();
  els.navButtons.forEach((button) => button.classList.toggle('hidden', !allowed.includes(button.dataset.view)));
}

function availableViews() {
  if (!state.currentUser) return ['overview-view'];
  if (isSuperAdmin()) return ['overview-view', 'author-view', 'review-view', 'game-view', 'play-view', 'data-view'];
  if (isOperator()) return ['overview-view', 'author-view', 'review-view', 'game-view', 'play-view'];
  if (canBrowseProblemCatalog()) return ['overview-view', 'author-view', 'play-view'];
  return ['overview-view', 'play-view'];
}

function switchView(viewId) {
  const allowed = availableViews();
  const target = allowed.includes(viewId) ? viewId : allowed[0];
  els.views.forEach((view) => view.classList.toggle('active', view.id === target));
  els.navButtons.forEach((button) => button.classList.toggle('active', button.dataset.view === target));
  if (target === 'author-view') renderAuthorView();
}

function applyTheme() {
  const saved = localStorage.getItem(CONFIG.themeKey);
  const preferredDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (preferredDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
  els.themeToggle.checked = theme === 'dark';
}

function onThemeToggle() {
  const theme = els.themeToggle.checked ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(CONFIG.themeKey, theme);
}

function setSidebarCollapsed(collapsed) {
  els.appShell.classList.toggle('sidebar-collapsed', collapsed);
  localStorage.setItem(CONFIG.sidebarKey, collapsed ? '1' : '0');
  els.sidebarToggle.setAttribute('aria-label', collapsed ? '사이드를 펼칩니다.' : '사이드를 접습니다.');
}

function toggleSidebar() {
  setSidebarCollapsed(!els.appShell.classList.contains('sidebar-collapsed'));
}

function applySidebarState() {
  setSidebarCollapsed(localStorage.getItem(CONFIG.sidebarKey) === '1');
}

function renderAdminScoreboard() {
  if (!els.adminScoreboard) return;
  if (!isOperator()) {
    els.adminScoreboard.innerHTML = '<div class="empty-box">운영자만 확인할 수 있습니다.</div>';
    return;
  }
  const totals = computeTeamTotals();
  els.adminScoreboard.innerHTML = totals.length ? totals.map((item, index) => `
    <div class="item-card score-card">
      <div><strong>${index + 1}위 · ${escapeHtml(item.teamName)}</strong><br><small>누적 점수입니다.</small></div>
      <span class="score-points">${escapeHtml(String(item.total))}점</span>
    </div>`).join('') : '<div class="empty-box">점수가 아직 없습니다.</div>';
}

function renderRoundResults() {
  if (!els.roundResults) return;
  const problem = currentLiveProblem();
  if (!problem || (state.gameState.phase !== 'reveal' && state.gameState.phase !== 'ended')) {
    els.roundResults.innerHTML = '';
    return;
  }
  const roundSubs = state.submissions.filter((s) => s.roundId === state.gameState.currentRoundId).sort((a, b) => Number(b.scoreAwarded || 0) - Number(a.scoreAwarded || 0));
  els.roundResults.innerHTML = roundSubs.length ? roundSubs.map((s) => `
    <div class="item-card score-card">
      <div><strong>${escapeHtml(teamName(s.teamId) || '팀')}</strong><br><small>${escapeHtml(s.submittedByName || '')}</small></div>
      <span class="score-points">${escapeHtml(String(s.scoreAwarded || 0))}점</span>
    </div>`).join('') : '<div class="empty-box">이번 문제 제출 기록이 없습니다.</div>';
}

function renderExport() {
  els.exportArea.value = JSON.stringify({
    users: state.users,
    problems: state.problems,
    gameState: state.gameState,
    participants: state.participants,
    teams: state.teams,
    submissions: state.submissions
  }, null, 2);
}

function exportJson() {
  renderExport();
  const blob = new Blob([els.exportArea.value], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `goldenbell-${Date.now()}.json`;
  a.click();
  URL.revokeObjectURL(url);
  toast('JSON 파일이 저장되었습니다.', 'success');
}

async function copyJson() {
  try {
    await navigator.clipboard.writeText(els.exportArea.value);
    toast('JSON 내용이 복사되었습니다.', 'success');
  } catch {
    toast('복사에 실패했습니다.', 'error');
  }
}

async function onImportFile(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  els.importArea.value = await file.text();
  toast('파일을 불러왔습니다.', 'info');
}

async function importJson(mode) {
  if (!isSuperAdmin()) return toast('총괄 운영자만 데이터를 가져올 수 있습니다.', 'error');
  try {
    const parsed = JSON.parse(els.importArea.value);
    if (mode === 'replace') {
      toast('전체 교체 기능은 현재 비활성화되어 있습니다. 병합을 사용해야 합니다.', 'info');
      return;
    }
    const { fsMod } = requireFirebaseReady();
    for (const user of parsed.users || []) {
      if (!user.id) continue;
      await fsMod.setDoc(fsMod.doc(state.db, 'users', user.id), user, { merge: true });
    }
    for (const problem of parsed.problems || []) {
      if (!problem.id) continue;
      await fsMod.setDoc(fsMod.doc(state.db, 'problems', problem.id), problem, { merge: true });
    }
    for (const participant of parsed.participants || []) {
      if (!participant.id) continue;
      await fsMod.setDoc(fsMod.doc(state.db, 'gameParticipants', participant.id), participant, { merge: true });
    }
    for (const team of parsed.teams || []) {
      if (!team.id) continue;
      await fsMod.setDoc(fsMod.doc(state.db, 'gameTeams', team.id), team, { merge: true });
    }
    for (const submission of parsed.submissions || []) {
      if (!submission.id) continue;
      await fsMod.setDoc(fsMod.doc(state.db, 'gameSubmissions', submission.id), submission, { merge: true });
    }
    if (parsed.gameState) {
      await fsMod.setDoc(fsMod.doc(state.db, 'gameState', CONFIG.gameStateDocId), parsed.gameState, { merge: true });
    }
    toast('데이터 병합이 완료되었습니다.', 'success');
  } catch (error) {
    console.error(error);
    toast(`가져오기에 실패했습니다: ${error.message}`, 'error');
  }
}

async function setGameState(patch) {
  const { fsMod } = requireFirebaseReady();
  await fsMod.setDoc(fsMod.doc(state.db, 'gameState', CONFIG.gameStateDocId), { ...patch, updatedAt: nowISO() }, { merge: true });
}


async function exportCurrentPreview(kind) {
  try {
    if (state.previewDirty) renderEditorPreview();
    const problem = collectProblemForm();
    const node = await buildExportCaptureNode(problem, true, { width: 1180, scale: 1.8 });
    const canvas = await captureExportNode(node);
    cleanupExportNode(node);
    const safeTitle = sanitizeFilename(str(problem.title) || 'problem');
    if (kind === 'jpg') {
      downloadCanvasAsJpg(canvas, `${safeTitle}.jpg`);
      toast('현재 문제를 JPG로 저장했습니다.', 'success');
      return;
    }
    await saveCanvasToPdf(canvas, `${safeTitle}.pdf`);
    toast('현재 문제를 PDF로 저장했습니다.', 'success');
  } catch (error) {
    console.error(error);
    toast(`문제 내보내기에 실패했습니다: ${error.message}`, 'error');
  }
}

async function exportAllProblemsOrderedPdf() {
  if (!isOperator()) {
    toast('운영자 권한이 필요합니다.', 'error');
    return;
  }
  const originalLabel = els.overviewExportPdf?.textContent || '문제 전체 PDF 내보내기';
  try {
    const problems = sortProblemsForExport(state.problems);
    if (!problems.length) throw new Error('내보낼 문제가 없습니다.');
    const pdfNS = window.jspdf;
    if (!pdfNS?.jsPDF) throw new Error('PDF 변환 라이브러리를 불러오지 못했습니다.');
    if (els.overviewExportPdf) setButtonLoading(els.overviewExportPdf, true, `내보내는 중 (0/${problems.length})`);
    const pdf = new pdfNS.jsPDF({ orientation: 'portrait', unit: 'pt', format: 'a4', compress: true });
    let firstPage = true;
    for (let index = 0; index < problems.length; index += 1) {
      const problem = problems[index];
      if (els.overviewExportPdf) setButtonLoading(els.overviewExportPdf, true, `내보내는 중 (${index + 1}/${problems.length})`);
      const node = await buildExportCaptureNode(problem, true, { width: 1180, scale: 1.35 });
      const canvas = await captureExportNode(node);
      cleanupExportNode(node);
      const pageCanvases = sliceCanvasForA4(canvas, pdf);
      for (const pageCanvas of pageCanvases) {
        if (!firstPage) pdf.addPage();
        firstPage = false;
        const pageWidth = pdf.internal.pageSize.getWidth();
        const margin = 28;
        const usableWidth = pageWidth - margin * 2;
        const ratio = usableWidth / pageCanvas.width;
        pdf.addImage(pageCanvas.toDataURL('image/png'), 'PNG', margin, margin, usableWidth, pageCanvas.height * ratio, undefined, 'FAST');
      }
      await new Promise((resolve) => setTimeout(resolve, 0));
    }
    pdf.save(`goldenbell-curriculum-${Date.now()}.pdf`);
    toast('전체 문제를 순차 PDF로 저장했습니다.', 'success');
  } catch (error) {
    console.error(error);
    toast(`전체 내보내기에 실패했습니다: ${error.message}`, 'error');
  } finally {
    if (els.overviewExportPdf) setButtonLoading(els.overviewExportPdf, false, originalLabel);
  }
}


async function buildExportCaptureNode(problem, showAnswer, options = {}) {
  const host = document.createElement('div');
  host.className = 'export-render-host';
  const shell = document.createElement('div');
  shell.className = 'export-capture-shell';
  if (options.width) shell.style.width = `${options.width}px`;
  if (options.scale) shell.dataset.exportScale = String(options.scale);
  shell.innerHTML = buildProblemMarkup(problem, 'desktop', showAnswer);
  host.appendChild(shell);
  document.body.appendChild(host);
  await typesetRoot(shell);
  stripAssistiveMath(shell);
  await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  return host;
}

function cleanupExportNode(node) {
  node?.remove();
}

async function captureExportNode(node) {
  if (!window.html2canvas) throw new Error('이미지 변환 라이브러리를 불러오지 못했습니다.');
  const target = node.firstElementChild || node;
  return await window.html2canvas(target, {
    backgroundColor: '#ffffff',
    scale: Number(target.dataset.exportScale || 1.8),
    useCORS: true,
    logging: false,
    windowWidth: target.scrollWidth,
    windowHeight: target.scrollHeight
  });
}

function downloadCanvasAsJpg(canvas, filename) {
  const a = document.createElement('a');
  a.href = canvas.toDataURL('image/jpeg', 0.95);
  a.download = filename;
  a.click();
}

async function saveCanvasToPdf(canvas, filename) {
  const pdfNS = window.jspdf;
  if (!pdfNS?.jsPDF) throw new Error('PDF 변환 라이브러리를 불러오지 못했습니다.');
  const pdf = new pdfNS.jsPDF({ orientation: 'portrait', unit: 'pt', format: 'a4' });
  const pages = sliceCanvasForA4(canvas, pdf);
  let firstPage = true;
  for (const pageCanvas of pages) {
    if (!firstPage) pdf.addPage();
    firstPage = false;
    const pageWidth = pdf.internal.pageSize.getWidth();
    const margin = 24;
    const usableWidth = pageWidth - margin * 2;
    const ratio = usableWidth / pageCanvas.width;
    pdf.addImage(pageCanvas.toDataURL('image/png'), 'PNG', margin, margin, usableWidth, pageCanvas.height * ratio, undefined, 'FAST');
  }
  pdf.save(filename);
}

function sliceCanvasForA4(canvas, pdf) {
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 24;
  const usableWidth = pageWidth - margin * 2;
  const usableHeight = pageHeight - margin * 2;
  const scale = usableWidth / canvas.width;
  const pageSliceHeightPx = Math.max(1, Math.floor(usableHeight / scale));
  const slices = [];
  for (let y = 0; y < canvas.height; y += pageSliceHeightPx) {
    const sliceHeight = Math.min(pageSliceHeightPx, canvas.height - y);
    const sliceCanvas = document.createElement('canvas');
    sliceCanvas.width = canvas.width;
    sliceCanvas.height = sliceHeight;
    const ctx = sliceCanvas.getContext('2d');
    ctx.drawImage(canvas, 0, y, canvas.width, sliceHeight, 0, 0, canvas.width, sliceHeight);
    slices.push(sliceCanvas);
  }
  return slices;
}

async function typesetRoot(root) {
  if (window.MathJax?.typesetPromise) {
    if (window.MathJax.typesetClear) window.MathJax.typesetClear([root]);
    await window.MathJax.typesetPromise([root]);
    return;
  }
  await new Promise((resolve) => setTimeout(resolve, 250));
}

function sanitizeFilename(value) {
  return value.replace(/[\/:*?"<>|]+/g, '_');
}

function sortProblemsForExport(problems) {
  const gradeOrder = { '1학년': 1, '2학년': 2, '3학년': 3, '+α': 4, '입학': 5, '졸업': 6 };
  const semesterOrder = { '1학기': 1, '2학기': 2, '기타': 3, '공통': 4 };
  return [...problems].sort((a, b) => {
    const g = (gradeOrder[a.grade] || 99) - (gradeOrder[b.grade] || 99);
    if (g) return g;
    const s = (semesterOrder[a.semester] || 99) - (semesterOrder[b.semester] || 99);
    if (s) return s;
    const d = String(a.detail || '').localeCompare(String(b.detail || ''), 'ko');
    if (d) return d;
    const t = String(a.track || '').localeCompare(String(b.track || ''), 'ko');
    if (t) return t;
    return String(a.title || '').localeCompare(String(b.title || ''), 'ko');
  });
}

async function openFullscreen() {
  try {
    const target = els.presenterShell || document.documentElement;
    if (target.requestFullscreen) {
      await target.requestFullscreen();
    }
  } catch (error) {
    console.error(error);
    toast('전체 화면 전환에 실패했습니다.', 'error');
  }
}

function setButtonLoading(button, loading, label) {
  if (!button) return;
  button.disabled = loading;
  if (label) button.textContent = label;
}

function toast(message, type = 'info') {
  const node = document.createElement('div');
  node.className = `toast ${type}`;
  node.textContent = message;
  els.toastRegion.appendChild(node);
  setTimeout(() => node.remove(), 3200);
}

function friendlyAuthError(error) {
  const code = error?.code || '';
  if (code.includes('invalid-credential') || code.includes('wrong-password') || code.includes('user-not-found')) return '이메일 또는 비밀번호가 올바르지 않습니다.';
  if (code.includes('email-already-in-use')) return '이미 사용 중인 이메일입니다.';
  if (code.includes('weak-password')) return '비밀번호가 너무 짧습니다.';
  if (code.includes('network-request-failed')) return '네트워크 연결을 확인해야 합니다.';
  if (code.includes('admin-restricted-operation')) return '현재 Firebase Authentication 설정에서 허용되지 않은 작업입니다.';
  return error?.message || '알 수 없는 인증 오류입니다.';
}

function friendlyFirestoreError(error) {
  const code = error?.code || '';
  if (code.includes('permission-denied')) return 'Firebase 규칙에서 쓰기 권한이 허용되지 않았습니다.';
  if (code.includes('unavailable')) return '네트워크 연결 또는 Firebase 서비스 상태를 확인해야 합니다.';
  return error?.message || '알 수 없는 저장 오류입니다.';
}

function canEditProblems() {
  return Boolean(state.currentUser && state.currentUser.isApproved && ['author', 'operator', 'superadmin'].includes(state.currentUser.role));
}

function isOperator() {
  return Boolean(state.currentUser && state.currentUser.isApproved && ['operator', 'superadmin'].includes(state.currentUser.role));
}

function isSuperAdmin() {
  return Boolean(state.currentUser && state.currentUser.isApproved && state.currentUser.role === 'superadmin');
}

function normalizeDifficulty(value) {
  const raw = String(value || '').trim();
  if (['상', '중', '하'].includes(raw)) return raw;
  if (['A+', 'A0', 'A-', 'B+'].includes(raw)) return '상';
  if (['B0', 'C+'].includes(raw)) return '중';
  if (['C', 'C-'].includes(raw)) return '하';
  return '중';
}

function curriculumSummary(grade) {
  const semesters = CURRICULUM[grade] || {};
  const summaries = [];
  Object.entries(semesters).forEach(([semester, courses]) => {
    Object.entries(courses).forEach(([course, tracks]) => {
      summaries.push(`${semester} · ${course} · ${tracks.join('/')}`);
    });
  });
  return summaries.join(', ');
}

function str(value) { return String(value || '').trim(); }
function nowISO() { return new Date().toISOString(); }
function uid(prefix = 'id') { return `${prefix}-${Math.random().toString(36).slice(2, 10)}-${Date.now().toString(36)}`; }
function byUpdatedDesc(a, b) { return new Date(b.updatedAt || b.createdAt || 0) - new Date(a.updatedAt || a.createdAt || 0); }
function escapeHtml(value) {
  return String(value ?? '').replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');
}
function escapeAttr(value) { return escapeHtml(value).replaceAll('`', '&#96;'); }

function resizeImage(file, maxDim = 1600, quality = 0.84) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        let { width, height } = img;
        const ratio = Math.min(1, maxDim / Math.max(width, height));
        width = Math.round(width * ratio);
        height = Math.round(height * ratio);
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      img.onerror = reject;
      img.src = reader.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
