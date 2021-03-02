// https://www.codewars.com/kata/577bd8d4ae2807c64b00045b

function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() { return this.name; }
}

function declareWinner(fighter1, fighter2, firstAttacker) {
    let oneIsAttacker = fighter1.toString() === firstAttacker
    // fight
    do {
        if (oneIsAttacker) {
            attack(fighter1, fighter2)
        } else {
            attack(fighter2, fighter1)
        }
        oneIsAttacker = !oneIsAttacker
    } while (fighter1.health > 0 && fighter2.health > 0)

    // winner
    oneIsAttacker = !oneIsAttacker
    return oneIsAttacker ? fighter1.toString() : fighter2.toString()
}

function attack(attacker, defender) {
    defender.health = defender.health - attacker.damagePerAttack
}
