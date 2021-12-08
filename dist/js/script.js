'use strict';

// variables
const btnCalculate = document.querySelector('.btn-calculate');
const sectionPreview = document.querySelector('.mainSection__preview');
const sectionResult = document.querySelector('.mainSection__result');
const sectionResultNumber = document.querySelector(
  '.mainSection__result__number'
);
const sectionResultComment = document.querySelector(
  '.mainSection__result__comment'
);
let commentForResult;

const commentBmi = function (userBmi) {
  if (userBmi <= 18.5) {
    commentForResult = 'Недостаток массы тела';
  } else if (userBmi >= 18.5 && userBmi <= 24.9) {
    commentForResult = 'Так держать';
  } else {
    commentForResult = 'Упс! Нужно узнать процент жировой массы';
  }
};

// to calculate thr bmi
document.querySelector('.btn-calculate').addEventListener('click', function () {
  const userWeight = Number(document.getElementById('userWeight').value);
  let userHeight = Number(document.getElementById('userHeight').value);
  userHeight = userHeight / 100;
  let userBmi = (userWeight / (userHeight * userHeight)).toFixed(2);
  sectionPreview.classList.add('hidden');
  sectionResult.classList.remove('hidden');
  sectionResultNumber.textContent = userBmi;
  commentBmi(userBmi);
  sectionResultComment.textContent = commentForResult;
});
