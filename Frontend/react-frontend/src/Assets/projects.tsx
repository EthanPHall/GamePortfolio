import { project, section } from "../Classes/project";

const project1 = new project(
    1,
    "Spell Sculptor",
    "https://i.imgur.com/HxspyyS.png", 
    [],
    ["https://www.youtube.com/embed/KeOyTHYXxXk"], 
    ["Unity", "A* Search (Pathing)", "C#", "Enemy AI", "Tutorial Design"],
    "A proof of concept dungeon crawler in which the player can find spell components and combine them into unique spells that they can use to better fight the enemies, and eventually boss, of the dungeon.", 
    "A proof of concept dungeon crawler in which the player can find spell components and combine them into unique spells that they can use to better fight the enemies, and eventually boss, of the dungeon.", 
    "https://ephhall.itch.io/spell-sculptor",
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
const project2 = new project(
    2,
    "Atlas Will Fall",
    "https://i.imgur.com/FLHa1cu.png", 
    [],
    [], 
    ["Unity", "State Machines", "C#", "Platformer Design", "Tutorial Design"],
    "A proof of concept Metroidvania in which the player uses their grappling hook and psychic powers to explore and complete a tutorial level.", 
    "A proof of concept Metroidvania in which the player uses their psychic powers to explore and complete a tutorial level.", 
    "https://ephhall.itch.io/atlas-will-fall",
    []
);

const projects:project[] = 
[
    project1, 
    project2
];

export default projects;