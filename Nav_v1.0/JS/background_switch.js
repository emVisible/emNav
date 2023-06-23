export default function(){
    let button = document.querySelector('#await_function');
    let main = document.getElementsByTagName("main")[0];
    button.addEventListener('click', function () {
        switch (main.classList.value) {
            case ("p_on"):
                main.classList.remove("p_on");
                main.classList.add("n_on");
                button.style.backgroundImage = 'linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)'
                document.querySelector('.hidden_tools').style.backgroundImage='linear-gradient(120deg, #f6d365 0%, #fda085 100%)'
                for (let value of document.querySelectorAll('.hidden_content div a')){
                  value.id = 'orange_change_to_purple';
                }
                break;
            case ("n_on"):
                main.classList.remove("n_on");
                main.classList.add("p_on");
                button.style.backgroundImage = 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)'
                document.querySelector('.hidden_tools').style.backgroundImage='linear-gradient(to top, #5f72bdd8 0%, #9a23eadd 100%)'
                for (let value of document.querySelectorAll('.hidden_content div a')){
                  value.id = 'purple_change_to_orange';
                }
        }
    })
}