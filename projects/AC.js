document.getElementById('calculateButton').addEventListener('click', function(e) {
    e.preventDefault();

    const grades = [
        parseFloat(document.getElementById('grade1').value),
        parseFloat(document.getElementById('grade2').value),
        parseFloat(document.getElementById('grade3').value),
        parseFloat(document.getElementById('grade4').value),
        parseFloat(document.getElementById('grade5').value)
    ];

    const total = grades.reduce((acc, current) => acc + current, 0);
    const average = total / grades.length;

    const resultDiv = document.getElementById('result');
    const resultText = document.getElementById('resultText');
    const resultImage = document.getElementById('resultImage');
    resultText.textContent = 'Result: ';

    if (average > 90) {
        resultText.textContent += 'With Honors';
        resultImage.src = 'https://a.pinatafarm.com/620x413/3ab25466d5/happy-birthday.jpg';
        } else if (average >= 75 && average <= 90) {
        resultText.textContent += 'Passed';
        resultImage.src = 'https://media.makeameme.org/created/okay-cool.jpg';
        } else {
        resultText.textContent += 'Failed';
        resultImage.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt1W10kX1C4kBMsblS7xOi6WInwtzUBWhR1w&usqp=CAU';
        }


    resultText.textContent += ' (Average: ' + average.toFixed(2) + ')';
    resultDiv.style.display = 'block';
});
