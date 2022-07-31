export default function completeTask(checkButton) {
    let checked = false;

    checkButton.addEventListener('click', () => {
        if (checked == false) {
            checked = true;
            checkButton.style.filter = "invert(40%) sepia(39%) saturate(4105%) hue-rotate(136deg) brightness(99%) contrast(97%)";
        } else {
            checked = false;
            checkButton.style.filter = "invert(79%) sepia(8%) saturate(113%) hue-rotate(314deg) brightness(108%) contrast(96%)";
        }     
    });
}