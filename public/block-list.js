const ZERO_WIDTH_WHITE_SPACE = '\u200B';

function applyBlockList(blockObject) {
  const $posts = document.querySelectorAll('.threads li');

  $posts.forEach(($post) => {
    const $topic = $post.querySelector('a');
    const $topicThread = $topic.querySelector('ul');
    const $user = $post.querySelector('.membername');
    const userName = $user.textContent;
    const isBlockedUser = blockObject[userName]?.isBlocked;
    const isFullyBlockedUser = blockObject[userName]?.isFullyBlocked;

    if (isBlockedUser) {
      $user.textContent = ZERO_WIDTH_WHITE_SPACE;
      $topic.textContent = ZERO_WIDTH_WHITE_SPACE;
    }

    if (isFullyBlockedUser) {
      $topic.style = 'display: none';

      if ($topicThread) {
        $topicThread.parentElement.style = 'display: none';
      }
    }
  });
}

const blockObject = {
  abductee: {
    name: 'abductee',
    isBlocked: true,
    isFullyBlocked: true,
  },
  bngvosnwaj: {
    name: 'bngvosnwaj',
    isBlocked: true,
    isFullyBlocked: true,
  },
  bngvcmtfzj: {
    name: 'bngvcmtfzj',
    isBlocked: true,
    isFullyBlocked: true,
  },
  bngvtadfqj: {
    name: 'bngvtadfqj',
    isBlocked: true,
    isFullyBlocked: true,
  },
};

applyBlockList(blockObject);
