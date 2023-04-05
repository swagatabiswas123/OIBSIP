$(function () {
    $(".text").typed({
      strings: ["Vladimir Vaize", "Web Developer", "Photoshop", "Coffee Drinker"],
      typeSpeed: 70,
      backSpeed: 20,
      backDelay: 1500,
      showCursor: true,
      loop: true
    });
  });
  

function addClass() {
    document.body.classList.add("sent");
  }
  
  sendLetter.addEventListener("click", addClass);


 