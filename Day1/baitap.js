const arr1 = [1, 3, 5, 2, 7, 6, 7, 9, 8];
const func1 = (arr = []) => {
  if (arr.length === 0) {
    throw new Error("mang rong");
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum, "Tong cac phan tu trong arr");
  //dung return cx dc
};
func1(arr1);
//=====================================================================================================
const func2 = (arr = []) => {
  if (arr.length === 0) {
    throw new Error("mang rong");
  }
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  console.log(max, "SLN trong arr:");
  //dung return cx dc
};
func2(arr1);
//===========================================================================================
const func3 = (arr = []) => {
  const arrNumber = [];
  if (arr.length === 0) {
    throw new Error("mang rong");
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      arrNumber.push(arr[i]);
    }
  }
  return arrNumber;
};
console.log(func3(arr1), "Bai 3");
//====================================================================================
const func4 = (arr = []) => {
  const solanxuathien = {};
  if (arr.length === 0) {
    throw new Error("mang rong");
  }
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (solanxuathien[value]) {
      solanxuathien[value]++;
    } else {
      solanxuathien[value] = 1;
    }
  }

  return solanxuathien;
};
const arr2 = [1, 2, 3, 4, 1, 2, 3, 5, 6, 7, 2, 3, 4, 5];
console.log(func4(arr2), "bai4");
//==================================================================
const func5 = (arr = []) => {
  const mangDaoNguoc = [];
  if (arr.length === 0) {
    throw new Error("mang rong");
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    mangDaoNguoc.push(arr[i]);
  }
  return mangDaoNguoc;
};
console.log(func5(arr1), "Bai 5");
//===========================================================================
const func6 = (arr = []) => {
  const newArr = [];
  if (arr.length === 0) {
    throw new Error("mang rong");
  }
  for (let i = 0; i < arr.length; i++) {
    let isCheck = false;
    for (let j = 0; j < newArr.length; j++) {
      if (arr[i] === newArr[j]) {
        isCheck = true;
        break;
      }
    }
    if (!isCheck) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

console.log(func6(arr2), "Bai6");

//==========================================================================
const swap = (arr, index1, index2) => {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};
const func7 = (arr = []) => {
  for (let i = 0; i < arr.length - 1; i++) {
    // phan tu lon naht dua ve cuoi cung
    for (let j = 0; j < arr.length; j++) {
      // lap laij kiem tra co day du cac pha tu ben trong ko
      if (arr[j] > arr[j + 1]) {
        // phan tu trc lon hon phan tu sau
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
};
console.log(func7(arr1), "bai 7");
//===============================================================
const func8 = (arr = []) => {
  let object = {}; // tao 1 doi tuong de luu so lan xuat hien
  let value = null;
  let solanxuathien = 0;

  for (let i = 0; i < arr.length; i++) {
    const temp = arr[i];
    if (object[temp]) {
      // kiem tra xem gia tri nay da co tong object hay chua, neu co tang 1
      object[temp]++;
    } else {
      // nguoc lai gian = 1
      object[temp] = 1;
    }

    if (solanxuathien < object[temp]) {
      // kiem tra so lan xuat hien
      solanxuathien = object[temp]; // luu gia tri solanxuathien
      value = temp; // cap nhat phan tu xuat hien nhieu nhat
    }
  }
  return (
    `Bai 8 : Phan tu xuat hien nhieu nhat:  ` +
    value +
    ` tan xuat : ` +
    solanxuathien
  );
};
console.log(func8(arr2));
//================================================================
const func9 = (arr1 = [], arr2 = []) => {
  let newArr = [];

  for (let i = 0; i < arr1.length; i++) {
    let isCheck = false;
    for (let j = 0; j < newArr.length; j++) {
      if (arr1[i] === newArr[j]) {
        isCheck = true;
        break;
      }
    }
    if (!isCheck) {
      newArr.push(arr1[i]);
    }
  }
  //==============
  for (let i = 0; i < arr2.length; i++) {
    let isCheck = false;
    for (let j = 0; j < newArr.length; j++) {
      if (arr2[i] === newArr[j]) {
        isCheck = true;
        break;
      }
    }
    if (!isCheck) {
      newArr.push(arr2[i]);
    }
  }
  return newArr;
};

console.log(func9(arr1, arr2), "bai 9 cach 1");

const func9_c2 = (arr1 = [], arr2 = []) => {
  let newArr = [];

  for (let i = 0; i < arr1.length; i++) {
    if (!newArr.includes(arr1[i])) {
      newArr.push(arr1[i]);
    }
  }
  //==============
  for (let i = 0; i < arr2.length; i++) {
    if (!newArr.includes(arr2[i])) {
      newArr.push(arr2[i]);
    }
  }
  return newArr;
};

console.log(func9_c2(arr1, arr2), "bai 9 cach 2");
//============================================================
//dung con tro de xet
const func10 =(arr =[])=>{
  // let left = 0;
  // let right = arr.length -1;
  const lenght = arr.length;
  for(let i = 0; i < lenght / 2; i++){
    if(arr[i] !== arr[lenght -1 - i]){
      return false;
    }
  }
  return true;
}
//===========
const func10_c2=(arr = []){
  const mangDaoNguoc = [];
  for(let i = arr.length -1; i>=0; i++){
    mangDaoNguoc.push(arr[i])
  }
  for(let i = 0; i< arr.length; i++){
    if(arr[i] === mangDaoNguoc[i]){
      return false;
    }
  }
  return true;
}
//===============