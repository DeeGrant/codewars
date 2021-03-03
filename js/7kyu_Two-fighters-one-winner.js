// https://www.codewars.com/kata/577bd8d4ae2807c64b00045b

function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() { return this.name; }
}

// more oop solution ---------------------------------------------------------------------------------------------------
// v
Fighter.prototype.attack = function (defender) {
    defender.health = defender.health - this.damagePerAttack
}

function declareWinner(fighter1, fighter2, firstAttacker) {
    let isOneAttacking = fighter1.toString() === firstAttacker
    // fight
    do {
        isOneAttacking ?
            fighter1.attack(fighter2)
        :
            fighter2.attack(fighter1)

        isOneAttacking = !isOneAttacking
    } while (fighter1.health > 0 && fighter2.health > 0)

    // winner
    isOneAttacking = !isOneAttacking
    return isOneAttacking ? fighter1.toString() : fighter2.toString()
}
// ^
// more oop solution ---------------------------------------------------------------------------------------------------



// first solution ------------------------------------------------------------------------------------------------------
// v

// function declareWinner(fighter1, fighter2, firstAttacker) {
//     let oneIsAttacker = fighter1.toString() === firstAttacker
//     // fight
//     do {
//         if (oneIsAttacker) {
//             attack(fighter1, fighter2)
//         } else {
//             attack(fighter2, fighter1)
//         }
//         oneIsAttacker = !oneIsAttacker
//     } while (fighter1.health > 0 && fighter2.health > 0)
//
//     // winner
//     oneIsAttacker = !oneIsAttacker
//     return oneIsAttacker ? fighter1.toString() : fighter2.toString()
// }
//
// function attack(attacker, defender) {
//     defender.health = defender.health - attacker.damagePerAttack
// }

// ^
// first solution ------------------------------------------------------------------------------------------------------