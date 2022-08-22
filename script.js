$(document).ready(() => {
    let mainText = $('#main-text');
    let phrases = ["Hello World", "Welcome"];
    let index = -1;
    (function loopAnimation() {
        index = (index + 1) % phrases.length;
        bubbleText({
            element: mainText,
            newText: phrases[index],
            letterSpeed: 70,
            callback: function() {
                if(index !== 1)
                    setTimeout(loopAnimation, 3000);
            },
        });
    })();
    let codeInfo = $(".code-info");
    let texts = ["print('Hello, my name is Женя')",
        "console.log('Im glad to see you here!')",
        'System.out.println("I hope you like it here!")',
        'cout << "Be sure to visit the links below!" << endl'];
    let contacts = document.querySelector(".contacts");
    setTimeout(() => {
        let i = -1;
        (function anim() {
            i++;
            let text = document.createElement("a");
            text.setAttribute("class", "code-info-text");
            codeInfo.append(text);
            bubbleText({
                element: text,
                newText: texts[i],
                speed: 1500,
                callback: () => {
                    if(i < texts.length - 1) {
                        if(i === 2)
                            text.innerHTML = 'System.out.println("I hope you <a href="/create" id="like-link">like</a> it here!")';
                        anim();
                    }
                    else
                        contacts.animate({opacity: 1}, 600).onfinish = () => contacts.style.opacity = "1";
                }
            });
        })();
    }, 3000);
});