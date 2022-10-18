document.body.addClass("eclipse")

let s = document.createElement("style"); s.type = "text/css"; s.appendChild(document.createTextNode(".site-body::before {    \
    content: '';\
    background-image: url('https://raw.githubusercontent.com/littlefish-foundation/the-vault/main/images/6.jpeg');\
    background-size: cover;\
    position: absolute;\
    top: 0px;\
    right: 0px;\
    bottom: 0px;\
    left: 0px;\
    opacity: 0.1;\
}")); document.head.appendChild(s);