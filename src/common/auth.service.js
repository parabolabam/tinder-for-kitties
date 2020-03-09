import { auth, usersCollection } from '../../firebaseConfig';

class AuthService {
  login({ email, password }) {
    return auth.signInWithEmailAndPassword(
      email,
      password,
    );
  }

  async logout() {
    await auth.signOut();
  }

  async signup({ email, password }) {
    const { user } = await auth.createUserWithEmailAndPassword(email, password);

    await usersCollection.doc(user.uid).set({ email });

    return { user };
  }
}

export default new AuthService();
