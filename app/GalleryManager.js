export default class SPAManager{


    gameData;
    dataCounter = 0;
    constructor(data){

        this.gameData = data;

        $("#leftArrow").on("click", e => {
            this.cycleContent("left",1);
        });

        $("#rightArrow").on("click", e => {
            this.cycleContent("right",1);
        });
    }


    cycleContent(direction, num){
        switch(direction){
            case "left":
                this.dataCounter--;
                if(this.dataCounter < 0){
                    this.dataCounter = 9;
                }
                this.updateGallery();
                break;
            case "right":
                this.dataCounter++;
                if(this.dataCounter > 9){
                    this.dataCounter = 0;
                }
                this.updateGallery();
                break;
            default:
                break;
        }
    }

    updateGallery(){
        $("#galleryTitle").html(this.gameData["GameObjects"][this.dataCounter]["title"]);
        $("#galleryImage").attr("src", `${this.gameData["GameObjects"][this.dataCounter]["image"]}`);
        $("#galleryPublisher").html(this.gameData["GameObjects"][this.dataCounter]["publisher"]);
        $("#galleryGenre").html(this.gameData["GameObjects"][this.dataCounter]["genre"]);
        $("#galleryPlatforms").html(this.gameData["GameObjects"][this.dataCounter]["platforms"]);
    }
}