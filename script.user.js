// ==UserScript==
// @name        T'es qui toi ?
// @namespace   Espacedenom
// @include     http://data.motion-twin.com/demoTidApi/*
// @version     1
// @grant       none
// ==/UserScript==

var requete = document.querySelector('input#request.field');

var n = prompt("ID du vaisseau dont vous voulez retrouver les hÃ©ros") + "";
var i = 880010;
while (i > 880009)
	{
		
		i = prompt('Par quelle valeur voulez-vous commencer ? \n Pour repÃ¨re, les hÃ©ros du vaisseau nÂ°56062/56065/56063 sont entre la valeur 877360 Ã  877460 \n Le dernier hÃ©ro du dernier vaisseau (56228) est au numÃ©ro 880009 - merci de ne pas dÃ©passer ce nombre') + "";
		
	}

var max = i + 60;
/*GRAND MAX = 880009 => vaisseau nÂ°56228
877360 -> 877400 => ~56062
*/

var pre = document.getElementsByTagName("pre");

var bouton = document.querySelector('input.button.mini');

requete.value = 'historyHero/' + i + '?fields=charId, shipId, user';

function hero(string)
{
	string = string.trim();
	switch(string)
		{
			case '0':
				return "Le Jin Su";
				break;
			case '1':
				return "La Frieda";
				break;
			case '2':
				return "Le Kuan-Ti";
				break;
			case '3':
				return "La Janice";
				break;
			case '4':
				return "Le Roland";
				break;
			case '5':
				return "L'Hua";
				break;
			case '6':
				return "La Paola";
				break;
			case '7':
				return "Le Chao";
				break;
			case '8':
				return "La Finola";
				break;
			case '9':
				return "Le Stephen";
				break;
			case '10':
				return "Le Ian";
				break;
			case '11':
				return "La Chun";
				break;
			case '12':
				return "La Raluca";
				break;
			case '13':
				return "Le Gioele";
				break;
			case '14':
				return "L'Eleesha";
				break;
			case '15':
				return "Le Terrence";
				break;
			case '16':
				return "Le Derek";
				break;
			case '17':
				return "L'Andie";
				break;
							
				
		}
	
	
}

function parse()
{
	
	
	for(i ; i <=max ; i++)
		{	
			
			var perso = "";
			
			if(pre[0].textContent.indexOf(n) != -1)
				{
					alert(hero(pre[0].textContent.substring(67,70)) + " de votre vaisseau possÃ¨de l'ID " + pre[0].textContent.substring(24,32) + "!"); 
				}
			else
				{
					alert('Rien...');
				}
			requete.value = 'historyHero/' + i + '?fields=charId, shipId, user';
			bouton.click();
			
		}
	
}

setTimeout(parse, 10000);
