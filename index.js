#!/usr/bin/env node
import inquirer from "inquirer";
//-------------------------game variables ------------------//
let enmies = ["Imran", "Ghaffar", "Hameed", "Sameer", "Danish", "Nawaz Sharif", "Shabaz Sharif", "Maryam Nawaz", "Dildar", "jameel"];
let maxEnemyHealth = 75;
let enemyAttacktoHerro = 25;
//-------------------------Player variables ----------------//
let heroHealth = 100;
let heroAttacktoEnemy = 50;
let numHealthPottion = 3;
let healthPottionAmount = 30;
let heatlhPottionDropChance = 50;
//----------------  while loop Condition--------------------//
let running = true;
console.log("Welcome to Mouth-Ka-Kail \n");
game: while (running) {
    let enemyHealth = Math.floor(Math.random() * maxEnemyHealth + 1);
    let indexEnemy = Math.floor(Math.random() * enmies.length);
    let enemy = enmies[indexEnemy];
    console.log(`# ${enemy} has appeared # \n`);
    while (enemyHealth > 0) {
        console.log(`Your health ${heroHealth}`);
        console.log(`${enemy} Health: ${enemyHealth}`);
        var options = await inquirer.prompt({
            name: "ans",
            type: "list",
            message: "What would you like to do",
            choices: ["1. Attack", "2. Take Health Potion", "3. Run..", "4. Exit.."]
        });
        if (options.ans === "1. Attack") {
            let damageToEnemy = Math.floor(Math.random() * heroAttacktoEnemy + 1);
            let damageToHero = Math.floor(Math.random() * enemyAttacktoHerro + 1);
            enemyHealth -= damageToEnemy;
            heroHealth -= damageToHero;
            console.log(`You strike the ${enemy} for ${damageToEnemy}`);
            console.log(`${enemy} strike you for ${damageToHero} damage.`);
            if (heroHealth < 1) {
                console.log(`You have taken too much damage you can't continue`);
                break;
            }
        }
        else if (options.ans === "2. Take Health Potion") {
            if (numHealthPottion > 0) {
                heroHealth += healthPottionAmount;
                numHealthPottion--;
                console.log(`You use health potion for ${healthPottionAmount}`);
                console.log(`You now have ${heroHealth} Health`);
                console.log(`You have ${numHealthPottion} health potion left`);
            }
            else {
                console.log(`You have no health potions left. defeat enemy for a chance get heatlh potion `);
            }
        }
        else if (options.ans === "3. Run..") {
            console.log(`You run away from ${enemy}`);
            continue game;
        }
        else {
            console.log("You are successfuly exit from Mouth-Ka-Kail\n");
            break;
        }
    }
    if (options.ans !== "4. Exit..") {
        if (heroHealth < 1) {
            console.log('You are out from battle you are too weak. ');
            break;
        }
        console.log(`${enemy} was defeated!, \n`);
        console.log(`you have ${heroHealth} health`);
        let randomNumber = Math.floor(Math.random() * 100 + 1);
        if (randomNumber < heatlhPottionDropChance) {
            numHealthPottion++;
            console.log(`${enemy} give you health potion`);
            console.log(`your heatlh is ${heroHealth}`);
            console.log(`your heatlh potion is ${numHealthPottion}`);
        }
        let userOption = await inquirer.prompt({
            name: "ans",
            type: "list",
            message: "You wanna play again?",
            choices: ["1. continue", "2. exit"],
        });
        if (userOption.ans === "1. continue") {
            console.log(`You are continue on your game \n`);
        }
        else {
            console.log("You are successfuly exit from Mouth-Ka-Kail\n");
            console.log('Thank you for playing');
            break;
        }
    }
    else {
        break;
    }
}
