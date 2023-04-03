import MainScene from './MainScene'

export default class IntroScene extends Phaser.Scene {
  constructor() {
    super({key: 'Intro'})
  }

  preload() {
    this.load.spritesheet('zombie_idle', './asset/img/zombie/idle.png', { frameWidth: 200, frameHeight: 308 })
  }

  create() {
    this.anims.create({
      key: 'zombie_idle',
      frames: this.anims.generateFrameNumbers('zombie_idle', { frames: [ 0, 1, 2, 3, 4, 5 ] }),
      frameRate: 10,
      repeat: -1
    })
    this.add.text(this.game.scale.width/2, 200, 'Zoombie Shooter', { fontFamily: 'Arial', fontSize: 80, color: 'red' }).setOrigin(0.5, 0.5)
    this.add.sprite(1000 ,500).play('zombie_idle')
    this.textTap = this.add.text(this.game.scale.width/2, 500, 'Tap to continue', { fontFamily: 'Arial', fontSize:50, color: 'white' }).setAlpha(1).setOrigin(0.5, 0.5)

    this.input.on('pointerdown', (point) => {
      this.scene.start('Main')
    })

    this.tweens.add({
      targets: this.textTap,
      alpha: 0, 
      duration: 500,
      ease: 'Linear',
      yoyo: true,
      repeat: -1
    })
  }

  update () {
  }
}
