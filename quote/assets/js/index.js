const total = document.querySelector('#total');
const totalParagraph = document.querySelector('#totalParagraph');
const description = document.querySelector('#description');
const forms = document.querySelectorAll('form');
const form = forms[0];
const plague = document.querySelector('#plague');
const houseSize = document.querySelector('#houseSize');
const distance = document.querySelector('#distance');

$("#plagueRow button").click(function () {
    if ($(this)[0].id === 'none') {
        $(this).parent().siblings().children().removeClass('active');
    }
    const none = $(this).parent().siblings().children()[4];
    $(none).removeClass('active');
});

$("#houseRow button, #distanceRow button").click(function () {
    $(this).parent().siblings().children().removeClass('active');
});

// @TODO refactor this to replace the above jQuery code
// document.querySelectorAll('#plagueRow button').forEach(item => {
//     item.addEventListener('click', (e) => {
//         for (let sibling of e.target.parentElement.parentElement.children) {
//             if (sibling !== e.target.parentElement) {
//                 if (sibling.firstElementChild.id === 'none') {
//                     sibling.firstElementChild.classList.remove('active');
//                 }
//             } else {
//                 console.log(sibling.firstElementChild.id);
//             }
//         }
//     });
// });

document.querySelectorAll('.btn').forEach(item => {
    item.addEventListener('click', e => {
        e.target.blur();
        if (e.target.classList.contains('active'))
            e.target.classList.remove('active');
        else
            e.target.classList.add('active');
        e.preventDefault();
    });
});

document.querySelector('#quote').addEventListener('click', (e) => {
    let accumulator = 0;

    plague.innerText = '';
    Array.from(form.elements).forEach((element) => {
        if (element.classList.contains('active') && element.hasAttribute('value')) {
            accumulator += parseInt(element.value);
            if (element.parentElement.parentElement.id == 'plagueRow') {
                plague.innerHTML += `${element.innerText} <br>`;
            } else if (element.parentElement.parentElement.id == 'houseRow') {
                houseSize.innerText = element.innerText;
            } else
                distance.innerText = element.innerText;
        }
    });

    total.innerText = accumulator;
    plague.classList.remove('d-none');
    houseSize.classList.remove('d-none');
    distance.classList.remove('d-none');
    totalParagraph.classList.remove('d-none');
    description.classList.remove('d-none');

    e.preventDefault();
});