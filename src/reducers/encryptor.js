import createEncryptor from 'redux-persist-transform-encrypt';

const encryptor = createEncryptor({
  secretKey: 'kanban-test-key'
});

export default encryptor;