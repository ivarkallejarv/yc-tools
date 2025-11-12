export type Location =
  | "Village"
  | "Forest"
  | "Academic City"
  | "Coastal City"
  | "Spirit Spring"
  | "Ancient Ruins"
  | "Desert Lodging"
  | "Astral Realm"
  | "---";

type VillageDungeons = "Riverbank" | "Waterfall" | "Dim Cave";
type ForestDungeons = "Lostlorn Forest" | "Lostlorn Forest - Deep" | "Lostlorn Forest - Abyss";
type AcademicCityDungeons = "Hoarder's House" | "Sewer" | "Sewer - Abyss";
type CoastalCityDungeons = "Rocky Road" | "Rocky Hill" | "Rocky Hill - Top";
type SpiritSpringDungeons = "Moon Forest" | "Moon Forest - Deep" | "Moon Forest - Abyss";
type AncientRuinsDungeons = "Ruins" | "Ruins - Deep" | "Dragon's Nest";
type DesertLodgingDungeons = "Vast Desert" | "Vast Desert - Deep" | "Vast Desert - Oasis";
type OtherDungeons = "---";

export type Dungeon =
  | VillageDungeons
  | ForestDungeons
  | AcademicCityDungeons
  | CoastalCityDungeons
  | SpiritSpringDungeons
  | AncientRuinsDungeons
  | DesertLodgingDungeons
  | OtherDungeons;

type DestinyDrops = "Rune" | "Rune Stone";
type SpiritualDrops = "Holy Water";
type PlantDrops = "Weed" | "Herb" | "Flower";
type WoodDrops = "Wood";
type MineralDrops = "Stone" | "Scrap Metal" | "Rare Metal";
type MaterialDrops =
  | "Pelt"
  | "Leather"
  | "Durable Leather"
  | "Muddy Mucus"
  | "Dung"
  | "Stench"
  | "Magic Fiber"
  | "Dragon Claw"
  | "Dragon Liver";
type FoodDrops =
  | "Pork"
  | "Mushroom"
  | "Apple"
  | "Slime Jelly"
  | "Wheat"
  | "Salt"
  | "Chicken"
  | "Honey"
  | "Wine"
  | "Fish"
  | "Mysterious Meat"
  | "Date";
type OtherDrops = "Gold";

export type Drops =
  | DestinyDrops
  | SpiritualDrops
  | PlantDrops
  | WoodDrops
  | MineralDrops
  | MaterialDrops
  | FoodDrops
  | OtherDrops;

export interface EnemyData {
  id: number;
  name: string;
  type?: "rare" | "boss"; // No type = 'normal'
  location: Location;
  dungeon: Dungeon;
  exp?: number;
  research?: number;
  drops?: Drops[];
}

export const enemies: EnemyData[] = [
  { id: 1, name: "Slime", location: "Village", dungeon: "Riverbank" },
  { id: 2, name: "Bird", location: "Village", dungeon: "Riverbank" },
  { id: 3, name: "Goblin", location: "Village", dungeon: "Riverbank", drops: ["Leather"] },
  { id: 4, name: "Snake", location: "Village", dungeon: "Waterfall" },
  { id: 5, name: "Wolf", location: "Village", dungeon: "Waterfall", drops: ["Pelt"] },
  { id: 6, name: "Flower Fairy", type: "rare", location: "Village", dungeon: "Waterfall", drops: ["Flower"] },
  { id: 7, name: "Orc", type: "boss", location: "Village", dungeon: "Dim Cave", drops: ["Leather", "Pork"] },
  { id: 8, name: "Beetle", location: "Forest", dungeon: "Lostlorn Forest" },
  { id: 9, name: "Harpy", location: "Forest", dungeon: "Lostlorn Forest", drops: ["Wood"] },
  { id: 10, name: "Tortoise", location: "Forest", dungeon: "Lostlorn Forest", drops: ["Herb"] },
  { id: 11, name: "Drooling Monkey", location: "Forest", dungeon: "Lostlorn Forest - Deep", drops: ["Pelt"] },
  { id: 12, name: "Lizard Man", location: "Forest", dungeon: "Lostlorn Forest - Deep", drops: ["Mushroom"] },
  {
    id: 13,
    name: "Forest Fairy",
    type: "rare",
    location: "Forest",
    dungeon: "Lostlorn Forest - Deep",
    drops: ["Herb"],
  },
  {
    id: 14,
    name: "Treant",
    type: "boss",
    location: "Forest",
    dungeon: "Lostlorn Forest - Abyss",
    drops: ["Wood", "Apple"],
  },
  { id: 15, name: "Bat", location: "Academic City", dungeon: "Hoarder's House" },
  { id: 16, name: "Rat", location: "Academic City", dungeon: "Hoarder's House", drops: ["Dung", "Stench"] },
  { id: 17, name: "Red Slime", location: "Academic City", dungeon: "Hoarder's House", drops: ["Muddy Mucus"] },
  { id: 18, name: "Black Insect", location: "Academic City", dungeon: "Sewer", drops: ["Dung"] },
  { id: 19, name: "Ghoul", location: "Academic City", dungeon: "Sewer", drops: ["Stench"] },
  {
    id: 20,
    name: "Sludge Slime",
    type: "rare",
    location: "Academic City",
    dungeon: "Sewer",
    drops: ["Muddy Mucus", "Stench"],
  },
  {
    id: 21,
    name: "Purification Slime",
    type: "boss",
    location: "Academic City",
    dungeon: "Sewer - Abyss",
    drops: ["Slime Jelly", "Muddy Mucus"],
  },
  { id: 22, name: "Stone Crab", location: "Coastal City", dungeon: "Rocky Road", drops: ["Stone"] },
  { id: 23, name: "Hound Dog", location: "Coastal City", dungeon: "Rocky Road", drops: ["Leather"] },
  { id: 24, name: "Rock Turtle", location: "Coastal City", dungeon: "Rocky Road", drops: ["Stone"] },
  { id: 25, name: "Rock Spider", location: "Coastal City", dungeon: "Rocky Hill", drops: ["Stone", "Magic Fiber"] },
  { id: 26, name: "Brown Slime", location: "Coastal City", dungeon: "Rocky Hill" },
  {
    id: 27,
    name: "Phantom Whale",
    type: "rare",
    location: "Coastal City",
    dungeon: "Rocky Hill",
    drops: ["Pelt", "Herb", "Wheat", "Stone", "Dung"],
  },
  {
    id: 28,
    name: "Rock Golem",
    type: "boss",
    location: "Coastal City",
    dungeon: "Rocky Hill - Top",
    drops: ["Stone", "Salt"],
  },
  { id: 29, name: "Bluebird", location: "Spirit Spring", dungeon: "Moon Forest", drops: ["Chicken"] },
  { id: 30, name: "Elite Chicken", location: "Spirit Spring", dungeon: "Moon Forest", drops: ["Chicken"] },
  { id: 31, name: "White Wolf", location: "Spirit Spring", dungeon: "Moon Forest", drops: ["Pelt"] },
  { id: 32, name: "Soldier Bee", location: "Spirit Spring", dungeon: "Moon Forest - Deep", drops: ["Honey"] },
  { id: 33, name: "Ferocious Bear", location: "Spirit Spring", dungeon: "Moon Forest - Deep", drops: ["Honey"] },
  {
    id: 34,
    name: "Queen Bee",
    type: "rare",
    location: "Spirit Spring",
    dungeon: "Moon Forest - Deep",
    drops: ["Honey"],
  },
  {
    id: 35,
    name: "Elder Treant",
    type: "boss",
    location: "Spirit Spring",
    dungeon: "Moon Forest - Abyss",
    drops: ["Wood", "Wine"],
  },
  { id: 36, name: "Yellow Slime", location: "Ancient Ruins", dungeon: "Ruins" },
  { id: 37, name: "Ogre", location: "Ancient Ruins", dungeon: "Ruins" },
  { id: 38, name: "Iron Golem", location: "Ancient Ruins", dungeon: "Ruins", drops: ["Scrap Metal"] },
  { id: 39, name: "Dragon Baby", location: "Ancient Ruins", dungeon: "Ruins - Deep", drops: ["Dragon Claw"] },
  { id: 40, name: "Wyvern", location: "Ancient Ruins", dungeon: "Ruins - Deep", drops: ["Dragon Claw"] },
  {
    id: 41,
    name: "Silver Scale Dragon",
    type: "rare",
    location: "Ancient Ruins",
    dungeon: "Ruins - Deep",
    drops: ["Rune", "Dragon Claw", "Dragon Liver"],
  },
  {
    id: 42,
    name: "Scarlet Dragon",
    type: "boss",
    location: "Ancient Ruins",
    dungeon: "Dragon's Nest",
    drops: ["Dragon Claw"],
  },
  { id: 43, name: "Sand Swordfish", location: "Desert Lodging", dungeon: "Vast Desert", drops: ["Fish"] },
  {
    id: 44,
    name: "Charity Larva",
    location: "Desert Lodging",
    dungeon: "Vast Desert",
    drops: ["Mysterious Meat", "Magic Fiber"],
  },
  { id: 45, name: "Beauty Camel", location: "Desert Lodging", dungeon: "Vast Desert", drops: ["Leather"] },
  { id: 46, name: "Sandworm", location: "Desert Lodging", dungeon: "Vast Desert - Deep", drops: ["Mysterious Meat"] },
  {
    id: 47,
    name: "Lesser Wyvern",
    location: "Desert Lodging",
    dungeon: "Vast Desert - Deep",
    drops: ["Dragon Claw", "Durable Leather"],
  },
  {
    id: 48,
    name: "Golden Slime",
    type: "rare",
    location: "Desert Lodging",
    dungeon: "Vast Desert - Deep",
    drops: ["Gold", "Rare Metal"],
  },
  {
    id: 48,
    name: "King Cobra",
    type: "boss",
    location: "Desert Lodging",
    dungeon: "Vast Desert - Oasis",
    drops: ["Date", "Holy Water"],
  },
  // ???
  { id: 92, name: "Mimic", location: "---", dungeon: "---" },
  { id: 93, name: "???", location: "---", dungeon: "---" },
  { id: 94, name: "The Destroyer", location: "Astral Realm", dungeon: "---" },
  { id: 95, name: "???", location: "---", dungeon: "---" },
  { id: 96, name: "???", location: "---", dungeon: "---" },
  { id: 97, name: "???", location: "---", dungeon: "---" },
  { id: 98, name: "???", location: "---", dungeon: "---" },
];
