"use strict";

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const complimentArray = [
  "I would still hang out with you even if you haven’t showered for days.",
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
  "I like having you around because my weirdness doesn’t look so weird when you’re doing it too.",
  "There’s ordinary, and then there’s you.",
  "If there’s one thing I like about you, it’s that I like more than just one thing about you.",
  "It’s too bad that you don’t see what I see in you. If you did, you’d be smiling uncontrollably and just keep staring.",
  "Your jokes make me laugh until I cry and my chest hurts.",
  "Our time together is like a nap. It just doesn’t last long enough!",
  "Your smile is proof that the best things in life are free.",
  "You're impossibly amazing.",
  "Your brain is so fascinating that if I turned into a zombie, I would go for you first.",
  "I feel bad for people who don’t get to enjoy your hilariousness.",
  "I bet you make babies smile.",
  "Your parents did a really good job on you.",
  "The chance of meeting another person like you is the only reason I talk to strangers.",
  "You’re my happy pill.",
  "Your smile is my salvation.",
  "Sorry for smiling so much. It’s just that you always manage to improve my mood.",
  "I follow you because my parents always told me to follow my dream.",
  "You have great posture.",
  "I bet you are really good at clicking that button.",
  "You look like someone that dogs love.",
  "You have the face that I make on the Sims.",
  "It's so unfair! No matter how much I work out, I'll never have ankles as nice as yours!",
  "You have a huge head, but it's not ugly. It looks nice.",
  "Wow, you have news anchor eyebrows.",
  "You look like you're going to be a hot older woman.",
  "I like your shorts. They look comfy and easy to wear.",
];

// if(document.getElementById('awesome-ify').clicked === true)
// {
//    alert("button was clicked");
// }

const buildCompliment = () => {
  let domString = "";
  let randomCompliment =
    complimentArray[Math.floor(Math.random() * complimentArray.length)];

  domString += `<h1 id="compliment" class="compliment"> ${randomCompliment} </h1>`;

  printToDom("compliment", domString);
};

const buttonEvents = () => {
  document
    .querySelector("#awesome-ify")
    .addEventListener("click", buildCompliment);
};

const init = () => {
  buttonEvents();
};

init();
