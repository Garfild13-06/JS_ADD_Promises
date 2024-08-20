// TODO: write your code here
import sum from './basic';
import GameSavingLoader from './GameSavingLoader';


console.log('worked');

console.log(sum([1, 2]));

GameSavingLoader.load()
  .then((saving) => {
    console.log('Game saving loaded:', saving);
    // Здесь вы можете использовать объект saving, например:
    // console.log(`User name: ${saving.userInfo.name}`);
  })
  .catch((error) => {
    console.error('Failed to load game saving:', error);
  });
