const vm = new Vue({
  el: '#app',
  data: {
    sequence: [],
    tmp: [],
    hautGauche: false,
    hautDroite: false,
    basGauche: false,
    basDroite: false,
    squareMapping: ["hautGauche", "hautDroite", "basGauche", "basDroite"]
  },
  computed: {
    score() {
      const value = this.sequence.length - 1
      return (value < 0) ? 0 : value
    }
  },
  methods: {
    newGame() {
      this.sequence = []
      this.nextTurn()
    },
    nextTurn() {
      this.addNewElemToSequence()
      this.allGray()
      this.playSequence(this.tmp[0])
    },
    allGray() {
    this.hautGauche = false
    this.hautDroite = false
    this.basGauche = false
    this.basDroite = false
    },
    playSequence(instruction) {
      setTimeout(function() { 
        vm[instruction] = true
        setTimeout(function() {
          vm.allGray()
          vm.tmp.shift()
          if (vm.tmp[0]) {
            vm.playSequence(vm.tmp[0])
          } else {
            vm.tmp = vm.sequence.slice()
          }
        }, 400)
      }, 400) 
    },
    addNewElemToSequence() {
     this.sequence.push(this.squareMapping[Math.floor(Math.random() * 4)])
     this.tmp = this.sequence.slice()
   },
   selectSquare(instruction) {
     if (instruction === this.tmp[0]){
      vm[instruction] = true
      setTimeout(function() {
        vm.allGray()
        vm.tmp.shift()
        if (!vm.tmp[0]) {
          vm.nextTurn()
        }
      }, 400)
    } else {
       alert('Perdu!')
     }
   }
  }
})
