}else if(array[5] =="+"){
								//add add add
								let banana = addition(orange, array[6]);
								if(array[7]==undefined){
									let answer = document.createElement('h4');
									answer.textContent = `Answer: ${banana}`;
									display.appendChild(answer);
								}else if(array[7]=="+"){
									//add add add add
									let cherry = addition(banana, array[8]);
									let answer = document.createElement('h4');
									answer.textContent = `Answer: ${cherry}`;
									display.appendChild(answer);
								}else if(array[7]=="-"){
									//add add add subtract
									let cherry = subtraction(banana, array[8]);
									let answer = document.createElement('h4');
									answer.textContent = `Answer: ${cherry}`;
									display.appendChild(answer);
								}else if(array[7]=="*"){
									//add add add multiply
									let peach = multiplication(array[6], array[8]);
									let kumquat = addition(orange, peach);
									let answer = document.createElement('h4');
									answer.textContent = `Answer: ${kumquat}`;
									display.appendChild(answer);
								}else if(array[7]=="/"){
									//add add add divide
									if(array[6] == 0){
										alert("Beep boop! You can't divide by zero!");
									}else if(array[8] ==0){
										alert("Beep boop! You can't divide by zero!");
									}else{
										let peach = division(array[6], array[8]);
										let kumquat = addition(orange, peach);
										let answer = document.createElement('h4');
										answer.textContent = `Answer: ${kumquat}`;
										display.appendChild(answer);
									}
								}