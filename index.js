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
  methods: {
    newGame() {
      this.sequence = []
      this.addNewElemToSequence()
      this[this.sequence[0]] = true
      setTimeout(function() {
        vm.allGray() = false
      }, 300)
      
    },
    allGray() {
    this.hautGauche = false
    this.hautDroite = false
    this.basGauche = false
    this.basDroite = false
    },
    addNewElemToSequence() {
     this.sequence.push(this.squareMapping[Math.floor(Math.random() * 4)])
   }
  }
});