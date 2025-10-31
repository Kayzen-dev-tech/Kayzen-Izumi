// Tambahkan efek hover pada elemen skill
const skills = document.querySelectorAll('.skills li');

skills.forEach(skill => {
    skill.addEventListener('mouseover', () => {
        skill.style.backgroundColor = '#e4007f';
        skill.style.color = '#fff';
    });

    skill.addEventListener('mouseout', () => {
        skill.style.backgroundColor = '#fff';
        skill.style.color = '#333';
    });
});
