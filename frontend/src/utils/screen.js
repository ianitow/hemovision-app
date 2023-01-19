import * as ScreenOrientation from 'expo-screen-orientation';
export async function lockPortraitMode() {
  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
}
