import $ from "jquery";
import gsap from "gsap";

// Tipos para los elementos de jQuery
const strokesLeftBottom: HTMLElement[] = $("#LeftBottomGroup_1_ path[id^=Stroke]")
  .toArray()
  .reverse();
const strokesLeftTop: HTMLElement[] = $("#LeftTopGroup_1_ path[id^=Stroke]")
  .toArray()
  .reverse();
const strokesRightBottom: HTMLElement[] = $("#RightBottomGroup_1_ path[id^=Stroke]")
  .toArray()
  .reverse();
const strokesRightTop: HTMLElement[] = $("#RightTopGroup_1_ path[id^=Stroke]")
  .toArray()
  .reverse();

// Grupos de elementos
const stemGroup1: string[] = [
  "#Stem2_1_", "#Stem3_1_", "#Stem4_1_", "#Stem5a_1_", "#Stem5b_1_", 
  "#Stem6_1_", "#Stem7a_1_", "#Stem7b_1_", "#Stem7c_1_", "#Stem8_1_"
];
const stemGroup2: string[] = [
  "#Stem17_1_", "#Stem18_1_", "#Stem19_1_", "#Stem20a_1_", "#Stem20b_1_", 
  "#Stem21_1_", "#Stem22a_1_", "#Stem22b_1_", "#Stem22c_1_", "#Stem23_1_"
];
const stemGroup3: string[] = ["#Stem10_1_", "#Stem11_1_", "#Stem12a_1_", "#Stem12b_1_"];
const stemGroup4: string[] = ["#Stem26_1_", "#Stem27_1_", "#Stem28a_1_", "#Stem28b_1_"];
const stemGroup5: string[] = ["#Stem13a_1_", "#Stem13b_1_", "#Stem13c_1_"];
const stemGroup6: string[] = ["#Stem29a_1_", "#Stem29b_1_", "#Stem29c_1_"];

const stemVarsFrom = { drawSVG: "0% 0%", autoAlpha: 1 };
const stemVarsTo = { drawSVG: "0% 100%", duration: 2, stagger: 0.5 };

// Grupos de hojas
const leafGroup1: string[] = ["#Leaf2_1_", "#Leaf17_1_"];
const leafGroup2: string[] = ["#Leaf4_1_", "#Leaf5a_1_", "#Leaf5b_1_"];
const leafGroup3: string[] = ["#Leaf19_1_", "#Leaf20a_1_", "#Leaf20b_1_"];
const leafGroup4: string[] = ["#Leaf11_1_", "#Leaf12a_1_", "#Leaf12b_1_"];
const leafGroup5: string[] = ["#Leaf27_1_", "#Leaf28a_1_", "#Leaf28b_1_"];
const leafGroup6: string[] = ["#Leaf13a_1_", "#Leaf13b_1_", "#Leaf13c_1_"];
const leafGroup7: string[] = ["#Leaf29a_1_", "#Leaf29b_1_", "#Leaf29c_1_"];

// Grupos de brotes
const budGroup1: string[] = ["#Bud3_1_", "#Bud6_1_"];
const budGroup2: string[] = ["#Bud18_1_", "#Bud21_1_"];
const budGroup3: string[] = ["#Bud7a_1_", "#Bud7b_1_", "#Bud7c_1_", "#Bud8_1_"];
const budGroup4: string[] = ["#Bud22a_1_", "#Bud22b_1_", "#Bud22c_1_", "#Bud23_1_"];
const budGroup5: string[] = ["#Bud10_1_", "#Bud26_1_"];

// Dots
const dots: JQuery<HTMLElement> = $("#Dots_1_");

const tl = gsap.timeline()
  .set("#Footer_group_1_", { autoAlpha: 1 })
  .fromTo(
    ["#Stem16_1_", "#Stem1_1_"], 
    { drawSVG: "0% 0%" }, 
    { duration: 1.5, drawSVG: "0% 100%" }, 
    "start"
  )
  .fromTo(
    "#BaseGroup16_1_ path", 
    { autoAlpha: 1, scale: 0, transformOrigin: "-10% 130%" }, 
    { duration: 1, scale: 1 }, 
    1.2, 
    "flower1"
  )
  .fromTo(
    "#PinkFlowerGroup16_1_", 
    { autoAlpha: 1, scale: 0, transformOrigin: "35% 110%" }, 
    { duration: 2, scale: 1 }, 
    "flower1-=0.55"
  )
  .fromTo(
    "#BaseGroup1_1_ path", 
    { autoAlpha: 1, scale: 0, transformOrigin: "90% 130%" }, 
    { duration: 1, scale: 1 }, 
    1.2, 
    "flower1"
  )
  .fromTo(
    "#PinkFlowerGroup1_1_", 
    { autoAlpha: 1, scale: 0, transformOrigin: "65% 110%" }, 
    { duration: 2, scale: 1 }, 
    "flower1-=0.55"
  )
  .fromTo(
    ["#Stem9_1_", "#Stem25_1_"], 
    { drawSVG: "0% 0%", autoAlpha: 1 }, 
    { duration: 2, drawSVG: "0% 100%" }, 
    "flower1+=0.5"
  )
  .fromTo(
    "#BaseGroup9_1_ path", 
    { autoAlpha: 1, scale: 0, transformOrigin: "-10% 130%" }, 
    { duration: 1, scale: 1 }, 
    "flower2-=0.5"
  )
  .fromTo(
    "#PinkFlowerGroup9_1_", 
    { autoAlpha: 1, scale: 0, transformOrigin: "5% 110%" }, 
    { duration: 2, scale: 1 }, 
    "flower2"
  )
  .fromTo(
    "#BaseGroup25_1_ path", 
    { autoAlpha: 1, scale: 0, transformOrigin: "105% 130%" }, 
    { duration: 1, scale: 1 }, 
    "flower2-=0.5"
  )
  .fromTo(
    "#PinkFlowerGroup25_1_", 
    { autoAlpha: 1, scale: 0, transformOrigin: "95% 110%" }, 
    { duration: 2, scale: 1 }, 
    "flower2"
  )
  // Resto de las animaciones...
