var Shell = function(){
  Shell.carouselData = [
    {
      name:'Abhijit'
    },
    {
      name:'Pallabi'
    },
    {
      name:'Bipul'
    }
  ]

  Shell.prototype.render = function(){
    const {carouselData} = Shell;
    const sizeOfCarouselData = carouselData.length;
    var shell = `<div class="p-5 vh-100 vw-100 position-absolute">
                  <div class="carousal overflow-auto position-relative">
                    <div class='arrow left position-absolute cursor-pointer'>
                      <i class="fas fa-chevron-left"></i>
                    </div>
                    <div class='arrow right position-absolute cursor-pointer'>
                      <i class="fas fa-chevron-right"></i>
                    </div>
                    <div class="slider h-100 w-100 position-absolute">
                      <div class="d-flex w-100 h-100">`;
                        for(let i=0;i<sizeOfCarouselData;i++){
                          shell += `<div class='w-100 h-100 border flex-none'>
                                      <div class='w-100 h-100 d-flex align-items-center justify-content-center'>
                                        ${carouselData[i].name}
                                        </div>
                                    </div>
                                    `
                        };
                      shell +=`</div>`;
                    shell +=`</div>`;
                shell +=`</div>`;
        shell +=`</div>`;
    this.parent.innerHTML =  shell;
  };

  function Shell(elm){
    this.parent = elm;
  };
  return Shell;
}();
