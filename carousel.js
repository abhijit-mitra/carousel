var Carousel = function(){
  Carousel.prototype.render = function(data){
    this.carouselData = data;
    const {carouselData} = this;
    const sizeOfCarouselData = carouselData.length;
    const midIndex = 1;
    var shell = `<div class="carousal overflow-x-hidden position-relative">
                    <div class="slider h-100 w-100 position-absolute">
                      <div class="d-flex w-100 h-100 align-items-center">`;
                        for(let i=0;i<sizeOfCarouselData;i++){
                          shell += `<div id='screen_${i+1}' class='screens w-33 ${i===midIndex?'h-100':''} flex-none'>
                                      <div class='w-100 h-100 position-relative'>
                                        <img class='w-100 h-100' src=${carouselData[i].url}/>
                                        <div class="position-absolute p-5 white top-0">
                                          <h2 class="position-relative">
                                              ${carouselData[i].name}
                                          </h2>
                                          <h2 class="position-relative">
                                              ${carouselData[i].price}
                                          </h2>
                                        </div>
                                        </div>
                                    </div>
                                    `};
                      shell +=`</div>`;
                    shell +=`</div>`;
                  shell += `<div class='arrow left position-absolute cursor-pointer disabled'>
                                <i class="fas fa-chevron-left white"></i>
                            </div>
                            <div class='arrow right position-absolute cursor-pointer'>
                              <i class="fas fa-chevron-right white"></i>
                            </div>`;
                shell +=`</div>`;
    this.parent.innerHTML =  shell;
    this.addClickOnArrow();
  };
  Carousel.prototype.handleRightArrowClick = function(){
    const {carouselData} = this;
    const {refs:{slider, left_arrow, right_arrow, screens}} = this;
    console.log(screens);
    right_arrow.classList.add('disabled');
    const sizeOfCarouselData = carouselData.length;
    if(this.currentSlide >= sizeOfCarouselData){
      return;
    }
    const screenWidth = screens[0].offsetWidth;
    slider.style.left = `${slider.offsetLeft - screenWidth}px`;
    screens[this.currentSlide+ 1].classList.remove('h-75');
    screens[this.currentSlide+ 1].classList.add('h-100');
    screens[this.currentSlide].classList.remove('h-100');
    screens[this.currentSlide].classList.add('h-75');
    this.currentSlide += 1;
    if(this.currentSlide>1){
      left_arrow.classList.remove('disabled');
    }
    if(this.currentSlide === (sizeOfCarouselData -2)){
      right_arrow.classList.add('disabled');
    }else{
      setTimeout(function(){
        right_arrow.classList.remove('disabled');
      },1000);
    }
  }
  Carousel.prototype.handleLeftArrowClick = function(){
    const {carouselData} = this;
    const sizeOfCarouselData = carouselData.length;
    const {refs:{slider, left_arrow, right_arrow, screens}} = this;
    left_arrow.classList.add('disabled');
    if(this.currentSlide === 1){
      return;
    }
    const screenWidth = screens[0].offsetWidth;
    screens[this.currentSlide-1].classList.remove('h-75');
    screens[this.currentSlide-1].classList.add('h-100');
    screens[this.currentSlide].classList.remove('h-100');
    screens[this.currentSlide].classList.add('h-75');
    slider.style.left = `${slider.offsetLeft + screenWidth}px`;
    this.currentSlide -= 1;

    if(this.currentSlide<sizeOfCarouselData){
      right_arrow.classList.remove('disabled');
    }
    if(this.currentSlide === 1){
      left_arrow.classList.add('disabled');
    }else{
      setTimeout(function(){
        left_arrow.classList.remove('disabled');
      },1000);
    }
  }
  Carousel.prototype.addClickOnArrow = function(){
    this.refs.left_arrow = document.querySelector('.arrow.left');
    this.refs.right_arrow = document.querySelector('.arrow.right');
    this.refs.slider = document.querySelector('.carousal .slider');
    this.refs.screens = document.getElementsByClassName('screens');
    this.refs.left_arrow.addEventListener('click', this.handleLeftArrowClick);
    this.refs.right_arrow.addEventListener('click', this.handleRightArrowClick)
  }

  function Carousel(elm){
    this.parent = elm;
    this.carouselData = [];
    this.currentSlide = 1;
    this.refs = {};
    this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
    this.handleRightArrowClick = this.handleRightArrowClick.bind(this);
  };
  return Carousel;
}();
