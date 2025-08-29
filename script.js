document.addEventListener('DOMContentLoaded', () => {

            // Part 1: Variable Declarations and Conditionals
           
            // Using const for a value that will not change.
            const fixedRate = 0.05;

            // Using let for a value that might change.
            let userAge = 25;

            // Using var for a variable with a wider scope (generally discouraged in modern JS).
            var username = "js_user";

            // Conditional statement based on a variable.
            if (userAge >= 18) {
                console.log(`${username} is an adult. The fixed rate is ${fixedRate}.`);
            } else {
                console.log(`${username} is a minor. Special rules may apply.`);
            }

            // Part 2: Custom Functions
            /**
             * Calculates a future value based on an initial amount and an interest rate.
             * @param {number} principal - The initial amount of money.
             * @param {number} rate - The annual interest rate.
             * @param {number} years - The number of years.
             * @returns {number} The future value.
             */
            function calculateFutureValue(principal, rate, years) {
                return principal * Math.pow((1 + rate), years);
            }

            /**
             * Updates the message on the webpage and prints a result.
             */
            function updateMessage() {
                const principalAmount = 1000;
                const years = 5;
                const futureValue = calculateFutureValue(principalAmount, fixedRate, years);

                const message = `After ${years} years, your $${principalAmount} will grow to $${futureValue.toFixed(2)} at a ${fixedRate * 100}% annual rate.`;

                // Part 4: DOM Interaction - Modifying content
                const messageParagraph = document.getElementById('message-paragraph');
                messageParagraph.textContent = message;
            }

            // Part 3: Loop Examples

            const loopList = document.getElementById('loop-list');

            function runLoops() {
                loopList.innerHTML = ''; // Clear previous output
                
                // Example 1: A for loop to iterate a specific number of times.
                console.log("--- For Loop Output ---");
                for (let i = 0; i < 3; i++) {
                    const listItem = document.createElement('li');
                    const text = `For loop iteration: ${i}`;
                    console.log(text);
                    listItem.textContent = text;
                    loopList.appendChild(listItem);
                }

                // Example 2: A while loop to iterate until a condition is met.
                console.log("--- While Loop Output ---");
                let counter = 0;
                while (counter < 3) {
                    const listItem = document.createElement('li');
                    const text = `While loop iteration: ${counter}`;
                    console.log(text);
                    listItem.textContent = text;
                    loopList.appendChild(listItem);
                    counter++;
                }
            }

            // Part 4: DOM Interactions (continued)
           
            // Get the button element
            const actionButton = document.getElementById('action-button');

            // Adding a click event listener to the button.
            // When the button is clicked, it will call our functions.
            actionButton.addEventListener('click', () => {
                updateMessage(); // Change the text on the page.
                runLoops();    // Run the loops and display results.
            });
        });