var currentScene = 0;
var changeScene = function(decision) {
    switch (currentScene) {
        case 0:
            currentScene = 1;
            break;
        case 1:
            currentScene = decision == 1 ? 2 : 3;
            break;
        case 2:
            currentScene = decision == 1 ? 4 : 5;
            break;
        case 3:
            currentScene = decision == 1 ? 6 : 7;
            break;
        case 4:
            currentScene = decision == 1 ? 8 : 5;
            break;
        case 7:
            currentScene = decision == 1 ? 8 : 6;
            break;
    }


    document.getElementById("sceneimg").src = "scene" + currentScene + ".png";

}
