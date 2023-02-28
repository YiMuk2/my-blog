/**
 * Layout 함수
 */
const layout = {
    /**
     * Layout 중 Header를 그립니다.
     * @param {string} title 페이지 타이틀 default ''
     */
    header : function(title = '페이지 제목이 입력되지 않았습니다.') {
        document.write('<header>');
        document.write(`    <h1>${title}</h1>`);
        document.write('</header>');
    },
    /**
     * Layout 중 Footer를 그립니다.
     * copyright 정보를 포함합니다.
     */
    footer : function() {
        document.write('<footer>');
        document.write('    <div class="copyright">Copyright 2023. MUK All rights reserved.</div>');
        document.write('</footer>');
    }
}