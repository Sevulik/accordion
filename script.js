const title = document.querySelectorAll('.accordion-title')
title.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling
        document.querySelectorAll('.content').forEach(c => {
            if (c !== content) c.style.display = 'none'
        })
        content.style.display = content.style.display === 'block' ? 'none' : 'block'
    })
})