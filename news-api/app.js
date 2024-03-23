//title
const elLastest = document.getElementById('lastest');
fetch(`https://apiforlearning.zendvn.com/api/v2/articles`)
    .then((response) => response.json())
    .then((res) => {
        const data = res.data;
        let html = '';
        data.forEach((arcti) => {
            html +=/* html */
                `<li><a href="#">${arcti.title}</a></li>
            `;
        });
        elLastest.innerHTML = html;
    });
//category
const elCategory = document.getElementById('category');
fetch(`https://apiforlearning.zendvn.com/api/v2/categories_news`)
    .then((response) => response.json())
    .then((res) => {
        const data = res.data;
        let html = '';
        let html2 = '';
        data.forEach((element, index) => {
            if (index < 4) {
                html +=/* html */
                    `<li><a href="category.html?id=${element.id}">${element.name}</a></li>
    `;
            } else {
                html2 +=/* html */
                    `<li><a href="category.html?id=${element.id}">${element.name}</a></li>
    `;
            }

        });

        elCategory.innerHTML = html +
            `<li>
        <a href="">DANH MUC KHÁC</a>
        <ul id="category2">
        ${html2}            
        </ul>
    </li>`;

    });


