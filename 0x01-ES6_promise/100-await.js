import { uploadPhoto, createUser } from './utils.js';

export default async function asyncUploadUser() {
  try {
    const resFromUploadPhoto = await uploadPhoto();
    const resFromCreateUser = await createUser();
    return {
      photo: resFromUploadPhoto,
      user: resFromCreateUser,
    };
  } catch
  (err) {
    return {
      photo: null,
      user: null,
    };
  }
}
