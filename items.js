var Items = function(){
  Items.prototype.getItem = function({name, price}){
    return `<div class='col-md-3'>
              <div class="w-100 border p-5">
                <div>${name}</div>
                <div>${price}</div>
              </div>
            </div>`
  };
  Items.prototype.render = function(){
    var itemsHtml = '';
    const sizeOfData = this.data.length;
    for(let i=0; i<sizeOfData;i++){
      console.log(this.data[i]);
      itemsHtml += this.getItem(this.data[i]);
    }
    this.parent.innerHTML =  itemsHtml;
  };
  function Items(parent, data){
    this.parent = parent;
    this.data = data;
    this.refs = {};
  };
  return Items;
}();
