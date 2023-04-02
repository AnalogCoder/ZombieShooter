export default class MainScene extends Phaser.Scene {
  constructor() {
    super({key: 'Main'})
    this.zombies = []
  }
  preload() {
    console.log('preload start')
    this.load.spritesheet('zombie_appear', './asset/img/zombie/appear.png', { frameWidth: 220, frameHeight: 288 })
    this.load.spritesheet('zombie_attack', './asset/img/zombie/attack.png', { frameWidth: 372, frameHeight: 324 })
    this.load.spritesheet('zombie_die', './asset/img/zombie/die.png', { frameWidth: 444, frameHeight: 292 })
    this.load.spritesheet('zombie_idle', './asset/img/zombie/idle.png', { frameWidth: 200, frameHeight: 308 })
    this.load.spritesheet('zombie_walk', './asset/img/zombie/walk.png', { frameWidth: 200, frameHeight: 312 })
    console.log('preload end')
  }
  create() {
    console.log('create start')
    this.anims.create({
      key: 'zombie_appear',
      frames: this.anims.generateFrameNumbers('zombie_appear', { frames: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] }),
      frameRate: 3,
      repeat: -1
    })
    this.anims.create({
      key: 'zombie_attack',
      frames: this.anims.generateFrameNumbers('zombie_attack', { frames: [ 0, 1, 2, 3, 4, 5, 6 ] }),
      frameRate: 10,
      repeat: -1
    })
    this.anims.create({
      key: 'zombie_die',
      frames: this.anims.generateFrameNumbers('zombie_die', { frames: [ 0, 1, 2, 3, 4, 5, 6, 7 ] }),
      frameRate: 10,
      repeat: -1
    })
    this.anims.create({
      key: 'zombie_idle',
      frames: this.anims.generateFrameNumbers('zombie_idle', { frames: [ 0, 1, 2, 3, 4, 5 ] }),
      frameRate: 10,
      repeat: -1
    })
    this.anims.create({
      key: 'zombie_walk',
      frames: this.anims.generateFrameNumbers('zombie_walk', { frames: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ] }),
      frameRate: 10,
      repeat: -1
    })
    const z = this.add.sprite(400 ,200)
    z.play('zombie_appear')
    console.log('create end')
  }
  update () {}
}
