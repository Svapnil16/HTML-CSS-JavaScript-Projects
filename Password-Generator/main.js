let input_slider = document.getElementById("input_slider");
let slider_value = document.getElementById("slider_value");
let pass_box = document.getElementById("pass_box");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let gen_btn = document.getElementById("gen_btn");
let copy_icon = document.getElementById("copy_icon");
// showing input slider value
slider_value.textContent = input_slider.value;

input_slider.addEventListener('input', () => {
    slider_value.textContent = input_slider.value;
});

gen_btn.addEventListener('click', () => {
    pass_box.value = generatePassword();
});


let lower_chars = "abcdefghijklmnopqrstuvwxyz";
let upper_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let all_numbers = "0123456789";
let symbol_chars = "~!@#$%^&*/.=-_";

// Function for generating password
function generatePassword() {
    let genPassword = "";

    let all_char = "";
    all_char += lowercase.checked ? lower_chars : "";
    all_char += uppercase.checked ? upper_chars : "";
    all_char += numbers.checked ? all_numbers : "";
    all_char += symbols.checked ? symbol_chars : "";

    if (all_char == "" || all_char.length == 0) {
        return genPassword;
    }

    let i = 1;
    while (i <= input_slider.value) {
        
        genPassword += all_char.charAt(Math.floor(Math.random() * all_char.length));
        i++;
    }
    return genPassword;
}

copy_icon.addEventListener('click', () => {
    if (pass_box.value !="" || pass_box.value.length >= 1) {
        navigator.clipboard.writeText(pass_box.value);
        copy_icon.innerText = "check";
        copy_icon.title = "Password copied";

        setTimeout(() => {
            copy_icon.innerHTML = "content_copy";
            copy_icon.title = "";
        },2000)
    }
});

