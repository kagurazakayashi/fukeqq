class Fukeqq {
    qianDao: string = '签到'
    btnName: string = 's-btn s-btn--primary s-btn--m'
    runningInfoI: number = 0

     /**
     * 初始化，在指令碼載入之後，等 5 秒鐘再開始
     */
    constructor() {
        setTimeout(() => {
            this.enableTimer();
        }, 5000);
    }

     /**
     * 建立計時器，每 5 秒執行一次檢測
     */
    enableTimer() {
        console.log(Date().toLocaleString(), this.qianDao+'使能');
        setInterval(() => {
            const sbtn: HTMLSpanElement | null = this.chkBtn();
            if (sbtn) {
                this.clickBtn(sbtn);
            }
            if (this.runningInfoI++ == 100) {
                console.log(Date().toLocaleString(), this.qianDao+'运行中');
            }
        }, 5000);
    }

     /**
     * 觸發點按按鈕。會在 1 - 6 秒隨機延時後點按按鈕。
     * @param {HTMLSpanElement} sbtn 當前按鈕
     */
    clickBtn(sbtn: HTMLSpanElement) {
        const randomSec = Math.floor(Math.random() * (5)) + 1;
        setTimeout(() => {
            sbtn.click();
            console.warn(Date().toLocaleString(), this.qianDao + '完毕！');
        }, randomSec);
    }

    /**
     * 檢查按鈕是否出現
     * @return {HTMLSpanElement|null} 如果按鈕出現返回按鈕，否則返回空
     */
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

// 初始化並執行
new Fukeqq();
