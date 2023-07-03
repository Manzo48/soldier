const soldier = {
    name: 'Халк',
    health: 10,
    weapon: {
      name: 'ПП',
      cartridge: 30,
    },
    supplies: 3,
  
    fire: function () {
        this.weapon.cartridge--
        console.log("бах-бах")
        if (this.weapon.cartridge <= 0){
            console.log('обойма пуста. Перезаредитесь')
        }
    },
    charge: function () {
        this.weapon.cartridge = 30;
        this.supplies--;
        console.log('перезарядка...')
        if (this.supplies <= 0){
            console.log('не осталось припасов')
        }
    },
    hurt: function () {
        this.health--;
        if (this.health <= 0){
            console.log('ты проиграл')
        }
    },
  };

  soldier.hurt();
  soldier.hurt();
  soldier.hurt();
  soldier.hurt();
  soldier.hurt();
  soldier.hurt();
  soldier.hurt();
  soldier.hurt();
  soldier.hurt();
  soldier.hurt();
  soldier.hurt();
  
