import { project, section } from "../Classes/project";

const project1 = new project(
    1,
    "Rime and Rust",
    "https://i.imgur.com/HDLoBd2.png", 
    [],
    [], 
    ["React", "Typescript", "Enemy AI", "Turn Based Combat Design"],
    "A resource management, base building, exploration game with innovative turn-based combat that tasks the player with programming their character's actions and letting that \"program\" play out. The combat rewards thinking ahead and anticipating how the battlefield may change as the character executes their given actions.", 
    "A resource management, base building, exploration game with innovative turn-based combat that tasks the player with programming their character's actions and letting that \"program\" play out. The combat rewards thinking ahead and anticipating how the battlefield may change as the character executes their given actions.", 
    "https://ethanphall.github.io/rime-and-rust-ts/",
    "Play Rime and Rust At: ",
    [
        new section(
            "", 
            "",
            [],
            "A browser based resource management, base building, exploration game with innovative turn-based combat that tasks the player with programming their character's actions and letting that \"program\" play out. The combat rewards thinking ahead and anticipating how the battlefield may change as the character executes their given actions.", 
        ),
        new section(
            "", 
            "",
            [],
            "The game is not fully complete. At this point, most of the work left to do is in the combat, improving enemy AI and adding new abilities for the player. As well as adding a final objective; currently there is no end, you just explore the map in its entirety.", 
        ),
        new section(
            "Screenshots", 
            "",
            [
                "https://i.imgur.com/rmsc021.png", 
                "https://i.imgur.com/NC4wje9.png", 
                "https://i.imgur.com/EUpDaon.png",
                "https://i.imgur.com/LuYcFb3.png",
                "https://i.imgur.com/HDLoBd2.png"
            ],
            ""
        )
    ]
);
const project2 = new project(
    2,
    "Spell Sculptor",
    "https://i.imgur.com/HxspyyS.png", 
    [],
    ["https://www.youtube.com/embed/KeOyTHYXxXk"], 
    ["Unity", "A* Search (Pathing)", "C#", "Enemy AI", "Tutorial Design"],
    "A proof of concept dungeon crawler in which the player can find spell components and combine them into unique spells that they can use to better fight the enemies, and eventually boss, of the dungeon.", 
    "A proof of concept dungeon crawler in which the player can find spell components and combine them into unique spells that they can use to better fight the enemies, and eventually boss, of the dungeon.", 
    "https://ephhall.itch.io/spell-sculptor",
    "Download At: ",
    [
        new section(
            "", 
            "",
            [],
            "Spell Sculptor is a proof of concept dungeon crawler in which the player can find spell components and combine them into unique spells that they can use to better fight the enemies, and eventually boss, of the dungeon. The player may start as several different classes, each with their own starting weapon and spell. They may then find a new spell component hidden in the level, and use an altar to craft a spell of their own. Additionally, there is a tutorial that explains the movement, combat, casting, and spell crafting mechanics."
        ),
        new section(
            "Screenshots", 
            "",
            [
                "https://i.imgur.com/I8rNpiQ.png", 
                "https://i.imgur.com/fLbSngi.png", 
                "https://i.imgur.com/rgOaPVg.png",
                "https://i.imgur.com/kU36I0i.png",
                "https://i.imgur.com/fJZLsvx.png"
            ],
            ""
        )
    ]
);
const project3 = new project(
    3,
    "Atlas Will Fall",
    "https://i.imgur.com/FLHa1cu.png", 
    [],
    ["https://www.youtube.com/embed/10PmL-esFis?si=yPJ4kAOOwbfWNW73"], 
    ["Unity", "State Machines", "C#", "Platformer Design", "Tutorial Design"],
    "A proof of concept Metroidvania in which the player uses their grappling hook and psychic powers to explore and complete a tutorial level.", 
    "A proof of concept Metroidvania in which the player uses their grappling hook and psychic powers to explore and complete a tutorial level.", 
    "https://ephhall.itch.io/atlas-will-fall",
    "Download At: ",
    [
        new section(
            "", 
            "",
            [],
            "Atlas Will Fall is a small demo for a Metroidvania in which the player uses their grappling hook and psychic powers to explore and complete a tutorial level. The level teaches the player about the various movement mechanics the game features and awards the first powerup, which the player can use to reach the end of the level. There are the beginnings of a combat system (attacking, blocking, rolling), but that system is not fleshed out in this demo.", 
            ),
        new section(
            "Screenshots/Gifs", 
            "",
            [
                "https://i.imgur.com/umrG1I0.gif",
                "https://i.imgur.com/yJZGbMt.gif",
            ],
            ""
        )
    ]
);

const projects:project[] = 
[
    project1, 
    project2,
    project3
];

export default projects;