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

/**
 * 커스텀 커서
 */
const cursor = {
    element: undefined,
    mouseX: -9999, mouseY: -9999,
    initCursor: function() {
        // 이미 cursor가 있을 경우 실행하지 않음
        if(this.element !== undefined) {
            return;
        }
        // Create Cursor Element
        this.element = document.createElement('div');
        this.element.classList.add('cursor');
        document.body.appendChild(this.element);
        // Add Event
        this.addEvent();
    },
    translate: function() {
        // 가운데 정렬을 위한 px 계산
        const cursorWidth = (this.element.offsetWidth/2);
        const cursorHeight = (this.element.offsetHeight/2);
        // 마우스 이동
        gsap.to(this.element, {duration: 3, left: this.mouseX-cursorWidth, top: this.mouseY-cursorHeight, ease: 'elastic'});
    },
    toggleCursor(_is = true) {
        if(_is) {this.element.classList.remove('off');}
        else {this.element.classList.add('off');}
    },
    scaleCursor(scale = 1) {
        gsap.to(this.element, {scaleX: scale, scaleY: scale, duration: .5});
    },
    addEvent() {
        document.body.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
            this.translate();
        });
        document.addEventListener('mouseleave', (e) => { 
            this.toggleCursor(false);
        });
        document.addEventListener('mouseenter', (e) => { 
            this.toggleCursor(true);
        });
        // 클릭 요소에 마우스 오버시 Scale 조절
        document.querySelectorAll('a').forEach((a) => {
            a.addEventListener('mouseenter', (e) => {
                this.scaleCursor(2);
            });
            a.addEventListener('mouseleave', (e) => {
                this.scaleCursor(1);
            });
        });
    }
}

window.addEventListener('DOMContentLoaded', function() {
    cursor.initCursor(); // 커서 로딩
});