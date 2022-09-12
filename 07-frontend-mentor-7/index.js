//1. 主题切换
const btns = document.querySelectorAll(".btns span");
const containerElement = document.querySelector(".container");
//1.1 点击数字切换主题
btns.forEach(btn => {
  btn.addEventListener("click", e => {
    //remove current theme
    containerElement.classList.remove("theme1", "theme2", "theme3");

    //add new theme
    const theme = "theme" + e.target.innerHTML; // 这里用innerHTML 使用innerText圆点运动方向反向
    containerElement.classList.add(theme);
  });
});

//1.2 点击圆点切换主题
const circles = document.querySelectorAll(".circle");

circles.forEach(circleElement => {
  circleElement.addEventListener("click", e => {
    //remove current theme
    containerElement.classList.remove("theme1", "theme2", "theme3");

    //add new theme
    const theme = e.target.parentElement.htmlFor;
    containerElement.classList.add(theme);
  });
});

//2. 绑定各种键
const resultElement = document.querySelector(".result");

//2.1 输入key绑定
const keyElements = document.querySelectorAll(".key");

keyElements.forEach(keyElement => {
  keyElement.addEventListener("click", e => {
    resultElement.value += e.target.innerText;
  });
});

//2.2 特殊button绑定
const delBtn = document.getElementById("del-btn");
const resetBtn = document.getElementById("reset-btn");
const equalBtn = document.getElementById("equal-btn");

delBtn.addEventListener("click", () => {
  resultElement.value = resultElement.value.slice(0, -1);
});

resetBtn.addEventListener("click", () => {
  resultElement.value = "";
});

equalBtn.addEventListener("click", () => {
  resultElement.value = calculate(resultElement.value);
});

//3. 计算
function calculate(str) {
  const nums = str.split(/[\+\-x/]/).map(numStr => +numStr);
  const operations = str.match(/[\+\-x/]/g);
  let result;

  console.log(nums);
  console.log(operations);

  //先乘除 遍历操作符
  //连乘连除 乘除混合
  for (let i = 0; i < operations.length; i++) {
    let num1 = nums[i]; //操作数1
    let num2 = nums[i + 1]; //操作数2

    //计算单个乘除表达式的结果
    if (operations[i] == "x" || operations[i] == "/") {
      let isNegative = operations[i - 1] == "-";
      let result1 = 0;

      //计算第一次乘除
      if (operations[i] == "x") {
        result1 = num1 * num2;
      } else if (operations[i] == "/") {
        result1 = num1 / num2;
      }

      if (isNegative) result1 = -result1;

      //连乘连除情况
      let j = i + 1;
      while (operations[j] == "x" || operations[j] == "/") {
        //连续乘除 更新num1
        if (j == i + 1) num1 = result1;

        switch (operations[j]) {
          case "x":
            console.log("num1: ", num1, "x", nums[j + 1]);
            num1 *= nums[j + 1];
            result1 = num1;
            console.log("= r1: ", result1);
            break;
          case "/":
            console.log("num1: ", num1, "/", nums[j + 1]);
            num1 /= nums[j + 1];
            result1 = num1;
            console.log("= r1: ", result1);
            break;
          default:
            break;
        }
        j++;
      }

      //更新 i
      num2 = nums[j];
      i = j;

      if (!result) result = 0;

      result += result1; //保存多个乘除表达式之和
    }
  }

  console.log("乘除结果：", result);

  if (typeof result == "undefined") {
    console.log("无乘除表达式");
    result = 0;
  }

  //再加减 遍历操作符
  //加减操作符只需关心操作数2
  //乘除结果视为操作数1 若无乘除结果 操作数1视为nums[0]
  for (let i = 0; i < operations.length; i++) {
    switch (operations[i]) {
      case "+":
        if (i == 0) {
          result += nums[0];
        }

        if (operations[i + 1] == "x" || operations[i + 1] == "/") {
          //加号后面有乘除号 跳过操作数2
          result += 0;
        } else {
          //加号后无乘除 直接加操作数2
          //若operations[0] == "+" 则操作数1初始化为nums[0] 否则操作数1为上面计算的乘除结果
          result += nums[i + 1];
        }
        break;
      case "-":
        if (i == 0) {
          result += nums[0];
        }
        if (operations[i + 1] == "x" || operations[i + 1] == "/") {
          //减号后面有乘号 跳过操作数2
          result += 0;
        } else {
          //减号后无乘除 直接减操作数2
          //若operations[0] == "-" 则初始操作数1设为nums[0] 否则操作数1为上面计算的乘除结果
          result -= nums[i + 1];
        }
        break;
      default:
        break;
    }
  }

  return result;
}
