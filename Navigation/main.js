console.log(`%cYoung's Navigation`, style = "text-align:center;font-size:3rem;color:firebrick;");

//手动配置连接
function get_descendant(elements, nodeType = 1) {
    let nodes = [];
    Array.from(elements.childNodes).map(item => {
        if (item.nodeType == nodeType) {
            nodes.push(item);
        }
        if (item.nodeType == 1) {
            nodes.push(...get_descendant(item, nodeType));
        }
    })
    return nodes;
}
function get_all_links(line, DIY_link, DIY_text) {
    let Nodes_line = get_descendant(line);
    const links = Nodes_line.filter(item => item.nodeName == 'A');
    const paragraphs = Nodes_line.filter(item => item.nodeName == 'P');
    for (const key in links) {
        switch (key) {
            case '0':
                links[key].href = `${DIY_link[0]}`
                break;
            case '1':
                links[key].href = `${DIY_link[1]}`
                break;
            case '2':
                links[key].href = `${DIY_link[2]}`
                break;
            case '3':
                links[key].href = `${DIY_link[3]}`
                break;
            case '4':
                links[key].href = `${DIY_link[4]}`
                break;
            case '5':
                links[key].href = `${DIY_link[5]}`
                break;
            case '6':
                links[key].href = `${DIY_link[6]}`
                break;
            case '7':
                links[key].href = `${DIY_link[7]}`
                break;
            default:
                throw new Error("link address error")
        }
    }
    for (const key in paragraphs) {
        switch (key) {
            case '0':
                paragraphs[key].innerHTML = `${DIY_text[0]}`
                break;
            case '1':
                paragraphs[key].innerHTML = `${DIY_text[1]}`
                break;
            case '2':
                paragraphs[key].innerHTML = `${DIY_text[2]}`
                break;
            case '3':
                paragraphs[key].innerHTML = `${DIY_text[3]}`
                break;
            case '4':
                paragraphs[key].innerHTML = `${DIY_text[4]}`
                break;
            case '5':
                paragraphs[key].innerHTML = `${DIY_text[5]}`
                break;
            case '6':
                paragraphs[key].innerHTML = `${DIY_text[6]}`
                break;
            case '7':
                paragraphs[key].innerHTML = `${DIY_text[7]}`
                break;
            default:
                throw new Error("link address error")
        }
    }
}
let lines = [...document.getElementsByClassName("section_line")]

const line_one = lines[0];
const line_two = lines[1];
const line_three = lines[2];

// input your links:(8 links each array)
let section_one_link = [
    "https://www.zhihu.com",
    "https://git-scm.com/",
    "",
    "",
    "",
    "",
    "",
    "",
];
let section_two_link = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
];;
let section_three_link = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
];;




//input your text:(8 text each array)
let section_one_text = [
    "知乎",
    "git",
    "",
    "",
    "",
    "",
    "",
    ""];
let section_two_text = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""];
let section_three_text = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""];

get_all_links(line_one, section_one_link, section_one_text);
get_all_links(line_two, section_two_link, section_two_text);
get_all_links(line_three, section_three_link, section_three_text);



//matte change
let matte = document.getElementById("matte");
matte.onclick = function () {
    this.classList.toggle("bg_change")
}

//button change
function change_button() {
    let button = document.querySelector('#await_function');
    let main = document.getElementsByTagName("main")[0];
    button.addEventListener('click', function () {
        // main.classList.value = 'n_on' ? '_on' : 'p_on'
        switch (main.classList.value) {
            case ("p_on"):
                main.classList.remove("p_on");
                main.classList.add("n_on");
                button.style.backgroundImage = 'linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)'
                break;
            case ("n_on"):
                main.classList.remove("n_on");
                main.classList.add("p_on");
                button.style.backgroundImage = 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)'
        }
    })
}
change_button()

//press any into search
document.onkeydown = function (e) {
    console.log(e.key);
    let status = 0;
    if (e.key = 'Escape' && status == 0) {
        status = 1;
        console.log(e.key);
    }
    switch (status) {
        case 0:
            document.querySelector(".search>input").blur();
            break;
        case 1:
            document.querySelector(".search>input").focus();
            status = 0;
            break;
    }
}

//top nav native jump
let aside_lines = document.getElementsByClassName("aside_line");
for (const v of aside_lines) {
    v.onclick = () => window.location.href = v.childNodes[3].href;
}