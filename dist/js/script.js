'use strict';

// variables
const btnCalculate = document.querySelector('.btn-calculate');
const sectionPreview = document.querySelector(
  '.mainSection mainSection__preview'
);
const sectionResult = document.querySelector(
  '.mainSection mainSection__result'
);

// to calculate thr bmi
document.querySelector('btn-calculate').addEventListener('click', function () {
  const userWeight = Number(document.getElementById('userWeight'));
  const userHeight = Number(document.getElementById('userHeight'));
  const userBmi = userWeight / (userHeight / 100) ** 2;
  sectionPreview.classList.add('hidden');
  sectionResult.classList.remove('hidden');
});
