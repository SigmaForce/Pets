



const App = {
    init(){
        let windowWidth = window.innerWidth;
        let screenWidth = screen.width
        if(screenWidth && windowWidth > 900){
            document.querySelector('ul a').classList.add('sr-only')
        }else{
            document.querySelector('.nav-header').classList.add('sr-only')
        }
        console.log(screenWidth)
    },

    IsResized(){
            let windowWidth = window.innerWidth; 
            if(windowWidth > 900){
                document.querySelector('ul a').classList.add('sr-only')
                document.querySelector('.nav-header').classList.remove('sr-only')
            }else{
                document.querySelector('ul a').classList.remove('sr-only')
                document.querySelector('.nav-header').classList.add('sr-only')
            }
        }
    


}

App.init();

