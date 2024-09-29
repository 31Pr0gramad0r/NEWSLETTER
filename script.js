
    document.addEventListener('DOMContentLoaded', function () {
        const tabs = document.querySelectorAll('nav ul li a');
        const contents = document.querySelectorAll('.tab-content');

        tabs.forEach(tab => {
            tab.addEventListener('click', function (event) {
                event.preventDefault();
                const target = tab.getAttribute('data-tab');

                contents.forEach(content => {
                    content.classList.add('hidden');
                    if (content.id === target) {
                        content.classList.remove('hidden');
                        content.classList.add('active');
                    } else {
                        content.classList.remove('active');
                    }
                });
            });
        });
    });
    