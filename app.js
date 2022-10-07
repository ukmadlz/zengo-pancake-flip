const flipPancake = () => {
    const pancake = document.getElementById('pancake');
    pancake.classList.add("doAflip");
    setTimeout(() => {
        pancake.classList.remove("doAflip");
    }, 10000)
}

ComfyJS.onCommand = ( user, command, message, flags, extra ) => {
    if(command === "flip") {
        flipPancake()
    }
}
ComfyJS.Init( "ukmadlz" );