const ZERO_WIDTH_WHITE_SPACE = '\u200B';

function applyBlockList(blockObject) {
  const $posts = document.querySelectorAll('.threads li');

  $posts.forEach(($post) => {
    const $topic = $post.querySelector('a');
    const $user = $post.querySelector('.membername');
    const userName = $user.textContent;
    const isBlockedUser = blockObject[userName]?.isBlocked;

    if (isBlockedUser) {
      $user.textContent = ZERO_WIDTH_WHITE_SPACE;
      $topic.textContent = ZERO_WIDTH_WHITE_SPACE;
    }
  });
}

const blockObject = {
  abductee: {
    name: 'abductee',
    isBlocked: true,
  },
  bngvosnwaj: {
    name: 'bngvosnwaj',
    isBlocked: true,
  },
  bngvcmtfzj: {
    name: 'bngvcmtfzj',
    isBlocked: true,
  },
  bngvtadfqj: {
    name: 'bngvtadfqj',
    isBlocked: true,
  },
};

applyBlockList(blockObject);
