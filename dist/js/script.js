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

// to calculate thr bmi
document.querySelector('.btn-calculate').addEventListener('click', function () {
  const userWeight = Number(document.getElementById('userWeight').value);
  let userHeight = Number(document.getElementById('userHeight').value);
  userHeight = userHeight / 100;
  let userBmi = (userWeight / (userHeight * userHeight)).toFixed(2);
  sectionPreview.classList.add('hidden');
  sectionResult.classList.remove('hidden');
  console.log(userBmi);
});
