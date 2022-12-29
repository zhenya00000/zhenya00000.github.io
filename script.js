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
                if(index === 1)
                    setTimeout(() => {
                        let colors = ["#ff0000", "#ffa500", "#ffff00", "#008000", "#42aaff", "#0000ff", "#8b00ff"];
                        let header = document.querySelector("#main-text");
                        header.innerHTML = "<a>W</a><a>e</a><a>l</a><a>c</a><a>o</a><a>m</a><a>e</a>";
                        let chars = header.getElementsByTagName("a");
                        for(let i = 0; i < chars.length; i++) {
                            let styleHeader = document.createElement("style");
                            chars[i].id = `header${i}`;
                            styleHeader.innerHTML = `#header${i}:hover { color: ${colors[i]}; transition: 300ms; }`;
                            chars[i].append(styleHeader);
                        }
                    }, 3500);
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
                        if(i === 0)
                            text.innerHTML = "print('Hello, my name is <a href='https://ru.wikipedia.org/wiki/%D0%95%D0%B2%D0%B3%D0%B5%D0%BD%D0%B8%D0%B9' class='link' id='name-link'>Женя</a>')";
                        else if(i === 1)
                            text.innerHTML = "console.<a href='https://developer.mozilla.org/ru/docs/Web/API/Console/log' class='link' id='js-link'>log</a>('Im glad to see you here!')";
                        else if(i === 2)
                            text.innerHTML = '<a href="https://docs.oracle.com/en/java/javase/18/docs/api/java.base/java/lang/System.html" class="link" id="system-link">System</a>.out.println("I hope you <a href="/create" class="link" id="like-link">like</a> it here!")';
                        anim();
                    }
                    else {
                        text.innerHTML = 'cout &lt;&lt; "Be sure to visit the <a href="/links" class="link" id="authors-link">links</a> below!" &lt;&lt; endl';
                        contacts.animate({opacity: 1}, 600).onfinish = () => contacts.style.opacity = "1";
                        setTimeout(() => {
                            let params = new URLSearchParams(window.location.search);
                            if(params.has("vk")) {
                                window.location.replace("https://vk.com/id145441435");
                            }
                            else if(params.has("tg")) {
                                window.location.replace("https://t.me/writenowme");
                            }
                            else if(params.has("in")) {
                                window.location.replace("https://www.linkedin.com/in/zhenya-mateyuk-867125247");
                            }
                            else if(params.has("ds")) {
                                window.location.replace("https://discordapp.com/users/953758837687586896");
                            }
                        }, 500);
                    }
                }
            });
        })();
    }, 3000);
});