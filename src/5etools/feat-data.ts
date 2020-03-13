export default [
    {
        "name": "Aberrant Dragonmark",
        "source": "ERLW",
        "page": 52,
        "otherSources": [
            {
                "source": "UAWGE",
                "page": 112
            }
        ],
        "prerequisite": [
            {
                "other": "No other dragonmark"
            }
        ],
        "ability": [
            {
                "con": 1
            }
        ],
        "entries": [
            "You have manifested an aberrant dragonmark. Determine its appearance and the flaw associated with it. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You learn a {@filter cantrip of your choice from the sorcerer spell list|spells|level=0|class=Sorcerer}. In addition, choose a {@filter 1st-level spell from the sorcerer spell list|spells|level=1|class=Sorcerer}. You learn that spell and can cast it through your mark. Once you cast it, you must finish a short or long rest before you can cast it again through the mark. Constitution is your spellcasting ability for these spells.",
                    "When you cast the 1st-level spell through your mark, you can expend one of your Hit Dice and roll it. If you roll an even number, you gain a number of temporary hit points equal to the number rolled. If you roll an odd number, one random creature within 30 feet of you (not including you) takes force damage equal to the number rolled. If no other creatures are in range, you take the damage."
                ]
            },
            "You also develop a random flaw from the Aberrant Dragonmark Flaws table.",
            {
                "type": "table",
                "caption": "Aberrant Dragonmark Flaws",
                "colLabels": [
                    "d8",
                    "Flaw"
                ],
                "colStyles": [
                    "col-2 text-center",
                    "col-10"
                ],
                "rows": [
                    [
                        "1",
                        "Your mark is a source of constant physical pain."
                    ],
                    [
                        "2",
                        "Your mark whispers to you. Its meaning can be unclear."
                    ],
                    [
                        "3",
                        "When you're stressed, the mark hisses audibly."
                    ],
                    [
                        "4",
                        "The skin around the mark is burned, scaly, or withered."
                    ],
                    [
                        "5",
                        "Animals are uneasy around you."
                    ],
                    [
                        "6",
                        "You have a mood swing any time you use your mark."
                    ],
                    [
                        "7",
                        "Your looks change slightly whenever you use the mark."
                    ],
                    [
                        "8",
                        "You have horrific nightmares after you use your mark."
                    ]
                ]
            },
            {
                "type": "section",
                "entries": [
                    {
                        "type": "entries",
                        "entries": [
                            {
                                "type": "entries",
                                "name": "Option: Greater Aberrant Powers",
                                "entries": [
                                    "At the DM's option, a character who has the Aberrant Dragonmark feat has a chance of manifesting greater power. Upon reaching 10th level, such a character has a 10 percent chance of gaining an epic boon from among the options in {@book chapter 7|DMG|-1} of the {@book Dungeon Master's Guide|DMG}. If the character fails to gain a boon, they have a 10 percent chance the next time they gain a level.",
                                    "If the character gains a boon, the DM chooses it or determines it randomly. The character also permanently loses one of their Hit Dice, and their hit point maximum is reduced by an amount equal to a roll of that die plus their Constitution modifier (minimum reduction of 1). This reduction can't be reversed by any means."
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "Acrobat",
        "source": "UAFeatsForSkills",
        "page": 1,
        "ability": [
            {
                "dex": 1
            }
        ],
        "entries": [
            "You become more nimble, gaining the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency in the {@skill Acrobatics} skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.",
                    "As a bonus action, you can make a DC 15 Dexterity ({@skill Acrobatics}) check. If you succeed, difficult terrain doesn't cost you extra movement until the end of the current turn."
                ]
            }
        ]
    },
    {
        "name": "Actor",
        "source": "PHB",
        "page": 165,
        "ability": [
            {
                "cha": 1
            }
        ],
        "entries": [
            "Skilled at mimicry and dramatics, you gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You have advantage on Charisma ({@skill Deception}) and Charisma ({@skill Performance}) checks when trying to pass yourself off as a different person.",
                    "You can mimic the speech of another person or the sounds made by other creatures. You must have heard the person speaking, or heard the creature make the sound, for at least 1 minute. A successful Wisdom ({@skill Insight}) check contested by your Charisma ({@skill Deception}) check allows a listener to determine that the effect is faked."
                ]
            }
        ]
    },
    {
        "name": "Alchemist",
        "source": "UAFeats",
        "page": 4,
        "ability": [
            {
                "int": 1
            }
        ],
        "entries": [
            "You have studied the secrets of alchemy and are an expert in its practice, gaining the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency with {@item alchemist's supplies|phb}. If you are already proficient with them, you add double your proficiency bonus to checks you make with them.",
                    "As an action, you can identify one potion within 5 feet of you, as if you had tasted it. You must see the liquid for this benefit to work.",
                    "Over the course of any short rest, you can temporarily improve the potency of one potion of healing of any rarity. To use this benefit, you must have {@item alchemist's supplies|phb} with you, and the potion must be within reach. If the potion is drunk no more than 1 hour after the short rest ends, the creature drinking the potion can forgo the potion's die roll and regains the maximum number of hit points that the potion can restore."
                ]
            }
        ]
    },
    {
        "name": "Alert",
        "source": "PHB",
        "page": 165,
        "entries": [
            "Always on the lookout for danger, you gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain a +5 bonus to initiative.",
                    "You can't be surprised while you are conscious.",
                    "Other creatures don't gain advantage on attack rolls against you as a result of being unseen by you."
                ]
            }
        ]
    },
    {
        "name": "Animal Handler",
        "source": "UAFeatsForSkills",
        "page": 1,
        "ability": [
            {
                "wis": 1
            }
        ],
        "entries": [
            "You master the techniques needed to train and handle animals. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency in the {@skill Animal Handling} skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.",
                    "You can use a bonus action on your turn to command one friendly beast within 60 feet of you that can hear you and that isn't currently following the command of someone else. You decide now what action the beast will take and where it will move during its next turn, or you issue a general command that lasts for 1 minute, such as to guard a particular area."
                ]
            }
        ]
    },
    {
        "name": "Arcanist",
        "source": "UAFeatsForSkills",
        "page": 1,
        "ability": [
            {
                "int": 1
            }
        ],
        "entries": [
            "You study the arcane arts, gaining the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency in the {@skill Arcana} skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.",
                    "You learn the {@spell prestidigitation} and {@spell detect magic} spells. You can cast detect magic once without expending a spell slot, and you regain the ability to do so when you finish a long rest."
                ]
            }
        ]
    },
    {
        "name": "Athlete",
        "source": "PHB",
        "page": 165,
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "dex"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "You have undergone extensive physical training to gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "When you are {@condition prone}, standing up uses only 5 feet of your movement.",
                    "Climbing doesn't cost you extra movement.",
                    "You can make a running long jump or a running high jump after moving only 5 feet on foot, rather than 10 feet."
                ]
            }
        ]
    },
    {
        "name": "Barbed Hide",
        "source": "UAFeatsForRaces",
        "page": 1,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "tiefling"
                    }
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "con",
                        "cha"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "One of your ancestors was a barbed devil or other spiky fiend. Barbs protrude from your head. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "As a bonus action, you can cause small barbs to protrude all over your body or cause them to retract. At the start of each of your turns while the barbs are out, you deal {@dice 1d6} piercing damage to any creature grappling you or any creature {@condition grappled} by you.",
                    "You gain proficiency in the {@skill Intimidation} skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it."
                ]
            }
        ]
    },
    {
        "name": "Blade Mastery",
        "source": "UAFeats",
        "page": 2,
        "entries": [
            "You master the shortsword, longsword, scimitar, rapier, and greatsword. You gain the following benefits when using any of them:",
            {
                "type": "list",
                "items": [
                    "You gain a +1 bonus to attack rolls you make with the weapon.",
                    "On your turn, you can use your reaction to assume a parrying stance, provided you have the weapon in hand. Doing so grants you a +1 bonus to your AC until the start of your next turn or until you're not holding the weapon.",
                    "When you make an opportunity attack with the weapon, you have advantage on the attack roll."
                ]
            }
        ]
    },
    {
        "name": "Bountiful Luck",
        "source": "UAFeatsForRaces",
        "page": 1,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "halfling"
                    }
                ]
            }
        ],
        "entries": [
            "Whenever an ally you can see within 30 feet of you rolls a 1 on the {@dice d20} for an attack roll, an ability check, or a saving throw, you can use your reaction to let the ally reroll the die. The ally must use the new roll."
        ]
    },
    {
        "name": "Bountiful Luck",
        "source": "XGE",
        "page": 73,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "halfling"
                    }
                ]
            }
        ],
        "entries": [
            "Your people have extraordinary luck, which you have learned to mystically lend to your companions when you see them falter. You're not sure how you do it; you just wish it, and it happens. Surely a sign of fortune's favor!",
            "When an ally you can see within 30 feet of you rolls a 1 on the {@dice d20} for an attack roll, an ability check, or a saving throw, you can use your reaction to let the ally reroll the die. The ally must use the new roll.",
            "When you use this ability, you can't use your Lucky racial trait before the end of your next turn."
        ]
    },
    {
        "name": "Brawny",
        "source": "UAFeatsForSkills",
        "page": 1,
        "ability": [
            {
                "str": 1
            }
        ],
        "entries": [
            "You become stronger, gaining the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency in the {@skill Athletics} skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.",
                    "You count as if you were one size larger for the purpose of determining your carrying capacity."
                ]
            }
        ]
    },
    {
        "name": "Burglar",
        "source": "UAFeats",
        "page": 4,
        "ability": [
            {
                "dex": 1
            }
        ],
        "entries": [
            "You pride yourself on your quickness and your close study of certain clandestine activities. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency with {@item thieves' tools|phb}. If you are already proficient with them, you add double your proficiency bonus to checks you make with them."
                ]
            }
        ]
    },
    {
        "name": "Charger",
        "source": "PHB",
        "page": 165,
        "entries": [
            "When you use your action to Dash, you can use a bonus action to make one melee weapon attack or to shove a creature.",
            "If you move at least 10 feet in a straight line immediately before taking this bonus action, you either gain a +5 bonus to the attack's damage roll (if you chose to make a melee attack and hit) or push the target up to 10 feet away from you (if you chose to shove and you succeed)."
        ]
    },
    {
        "name": "Critter Friend",
        "source": "UAFeatsForRaces",
        "page": 1,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "gnome",
                        "subrace": "forest"
                    }
                ]
            }
        ],
        "entries": [
            "Your friendship with animals mystically deepens. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency in the {@skill Animal Handling} skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.",
                    "You learn the {@spell speak with animals} spell and can cast it at will, without expending a spell slot. You also learn the {@spell animal friendship} spell, and you can cast it once with this feat, without expending a spell slot. You regain the ability to cast it in this way when you finish a long rest. Intelligence is your spellcasting ability for these spells."
                ]
            }
        ]
    },
    {
        "name": "Crossbow Expert",
        "source": "PHB",
        "page": 165,
        "entries": [
            "Thanks to extensive practice with the crossbow, you gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You ignore the loading quality of crossbows with which you are proficient.",
                    "Being within 5 feet of a hostile creature doesn't impose disadvantage on your ranged attack rolls.",
                    "When you use the Attack action and attack with a one-handed weapon, you can use a bonus action to attack with a {@item hand crossbow|phb} you are holding."
                ]
            }
        ]
    },
    {
        "name": "Defensive Duelist",
        "source": "PHB",
        "page": 165,
        "prerequisite": [
            {
                "ability": [
                    {
                        "dex": 13
                    }
                ]
            }
        ],
        "entries": [
            "When you are wielding a finesse weapon with which you are proficient and another creature hits you with a melee attack, you can use your reaction to add your proficiency bonus to your AC for that attack, potentially causing the attack to miss you."
        ]
    },
    {
        "name": "Diplomat",
        "source": "UAFeatsForSkills",
        "page": 2,
        "ability": [
            {
                "cha": 1
            }
        ],
        "entries": [
            "You master the arts of diplomacy, gaining the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency in the {@skill Persuasion} skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.",
                    "If you spend 1 minute talking to someone who can understand what you say, you can make a Charisma ({@skill Persuasion}) check contested by the creature's Wisdom ({@skill Insight}) check. If you or your companions are fighting the creature, your check automatically fails. If your check succeeds, the target is {@condition charmed} by you as long as it remains within 60 feet of you and for 1 minute thereafter."
                ]
            }
        ]
    },
    {
        "name": "Dragon Fear",
        "source": "UAFeatsForRaces",
        "page": 2,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "dragonborn"
                    }
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "cha"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "When angered, you radiate menace. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "Instead of exhaling destructive energy, you can roar and expend a use of your breath weapon to force each creature of your choice within 30 feet of you to make a Wisdom saving throw (DC 8 + your proficiency bonus + your Charisma modifier). A target automatically succeeds if it can't hear or see you. On a failed save, a target becomes {@condition frightened} for 1 minute. If the {@condition frightened} target takes any damage, it can repeat the saving throw, ending the effect on itself on a success."
                ]
            }
        ]
    },
    {
        "name": "Dragon Fear",
        "source": "XGE",
        "page": 74,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "dragonborn"
                    }
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "con",
                        "cha"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "When angered, you radiate menace. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "Instead of exhaling destructive energy, you can expend a use of your Breath Weapon trait to roar, forcing each creature of your choice within 30 feet of you to make a Wisdom saving throw (DC 8 + your proficiency bonus + your Charisma modifier). A target automatically succeeds on the save if it can't hear or see you. On a failed save, a target becomes {@condition frightened} of you for 1 minute. If the {@condition frightened} target takes any damage, it can repeat the saving throw, ending the effect on itself on a success."
                ]
            }
        ]
    },
    {
        "name": "Dragon Hide",
        "source": "UAFeatsForRaces",
        "page": 2,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "dragonborn"
                    }
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "cha"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "You inherited the might and majesty of your dragon ancestors. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You grow retractable claws from the tips of your fingers. Extending or retracting the claws requires no action. The claws are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to {@dice 1d4} + your Strength modifier, instead of the bludgeoning damage normal for an unarmed strike.",
                    "Your scales harden; you gain a +1 bonus to AC while you aren't wearing armor."
                ]
            }
        ]
    },
    {
        "name": "Dragon Hide",
        "source": "XGE",
        "page": 74,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "dragonborn"
                    }
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "con",
                        "cha"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "You manifest scales and claws reminiscent of your draconic ancestors. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "Your scales harden. While you aren't wearing armor, you can calculate your AC as 13 + your Dexterity modifier. You can use a shield and still gain this benefit.",
                    "You grow retractable claws from the tips of your fingers. Extending or retracting the claws requires no action. The claws are natural weapons, which you can use to make unarmed strikes. If you hit with them, you deal slashing damage equal to {@dice 1d4} + your Strength modifier, instead of the normal bludgeoning damage for an unarmed strike."
                ]
            }
        ]
    },
    {
        "name": "Dragon Wings",
        "source": "UAFeatsForRaces",
        "page": 2,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "dragonborn"
                    }
                ]
            }
        ],
        "entries": [
            "You sprout draconic wings. With your wings, you have a flying speed of 20 feet if you aren't wearing heavy armor and aren't exceeding your carrying capacity."
        ]
    },
    {
        "name": "Dragonmark of Detection",
        "source": "UAEberron",
        "page": 5,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "half-elf"
                    }
                ]
            }
        ],
        "entries": [
            "Your have the magical mark of Detection, the dragonmark of House Medani, and are a member of that house.",
            "You gain the ability to innately cast spells and cantrips, using Wisdom as your spellcasting ability. You cast each spell at its lowest level. Once you cast a given spell this way, you must finish a long rest before you can cast it innately again. You must still expend any material components. Your dragonmark confers the following benefits:",
            {
                "type": "entries",
                "name": "Least Dragonmark",
                "entries": [
                    "When you first take this feat, you gain the least dragonmark. You learn the following spells: {@spell detect magic}, {@spell mage hand}"
                ]
            },
            {
                "type": "entries",
                "name": "Lesser Dragonmark",
                "entries": [
                    "At 5th level and higher, your mark becomes more potent, improving to lesser dragonmark. You learn the following spell: {@spell detect thoughts}"
                ]
            },
            {
                "type": "entries",
                "name": "Greater Dragonmark",
                "entries": [
                    "At 9th level and higher, your mark's power increases again, becoming a greater dragonmark. You learn the following spell: {@spell clairvoyance}"
                ]
            }
        ]
    },
    {
        "name": "Dragonmark of Finding",
        "source": "UAEberron",
        "page": 5,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "half-orc"
                    },
                    {
                        "name": "human"
                    }
                ]
            }
        ],
        "entries": [
            "Your have the magical mark of Finding, the dragonmark of House Tharashk, and are a member of that house.",
            "You gain the ability to innately cast spells and cantrips, using Wisdom as your spellcasting ability. You cast each spell at its lowest level. Once you cast a given spell this way, you must finish a long rest before you can cast it innately again. You must still expend any material components. Your dragonmark confers the following benefits:",
            {
                "type": "entries",
                "name": "Least Dragonmark",
                "entries": [
                    "When you first take this feat, you gain the least dragonmark. You learn the following spells: {@spell identify}, {@spell mage hand}"
                ]
            },
            {
                "type": "entries",
                "name": "Lesser Dragonmark",
                "entries": [
                    "At 5th level and higher, your mark becomes more potent, improving to lesser dragonmark. You learn the following spell: {@spell locate object}"
                ]
            },
            {
                "type": "entries",
                "name": "Greater Dragonmark",
                "entries": [
                    "At 9th level and higher, your mark's power increases again, becoming a greater dragonmark. You learn the following spell: {@spell clairvoyance}"
                ]
            }
        ]
    },
    {
        "name": "Dragonmark of Handling",
        "source": "UAEberron",
        "page": 5,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "human"
                    }
                ]
            }
        ],
        "entries": [
            "Your have the magical mark of Handling, the dragonmark of House Vadalis, and are a member of that house.",
            "You gain the ability to innately cast spells and cantrips, using Wisdom as your spellcasting ability. You cast each spell at its lowest level. Once you cast a given spell this way, you must finish a long rest before you can cast it innately again. You must still expend any material components. Your dragonmark confers the following benefits:",
            {
                "type": "entries",
                "name": "Least Dragonmark",
                "entries": [
                    "When you first take this feat, you gain the least dragonmark. You learn the following spells: {@spell druidcraft}, {@spell speak with animals}"
                ]
            },
            {
                "type": "entries",
                "name": "Lesser Dragonmark",
                "entries": [
                    "At 5th level and higher, your mark becomes more potent, improving to lesser dragonmark. You learn the following spell: {@spell beast sense}"
                ]
            },
            {
                "type": "entries",
                "name": "Greater Dragonmark",
                "entries": [
                    "At 9th level and higher, your mark's power increases again, becoming a greater dragonmark. You learn the following spell: {@spell conjure animals}"
                ]
            }
        ]
    },
    {
        "name": "Dragonmark of Healing",
        "source": "UAEberron",
        "page": 5,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "halfling"
                    }
                ]
            }
        ],
        "entries": [
            "Your have the magical mark of Healing, the dragonmark of House Jorasco, and are a member of that house.",
            "You gain the ability to innately cast spells and cantrips, using Wisdom as your spellcasting ability. You cast each spell at its lowest level. Once you cast a given spell this way, you must finish a long rest before you can cast it innately again. You must still expend any material components. Your dragonmark confers the following benefits:",
            {
                "type": "entries",
                "name": "Least Dragonmark",
                "entries": [
                    "When you first take this feat, you gain the least dragonmark. You learn the following spells: {@spell cure wounds}, {@spell spare the dying}"
                ]
            },
            {
                "type": "entries",
                "name": "Lesser Dragonmark",
                "entries": [
                    "At 5th level and higher, your mark becomes more potent, improving to lesser dragonmark. You learn the following spell: {@spell lesser restoration}"
                ]
            },
            {
                "type": "entries",
                "name": "Greater Dragonmark",
                "entries": [
                    "At 9th level and higher, your mark's power increases again, becoming a greater dragonmark. You learn the following spell: {@spell revivify}"
                ]
            }
        ]
    },
    {
        "name": "Dragonmark of Hospitality",
        "source": "UAEberron",
        "page": 5,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "halfling"
                    }
                ]
            }
        ],
        "entries": [
            "Your have the magical mark of Hospitality, the dragonmark of House Ghallanda, and are a member of that house.",
            "You gain the ability to innately cast spells and cantrips, using Charisma as your spellcasting ability. You cast each spell at its lowest level. Once you cast a given spell this way, you must finish a long rest before you can cast it innately again. You must still expend any material components. Your dragonmark confers the following benefits:",
            {
                "type": "entries",
                "name": "Least Dragonmark",
                "entries": [
                    "When you first take this feat, you gain the least dragonmark. You learn the following spells: {@spell friends}, {@spell unseen servant}"
                ]
            },
            {
                "type": "entries",
                "name": "Lesser Dragonmark",
                "entries": [
                    "At 5th level and higher, your mark becomes more potent, improving to lesser dragonmark. You learn the following spell: {@spell rope trick}"
                ]
            },
            {
                "type": "entries",
                "name": "Greater Dragonmark",
                "entries": [
                    "At 9th level and higher, your mark's power increases again, becoming a greater dragonmark. You learn the following spell: {@spell Leomund's tiny hut}"
                ]
            }
        ]
    },
    {
        "name": "Dragonmark of Making",
        "source": "UAEberron",
        "page": 5,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "human"
                    }
                ]
            }
        ],
        "entries": [
            "Your have the magical mark of Making, the dragonmark of House Cannith, and are a member of that house.",
            "You gain the ability to innately cast spells and cantrips, using Intelligence as your spellcasting ability. You cast each spell at its lowest level. Once you cast a given spell this way, you must finish a long rest before you can cast it innately again. You must still expend any material components. Your dragonmark confers the following benefits:",
            {
                "type": "entries",
                "name": "Least Dragonmark",
                "entries": [
                    "When you first take this feat, you gain the least dragonmark. You learn the following spells: {@spell identify}, {@spell mending}"
                ]
            },
            {
                "type": "entries",
                "name": "Lesser Dragonmark",
                "entries": [
                    "At 5th level and higher, your mark becomes more potent, improving to lesser dragonmark. You learn the following spell: {@spell magic weapon}"
                ]
            },
            {
                "type": "entries",
                "name": "Greater Dragonmark",
                "entries": [
                    "At 9th level and higher, your mark's power increases again, becoming a greater dragonmark. You learn the following spell: {@spell fabricate}"
                ]
            }
        ]
    },
    {
        "name": "Dragonmark of Passage",
        "source": "UAEberron",
        "page": 5,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "human"
                    }
                ]
            }
        ],
        "entries": [
            "Your have the magical mark of Passage, the dragonmark of House Orien, and are a member of that house.",
            "You gain the ability to innately cast spells and cantrips, using Intelligence as your spellcasting ability. You cast each spell at its lowest level. Once you cast a given spell this way, you must finish a long rest before you can cast it innately again. You must still expend any material components. Your dragonmark confers the following benefits:",
            {
                "type": "entries",
                "name": "Least Dragonmark",
                "entries": [
                    "When you first take this feat, you gain the least dragonmark. You learn the following spells: {@spell expeditious retreat}, {@spell light}"
                ]
            },
            {
                "type": "entries",
                "name": "Lesser Dragonmark",
                "entries": [
                    "At 5th level and higher, your mark becomes more potent, improving to lesser dragonmark. You learn the following spell: {@spell misty step}"
                ]
            },
            {
                "type": "entries",
                "name": "Greater Dragonmark",
                "entries": [
                    "At 9th level and higher, your mark's power increases again, becoming a greater dragonmark. You learn the following spell: {@spell teleportation circle}"
                ]
            }
        ]
    },
    {
        "name": "Dragonmark of Scribing",
        "source": "UAEberron",
        "page": 5,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "gnome"
                    }
                ]
            }
        ],
        "entries": [
            "Your have the magical mark of Scribing, the dragonmark of House Sivis, and are a member of that house.",
            "You gain the ability to innately cast spells and cantrips, using Intelligence as your spellcasting ability. You cast each spell at its lowest level. Once you cast a given spell this way, you must finish a long rest before you can cast it innately again. You must still expend any material components. Your dragonmark confers the following benefits:",
            {
                "type": "entries",
                "name": "Least Dragonmark",
                "entries": [
                    "When you first take this feat, you gain the least dragonmark. You learn the following spells: {@spell comprehend languages}, {@spell message}"
                ]
            },
            {
                "type": "entries",
                "name": "Lesser Dragonmark",
                "entries": [
                    "At 5th level and higher, your mark becomes more potent, improving to lesser dragonmark. You learn the following spell: {@spell sending}"
                ]
            },
            {
                "type": "entries",
                "name": "Greater Dragonmark",
                "entries": [
                    "At 9th level and higher, your mark's power increases again, becoming a greater dragonmark. You learn the following spell: {@spell tongues}"
                ]
            }
        ]
    },
    {
        "name": "Dragonmark of Sentinel",
        "source": "UAEberron",
        "page": 5,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "human"
                    }
                ]
            }
        ],
        "entries": [
            "Your have the magical mark of Sentinel, the dragonmark of House Deneith, and are a member of that house.",
            "You gain the ability to innately cast spells and cantrips, using Wisdom as your spellcasting ability. You cast each spell at its lowest level. Once you cast a given spell this way, you must finish a long rest before you can cast it innately again. You must still expend any material components. Your dragonmark confers the following benefits:",
            {
                "type": "entries",
                "name": "Least Dragonmark",
                "entries": [
                    "When you first take this feat, you gain the least dragonmark. You learn the following spells: {@spell blade ward}, {@spell compelled duel}"
                ]
            },
            {
                "type": "entries",
                "name": "Lesser Dragonmark",
                "entries": [
                    "At 5th level and higher, your mark becomes more potent, improving to lesser dragonmark. You learn the following spell: {@spell blur}"
                ]
            },
            {
                "type": "entries",
                "name": "Greater Dragonmark",
                "entries": [
                    "At 9th level and higher, your mark's power increases again, becoming a greater dragonmark. You learn the following spell: {@spell protection from energy}"
                ]
            }
        ]
    },
    {
        "name": "Dragonmark of Shadow",
        "source": "UAEberron",
        "page": 5,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "elf"
                    }
                ]
            }
        ],
        "entries": [
            "Your have the magical mark of Shadow, the dragonmark of House Phiarlan and House Thuranni, and are a member of one of those houses.",
            "You gain the ability to innately cast spells and cantrips, using Charisma as your spellcasting ability. You cast each spell at its lowest level. Once you cast a given spell this way, you must finish a long rest before you can cast it innately again. You must still expend any material components. Your dragonmark confers the following benefits:",
            {
                "type": "entries",
                "name": "Least Dragonmark",
                "entries": [
                    "When you first take this feat, you gain the least dragonmark. You learn the following spells: {@spell dancing lights}, {@spell disguise self}"
                ]
            },
            {
                "type": "entries",
                "name": "Lesser Dragonmark",
                "entries": [
                    "At 5th level and higher, your mark becomes more potent, improving to lesser dragonmark. You learn the following spell: {@spell darkness}"
                ]
            },
            {
                "type": "entries",
                "name": "Greater Dragonmark",
                "entries": [
                    "At 9th level and higher, your mark's power increases again, becoming a greater dragonmark. You learn the following spell: {@spell nondetection}"
                ]
            }
        ]
    },
    {
        "name": "Dragonmark of Storm",
        "source": "UAEberron",
        "page": 5,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "half-elf"
                    }
                ]
            }
        ],
        "entries": [
            "Your have the magical mark of Storm, the dragonmark of House Lyrander, and are a member of that house.",
            "You gain the ability to innately cast spells and cantrips, using Intelligence as your spellcasting ability. You cast each spell at its lowest level. Once you cast a given spell this way, you must finish a long rest before you can cast it innately again. You must still expend any material components. Your dragonmark confers the following benefits:",
            {
                "type": "entries",
                "name": "Least Dragonmark",
                "entries": [
                    "When you first take this feat, you gain the least dragonmark. You learn the following spells: {@spell fog cloud}, {@spell shocking grasp}"
                ]
            },
            {
                "type": "entries",
                "name": "Lesser Dragonmark",
                "entries": [
                    "At 5th level and higher, your mark becomes more potent, improving to lesser dragonmark. You learn the following spell: {@spell gust of wind}"
                ]
            },
            {
                "type": "entries",
                "name": "Greater Dragonmark",
                "entries": [
                    "At 9th level and higher, your mark's power increases again, becoming a greater dragonmark. You learn the following spell: {@spell sleet storm}"
                ]
            }
        ]
    },
    {
        "name": "Dragonmark of Warding",
        "source": "UAEberron",
        "page": 5,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "dwarf"
                    }
                ]
            }
        ],
        "entries": [
            "Your have the magical mark of Warding, the dragonmark of House Kundarak, and are a member of that house.",
            "You gain the ability to innately cast spells and cantrips, using Intelligence as your spellcasting ability. You cast each spell at its lowest level. Once you cast a given spell this way, you must finish a long rest before you can cast it innately again. You must still expend any material components. Your dragonmark confers the following benefits:",
            {
                "type": "entries",
                "name": "Least Dragonmark",
                "entries": [
                    "When you first take this feat, you gain the least dragonmark. You learn the following spells: {@spell alarm}, {@spell resistance}"
                ]
            },
            {
                "type": "entries",
                "name": "Lesser Dragonmark",
                "entries": [
                    "At 5th level and higher, your mark becomes more potent, improving to lesser dragonmark. You learn the following spell: {@spell arcane lock}"
                ]
            },
            {
                "type": "entries",
                "name": "Greater Dragonmark",
                "entries": [
                    "At 9th level and higher, your mark's power increases again, becoming a greater dragonmark. You learn the following spell: {@spell magic circle}"
                ]
            }
        ]
    },
    {
        "name": "Drow High Magic",
        "source": "UAFeatsForRaces",
        "page": 2,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "elf",
                        "subrace": "drow"
                    }
                ]
            }
        ],
        "entries": [
            "You learn more of the spells typical for your people. You learn {@spell detect magic} and can cast it at will, without expending a spell slot. You also learn {@spell levitate} and {@spell dispel magic}, each of which you can cast once without expending a spell slot. You regain the ability to cast the spell in this way when you finish a long rest. Charisma is your spellcasting ability for these spells."
        ]
    },
    {
        "name": "Drow High Magic",
        "source": "XGE",
        "page": 74,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "elf",
                        "subrace": "drow"
                    }
                ]
            }
        ],
        "entries": [
            "You learn more of the magic typical of dark elves. You learn the {@spell detect magic} spell and can cast it at will, without expending a spell slot. You also learn {@spell levitate} and {@spell dispel magic}, each of which you can cast once without expending a spell slot. You regain the ability to cast those two spells in this way when you finish a long rest. Charisma is your spellcasting ability for all three spells."
        ]
    },
    {
        "name": "Dual Wielder",
        "source": "PHB",
        "page": 165,
        "entries": [
            "You master fighting with two weapons, gaining the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain a +1 bonus to AC while you are wielding a separate melee weapon in each hand.",
                    "You can use two-weapon fighting even when the one-handed melee weapons you are wielding aren't light.",
                    "You can draw or stow two one-handed weapons when you would normally be able to draw or stow only one."
                ]
            }
        ]
    },
    {
        "name": "Dungeon Delver",
        "source": "PHB",
        "page": 166,
        "entries": [
            "Alert to the hidden traps and secret doors found in many dungeons, you gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You have advantage on Wisdom ({@skill Perception}) and Intelligence ({@skill Investigation}) checks made to detect the presence of secret doors.",
                    "You have advantage on saving throws made to avoid or resist traps.",
                    "You have resistance to the damage dealt by traps.",
                    "Traveling at a fast pace doesn't impose the normal -5 penalty on your passive Wisdom ({@skill Perception}) score."
                ]
            }
        ]
    },
    {
        "name": "Durable",
        "source": "PHB",
        "page": 166,
        "ability": [
            {
                "con": 1
            }
        ],
        "entries": [
            "Hardy and resilient, you gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "When you roll a Hit Die to regain hit points, the minimum number of hit points you regain from the roll equals twice your Constitution modifier (minimum of 2)."
                ]
            }
        ]
    },
    {
        "name": "Dwarf Resilience",
        "source": "UAFeatsForRaces",
        "page": 2,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "dwarf"
                    }
                ]
            }
        ],
        "ability": [
            {
                "con": 1
            }
        ],
        "entries": [
            "You have the blood of dwarf heroes flowing through your veins. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "Whenever you take the Dodge action in combat, you can spend one Hit Die to heal yourself. Roll the die, add your Constitution modifier, and regain a number of hit points equal to the total (minimum of 1)."
                ]
            }
        ]
    },
    {
        "name": "Dwarven Fortitude",
        "source": "XGE",
        "page": 74,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "dwarf"
                    }
                ]
            }
        ],
        "ability": [
            {
                "con": 1
            }
        ],
        "entries": [
            "You have the blood of dwarf heroes flowing through your veins. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "Whenever you take the Dodge action in combat, you can spend one Hit Die to heal yourself. Roll the die, add your Constitution modifier, and regain a number of hit points equal to the total (minimum of 1)."
                ]
            }
        ]
    },
    {
        "name": "Elemental Adept",
        "source": "PHB",
        "page": 166,
        "prerequisite": [
            {
                "spellcasting": true
            }
        ],
        "entries": [
            "When you gain this feat, choose one of the following damage types: acid, cold, fire, lightning, or thunder.",
            "Spells you cast ignore resistance to damage of the chosen type. In addition, when you roll damage for a spell you cast that deals damage of that type, you can treat any 1 on a damage die as a 2.",
            "You can select this feat multiple times. Each time you do so, you must choose a different damage type."
        ]
    },
    {
        "name": "Elven Accuracy",
        "source": "UAFeatsForRaces",
        "page": 2,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "elf"
                    },
                    {
                        "name": "half-elf"
                    }
                ]
            }
        ],
        "ability": [
            {
                "dex": 1
            }
        ],
        "entries": [
            "You have uncanny aim. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "Whenever you have advantage on an attack roll, you can reroll one of the dice once."
                ]
            }
        ]
    },
    {
        "name": "Elven Accuracy",
        "source": "XGE",
        "page": 74,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "elf"
                    },
                    {
                        "name": "half-elf"
                    }
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "dex",
                        "int",
                        "wis",
                        "cha"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "The accuracy of elves is legendary, especially that of elf archers and spellcasters. You have uncanny aim with attacks that rely on precision rather than brute force. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "Whenever you have advantage on an attack roll using Dexterity, Intelligence, Wisdom, or Charisma, you can reroll one of the dice once."
                ]
            }
        ]
    },
    {
        "name": "Empathic",
        "source": "UAFeatsForSkills",
        "page": 2,
        "ability": [
            {
                "wis": 1
            }
        ],
        "entries": [
            "You possess keen insight into how other people think and feel. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency in the {@skill Insight} skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.",
                    "You can use your action to try to get uncanny insight about one humanoid you can see within 30 feet of you. Make a Wisdom ({@skill Insight}) check contested by the target's Charisma ({@skill Deception}) check. If your check succeeds, you have advantage on attack rolls and ability checks against the target until the end of your next turn."
                ]
            }
        ]
    },
    {
        "name": "Everybody's Friend",
        "source": "UAFeatsForRaces",
        "page": 2,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "half-elf"
                    }
                ]
            }
        ],
        "ability": [
            {
                "cha": 1
            }
        ],
        "entries": [
            "You develop your magnetic personality to ease your way through the world. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency in the {@skill Deception} and {@skill Persuasion} skills. If you're already proficient in either skill, your proficiency bonus is doubled for any check you make with that skill."
                ]
            }
        ]
    },
    {
        "name": "Fade Away",
        "source": "UAFeatsForRaces",
        "page": 2,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "gnome"
                    }
                ]
            }
        ],
        "ability": [
            {
                "int": 1
            }
        ],
        "entries": [
            "You can draw on your magical heritage to escape danger. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "When you take damage, you can use a reaction to magically become {@condition invisible} until the end of your next turn or until you attack, deal damage, or force someone to make a saving throw. Once you use this ability, you can't do so again until you finish a short or long rest."
                ]
            }
        ]
    },
    {
        "name": "Fade Away",
        "source": "XGE",
        "page": 74,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "gnome"
                    }
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "dex",
                        "int"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "Your people are clever, with a knack for illusion magic. You have learned a magical trick for fading away when you suffer harm. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "Immediately after you take damage, you can use a reaction to magically become {@condition invisible} until the end of your next turn or until you attack, deal damage, or force someone to make a saving throw. Once you use this ability, you can't do so again until you finish a short or long rest."
                ]
            }
        ]
    },
    {
        "name": "Fell Handed",
        "source": "UAFeats",
        "page": 2,
        "entries": [
            "You master the handaxe, battleaxe, greataxe, warhammer, and maul. You gain the following benefits when using any of them:",
            {
                "type": "list",
                "items": [
                    "You gain a +1 bonus to attack rolls you make with the weapon.",
                    "Whenever you have advantage on a melee attack roll you make with the weapon and hit, you can knock the target {@condition prone} if the lower of the two {@dice d20} rolls would also hit the target.",
                    "Whenever you have disadvantage on a melee attack roll you make with the weapon, the target takes bludgeoning damage equal to your Strength modifier (minimum of 0) if the attack misses but the higher of the two {@dice d20} rolls would have hit.",
                    "If you use the Help action to aid an ally's melee attack while you're wielding the weapon, you knock the target's shield aside momentarily. In addition to the ally gaining advantage on the attack roll, the ally gains a +2 bonus to the roll if the target is using a shield."
                ]
            }
        ]
    },
    {
        "name": "Fey Teleportation",
        "source": "UAFeatsForRaces",
        "page": 3,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "elf",
                        "subrace": "high"
                    }
                ]
            }
        ],
        "ability": [
            {
                "int": 1
            }
        ],
        "entries": [
            "Drawing on your fey ancestry, you have learned how to teleport. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You learn the {@spell misty step} spell and can cast it once without expending a spell slot. You regain the ability to cast it in this way when you finish a short or long rest. Intelligence is your spellcasting ability for this spell."
                ]
            }
        ]
    },
    {
        "name": "Fey Teleportation",
        "source": "XGE",
        "page": 74,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "elf",
                        "subrace": "high"
                    }
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "int",
                        "cha"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "Your study of high elven lore has unlocked fey power that few other elves possess, except your eladrin cousins. Drawing on your fey ancestry, you can momentarily stride through the Feywild to shorten your path from one place to another. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You learn to speak, read, and write Sylvan.",
                    "You learn the {@spell misty step} spell and can cast it once without expending a spell slot. You regain the ability to cast it in this way when you finish a short or long rest. Intelligence is your spellcasting ability for this spell."
                ]
            }
        ]
    },
    {
        "name": "Flail Mastery",
        "source": "UAFeats",
        "page": 3,
        "entries": [
            "The flail is a tricky weapon to use, but you have spent countless hours mastering it. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain a +1 bonus to attack rolls you make with a flail.",
                    "As a bonus action on your turn, you can prepare yourself to extend your flail to sweep over targets' shields. Until the end of this turn, your attack rolls with a flail gain a +2 bonus against any target using a shield.",
                    "When you hit with an opportunity attack using a flail, the target must succeed on a Strength saving throw (DC 8 + your proficiency bonus + your Strength modifier) or be knocked {@condition prone}."
                ]
            }
        ]
    },
    {
        "name": "Flames of Phlegethos",
        "source": "UAFeatsForRaces",
        "page": 3,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "tiefling"
                    }
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "int",
                        "cha"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "You learn to call on hellfire to serve your commands. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "When you roll fire damage for a spell you cast, you can reroll any roll of 1 on the fire damage dice, but you must use the new roll, even if it is another 1.",
                    "Whenever you cast a spell that deals fire damage, you can cause flames to wreathe you until the end of your next turn. The flames don't harm you or your possessions, and they shed bright light out to 30 feet and dim light for an additional 30 feet. While the flames are present, any creature within 5 feet of you that hits you with a melee attack takes {@dice 1d4} fire damage."
                ]
            }
        ]
    },
    {
        "name": "Flames of Phlegethos",
        "source": "XGE",
        "page": 74,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "tiefling"
                    }
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "int",
                        "cha"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "You learn to call on hellfire to serve your commands. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "When you roll fire damage for a spell you cast, you can reroll any roll of 1 on the fire damage dice, but you must use the new roll, even if it is another 1.",
                    "Whenever you cast a spell that deals fire damage, you can cause flames to wreathe you until the end of your next turn. The flames don't harm you or your possessions, and they shed bright light out to 30 feet and dim light for an additional 30 feet. While the flames are present, any creature within 5 feet of you that hits you with a melee attack takes {@dice 1d4} fire damage."
                ]
            }
        ]
    },
    {
        "name": "Gourmand",
        "source": "UAFeats",
        "page": 4,
        "ability": [
            {
                "con": 1
            }
        ],
        "entries": [
            "You have mastered a variety of special recipes, allowing you to prepare exotic dishes with useful effects. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency with {@item cook's utensils|phb}. If you are already proficient with them, you add double your proficiency bonus to checks you make with them.",
                    "As an action, you can inspect a drink or plate of food within 5 feet of you and determine whether it is {@condition poisoned}, provided that you can see and smell it.",
                    "During a long rest, you can prepare and serve a meal that helps you and your allies recover from the rigors of adventuring, provided you have suitable food, {@item cook's utensils|phb}, and other supplies on hand. The meal serves up to six people, and each person who eats it regains two additional Hit Dice at the end of the long rest. In addition, those who partake of the meal have advantage on Constitution saving throws against disease for the next 24 hours."
                ]
            }
        ]
    },
    {
        "name": "Grappler",
        "source": "PHB",
        "page": 167,
        "srd": true,
        "prerequisite": [
            {
                "ability": [
                    {
                        "str": 13
                    }
                ]
            }
        ],
        "entries": [
            "You've developed the skills necessary to hold your own in close-quarters grappling. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You have advantage on attack rolls against a creature you are grappling.",
                    "You can use your action to try to pin a creature {@condition grappled} by you. To do so, make another grapple check. If you succeed, you and the creature are both {@condition restrained} until the grapple ends."
                ]
            }
        ]
    },
    {
        "name": "Great Weapon Master",
        "source": "PHB",
        "page": 167,
        "entries": [
            "You've learned to put the weight of a weapon to your advantage, letting its momentum empower your strikes. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "On your turn, when you score a critical hit with a melee weapon or reduce a creature to 0 hit points with one, you can make one melee weapon attack as a bonus action.",
                    "Before you make a melee attack with a heavy weapon that you are proficient with, you can choose to take a -5 penalty to the attack roll. If the attack hits, you add +10 to the attack's damage."
                ]
            }
        ]
    },
    {
        "name": "Grudge-Bearer",
        "source": "UAFeatsForRaces",
        "page": 3,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "dwarf"
                    }
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "con",
                        "wis"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "You have a deep hatred for a particular kind of creature. Choose your foes, a type of creature to bear the burden of your wrath: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can choose two races of humanoid (such as gnolls and orcs). You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "During the first round of any combat against your chosen foes, your attack rolls against any of them have advantage.",
                    "When any of your chosen foes makes an opportunity attack against you, it makes the attack roll with disadvantage.",
                    "Whenever you make an Intelligence ({@skill Arcana}, {@skill History}, {@skill Nature}, or {@skill Religion}) check to recall information about your chosen foes, you add double your proficiency bonus to the check, even if you're not normally proficient."
                ]
            }
        ]
    },
    {
        "name": "Healer",
        "source": "PHB",
        "page": 167,
        "entries": [
            "You are an able physician, allowing you to mend wounds quickly and get your allies back in the fight. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "When you use a {@item healer's kit|phb} to stabilize a dying creature, that creature also regains 1 hit point.",
                    "As an action, you can spend one use of a {@item healer's kit|phb} to tend to a creature and restore {@dice 1d6 + 4} hit points to it, plus additional hit points equal to the creature's maximum number of Hit Dice. The creature can't regain hit points from this feat again until it finishes a short or long rest."
                ]
            }
        ]
    },
    {
        "name": "Heavily Armored",
        "source": "PHB",
        "page": 167,
        "prerequisite": [
            {
                "proficiency": [
                    {
                        "armor": "medium"
                    }
                ]
            }
        ],
        "ability": [
            {
                "str": 1
            }
        ],
        "entries": [
            "You have trained to master the use of heavy armor, gaining the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency with heavy armor."
                ]
            }
        ]
    },
    {
        "name": "Heavy Armor Master",
        "source": "PHB",
        "page": 167,
        "prerequisite": [
            {
                "proficiency": [
                    {
                        "armor": "heavy"
                    }
                ]
            }
        ],
        "ability": [
            {
                "str": 1
            }
        ],
        "entries": [
            "You can use your armor to deflect strikes that would kill others. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "While you are wearing heavy armor, bludgeoning, piercing, and slashing damage that you take from nonmagical weapons is reduced by 3."
                ]
            }
        ]
    },
    {
        "name": "Historian",
        "source": "UAFeatsForSkills",
        "page": 2,
        "ability": [
            {
                "int": 1
            }
        ],
        "entries": [
            "Your study of history rewards you with the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency in the {@skill History} skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.",
                    "When you take the Help action to aid another creature's ability check, you can make a DC 15 Intelligence ({@skill History}) check. On a success, that creature's check gains a bonus equal to your proficiency bonus, as you share pertinent advice and historical examples. To receive this bonus, the creature must be able to understand what you're saying."
                ]
            }
        ]
    },
    {
        "name": "Human Determination",
        "source": "UAFeatsForRaces",
        "page": 3,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "human"
                    }
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "dex",
                        "con",
                        "int",
                        "wis",
                        "cha"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "You are filled with a determination that can draw the unreachable within your reach. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "When you make an attack roll, an ability check, or a saving throw, you can do so with advantage. Once you use this ability, you can't use it again until you finish a short or long rest."
                ]
            }
        ]
    },
    {
        "name": "Infernal Constitution",
        "source": "UAFeatsForRaces",
        "page": 3,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "tiefling"
                    }
                ]
            }
        ],
        "ability": [
            {
                "con": 1
            }
        ],
        "entries": [
            "Fiendish blood runs strong in you. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You have resistance to cold and poison damage.",
                    "You have advantage on saving throws against being {@condition poisoned}."
                ]
            }
        ]
    },
    {
        "name": "Infernal Constitution",
        "source": "XGE",
        "page": 75,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "tiefling"
                    }
                ]
            }
        ],
        "ability": [
            {
                "con": 1
            }
        ],
        "entries": [
            "Fiendish blood runs strong in you, unlocking a resilience akin to that possessed by some fiends. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You have resistance to cold and poison damage.",
                    "You have advantage on saving throws against being {@condition poisoned}."
                ]
            }
        ]
    },
    {
        "name": "Inspiring Leader",
        "source": "PHB",
        "page": 167,
        "prerequisite": [
            {
                "ability": [
                    {
                        "cha": 13
                    }
                ]
            }
        ],
        "entries": [
            "You can spend 10 minutes inspiring your companions, shoring up their resolve to fight. When you do so, choose up to six friendly creatures (which can include yourself) within 30 feet of you who can see or hear you and who can understand you. Each creature can gain temporary hit points equal to your level + your Charisma modifier. A creature can't gain temporary hit points from this feat again until it has finished a short or long rest."
        ]
    },
    {
        "name": "Investigator",
        "source": "UAFeatsForSkills",
        "page": 2,
        "ability": [
            {
                "int": 1
            }
        ],
        "entries": [
            "You have an eye for detail and can pick out the smallest clues. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency in the {@skill Investigation} skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.",
                    "You can take the Search action as a bonus action."
                ]
            }
        ]
    },
    {
        "name": "Keen Mind",
        "source": "PHB",
        "page": 167,
        "ability": [
            {
                "int": 1
            }
        ],
        "entries": [
            "You have a mind that can track time, direction, and detail with uncanny precision. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You always know which way is north.",
                    "You always know the number of hours left before the next sunrise or sunset.",
                    "You can accurately recall anything you have seen or heard within the past month."
                ]
            }
        ]
    },
    {
        "name": "Lightly Armored",
        "source": "PHB",
        "page": 167,
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "dex"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "You have trained to master the use of light armor, gaining the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency with light armor."
                ]
            }
        ]
    },
    {
        "name": "Linguist",
        "source": "PHB",
        "page": 167,
        "ability": [
            {
                "int": 1
            }
        ],
        "entries": [
            "You have studied languages and codes, gaining the following benefits:",
            {
                "type": "list",
                "items": [
                    "You learn three languages of your choice.",
                    "You can ably create written ciphers. Others can't decipher a code you create unless you teach them, they succeed on an Intelligence check (DC equal to your Intelligence score + your proficiency bonus), or they use magic to decipher it."
                ]
            }
        ]
    },
    {
        "name": "Lucky",
        "source": "PHB",
        "page": 167,
        "entries": [
            "You have inexplicable luck that seems to kick in at just the right moment.",
            "You have 3 luck points. Whenever you make an attack roll, an ability check, or a saving throw, you can spend one luck point to roll an additional {@dice d20}. You can choose to spend one of your luck points after you roll the die, but before the outcome is determined. You choose which of the {@dice d20}s is used for the attack roll, ability check, or saving throw.",
            "You can also spend one luck point when an attack roll is made against you. Roll a {@dice d20}, and then choose whether the attack uses the attacker's roll or yours. If more than one creature spends a luck point to influence the outcome of a roll, the points cancel each other out; no additional dice are rolled.",
            "You regain your expended luck points when you finish a long rest."
        ]
    },
    {
        "name": "Mage Slayer",
        "source": "PHB",
        "page": 168,
        "entries": [
            "You have practiced techniques useful in melee combat against spellcasters, gaining the following benefits:",
            {
                "type": "list",
                "items": [
                    "When a creature within 5 feet of you casts a spell, you can use your reaction to make a melee weapon attack against that creature.",
                    "When you damage a creature that is concentrating on a spell, that creature has disadvantage on the saving throw it makes to maintain its concentration.",
                    "You have advantage on saving throws against spells cast by creatures within 5 feet of you."
                ]
            }
        ]
    },
    {
        "name": "Magic Initiate",
        "source": "PHB",
        "page": 168,
        "entries": [
            "Choose a class: {@filter bard|spells|level=0;1|class=bard}, {@filter cleric|spells|level=0;1|class=cleric}, {@filter druid|spells|level=0;1|class=druid}, {@filter sorcerer|spells|level=0;1|class=sorcerer}, {@filter warlock|spells|level=0;1|class=warlock}, or {@filter wizard|spells|level=0;1|class=wizard}. You learn two cantrips of your choice from that class's spell list.",
            "In addition, choose one 1st-level spell from that same list. You learn that spell and can cast it at its lowest level. Once you cast it, you must finish a long rest before you can cast it again using this feat.",
            "Your spellcasting ability for these spells depends on the class you chose: Charisma for {@filter bard|spells|level=0;1|class=bard}, {@filter sorcerer|spells|level=0;1|class=sorcerer}, or {@filter warlock|spells|level=0;1|class=warlock}; Wisdom for {@filter cleric|spells|level=0;1|class=cleric} or {@filter druid|spells|level=0;1|class=druid}; or Intelligence for {@filter wizard|spells|level=0;1|class=wizard}."
        ]
    },
    {
        "name": "Martial Adept",
        "source": "PHB",
        "page": 168,
        "entries": [
            "You have martial training that allows you to perform special combat maneuvers. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You learn two {@filter maneuvers|optionalfeatures|feature type=MV:B} of your choice from among those available to the {@class fighter|phb|Battle Master|Battle Master|phb|Martial Archetype 3} archetype in the fighter class. If a maneuver you use requires your target to make a saving throw to resist the maneuver's effects, the saving throw DC equals 8 + your proficiency bonus + your Strength or Dexterity modifier (your choice).",
                    "You gain one superiority die, which is a {@dice d6} (this die is added to any superiority dice you have from another source). This die is used to fuel your maneuvers. A superiority die is expended when you use it. You regain your expended superiority dice when you finish a short or long rest."
                ]
            }
        ]
    },
    {
        "name": "Master of Disguise",
        "source": "UAFeats",
        "page": 4,
        "ability": [
            {
                "cha": 1
            }
        ],
        "entries": [
            "You have honed your ability to shape your personality and to read the personalities of others. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency with the {@item disguise kit|phb}. If you are already proficient with it, you add double your proficiency bonus to checks you make with it.",
                    "If you spend 1 hour observing a creature, you can then spend 8 hours crafting a disguise you can quickly don to mimic that creature. Making the disguise requires a disguise kit. You must make checks as normal to disguise yourself, but you can assume the disguise as an action."
                ]
            }
        ]
    },
    {
        "name": "Medic",
        "source": "UAFeatsForSkills",
        "page": 2,
        "ability": [
            {
                "wis": 1
            }
        ],
        "entries": [
            "You master the physician's arts, gaining the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency in the {@skill Medicine} skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.",
                    "During a short rest, you can clean and bind the wounds of up to six willing beasts and humanoids. Make a DC 15 Wisdom ({@skill Medicine}) check for each creature. On a success, if a creature spends a Hit Die during this rest, that creature can forgo the roll and instead regain the maximum number of hit points the die can restore. A creature can do so only once per rest, regardless of how many Hit Dice it spends."
                ]
            }
        ]
    },
    {
        "name": "Medium Armor Master",
        "source": "PHB",
        "page": 168,
        "prerequisite": [
            {
                "proficiency": [
                    {
                        "armor": "medium"
                    }
                ]
            }
        ],
        "entries": [
            "You have practiced moving in medium armor to gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "Wearing medium armor doesn't impose disadvantage on your Dexterity ({@skill Stealth}) checks.",
                    "When you wear medium armor, you can add 3, rather than 2, to your AC if you have a Dexterity of 16 or higher."
                ]
            }
        ]
    },
    {
        "name": "Menacing",
        "source": "UAFeatsForSkills",
        "page": 2,
        "ability": [
            {
                "cha": 1
            }
        ],
        "entries": [
            "You become fearsome to others, gaining the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency in the {@skill Intimidation} skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.",
                    "When you take the Attack action on your turn, you can replace one attack with an attempt to demoralize one humanoid you can see within 30 feet of you that can see and hear you. Make a Charisma ({@skill Intimidation}) check contested by the target's Wisdom ({@skill Insight}) check. If your check succeeds, the target is {@condition frightened} until the end of your next turn. If your check fails, the target can't be {@condition frightened} by you in this way for 1 hour."
                ]
            }
        ]
    },
    {
        "name": "Mobile",
        "source": "PHB",
        "page": 168,
        "entries": [
            "You are exceptionally speedy and agile. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "Your speed increases by 10 feet.",
                    "When you use the Dash action, difficult terrain doesn't cost you extra movement on that turn.",
                    "When you make a melee attack against a creature, you don't provoke opportunity attacks from that creature for the rest of the turn, whether you hit or not."
                ]
            }
        ]
    },
    {
        "name": "Moderately Armored",
        "source": "PHB",
        "page": 168,
        "prerequisite": [
            {
                "proficiency": [
                    {
                        "armor": "light"
                    }
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "dex"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "You have trained to master the use of medium armor and shields, gaining the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency with medium armor and shields."
                ]
            }
        ]
    },
    {
        "name": "Mounted Combatant",
        "source": "PHB",
        "page": 168,
        "entries": [
            "You are a dangerous foe to face while mounted. While you are mounted and aren't {@condition incapacitated}, you gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You have advantage on melee attack rolls against any unmounted creature that is smaller than your mount.",
                    "You can force an attack targeted at your mount to target you instead.",
                    "If your mount is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails."
                ]
            }
        ]
    },
    {
        "name": "Naturalist",
        "source": "UAFeatsForSkills",
        "page": 3,
        "ability": [
            {
                "int": 1
            }
        ],
        "entries": [
            "Your extensive study of nature rewards you with the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency in the {@skill Nature} skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.",
                    "You learn the {@spell druidcraft} and {@spell detect poison and disease} spells. You can cast {@spell detect poison and disease} once without expending a spell slot, and you regain the ability to do so when you finish a long rest."
                ]
            }
        ]
    },
    {
        "name": "Observant",
        "source": "PHB",
        "page": 168,
        "ability": [
            {
                "choose": {
                    "from": [
                        "int",
                        "wis"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "Quick to notice details of your environment, you gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "If you can see a creature's mouth while it is speaking a language you understand, you can interpret what it's saying by reading its lips.",
                    "You have a +5 bonus to your passive Wisdom ({@skill Perception}) and passive Intelligence ({@skill Investigation}) scores."
                ]
            }
        ]
    },
    {
        "name": "Orcish Aggression",
        "source": "UAFeatsForRaces",
        "page": 3,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "half-orc"
                    }
                ]
            }
        ],
        "entries": [
            "As a bonus action, you can move up to your speed toward an enemy of your choice that you can see or hear. You must end this move closer to the enemy than you started."
        ]
    },
    {
        "name": "Orcish Fury",
        "source": "UAFeatsForRaces",
        "page": 4,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "half-orc"
                    }
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "con"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "Your fury burns tirelessly. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "When you hit with an attack made with a simple or martial weapon, you can roll one of the weapon's damage dice an additional time and add it as extra damage of the weapon's damage type. Once you use this ability, you can't use it again until you finish a short or long rest.",
                    "Immediately after you use your Relentless Endurance trait, you can use your reaction to make one weapon attack."
                ]
            }
        ]
    },
    {
        "name": "Orcish Fury",
        "source": "XGE",
        "page": 75,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "half-orc"
                    }
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "con"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "Your fury burns tirelessly. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "When you hit with an attack using a simple or martial weapon, you can roll one of the weapon's damage dice an additional time and add it as extra damage of the weapon's damage type. Once you use this ability, you can't use it again until you finish a short or long rest.",
                    "Immediately after you use your Relentless Endurance trait, you can use your reaction to make one weapon attack."
                ]
            }
        ]
    },
    {
        "name": "Perceptive",
        "source": "UAFeatsForSkills",
        "page": 3,
        "ability": [
            {
                "wis": 1
            }
        ],
        "entries": [
            "You hone your senses until they become razor sharp. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency in the {@skill Perception} skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.",
                    "Being in a lightly obscured area doesn't impose disadvantage on your Wisdom ({@skill Perception}) checks if you can both see and hear."
                ]
            }
        ]
    },
    {
        "name": "Performer",
        "source": "UAFeatsForSkills",
        "page": 3,
        "ability": [
            {
                "cha": 1
            }
        ],
        "entries": [
            "You master performance so that you can command any stage. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency in the {@skill Performance} skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.",
                    "While performing, you can try to distract one humanoid you can see who can see and hear you. Make a Charisma ({@skill Performance}) check contested by the humanoid's Wisdom ({@skill Insight}) check. If your check succeeds, you grab the humanoid's attention enough that it makes Wisdom ({@skill Perception}) and Intelligence ({@skill Investigation}) checks with disadvantage until you stop performing."
                ]
            }
        ]
    },
    {
        "name": "Polearm Master",
        "source": "PHB",
        "page": 168,
        "entries": [
            "You can keep your enemies at bay with reach weapons. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "When you take the Attack action and attack with only a {@item glaive|phb}, {@item halberd|phb}, {@item quarterstaff|phb}, or {@item spear|phb}, you can use a bonus action to make a melee attack with the opposite end of the weapon; this attack uses the same ability modifier as the primary attack. The weapon's damage die for this attack is a {@dice d4}, and the attack deals bludgeoning damage.",
                    "While you are wielding a {@item glaive|phb}, {@item halberd|phb}, {@item pike|phb}, {@item quarterstaff|phb}, or {@item spear|phb}, other creatures provoke an opportunity attack from you when they enter your reach."
                ]
            }
        ]
    },
    {
        "name": "Prodigy",
        "source": "UAFeatsForRaces",
        "page": 4,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "half-elf"
                    },
                    {
                        "name": "human"
                    }
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "dex",
                        "con",
                        "int",
                        "wis",
                        "cha"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "You have a knack for learning new things. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain one skill proficiency of your choice, one tool proficiency of your choice, and fluency in one language of your choice."
                ]
            }
        ]
    },
    {
        "name": "Prodigy",
        "source": "XGE",
        "page": 75,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "half-elf"
                    },
                    {
                        "name": "half-orc"
                    },
                    {
                        "name": "human"
                    }
                ]
            }
        ],
        "entries": [
            "You have a knack for learning new things. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain one skill proficiency of your choice, one tool proficiency of your choice, and fluency in one language of your choice.",
                    "Choose one skill in which you have proficiency. You gain expertise with that skill, which means your proficiency bonus is doubled for any ability check you make with it. The skill you choose must be one that isn't already benefiting from a feature, such as Expertise, that doubles your proficiency bonus."
                ]
            }
        ]
    },
    {
        "name": "Quick-Fingered",
        "source": "UAFeatsForSkills",
        "page": 3,
        "ability": [
            {
                "dex": 1
            }
        ],
        "entries": [
            "Your nimble fingers and agility let you perform sleight of hand. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency in the {@skill Sleight of Hand} skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.",
                    "As a bonus action, you can make a Dexterity ({@skill Sleight of Hand}) check to plant something on someone else, conceal an object on a creature, lift a purse, or take something from a pocket."
                ]
            }
        ]
    },
    {
        "name": "Quicksmithing",
        "source": "PSK",
        "page": 13,
        "prerequisite": [
            {
                "ability": [
                    {
                        "int": 13
                    }
                ]
            }
        ],
        "entries": [
            "You have mastered the art of on-the-fly invention, improvement, and jury-rigging. You can use your talents to create immediate, short-term magical effects similar to spells, given time and an adequate supply of aether.",
            "When you choose this feat, you master two magical effects, each of which recreates the effect of a 1st-level spell that has the ritual tag. These spells can come from any class list, but Intelligence is your spellcasting ability for them.",
            "If you come across a schematic geared toward quicksmithing or study with another quicksmith, you might be able to add another spell to the effects you have mastered. The spell's level can be no higher than half your level (rounded up), and it must have the ritual tag. The process of mastering the spell takes 2 hours per level of the spell, and costs 50 gp per level. The cost represents aether you use as you experiment with the spell effect to master it.",
            "In addition, you have proficiency with artisan's tools (quicksmith's tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours unless you spend 1 hour repairing it to keep it functioning. You can use your action to dismantle the device, at which point you can reclaim the materials used to create it. You can have up to three such devices active at a time.",
            "When you create a device, choose one of the following options:",
            {
                "type": "entries",
                "name": "Clockwork Toy",
                "entries": [
                    "This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents."
                ]
            },
            {
                "type": "entries",
                "name": "Fire Starter",
                "entries": [
                    "This device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action."
                ]
            },
            {
                "type": "entries",
                "name": "Music Box",
                "entries": [
                    "When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song's end or when it is closed."
                ]
            }
        ]
    },
    {
        "name": "Resilient",
        "source": "PHB",
        "page": 168,
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "dex",
                        "con",
                        "int",
                        "wis",
                        "cha"
                    ],
                    "amount": 1,
                    "textreference": true
                }
            }
        ],
        "entries": [
            "Choose one ability score. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency in saving throws using the chosen ability."
                ]
            }
        ]
    },
    {
        "name": "Revenant Blade",
        "source": "ERLW",
        "page": 22,
        "otherSources": [
            {
                "source": "UAWGE",
                "page": 74
            }
        ],
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "elf"
                    }
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "dex"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "You are descended from a master of the double-bladed scimitar, and some of that mastery has passed on to you. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "While you are holding a double-bladed scimitar with two hands, you gain a +1 bonus to Armor Class.",
                    "A double-bladed scimitar has the finesse property when you wield it."
                ]
            }
        ]
    },
    {
        "name": "Ritual Caster",
        "source": "PHB",
        "page": 169,
        "prerequisite": [
            {
                "ability": [
                    {
                        "int": 13
                    },
                    {
                        "wis": 13
                    }
                ]
            }
        ],
        "entries": [
            "You have learned a number of spells that you can cast as rituals. These spells are written in a ritual book, which you must have in hand while casting one of them.",
            "When you choose this feat, you acquire a ritual book holding two 1st-level spells of your choice. Choose one of the following classes: {@filter bard|spells|level=1|class=bard|components & miscellaneous=ritual}, {@filter cleric|spells|level=1|class=cleric|components & miscellaneous=ritual}, {@filter druid|spells|level=1|class=druid|components & miscellaneous=ritual}, {@filter sorcerer|spells|level=1|class=sorcerer|components & miscellaneous=ritual}, {@filter warlock|spells|level=1|class=warlock|components & miscellaneous=ritual}, or {@filter wizard|spells|level=1|class=wizard|components & miscellaneous=ritual}. You must choose your spells from that class's spell list, and the spells you choose must have the ritual tag. The class you choose also determines your spellcasting ability for these spells: Charisma for bard, sorcerer, or warlock; Wisdom for cleric or druid; or Intelligence for wizard.",
            "If you come across a spell in written form, such as a magical spell scroll or a wizard's spellbook, you might be able to add it to your ritual book. The spell must be on the spell list for the class you chose, the spell's level can be no higher than half your level (rounded up), and it must have the ritual tag. The process of copying the spell into your ritual book takes 2 hours per level of the spell, and costs 50 gp per level. The cost represents material components you expend as you experiment with the spell to master it, as well as the fine inks you need to record it."
        ]
    },
    {
        "name": "Savage Attacker",
        "source": "PHB",
        "page": 169,
        "entries": [
            "Once per turn when you roll damage for a melee weapon attack, you can reroll the weapon's damage dice and use either total."
        ]
    },
    {
        "name": "Second Chance",
        "source": "UAFeatsForRaces",
        "page": 4,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "halfling"
                    }
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "dex",
                        "con",
                        "cha"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "You have a knack for learning new things. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "When a creature you can see hits you with an attack roll, you can use your reaction to force that creature to reroll. Once you use this ability, you can't do so again until you finish a short or long rest."
                ]
            }
        ]
    },
    {
        "name": "Second Chance",
        "source": "XGE",
        "page": 75,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "halfling"
                    }
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "dex",
                        "con",
                        "cha"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "Fortune favors you when someone tries to strike you. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "When a creature you can see hits you with an attack roll, you can use your reaction to force that creature to reroll. Once you use this ability, you can't use it again until you roll initiative at the start of combat or until you finish a short or long rest."
                ]
            }
        ]
    },
    {
        "name": "Sentinel",
        "source": "PHB",
        "page": 169,
        "entries": [
            "You have mastered techniques to take advantage of every drop in any enemy's guard, gaining the following benefits:",
            {
                "type": "list",
                "items": [
                    "When you hit a creature with an opportunity attack, the creature's speed becomes 0 for the rest of the turn.",
                    "Creatures provoke opportunity attacks from you even if they take the Disengage action before leaving your reach.",
                    "When a creature within 5 feet of you makes an attack against a target other than you (and that target doesn't have this feat), you can use your reaction to make a melee weapon attack against the attacking creature."
                ]
            }
        ]
    },
    {
        "name": "Servo Crafting",
        "source": "PSK",
        "page": 13,
        "prerequisite": [
            {
                "ability": [
                    {
                        "int": 13
                    }
                ]
            }
        ],
        "entries": [
            "You are skilled in the creation of servos—tiny constructs that function as personal assistants. You can cast the find familiar spell as a ritual, creating a servo to serve as your familiar instead of an animal. A servo's statistics appear in the \"Artifact Creatures\" section of this document. In every other way, a servo familiar functions as described in the find familiar spell.",
            "You can communicate telepathically with your servo familiar and perceive through its senses as long as you are on the same plane of existence. You can speak through your servo in your own voice.",
            "Additionally, when you take the Attack action, you can forgo one of your own attacks to allow your servo familiar to make one attack of its own."
        ]
    },
    {
        "name": "Sharpshooter",
        "source": "PHB",
        "page": 170,
        "entries": [
            "You have mastered ranged weapons and can make shots that others find impossible. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "Attacking at long range doesn't impose disadvantage on your ranged weapon attack rolls.",
                    "Your ranged weapon attacks ignore half cover and three-quarters cover.",
                    "Before you make an attack with a ranged weapon that you are proficient with, you can choose to take a -5 penalty to the attack roll. If the attack hits, you add +10 to the attack's damage."
                ]
            }
        ]
    },
    {
        "name": "Shield Master",
        "source": "PHB",
        "page": 170,
        "entries": [
            "You use shields not just for protection but also for offense. You gain the following benefits while you are wielding a {@item shield|phb}:",
            {
                "type": "list",
                "items": [
                    "If you take the Attack action on your turn, you can use a bonus action to try to shove a creature within 5 feet of you with your shield.",
                    "If you aren't {@condition incapacitated}, you can add your shield's AC bonus to any Dexterity saving throw you make against a spell or other harmful effect that targets only you.",
                    "If you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you can use your reaction to take no damage if you succeed on the saving throw, interposing your shield between yourself and the source of the effect."
                ]
            }
        ]
    },
    {
        "name": "Silver-Tongued",
        "source": "UAFeatsForSkills",
        "page": 3,
        "ability": [
            {
                "cha": 1
            }
        ],
        "entries": [
            "You develop your conversational skill to better deceive others. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency in the {@skill Deception} skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.",
                    "When you take the Attack action on your turn, you can replace one attack with an attempt to deceive one humanoid you can see within 30 feet of you that can see and hear you. Make a Charisma ({@skill Deception}) check contested by the target's Wisdom ({@skill Insight}) check. If your check succeeds, your movement doesn't provoke opportunity attacks from the target and your attack rolls against it have advantage; both benefits last until the end of your next turn or until you use this ability on a different target. If your check fails, the target can't be deceived by you in this way for 1 hour."
                ]
            }
        ]
    },
    {
        "name": "Skilled",
        "source": "PHB",
        "page": 170,
        "entries": [
            "You gain proficiency in any combination of three {@book skills|phb|7|skills} or {@filter tools|items|type=tool;artisan's tools} of your choice."
        ]
    },
    {
        "name": "Skulker",
        "source": "PHB",
        "page": 170,
        "prerequisite": [
            {
                "ability": [
                    {
                        "dex": 13
                    }
                ]
            }
        ],
        "entries": [
            "You are expert at slinking through shadows. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You can try to hide when you are lightly obscured from the creature from which you are hiding.",
                    "When you are hidden from a creature and miss it with a ranged weapon attack, making the attack doesn't reveal your position.",
                    "Dim light doesn't impose disadvantage on your Wisdom ({@skill Perception}) checks relying on sight."
                ]
            }
        ]
    },
    {
        "name": "Spear Mastery",
        "source": "UAFeats",
        "page": 3,
        "entries": [
            "Though the spear is a simple weapon to learn, it rewards you for the time you have taken to master it. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain a +1 bonus to attack rolls you make with a spear.",
                    "When you use a spear, its damage die changes from a {@dice d6} to a {@dice d8}, and from a {@dice d8} to a {@dice d10} when wielded with two hands. (This benefit has no effect if another feature has already improved the weapon's die.)",
                    "You can set your spear to receive a charge. As a bonus action, choose a creature you can see that is at least 20 feet away from you. If that creature moves within your spear's reach on its next turn, you can make a melee attack against it with your spear as a reaction. If the attack hits, the target takes an extra {@dice 1d8} piercing damage, or an extra {@dice 1d10} piercing damage if you wield the spear with two hands. You can't use this ability if the creature used the Disengage action before moving.",
                    "As a bonus action on your turn, you can increase your reach with a spear by 5 feet for the rest of your turn."
                ]
            }
        ]
    },
    {
        "name": "Spell Sniper",
        "source": "PHB",
        "page": 170,
        "prerequisite": [
            {
                "spellcasting": true
            }
        ],
        "entries": [
            "You have learned techniques to enhance your attacks with certain kinds of spells, gaining the following benefits:",
            {
                "type": "list",
                "items": [
                    "When you cast a spell that requires you to make an attack roll, the spell's range is doubled.",
                    "Your ranged spell attacks ignore half cover and three-quarters cover.",
                    "You learn one cantrip that requires an attack roll. Choose the cantrip from the {@filter bard|spells|level=0|class=bard|spell attack=m;r;o}, {@filter cleric|spells|level=0|class=cleric|spell attack=m;r;o}, {@filter druid|spells|level=0|class=druid|spell attack=m;r;o}, {@filter sorcerer|spells|level=0|class=sorcerer|spell attack=m;r;o}, {@filter warlock|spells|level=0|class=warlock|spell attack=m;r;o}, or {@filter wizard|spells|level=0|class=wizard|spell attack=m;r;o} spell list. Your spellcasting ability for this cantrip depends on the spell list you chose from: Charisma for bard, sorcerer, or warlock; Wisdom for cleric or druid; or Intelligence for wizard."
                ]
            }
        ]
    },
    {
        "name": "Squat Nimbleness",
        "source": "UAFeatsForRaces",
        "page": 4,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "dwarf"
                    },
                    {
                        "name": "gnome"
                    },
                    {
                        "name": "halfling"
                    }
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "dex"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "You are uncommonly nimble for your race. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "Increase your walking speed by 5 feet.",
                    "You gain proficiency in the {@skill Acrobatics} or {@skill Athletics} skill. If you're already proficient in the skill, your proficiency bonus is doubled for any check you make with it."
                ]
            }
        ]
    },
    {
        "name": "Squat Nimbleness",
        "source": "XGE",
        "page": 75,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "dwarf"
                    },
                    {
                        "name": "small race",
                        "displayEntry": "a Small race"
                    }
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "dex"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "You are uncommonly nimble for your race. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "Increase your walking speed by 5 feet.",
                    "You gain proficiency in the {@skill Acrobatics} or {@skill Athletics} skill (your choice).",
                    "You have advantage on any Strength (Athletics) or Dexterity (Acrobatics) check you make to escape from being {@condition grappled}."
                ]
            }
        ]
    },
    {
        "name": "Stealthy",
        "source": "UAFeatsForSkills",
        "page": 4,
        "ability": [
            {
                "dex": 1
            }
        ],
        "entries": [
            "You know how best to hide. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency in the {@skill Stealth} skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.",
                    "If you are hidden, you can move up to 10 feet in the open without revealing yourself if you end the move in a position where you're not clearly visible."
                ]
            }
        ]
    },
    {
        "name": "Survivalist",
        "source": "UAFeatsForSkills",
        "page": 4,
        "ability": [
            {
                "wis": 1
            }
        ],
        "entries": [
            "You master wilderness lore, gaining the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency in the {@skill Survival} skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.",
                    "You learn the {@spell alarm} spell. You can cast it once without expending a spell slot, and you regain the ability to do so when you finish a long rest."
                ]
            }
        ]
    },
    {
        "name": "Svirfneblin Magic",
        "source": "MTF",
        "page": 114,
        "additionalSources": [
            {
                "source": "EEPC",
                "page": 7
            },
            {
                "source": "SCAG",
                "page": 115
            }
        ],
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "gnome",
                        "subrace": "deep"
                    }
                ]
            }
        ],
        "entries": [
            "You have inherited the innate spellcasting ability of your ancestors. This ability allows you to cast {@spell nondetection} on yourself at will, without needing a material component. You can also cast each of the following spells once with this ability: {@spell blindness/deafness}, {@spell blur}, and {@spell disguise self}. You regain the ability to cast these spells when you finish a long rest.",
            "Intelligence is your spellcasting ability for these spells, and you cast them at their lowest possible levels."
        ]
    },
    {
        "name": "Tavern Brawler",
        "source": "PHB",
        "page": 170,
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "con"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "Accustomed to rough-and-tumble fighting using whatever weapons happen to be at hand, you gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You are proficient with improvised weapons.",
                    "Your unarmed strike uses a {@dice d4} for damage.",
                    "When you hit a creature with an unarmed strike or an improvised weapon on your turn, you can use a bonus action to attempt to grapple the target."
                ]
            }
        ]
    },
    {
        "name": "Telekinetic",
        "source": "UAFighterRogueWizard",
        "page": 8,
        "ability": [
            {
                "int": 1
            }
        ],
        "entries": [
            "You learn to move things with your mind. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You learn the {@spell mage hand} cantrip. You can cast it without verbal or somatic components, and you can make the spectral hand invisible.",
                    "As a bonus action, you can try to shove one creature you can see within 5 feet of the spectral hand created by your mage hand spell. When you do so, the target must succeed on a Strength saving throw (DC 8 + your proficiency bonus + your Intelligence modifier) or be pushed 5 feet away from you."
                ]
            }
        ]
    },
    {
        "name": "Telepathic",
        "source": "UAFighterRogueWizard",
        "page": 8,
        "ability": [
            {
                "int": 1
            }
        ],
        "entries": [
            "You awaken the ability to mentally connect with others. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency in one skill of your choice from the following list: {@skill Deception}, {@skill Insight}, {@skill Intimidation}, or {@skill Persuasion}.",
                    "You can communicate telepathically with any creature you can see within 30 feet of you. If it understands at least one language, it can respond to you telepathically."
                ]
            }
        ]
    },
    {
        "name": "Theologian",
        "source": "UAFeatsForSkills",
        "page": 4,
        "ability": [
            {
                "int": 1
            }
        ],
        "entries": [
            "Your extensive study of religion rewards you with the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency in the {@skill Religion} skill. If you are already proficient in the skill, you add double your proficiency bonus to checks you make with it.",
                    "You learn the {@spell thaumaturgy} and {@spell detect evil and good} spells. You can cast {@spell detect evil and good} once without expending a spell slot, and you regain the ability to do so when you finish a long rest."
                ]
            }
        ]
    },
    {
        "name": "Tough",
        "source": "PHB",
        "page": 170,
        "entries": [
            "Your hit point maximum increases by an amount equal to twice your level when you gain this feat. Whenever you gain a level thereafter, your hit point maximum increases by an additional 2 hit points."
        ]
    },
    {
        "name": "Vampiric Exultation",
        "source": "PSX",
        "page": 14,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "Vampire (Ixalan)"
                    }
                ]
            }
        ],
        "entries": [
            "As an action, you can transform the lower half of your body into an inky black vapor, allowing you to float through the air. While transformed, you have a flying speed of 30 feet. You can maintain this form for up to 10 minutes. Once you use this ability, you can't use it again until you finish a short or long rest."
        ]
    },
    {
        "name": "War Caster",
        "source": "PHB",
        "page": 170,
        "prerequisite": [
            {
                "spellcasting": true
            }
        ],
        "entries": [
            "You have practiced casting spells in the midst of combat, learning techniques that grant you the following benefits:",
            {
                "type": "list",
                "items": [
                    "You have advantage on Constitution saving throws that you make to maintain your concentration on a spell when you take damage.",
                    "You can perform the somatic components of spells even when you have weapons or a {@item shield|phb} in one or both hands.",
                    "When a hostile creature's movement provokes an opportunity attack from you, you can use your reaction to cast a spell at the creature, rather than making an opportunity attack. The spell must have a casting time of 1 action and must target only that creature."
                ]
            }
        ]
    },
    {
        "name": "Warhammer Master",
        "source": "UAFeats",
        "page": 2,
        "entries": [
            "{@note This feat is presented as an illustrative example of a poorly-designed feat, and is not intended to be used in play. The {@feat Fell Handed|UAFeats} feat is presented as a well-designed implementation of the same ideas, and should be used instead.}",
            "When you hit a creature with a warhammer, the  creature must succeed on a Strength saving  throw (DC 8 + your proficiency bonus + your  Strength modifier) or be knocked prone.",
            "In addition, you can use your warhammer to  knock away a foe's shield. If you hit a creature  that's using a shield, you can have the attack deal  no damage and force the creature to drop its  shield."
        ]
    },
    {
        "name": "Weapon Master",
        "source": "PHB",
        "page": 170,
        "ability": [
            {
                "choose": {
                    "from": [
                        "str",
                        "dex"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "You have practiced extensively with a variety of weapons, gaining the following benefits:",
            {
                "type": "list",
                "items": [
                    "You gain proficiency with four simple or martial weapons of your choice. Each one must be a simple or a martial weapon."
                ]
            }
        ]
    },
    {
        "name": "Wonder Maker",
        "source": "UAFeatsForRaces",
        "page": 4,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "gnome",
                        "subrace": "rock"
                    }
                ]
            }
        ],
        "ability": [
            {
                "choose": {
                    "from": [
                        "dex",
                        "int"
                    ],
                    "amount": 1
                }
            }
        ],
        "entries": [
            "You master the tinker techniques of your people. You gain the following benefits:",
            {
                "type": "list",
                "items": [
                    "When you make a check using your proficiency with {@item tinker's tools|phb}, you add double your proficiency bonus to the check.",
                    "When you make a device with your Tinker trait, you have the following additional options for what you make:",
                    {
                        "type": "entries",
                        "name": "Alarm",
                        "entries": [
                            "This device senses when a creature moves to within 15 feet of it without speaking aloud a password chosen when you create it. One round after a creature moves into range, the alarm makes a shrill ringing that lasts for 1 minute and can be heard from up to 300 feet away."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Calculator",
                        "entries": [
                            "This device makes doing sums easy."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Lifter",
                        "entries": [
                            "This device can be used as a block and tackle, allowing its user to hoist five times the weight the user can normally lift."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Timekeeper",
                        "entries": [
                            "This pocket watch keeps accurate time."
                        ]
                    },
                    {
                        "type": "entries",
                        "name": "Weather Sensor",
                        "entries": [
                            "When used as an action, this device predicts weather conditions in a 1-mile radius over the next 4 hours, showing one symbol (clouds, sun/moon, rain, or snow) for each hour."
                        ]
                    }
                ]
            }
        ]
    },
    {
        "name": "Wood Elf Magic",
        "source": "UAFeatsForRaces",
        "page": 4,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "elf",
                        "subrace": "wood"
                    }
                ]
            }
        ],
        "entries": [
            "You learn the magic of the primeval woods. You learn one druid cantrip of your choice. You also learn {@spell longstrider} and {@spell pass without trace}, each of which you can cast once without expending a spell slot. You regain the ability to cast the spell in this way when you finish a long rest. Wisdom is your spellcasting ability for these spells."
        ]
    },
    {
        "name": "Wood Elf Magic",
        "source": "XGE",
        "page": 75,
        "prerequisite": [
            {
                "race": [
                    {
                        "name": "elf",
                        "subrace": "wood"
                    }
                ]
            }
        ],
        "entries": [
            "You learn the magic of the primeval woods, which are revered and protected by your people. You learn one druid cantrip of your choice. You also learn the {@spell longstrider} and {@spell pass without trace} spells, each of which you can cast once without expending a spell slot. You regain the ability to cast these two spells in this way when you finish a long rest. Wisdom is your spellcasting ability for all three spells."
        ]
    }
]