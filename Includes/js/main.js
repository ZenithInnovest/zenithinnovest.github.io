const formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
	maximumFractionDigits: 0
});

const leftPerct_1000 = 18.4;
var growthCheck = document.getElementById('growthCheck');
var slider = document.getElementById('slider');
var sliderValue = document.getElementById('sliderValue');
var investAmount = document.getElementById('investedAmount');
var ziReturn = document.getElementById('ziReturn');
var snpReturn = document.getElementById('snpReturn');
var returnAsOf = document.getElementById('returnAsOf');

var thumbLocation_1000 = Math.floor((growthCheck.clientWidth / 4) - (sliderValue.clientWidth / 2) + (19.2 / 2));
var thumbLocation_100000 = Math.floor((growthCheck.clientWidth * 0.75) - (sliderValue.clientWidth / 2) - (19.2 / 2));
var thumlPxMove_1000 = Math.round((thumbLocation_100000 - thumbLocation_1000) * 100 / 98) / 100;

function updateAllGrowthDetail(sldVal) {
	var investedAmountVal = sldVal * 1000;

	sliderValue.style.left = Math.floor(thumbLocation_1000 + ((sldVal - 1) * thumlPxMove_1000)) + 'px';
	sliderValue.innerHTML = formatter.format(investedAmountVal);
	investAmount.innerHTML = formatter.format(investedAmountVal);
	ziReturn.innerHTML = formatter.format(sldVal * Model_Return_1000);
	snpReturn.innerHTML = formatter.format(sldVal * SnP_Return_1000);
}

updateAllGrowthDetail(slider.value);
returnAsOf.innerHTML = ReturnAsOf;

slider.oninput = function () {
	updateAllGrowthDetail(this.value)
}