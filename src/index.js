import Phaser from 'phaser'
import MainScene from './Scenes/MainScene'
import IntroScene from './Scenes/IntroScene'

var game = new Phaser.Game({
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    width: 1280,
    height: 720,
    autoCenter: Phaser.Scale.Center.CENTER_HORIZONTALLY
  },
  scene: [IntroScene, MainScene]
})
