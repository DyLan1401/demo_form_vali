let user = document.querySelector('#user')
let email = document.querySelector('#email')
let pass = document.querySelector('#pass')
let con_pass = document.querySelector('#con-pass')
let form = document.querySelector('form')

function showErr(input,mess) {
    let parent = input.parentElement;
    let small = parent.querySelector('small')

    parent.classList.add('err')
    small.innerText = mess
}

function showSuc(input) {
    let parent = input.parentElement;
    let small = parent.querySelector('small')

    parent.classList.remove('err')
    small.innerText = " "
}

function checkEmpty(listInput) {
    let isEmpty = false;
    listInput.forEach(input => {
        input.value = input.value.trim()

        if (!input.value) {
            isEmpty = true;
            showErr(input, 'không dược để trống')
        } else {
            showSuc(input)
        }
    });

    return isEmpty


}


form.addEventListener('submit', function (e) {
    e.preventDefault()

    isEmpty = checkEmpty([user, email, pass, con_pass])
})