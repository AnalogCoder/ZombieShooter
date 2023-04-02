import MainScene from './MainScene'

export default class IntroScene extends Phaser.Scene {
  constructor() {
    super({key: 'Intro'})
  }
  preload() {
  }
  create() {
    console.log(this.game.scale.width)
    this.add.text(this.game.scale.width/2, this.game.scale.height/2, 'Zoombie Shooter', { fontFamily: 'Arial', fontSize: 80, color: 'red' }).setOrigin(0.5, 0.5)
    this.input.on('pointerdown', (point) => {
    console.log(point)
    this.scene.start('Main')
    })
  }
}
