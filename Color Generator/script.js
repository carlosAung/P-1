const colors = [
    "#FF5733", // Red
    "#33FF57", // Green
    "#3366FF", // Blue
    "#FF33B2", // Pink
    "#FFDD33", // Yellow
    "#8433FF", // Purple
    "#33FFDD", // Cyan
    "#FF337A", // Magenta
    "#33FFAA", // Teal
    "#FF3366", // Orange
    "#FF5733", // Red
    "#33FF57", // Green
    "#3366FF", // Blue
    "#FF33B2", // Pink
    "#FFDD33", // Yellow
    "#8433FF", // Purple
    "#33FFDD", // Cyan
    "#FF337A", // Magenta
    "#33FFAA", // Teal
    "#FF3366", // Orange
];
const Starter=document.querySelector(".Starter")

const Second=document.querySelector(".Second")

const Btton=document.querySelector(".Btton")

Btton.onclick=()=>{
    const randomNumber=Math.floor(Math.random()*20)+1
    Starter.style.backgroundColor=colors[randomNumber]
    Second.textContent=colors[randomNumber]
}

