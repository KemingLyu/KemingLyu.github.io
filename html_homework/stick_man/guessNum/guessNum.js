main()

function main() {
    var ans = 3846;
    var count = 0;
    while (true) {
        var num = prompt("輸入四個數字:");
        count++;
        document.write(num + "<br>" + guessNum(num, ans) + "<br>");
        if (guessNum(num, ans) == "4A0B") {
            document.write("答對了！！共猜了" + count + "次")
            break;
        }

    }
}

function guessNum(num, ans) {
    /*
    猜數字，
    num代表使用者輸入的數字，ans代表答案
    傳出幾A幾B
    */

    var a = 0,
        b = 0;

    //將數字轉成字串, 方便處理
    num = num.toString();
    ans = ans.toString();

    //開始比對
    for (var i = 0; i < ans.length; i++) {
        //找出猜的數字中, 是否有在答案中(-1代表沒有此數字)
        if (ans.indexOf(num[i]) != -1) {
            //如果有, 開始判斷A和B
            if (num[i] == ans[i])
                a++;
            else
                b++;
        }
    }

    //傳回值
    return a + "A" + b + "B";
}
