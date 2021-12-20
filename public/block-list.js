// const ZERO_WIDTH_WHITE_SPACE = '\u200B';
const BLOCKED_THREAD_CLASS = 'blocked-thread';
const PARTIAL_BLOCK_TYPE = 'partially-blocked';
const FULL_BLOCK_TYPE = 'fully-blocked';
const EMPTY_MESSAGE_CLASS = 'empty-message';
const HIDE_CLASS = 'hide';

function applyBlockList(blockObject) {
  const $threads = document.querySelector('.threads');
  const $posts = $threads.querySelectorAll('li');
  // reset empty style
  hideEmptyStyle();

  $posts.forEach(($post) => {
    const $postThread = $post.parentElement;
    const $user = $post.querySelector('.membername');
    const userName = $user.textContent;
    const isBlockedUser = blockObject[userName]?.isBlocked;

    if (isBlockedUser) {
      $postThread.classList.add(HIDE_CLASS);
      $postThread.classList.add(BLOCKED_THREAD_CLASS);
    }
  });

  if (!$threads.clientHeight) {
    showEmptyStyle();
  }
}

function addEmptyMessage() {
  const $threads = document.querySelector('.threads');
  const EMPTY_MESSAGE_CONTENT_HTML = `
    <p>Looks like you've blocked everyone on this page, lul</p>
  `;
  const $emptyMessage = document.createElement('main');
  // hide by default
  $emptyMessage.classList.add(EMPTY_MESSAGE_CLASS, HIDE_CLASS);
  $emptyMessage.innerHTML = EMPTY_MESSAGE_CONTENT_HTML;

  $threads.appendChild($emptyMessage);
}

function showEmptyStyle() {
  const $threads = document.querySelector('.threads');
  const $emptyMessage = $threads.querySelector(`.${EMPTY_MESSAGE_CLASS}`);

  $emptyMessage.classList.remove(HIDE_CLASS);
}

function hideEmptyStyle() {
  const $threads = document.querySelector('.threads');
  const $emptyMessage = $threads.querySelector(`.${EMPTY_MESSAGE_CLASS}`);

  $emptyMessage.classList.add(HIDE_CLASS);
}

const blockObject = {
  abductee: {
    name: 'abductee',
    isBlocked: true,
    blockType: PARTIAL_BLOCK_TYPE,
  },
  bngvosnwaj: {
    name: 'bngvosnwaj',
    isBlocked: true,
    blockType: FULL_BLOCK_TYPE,
  },
  bngvcmtfzj: {
    name: 'bngvcmtfzj',
    isBlocked: true,
    blockType: FULL_BLOCK_TYPE,
  },
  bngvtadfqj: {
    name: 'bngvtadfqj',
    isBlocked: true,
    blockType: FULL_BLOCK_TYPE,
  },
};

addEmptyMessage();
applyBlockList(blockObject);
