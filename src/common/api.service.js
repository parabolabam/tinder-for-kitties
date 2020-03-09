import { usersCollection } from '../../firebaseConfig';

class ApiService {
  fetchUser(uid) {
    return usersCollection.doc(uid).get();
  }
}

export default new ApiService();
