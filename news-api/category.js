// Lấy chuỗi truy vấn URL
const queryString = window.location.search;

// Tạo một đối tượng URLSearchParams mới từ chuỗi truy vấn
const urlParams = new URLSearchParams(queryString);

// Lấy giá trị của một tham số cụ thể (ví dụ: 'paramName')
const id = urlParams.get('id');


const elAticles = document.getElementById('articles');
const elPagination = document.getElementById('pagination');
function renderArticles(page) {
    fetch(`https://apiforlearning.zendvn.com/api/v2/categories_news/${id}/articles?page=${page}`)
    .then((response) => response.json())
    .then((res) => {
        const data = res.data;
        const totalPage=res.meta.last_page;
        let html = '';
        data.forEach((arcti) => {
            html +=/* html */
                `<li><a href="#" >${arcti.title}</a></li>
            `;
        });
        elAticles.innerHTML = html;
        renderPagination(totalPage);
    });
    
}
renderArticles(1);

    function renderPagination(totalPage){
        let html='';
        for (let i = 1; i <= totalPage; i++) {
            html +=/* html */
                `<button onclick="renderArticles(${i})">${i}</button>

            `;
            
        }
        elPagination.innerHTML = html;
    }
