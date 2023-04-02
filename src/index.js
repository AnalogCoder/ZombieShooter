import Phaser from 'phaser'
import MainScene from './Scenes/MainScene'
import IntroScene from './Scenes/IntroScene'

var config = {
  type: Phaser.AUTO,
  parent: 'app',
  scale: {
    mode: Phaser.Scale.FIT,
    parent: 'app',
    expandParent: false,
    autoCenter: Phaser.Scale.Center.CENTER_BOTH
  },
  scene: [IntroScene, MainScene]
}
window.onload = () => {
  var game = new Phaser.Game(config);
}

