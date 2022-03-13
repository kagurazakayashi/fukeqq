class Fukeqq {
    qianDao: string = '签到'
    btnName: string = 's-btn s-btn--primary s-btn--m'

    constructor() {
        setTimeout(() => {
            this.enableTimer();
        }, 5000);
    }

    enableTimer() {
        setInterval(() => {
            const sbtn: HTMLSpanElement | null = this.chkBtn();
            if (sbtn) {
                this.clickBtn(sbtn);
            } else {
                console.log(Date().toLocaleString(), '暂时无需' + this.qianDao);
            }
        }, 5000);
    }

    clickBtn(sbtn: HTMLSpanElement) {
        const randomSec = Math.floor(Math.random() * (5)) + 1;
        setTimeout(() => {
            sbtn.click();
            console.warn(Date().toLocaleString(), this.qianDao + '签到完毕！');
        }, randomSec);
    }

    chkBtn(): HTMLSpanElement | null {
        const sbtns: HTMLCollectionOf<Element> = document.getElementsByClassName(this.btnName);
        if (sbtns.length == 0) {
            return null;
        }
        for (const key in sbtns) {
            if (Object.prototype.hasOwnProperty.call(sbtns, key)) {
                const sbtn: HTMLSpanElement = sbtns[key] as HTMLSpanElement;
                if (sbtn.innerText == this.qianDao) {
                    return sbtn;
                }
            }
        }
        return null;
    }
}
new Fukeqq();
