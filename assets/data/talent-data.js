let talentData = {
	"currentClass": 0,
	"constants": {
		"imageDirectory": "assets/images/",
		"classIconDirectory": "class-icons/",
		"backgroundDirectory": "backgrounds/",
		"skillIconDirectory": "skill-icons/",
	},
	"classes": [
		{
			"id": 0, 
			"name": "warrior", 
			"availableSkillPoints": 51,
			"requiredLevel": 0,
			"talentTrees": [
				{ 
					"id": 0,
					"name": "Arms",
					"skillPoints": 0,
					"skills": [
						{ 
							"id": 0, 
							"name": "Improved Heroic Strike", 
							"maxRank": 3, 
							"currentRank": 0,
							"icon": "skill-warrior-1.jpg",
							"position" : [1,1],
							"rankDescription": [
								"Reduces the cost of your Heroic Strike ability by 1 rage point.",
								"Reduces the cost of your Heroic Strike ability by 2 rage point.",
								"Reduces the cost of your Heroic Strike ability by 3 rage point.",
							],
							"enabled": true,
						},
						{ 
							"id": 1, 
							"name": "Deflection", 
							"maxRank": 5, 
							"currentRank": 0,
							"icon": "skill-warrior-2.jpg",
							"position" : [1,2],
							"rankDescription": [
								"Increases your Parry chance by 1%.",
								"Increases your Parry chance by 2%.",
								"Increases your Parry chance by 3%.",
								"Increases your Parry chance by 4%.",
								"Increases your Parry chance by 5%.",
							],
							"enabled": true,
						},
						{ 
							"id": 2, 
							"name": "Improved Rend", 
							"maxRank": 3, 
							"currentRank": 0,
							"icon": "skill-warrior-3.jpg",
							"position" : [1,3],
							"rankDescription": [
								"Increases the bleed damage done by your Rend ability by 15%.",
								"Increases the bleed damage done by your Rend ability by 25%.",
								"Increases the bleed damage done by your Rend ability by 35%.",
							],
							"enabled": true,
						},
						{ 
							"id": 3, 
							"name": "Improved Charge", 
							"maxRank": 2, 
							"currentRank": 0,
							"icon": "skill-warrior-4.jpg",
							"position" : [2,1],
							"rankDescription": [
								"Increases the amount of rage generated by your Charge ability by 3.",
								"Increases the amount of rage generated by your Charge ability by 6.",
							],
							"enabled": false,
							"requirements": {
								"specPoints": 5,
							}
						},
						{ 
							"id": 4, 
							"name": "Tactical Mastery", 
							"maxRank": 5, 
							"currentRank": 0,
							"icon": "skill-warrior-5.jpg",
							"position" : [2,2],
							"rankDescription": [
								"You retain up to 5 of your rage points when you change stances.",
								"You retain up to 10 of your rage points when you change stances.",
								"You retain up to 15 of your rage points when you change stances.",
								"You retain up to 20 of your rage points when you change stances.",
								"You retain up to 25 of your rage points when you change stances.",
							],
							"enabled": false,
							"requirements": {
								"specPoints": 5,
							}
						},
						{ 
							"id": 5, 
							"name": "Improved Thunder Clap", 
							"maxRank": 3, 
							"currentRank": 0,
							"icon": "skill-warrior-6.jpg",
							"position" : [2,4],
							"rankDescription": [
								"Reduces the cost of your Thunder Clap ability by 1 rage point.",
								"Reduces the cost of your Thunder Clap ability by 2 rage point.",
								"Reduces the cost of your Thunder Clap ability by 4 rage point.",
							],
							"enabled": false,
							"requirements": {
								"specPoints": 5,
							}
						},
						{ 
							"id": 6, 
							"name": "Improved Overpower", 
							"maxRank": 2, 
							"currentRank": 0,
							"icon": "skill-warrior-7.jpg",
							"position" : [3,1],
							"rankDescription": [
								"Increases the critical strike chance of your Overpower ability by 25%.",
								"Increases the critical strike chance of your Overpower ability by 50%.",
							],
							"enabled": false,
							"requirements": {
								"specPoints": 10,
							}
						},
						{ 
							"id": 7, 
							"name": "Anger Management", 
							"maxRank": 1, 
							"currentRank": 0,
							"icon": "skill-warrior-8.jpg",
							"position" : [3,2],
							"rankDescription": [
								"Increases the time required for your rage to decay while out of combat by 30%.",
							],
							"enabled": false,
							"requirements": {
								"specPoints": 10,
								"skill": {
									"id": 4,
									"skillPoints": 5,
								}
							},
						},
						{ 
							"id": 8, 
							"name": "Deep Wounds", 
							"maxRank": 3, 
							"currentRank": 0,
							"icon": "skill-warrior-9.jpg",
							"position" : [3,3],
							"rankDescription": [
								"Your critical strikes cause the opponent to bleed, dealing 20% of your melee weapon's average damage over 12 sec.",
								"Your critical strikes cause the opponent to bleed, dealing 40% of your melee weapon's average damage over 12 sec.",
								"Your critical strikes cause the opponent to bleed, dealing 60% of your melee weapon's average damage over 12 sec.",
							],
							"enabled": false,
							"requirements": {
								"specPoints": 10,
								"skill": {
									"id": 2,
									"skillPoints": 3,
								}
							}
						},
						{ 
							"id": 9, 
							"name": "Two-Handed Weapon Specialization", 
							"maxRank": 5, 
							"currentRank": 0,
							"icon": "skill-warrior-10.jpg",
							"position" : [4,2],
							"rankDescription": [
								"Increases the damage you deal with two-handed melee weapons by 1%.",
								"Increases the damage you deal with two-handed melee weapons by 2%.",
								"Increases the damage you deal with two-handed melee weapons by 3%.",
								"Increases the damage you deal with two-handed melee weapons by 4%.",
								"Increases the damage you deal with two-handed melee weapons by 5%.",
							],
							"enabled": false,
							"requirements": {
								"specPoints": 15,
							}
						},
						{ 
							"id": 10, 
							"name": "Impale", 
							"maxRank": 2, 
							"currentRank": 0,
							"icon": "skill-warrior-11.jpg",
							"position" : [4,3],
							"rankDescription": [
								"Increases the critical strike damage bonus of your abilities in Battle, Defensive, and Berserker stance by 10%.",
								"Increases the critical strike damage bonus of your abilities in Battle, Defensive, and Berserker stance by 20%.",
							],
							"enabled": false,
							"requirements": {
								"specPoints": 15,
								"skill": {
									"id": 8,
									"skillPoints": 3,
								}
							}
						},
						{ 
							"id": 11, 
							"name": "Axe Specialization", 
							"maxRank": 5, 
							"currentRank": 0,
							"icon": "skill-warrior-12.jpg",
							"position" : [5,1],
							"rankDescription": [
								"Increases the damage you deal with two-handed melee weapons by 1%.",
								"Increases the damage you deal with two-handed melee weapons by 2%.",
								"Increases the damage you deal with two-handed melee weapons by 3%.",
								"Increases the damage you deal with two-handed melee weapons by 4%.",
								"Increases the damage you deal with two-handed melee weapons by 5%.",
							],
							"enabled": false,
							"requirements": {
								"specPoints": 20,
							}
						},
						{ 
							"id": 12, 
							"name": "Sweeping Strikes", 
							"maxRank": 1, 
							"currentRank": 0,
							"icon": "skill-warrior-13.jpg",
							"position" : [5,2],
							"rankDescription": [
								"Your next 5 melee attacks strike an additional nearby opponent.",
							],
							"enabled": false,
							"requirements": {
								"specPoints": 20,
							}
						},
						{ 
							"id": 13, 
							"name": "Mace Specialization", 
							"maxRank": 5, 
							"currentRank": 0,
							"icon": "skill-warrior-14.jpg",
							"position" : [5,3],
							"rankDescription": [
								"Gives you a 1% chance to stun your target for 3 sec with a Mace.",
								"Gives you a 2% chance to stun your target for 3 sec with a Mace.",
								"Gives you a 3% chance to stun your target for 3 sec with a Mace.",
								"Gives you a 4% chance to stun your target for 3 sec with a Mace.",
								"Gives you a 5% chance to stun your target for 3 sec with a Mace.",
							],
							"enabled": false,
							"requirements": {
								"specPoints": 20,
							}
						},
						{ 
							"id": 14, 
							"name": "Sword Specialization", 
							"maxRank": 5, 
							"currentRank": 0,
							"icon": "skill-warrior-15.jpg",
							"position" : [5,4],
							"rankDescription": [
								"Gives you a 1% chance to get an extra attack on the same target after dealing damage with your Sword.",
								"Gives you a 2% chance to get an extra attack on the same target after dealing damage with your Sword.",
								"Gives you a 3% chance to get an extra attack on the same target after dealing damage with your Sword.",
								"Gives you a 4% chance to get an extra attack on the same target after dealing damage with your Sword.",
								"Gives you a 5% chance to get an extra attack on the same target after dealing damage with your Sword.",
							],
							"enabled": false,
							"requirements": {
								"specPoints": 20,
							}
						},
						{ 
							"id": 15, 
							"name": "Polearm Specialization", 
							"maxRank": 5, 
							"currentRank": 0,
							"icon": "skill-warrior-16.jpg",
							"position" : [6,1],
							"rankDescription": [
								"Increases your chance to get a critical strike with Polearms by 1%.",
								"Increases your chance to get a critical strike with Polearms by 2%.",
								"Increases your chance to get a critical strike with Polearms by 3%.",
								"Increases your chance to get a critical strike with Polearms by 4%.",
								"Increases your chance to get a critical strike with Polearms by 5%.",
							],
							"enabled": false,
							"requirements": {
								"specPoints": 25,
							}
						},
						{ 
							"id": 16, 
							"name": "Improved Hamstring", 
							"maxRank": 3, 
							"currentRank": 0,
							"icon": "skill-warrior-17.jpg",
							"position" : [6,3],
							"rankDescription": [
								"Gives your Hamstring ability a 5% chance to immobilize the target for 5 sec.",
								"Gives your Hamstring ability a 10% chance to immobilize the target for 5 sec.",
								"Gives your Hamstring ability a 15% chance to immobilize the target for 5 sec.",
							],
							"enabled": false,
							"requirements": {
								"specPoints": 25,
							}
						},
						{ 
							"id": 17, 
							"name": "Mortal Strike",
							"maxRank": 1, 
							"currentRank": 0,
							"icon": "skill-warrior-18.jpg",
							"position" : [7,2],
							"rankDescription": [
								"A vicious strike that deals weapon damage plus 85 and wounds the target, reducing the effectiveness of any healing by 50% for 10 sec.",
							],
							"enabled": false,
							"requirements": {
								"specPoints": 30,
								"skill": {
									"id": 12,
									"skillPoints": 1,
								}
							}
						},
					]
				},
				{ 
					"id": 1,
					"name": "Fury",
					"skillPoints": 0,
					"skills": [
						{ 
							"id": 0,
							"name": "Booming Voice",
							"maxRank": 5,
							"currentRank": 0,
							"rankDescription": [
								"Increases the area of effect and duration of your Battle Shout and Demoralizing Shout by 10%.",
								"Increases the area of effect and duration of your Battle Shout and Demoralizing Shout by 20%.",
								"Increases the area of effect and duration of your Battle Shout and Demoralizing Shout by 30%.",
								"Increases the area of effect and duration of your Battle Shout and Demoralizing Shout by 40%.",
								"Increases the area of effect and duration of your Battle Shout and Demoralizing Shout by 50%.",
							],
							"icon": "skill-warrior-1.jpg",
							"position" : [1,2],
							"enabled": true,
						},
						{ 
							"id": 1,
							"name": "Cruelty",
							"maxRank": 5,
							"currentRank": 0,
							"rankDescription": [
								"Increases your chance to get a critical strike with melee weapons by 1%.",
								"Increases your chance to get a critical strike with melee weapons by 2%.",
								"Increases your chance to get a critical strike with melee weapons by 3%.",
								"Increases your chance to get a critical strike with melee weapons by 4%.",
								"Increases your chance to get a critical strike with melee weapons by 5%.",
							],
							"icon": "skill-warrior-2.jpg",
							"position" : [1,3],
							"enabled": true,
						},
						{ 
							"id": 2,
							"name": "Improved Demoralizing Shout",
							"maxRank": 5,
							"currentRank": 0,
							"rankDescription": [
								"Increases the melee attack power reduction of your Demoralizing Shout by 8%.",
								"Increases the melee attack power reduction of your Demoralizing Shout by 16%.",
								"Increases the melee attack power reduction of your Demoralizing Shout by 24%.",
								"Increases the melee attack power reduction of your Demoralizing Shout by 32%.",
								"Increases the melee attack power reduction of your Demoralizing Shout by 40%.",
							],
							"icon": "skill-warrior-3.jpg",
							"position" : [2,2],
							"enabled": false,
							"requirements": {
								"specPoints": 5,
							}
						},
						{
							"id": 3,
							"name": "Unbridled Wrath",
							"maxRank": 5,
							"currentRank": 0,
							"rankDescription": [
								"Gives you a 8% chance to generate an additional Rage point when you deal melee damage with a weapon.",
								"Gives you a 16% chance to generate an additional Rage point when you deal melee damage with a weapon.",
								"Gives you a 24% chance to generate an additional Rage point when you deal melee damage with a weapon.",
								"Gives you a 32% chance to generate an additional Rage point when you deal melee damage with a weapon.",
								"Gives you a 40% chance to generate an additional Rage point when you deal melee damage with a weapon.",
							],
							"icon": "skill-warrior-4.jpg",
							"position" : [2,3],
							"enabled": false,
							"requirements": {
								"specPoints": 5,
							}
						},
						{
							"id": 4,
							"name": "Improved Cleave",
							"maxRank": 3,
							"currentRank": 0,
							"rankDescription": [
								"Increases the bonus damage done by your Cleave ability by 40%.",
								"Increases the bonus damage done by your Cleave ability by 80%.",
								"Increases the bonus damage done by your Cleave ability by 120%.",
							],
							"icon": "skill-warrior-5.jpg",
							"position" : [3,1],
							"enabled": false,
							"requirements": {
								"specPoints": 10,
							}
						},
						{
							"id": 5,
							"name": "Piercing Howl",
							"maxRank": 1,
							"currentRank": 0,
							"rankDescription": [
								"Causes all enemies near the warrior to be dazed, reducing movement speed by 50% for 6 sec.",
							],
							"icon": "skill-warrior-6.jpg",
							"position" : [3,2],
							"enabled": false,
							"requirements": {
								"specPoints": 10,
							}
						},
						{
							"id": 6,
							"name": "Blood Craze",
							"maxRank": 3,
							"currentRank": 0,
							"rankDescription": [
								"Regenerates 2% of your total Health over 6 sec after being the victim of a critical strike.",
								"Regenerates 6% of your total Health over 6 sec after being the victim of a critical strike.",
								"Regenerates 12% of your total Health over 6 sec after being the victim of a critical strike.",
							],
							"icon": "skill-warrior-7.jpg",
							"position" : [3,3],
							"enabled": false,
							"requirements": {
								"specPoints": 10,
							}
						},
						{
							"id": 7,
							"name": "Improved Battle Shout",
							"maxRank": 5,
							"currentRank": 0,
							"rankDescription": [
								"Increases the melee attack power bonus of your Battle Shout by 5%.",
								"Increases the melee attack power bonus of your Battle Shout by 10%.",
								"Increases the melee attack power bonus of your Battle Shout by 15%.",
								"Increases the melee attack power bonus of your Battle Shout by 20%.",
								"Increases the melee attack power bonus of your Battle Shout by 25%.",
							],
							"icon": "skill-warrior-8.jpg",
							"position" : [3,4],
							"enabled": false,
							"requirements": {
								"specPoints": 10,
							}
						},
						{
							"id": 8,
							"name": "Dual Wield Specialization",
							"maxRank": 5,
							"currentRank": 0,
							"rankDescription": [
								"Increases the damage done by your offhand weapon by 5%.",
								"Increases the damage done by your offhand weapon by 10%.",
								"Increases the damage done by your offhand weapon by 15%.",
								"Increases the damage done by your offhand weapon by 20%.",
								"Increases the damage done by your offhand weapon by 25%.",
							],
							"icon": "skill-warrior-9.jpg",
							"position" : [4,1],
							"enabled": false,
							"requirements": {
								"specPoints": 15,
							}
						},
						{
							"id": 9,
							"name": "Improved Execute",
							"maxRank": 2,
							"currentRank": 0,
							"rankDescription": [
								"Reduces the Rage cost of your Execute ability by 2.",
								"Reduces the Rage cost of your Execute ability by 5.",
							],
							"icon": "skill-warrior-10.jpg",
							"position" : [4,2],
							"enabled": false,
							"requirements": {
								"specPoints": 15,
							}
						},
						{
							"id": 10,
							"name": "Enrage",
							"maxRank": 5,
							"currentRank": 0,
							"rankDescription": [
								"Gives you a 5% melee damage bonus for 12 sec up to a maximum of 12 swings after being the victim of a critical strike.",
								"Gives you a 10% melee damage bonus for 12 sec up to a maximum of 12 swings after being the victim of a critical strike.",
								"Gives you a 15% melee damage bonus for 12 sec up to a maximum of 12 swings after being the victim of a critical strike.",
								"Gives you a 20% melee damage bonus for 12 sec up to a maximum of 12 swings after being the victim of a critical strike.",
								"Gives you a 25% melee damage bonus for 12 sec up to a maximum of 12 swings after being the victim of a critical strike.",
							],
							"icon": "skill-warrior-11.jpg",
							"position" : [4,3],
							"enabled": false,
							"requirements": {
								"specPoints": 15,
							}
						},
						{
							"id": 11,
							"name": "Improved Slam",
							"maxRank": 5,
							"currentRank": 0,
							"rankDescription": [
								"Decreases the casting time of your Slam ability by 0.1 sec.",
								"Decreases the casting time of your Slam ability by 0.2 sec.",
								"Decreases the casting time of your Slam ability by 0.3 sec.",
								"Decreases the casting time of your Slam ability by 0.4 sec.",
								"Decreases the casting time of your Slam ability by 0.5 sec.",
							],
							"icon": "skill-warrior-12.jpg",
							"position" : [5,1],
							"enabled": false,
							"requirements": {
								"specPoints": 20,
							}
						},
						{
							"id": 12,
							"name": "Death Wish",
							"maxRank": 1,
							"currentRank": 0,
							"rankDescription": [
								"When activated, increases your physical damage by 20% and makes you immune to Fear effects, but lowers your armor and all resistances by 20%. Lasts 30 sec.",
							],
							"icon": "skill-warrior-13.jpg",
							"position" : [5,2],
							"enabled": false,
							"requirements": {
								"specPoints": 20,
							}
						},
						{
							"id": 13,
							"name": "Improved Intercept",
							"maxRank": 2,
							"currentRank": 0,
							"rankDescription": [
								"Reduces the cooldown of your Intercept ability by 5 sec.",
								"Reduces the cooldown of your Intercept ability by 10 sec.",
							],
							"icon": "skill-warrior-14.jpg",
							"position" : [5,4],
							"enabled": false,
							"requirements": {
								"specPoints": 20,
							}
						},
						{
							"id": 14,
							"name": "Improved Berserker Rage",
							"maxRank": 2,
							"currentRank": 0,
							"rankDescription": [
								"The Berserker Rage ability will generate 5 rage when used.",
								"The Berserker Rage ability will generate 10 rage when used.",
							],
							"icon": "skill-warrior-15.jpg",
							"position" : [6,1],
							"enabled": false,
							"requirements": {
								"specPoints": 25,
							}
						},
						{
							"id": 15,
							"name": "Flurry",
							"maxRank": 5,
							"currentRank": 0,
							"rankDescription": [
								"Increases your attack speed by 10% for your next 3 swings after dealing a melee critical strike.",
								"Increases your attack speed by 15% for your next 3 swings after dealing a melee critical strike.",
								"Increases your attack speed by 20% for your next 3 swings after dealing a melee critical strike.",
								"Increases your attack speed by 25% for your next 3 swings after dealing a melee critical strike.",
								"Increases your attack speed by 30% for your next 3 swings after dealing a melee critical strike.",
							],
							"icon": "skill-warrior-16.jpg",
							"position" : [6,3],
							"enabled": false,
							"requirements": {
								"specPoints": 25,
								"skill": {
									"id": 10,
									"skillPoints": 5,
								}
							}
						},
						{
							"id": 16,
							"name": "Bloodthirst",
							"maxRank": 1,
							"currentRank": 0,
							"rankDescription": [
								"Instantly attack the target causing damage equal to 45% of your attack power. In addition, the next 5 successful melee attacks will restore 10 health. This effect lasts 8 sec.",
							],
							"icon": "skill-warrior-17.jpg",
							"position" : [7,2],
							"enabled": false,
							"requirements": {
								"specPoints": 30,
								"skill": {
									"id": 12,
									"skillPoints": 1,
								}
							}
						},
					]
				},
				{ 
					"id": 2,
					"name": "Protection",
					"skillPoints": 0,
					"skills": [
						{ 
							"id": 0,
							"name": "Sheild Specialization",
							"maxRank": 5,
							"currentRank": 0,
							"rankDescription": [],
							"icon": "skill-warrior-2.jpg",
							"position" : [1,1],
						},
					]
				}
			]
		},
		{
			"id": 1, 
			"name": "paladin", 
			"availableSkillPoints": 51,
			"requiredLevel": 0,
			"talentTrees": [
				{ 
					"id": 0,
					"name": "Holy",
					"skills": [
						{ 
							"id": 0, 
							"name": "Divine Strength", 
							"maxRank": 5, 
							"currentRank": 0,
							"rankDescription": [],
							"icon": "skill-warrior-2.jpg",
						},
					]
				},
				{ 
					"id": 1,
					"name": "Protection",
					"skills": [
						{ 
							"id": 0,
							"name": "Improved Devotion Aura",
							"maxRank": 5,
							"currentRank": 0,
							"rankDescription": []
						},
					]
				},
				{ 
					"id": 2,
					"name": "Retribution",
					"skills": [
						{ 
							"id": 0,
							"name": "Improved Blessing of Might",
							"maxRank": 5,
							"currentRank": 0,
							"rankDescription": []
						},
					]
				}
			]
		},
		{ 
			"id": 2,
			"name": "hunter", 
			"availableSkillPoints": 51,
			"requiredLevel": 0,
			"talentTrees": [
				{ 
					"id": 0,
					"name": "Beast Mastery",
					"skills": [
						{ 
							"id": 0, 
							"name": "Improved Aspect of the Hawk", 
							"maxRank": 5, 
							"currentRank": 0,
							"rankDescription": [
								"While Aspect of the Hawk is active, all normal ranged attacks have a 1% chance of increasing ranged attack speed by 30% for 12 sec.",
								"While Aspect of the Hawk is active, all normal ranged attacks have a 2% chance of increasing ranged attack speed by 30% for 12 sec.",
								"While Aspect of the Hawk is active, all normal ranged attacks have a 3% chance of increasing ranged attack speed by 30% for 12 sec.",
								"While Aspect of the Hawk is active, all normal ranged attacks have a 4% chance of increasing ranged attack speed by 30% for 12 sec.",
								"While Aspect of the Hawk is active, all normal ranged attacks have a 5% chance of increasing ranged attack speed by 30% for 12 sec."
							]
						},
						{ 
							"id": 1,
							"name": "Endurance Training",
							"maxRank": 5,
							"currentRank": 0,
							"rankDescription": []
						}
					]
				},
				{ 
					"id": 1,
					"name": "Marksmanship",
					"skills": [
						{ 
							"id": 0,
							"name": "Improved Concussive Shot",
							"maxRank": 5,
							"currentRank": 0,
							"rankDescription": []
						},
						{ 
							"id": 1, 
							"name": "Efficiency", 
							"maxRank": 5, 
							"currentRank": 0,
							"rankDescription": []
						}
					]
				},
				{ 
					"id": 2,
					"name": "Survival",
					"skills": [
						{ 
							"id": 0,
							"name": "Monster Slaying",
							"maxRank": 3,
							"currentRank": 0,
							"rankDescription": []
						}
					]
				}
			]
		},
		{ 
			"id": 3, 
			"name": "rogue", 
			"availableSkillPoints": 51,
			"requiredLevel": 0,
			"talentTrees": [
				{ 
					"id": 0,
					"name": "Assassination",
					"skills": [
						{ 
							"id": 0, 
							"name": "Improved Eviscerate", 
							"maxRank": 5, 
							"currentRank": 0,
							"rankDescription": []
						},
					]
				},
				{ 
					"id": 1,
					"name": "Combat",
					"skills": [
						{ 
							"id": 0,
							"name": "Improved Gouge",
							"maxRank": 5,
							"currentRank": 0,
							"rankDescription": []
						},
					]
				},
				{ 
					"id": 2,
					"name": "Subtlety",
					"skills": [
						{ 
							"id": 0,
							"name": "Master of Deception",
							"maxRank": 5,
							"currentRank": 0,
							"rankDescription": []
						},
					]
				}
			]
		},
		{
			"id": 4, 
			"name": "priest", 
			"availableSkillPoints": 51,
			"requiredLevel": 0,
			"talentTrees": [
				{ 
					"id": 0,
					"name": "Discipline",
					"skills": [
						{ 
							"id": 0, 
							"name": "Unbreakable Will", 
							"maxRank": 5, 
							"currentRank": 0,
							"rankDescription": []
						},
					]
				},
				{ 
					"id": 1,
					"name": "Holy",
					"skills": [
						{ 
							"id": 0,
							"name": "Healing Focus",
							"maxRank": 2,
							"currentRank": 0,
							"rankDescription": []
						},
					]
				},
				{ 
					"id": 2,
					"name": "Shadow",
					"skills": [
						{ 
							"id": 0,
							"name": "Spirit Tap",
							"maxRank": 5,
							"currentRank": 0,
							"rankDescription": []
						},
					]
				}
			]
		},
		{
			"id": 5, 
			"name": "shaman", 
			"availableSkillPoints": 51,
			"requiredLevel": 0,
			"talentTrees": [
				{ 
					"id": 0,
					"name": "Elemental",
					"skills": [
						{ 
							"id": 0, 
							"name": "Convection", 
							"maxRank": 5, 
							"currentRank": 0,
							"rankDescription": []
						},
					]
				},
				{ 
					"id": 1,
					"name": "Enhancement",
					"skills": [
						{ 
							"id": 0,
							"name": "Ancestral Knowledge",
							"maxRank": 5,
							"currentRank": 0,
							"rankDescription": []
						},
					]
				},
				{ 
					"id": 2,
					"name": "Restoration",
					"skills": [
						{ 
							"id": 0,
							"name": "Improved Healing Wave",
							"maxRank": 5,
							"currentRank": 0,
							"rankDescription": []
						},
					]
				}
			]
		},
		{ 
			"id": 6, 
			"name": "mage", 
			"availableSkillPoints": 51,
			"requiredLevel": 0,
			"talentTrees": [
				{ 
					"id": 0,
					"name": "Arcane",
					"skills": [
						{ 
							"id": 0, 
							"name": "Arcane Subtlety", 
							"maxRank": 2, 
							"currentRank": 0,
							"rankDescription": []
						},
					]
				},
				{ 
					"id": 1,
					"name": "Fire",
					"skills": [
						{ 
							"id": 0,
							"name": "Improved Fireball",
							"maxRank": 5,
							"currentRank": 0,
							"rankDescription": []
						},
					]
				},
				{ 
					"id": 2,
					"name": "Frost",
					"maxRank": 5,
					"currentRank": 0,
					"rankDescription": []
				}
			]
		},
		{
			"id": 7, 
			"name": "warlock", 
			"availableSkillPoints": 51,
			"requiredLevel": 0,
			"talentTrees": [
				{ 
					"id": 0,
					"name": "Affliction",
					"skills": [
						{ 
							"id": 0, 
							"name": "Suppression", 
							"maxRank": 5, 
							"currentRank": 0,
							"rankDescription": []
						},
					]
				},
				{ 
					"id": 1,
					"name": "Demonology",
					"skills": [
						{ 
							"id": 0,
							"name": "Improved Healthstone",
							"maxRank": 2,
							"currentRank": 0,
							"rankDescription": []
						},
					]
				},
				{ 
					"id": 2,
					"name": "Destruction",
					"skills": [
						{ 
							"id": 0,
							"name": "Improved Shadow Bolt",
							"maxRank": 5,
							"currentRank": 0,
							"rankDescription": []
						},
					]
				}
			]
		},
		{
			"id": 8, 
			"name": "druid", 
			"availableSkillPoints": 51,
			"requiredLevel": 0,
			"talentTrees": [
				{ 
					"id": 0,
					"name": "Balance",
					"skills": [
						{ 
							"id": 0, 
							"name": "Improved Wrath", 
							"maxRank": 5, 
							"currentRank": 0,
							"rankDescription": []
						},
					]
				},
				{ 
					"id": 1,
					"name": "Feral Combat",
					"skills": [
						{ 
							"id": 0,
							"name": "Ferocity",
							"maxRank": 5,
							"currentRank": 0,
							"rankDescription": []
						},
					]
				},
				{ 
					"id": 2,
					"name": "Restoration",
					"skills": [
						{ 
							"id": 0,
							"name": "Improved Mark of the Wild",
							"maxRank": 5,
							"currentRank": 0,
							"rankDescription": []
						},
					]
				}
			]
		},
	],
};