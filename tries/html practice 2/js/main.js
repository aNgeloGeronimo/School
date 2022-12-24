
document.querySelector('.img1').addEventListener('mouseover', (e) => {
    e.preventDefault;

    document.querySelector('body').classList.remove('style1');
    document.querySelector('body').classList.add('style2');
    document.querySelector('body').classList.remove('style3');
    document.querySelector('body').classList.remove('style4');
});

document.querySelector('.img2').addEventListener('mouseover', (e) => {
    e.preventDefault;

    document.querySelector('body').classList.remove('style1');
    document.querySelector('body').classList.remove('style2');
    document.querySelector('body').classList.add('style3');
    document.querySelector('body').classList.remove('style4');
});

document.querySelector('.img3').addEventListener('mouseover', (e) => {
    e.preventDefault;

    document.querySelector('body').classList.remove('style1');
    document.querySelector('body').classList.remove('style2');
    document.querySelector('body').classList.remove('style3');
    document.querySelector('body').classList.add('style4');
});

document.querySelector('.images').addEventListener('mouseout', (e) => {
    e.preventDefault;

    document.querySelector('body').classList.add('style1');
    document.querySelector('body').classList.remove('style2');
    document.querySelector('body').classList.remove('style3');
    document.querySelector('body').classList.remove('style4');
});