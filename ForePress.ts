namespace Buttons {
    // Define a function that simulates a button press
    //% block="Force Press the $button button"
    export function forcePress(button: controller.Button) {
        button.setPressed(true);
        pause(10)
        button.setPressed(false)
    }

}