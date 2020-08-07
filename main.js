"use strict";

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
  }


const complimentArray = ["I would still hang out with you even if you haven’t showered for days.",
   "Your face makes other people look ugly.",
  "There’s ordinary. And then there’s you.",
    "You know, you’re almost as wonderful as cake. Almost.",
    "Let’s say you were cloned. I bet you’d still be one of a kind. And the better looking one!",
    "Are you a beaver, because damn!",
    "Aside from food, you are my favorite.",
    "I have plenty of friends that I worry about. You're not one of them because you’re impeccable.",
    "It certainly is not easy to be me, which is why I need you.",
    "If it was legal to marry food, I’d still choose you over pizza.",
    "You’re more fun than a bubble wrap.",
    "I just want to hang out with you and do stupid things together.",
    "You’re just so weird all the time, it’s great!",
    "I’m quite certain that you’re the only person I can have a serious debate with about a fictional scenario that is ridiculously stupid.",
    "In a world full of bagels, you’re a doughnut.",
    "If someone based an internet meme on you, it would probably be use to make people laugh heartily.",
    "If you were a dog, you’d either be the leader of the pack or the laziest one in the world.", 
    "You’re someone that I don’t want to punch in the throat.",
    "You're so adorable you could probably get away with murder.",
    "You’re more fun than a pool filled with colorful balls and candy.",
    "You’re so beautiful I would definitely steal your photos, make a fake account, and impress people online.",
   "When it comes to getting work done, I know I can count on you to not let me finish it.",
    "You’re my favorite drunken karaoke partner.",
    "I honestly think you can do anything you pour your mind into. But, I also know what kind of thoughts you have, so maybe hold off on that for now?",
    "You have a unique set of skills that can somehow turn any situation into an awkward one.",
    "I like having you around because my weirdness doesn’t look so weird when you’re doing it too."]


const buildCompliment = () => {
    let domString = 
}