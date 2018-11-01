class Restaurant {
  constructor (props) {
      this.discount = props.discount
      this.menu = props.menu
      this.comboMeal = []
  }

  // Checks if item being passed to setter is an Array. If so, adds each to comboMeal property
  set combo (items) {
    const conditional = Array.isArray(this.comboMeal)
    conditional ? items.forEach(item => 
      this.comboMeal.push(item)) : console.log("This is not an array.")
}

  get comboPrice () {
    let comboTotal = 0
    this.comboMeal.forEach(prop => {
      comboTotal += prop
    })

    //-----old hard-code------
    // let comboPrice =
    //     this.menu.fries +
    //     this.menu.burger

    return `$${(comboTotal * this.discount).toFixed(2)}`
    }
}

const bobsBurgers = new Restaurant({
  discount: 0.85,
  menu: {
      fries: 1.29,
      burger: 3.69
  }
})

// Pass menu items into combo setter
bobsBurgers.combo = [bobsBurgers.menu.fries, bobsBurgers.menu.burger]

// Run comboPrice getter
bobsBurgers.comboPrice