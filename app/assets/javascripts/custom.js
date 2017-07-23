/* global $ */
$(document).ready(function() {
    
    // Variables
    var para = document.querySelector('#total_effort');
    var effortSecond = document.querySelector('#effort_per_second');
    
    // Punch
    var btnPunch = document.querySelector('.click');
    
    // Knuckle
    var btnKnuckle = document.querySelector('.knuckle_duster');
    var numKnuckle = document.querySelector('#num_knuckle');
    var knuckleCost = document.querySelector('#knuckle_cost');
    
    // Baseball bat
    var btnBaseball = document.querySelector('.baseball_bat');
    var numBaseball = document.querySelector('#num_baseball');
    var baseballCost = document.querySelector('#baseball_cost');
    
    
    
    var totalEffort = 0;
    var effortPerSecond = 0;
    var knuckleDuster = 0;
    var baseballBat = 0;
    
    function effort(number) {
        totalEffort = totalEffort + number;
        para.textContent = totalEffort;
    }

    // When a knuckle Duster is Bought.
    function buyKnuckleDuster() {
        // Cost starts at 10, then increases by 1.1^n, where n = number of knuckle dusters bought.
        var knuckleDusterCost = Math.floor(10 * Math.pow(1.1, knuckleDuster));
        if (totalEffort >= knuckleDusterCost) {
            // Increase number of knuckle dusters owned by 1.
            knuckleDuster = knuckleDuster + 1;
            // Take off price of knuckle duster from total effort.
            totalEffort = totalEffort - knuckleDusterCost;
            // Update totalEffort to reflect the decrease in effort due to purchase.
            para.textContent = totalEffort;
            // Update HTML showing number of knuckle dusters owned.
            numKnuckle.textContent = knuckleDuster;
            // Update HTML to show the cost of each knuckle duster purchase increasing.
            knuckleCost.textContent = knuckleDusterCost;
            // Increase effort per second by the value of the upgrade.
            effortPerSecond = effortPerSecond + 1;
            // Update HTML to show the increase in Effort per Second.
            effortSecond.textContent = effortPerSecond;
        }
    }
    
    function buyBaseballBat() {
        var baseballBatCost = Math.floor(100*Math.pow(1.1, baseballBat));
        if (totalEffort >= baseballBatCost) {
            baseballBat = baseballBat + 1;
            totalEffort = totalEffort - baseballBatCost;
            para.textContent = totalEffort;
            numBaseball.textContent = baseballBat;
            baseballCost.textContent = baseballBatCost;
            effortPerSecond = effortPerSecond + 5;
            effortSecond.textContent = effortPerSecond;
        }
    }
    
    // One click = 1 Effort for a Punch
    btnPunch.onclick = function() {
        totalEffort = totalEffort + 1;
        para.textContent = totalEffort;
    };
    
    // When knuckleButton is pressed, run the function buyKnuckleDuster
    btnKnuckle.onclick = buyKnuckleDuster;
    btnBaseball.onclick = buyBaseballBat;
    
    window.setInterval(function() {
        effort(knuckleDuster);
        effort(baseballBat);
    }, 1000);
    
});