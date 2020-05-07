var Carousel = function(){
  Carousel.prototype.render = function(){
    const {carouselData} = this;
    const sizeOfCarouselData = carouselData.length;
    var shell = `<div class="carousal overflow-hidden position-relative">
                    <div class="slider h-100 w-100 position-absolute">
                      <div class="d-flex w-100 h-100">`;
                        for(let i=0;i<sizeOfCarouselData;i++){
                          shell += `<div class='w-100 h-100 flex-none'>
                                      <div class='w-100 h-100 d-flex align-items-center justify-content-center'>
                                        <img class='w-100 h-100' src=${carouselData[i].url}/>
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
    this.parent.innerHTML =  shell
  };
  Carousel.prototype.handleRightArrowClick = function(){
    const {carouselData} = this;
    const {refs:{slider, left_arrow, right_arrow}} = this;
    right_arrow.classList.add('disabled');
    const sizeOfCarouselData = carouselData.length;
    if(this.currentSlide >= sizeOfCarouselData){
      return;
    }
    const sliderWidth = slider.offsetWidth;
    slider.style.left = `${slider.offsetLeft - sliderWidth}px`;
    this.currentSlide += 1;
    if(this.currentSlide>1){
      left_arrow.classList.remove('disabled');
    }
    if(this.currentSlide === sizeOfCarouselData){
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
    const {refs:{slider, left_arrow, right_arrow}} = this;
    left_arrow.classList.add('disabled');
    if(this.currentSlide === 1){
      return;
    }
    const sliderWidth = slider.offsetWidth;
    slider.style.left = `${slider.offsetLeft + sliderWidth}px`;
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
    this.refs.left_arrow.addEventListener('click', this.handleLeftArrowClick);
    this.refs.right_arrow.addEventListener('click', this.handleRightArrowClick)
  }

  function Carousel(elm, data){
    this.parent = elm;
    this.carouselData = data;
    this.currentSlide = 1;
    this.refs = {};
    this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
    this.handleRightArrowClick = this.handleRightArrowClick.bind(this);
  };
  return Carousel;
}();
