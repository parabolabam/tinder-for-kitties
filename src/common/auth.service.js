import { auth, usersCollection } from '../../firebaseConfig';

class AuthService {
  async signup({ email, password }) {
    const { user } = await auth.createUserWithEmailAndPassword(
      email,
      password,
    );

    await usersCollection
      .doc(user.uid)
      .set({
        email,
      });

    return { user };
  }

  login({ email, password }) {
    return auth.signInWithEmailAndPassword(
      email,
      password,
    );
  }

  async logout() {
    await auth.signOut();
  }
}

export default new AuthService();
