export function resolveAuthError(code) {
  switch (code) {
    case 'auth/wrong-password':
      return 'Invalid password';
    case 'auth/user-not-found':
      return 'User not found';
    case 'auth/invalid-email':
      return 'Invalid email ';

    default:
      break;
  }
}
