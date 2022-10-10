const main = async () => {
    const flipPancake = () => {
        const kitchen = document.getElementById('kitchen');
        kitchen.style.display = "block";
        setTimeout(() => {
            const pancake = document.getElementById('pancake');
            pancake.classList.add("doAflip");
            const pan = document.getElementById('pan');
            pan.classList.add("doAflip");
            setTimeout(() => {
                pancake.classList.remove("doAflip");
                pan.classList.remove("doAflip");
                kitchen.style.display = "none";
            }, 5000)
        }, 2000)
    }
    
    ComfyJS.onCommand = ( user, command, message, flags, extra ) => {
        if(command === "flip") {
            flipPancake()
        }
    }
    const url = new URL(window.location.href);
    ComfyJS.Init(url.searchParams.get('user'));
}

main();
