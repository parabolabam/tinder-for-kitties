import { postsCollection, usersCollection, fieldValue } from '../../firebaseConfig';

export async function createPost({ userId, postContent: { text } }) {
  const { id } = await postsCollection.add({ userId, postContent: { text } });

  return usersCollection.doc(userId).update({ postsIds: fieldValue.arrayUnion(id) });
}

export function nameLater() {}
