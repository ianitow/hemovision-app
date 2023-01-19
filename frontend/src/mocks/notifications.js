const NOTIFICATIONS_TYPE = {
  LOVE_POST: 'LOVE_POST',
  START_FOLLOWING_YOU: 'START_FOLLOWING_YOU',
  COMMENT_POST: 'COMMENT_POST',
  IA_CLASSIFY_POST: 'IA_CLASSIFY_POST',
  SYSTEM: 'SYSTEM_NOTIFICATION',
  NEW_CONQUEST: 'NEW_CONQUEST',
  METION_YOU: 'METION_YOU',
  ANALYTICS_POST: 'ANALYTICS_POST',
};
export default [
  {
    type: NOTIFICATIONS_TYPE.COMMENT_POST,
    user: {
      firstName: 'Iaan',
      lastName: 'Mesquita',
      avatar: {
        uri: 'https://i.pravatar.cc/300',
      },
    },
    post: {
      id: '123321',
      image:
        'https://cdn.britannica.com/25/106525-004-57246AF8/Bone-marrow-smear-cells-myelocytes-cluster-metamyelocyte.jpg',
    },
    date: '2022-12-28T18:47:56.054Z',
  },
  {
    type: NOTIFICATIONS_TYPE.START_FOLLOWING_YOU,
    user: {
      firstName: 'João',
      lastName: 'Almeida',
      avatar: {
        uri: 'https://i.pravatar.cc/300',
      },
    },
    date: '2022-12-28T18:47:56.054Z',
  },
  {
    type: NOTIFICATIONS_TYPE.COMMENT_POST,
    user: {
      firstName: 'Lucas',
      lastName: 'Silva',
      avatar: {
        uri: 'https://i.pravatar.cc/300',
      },
    },
    post: {
      id: '123321',
      image:
        'https://cdn.britannica.com/25/106525-004-57246AF8/Bone-marrow-smear-cells-myelocytes-cluster-metamyelocyte.jpg',
    },
    date: '2022-12-28T18:47:56.054Z',
  },
  {
    type: NOTIFICATIONS_TYPE.IA_CLASSIFY_POST,
    ia: {
      classification: '',
    },
    post: {
      id: '123321',
      image:
        'https://cdn.britannica.com/25/106525-004-57246AF8/Bone-marrow-smear-cells-myelocytes-cluster-metamyelocyte.jpg',
    },
    date: '2022-12-28T18:47:56.054Z',
  },
  {
    type: NOTIFICATIONS_TYPE.SYSTEM,
    options: {
      type: '',
      message: '',
    },
    date: '2022-12-28T18:47:56.054Z',
  },
  {
    type: NOTIFICATIONS_TYPE.NEW_CONQUEST,
    options: {
      type: '',
      message: '',
    },
    date: '2022-12-28T18:47:56.054Z',
  },
  {
    type: NOTIFICATIONS_TYPE.METION_YOU,
    user: {
      firstName: 'Iaan',
      lastName: 'Mesquita',
      avatar: {
        uri: 'https://i.pravatar.cc/300',
      },
    },
    post: {
      id: '123321',
      image:
        'https://cdn.britannica.com/25/106525-004-57246AF8/Bone-marrow-smear-cells-myelocytes-cluster-metamyelocyte.jpg',
    },
    date: '2022-12-28T18:47:56.054Z',
  },
];
