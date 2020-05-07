var Search = function(){
  Search.prototype.render = function(){
    var searchBar = `<form class='searchForm'>
                        <input
                        type="text"
                        class="form-control"
                        placeholder="Search..."
                        >
                      </form>`;
    this.parent.innerHTML =  searchBar;
    this.addEvents();
  }
  Search.prototype.handleSubmit = function(e){
    e.preventDefault();
    const value = e.target[0].value.toLowerCase();
    const filteredData = this.data.filter((elm)=>(elm.keywords.some(keyword=>keyword.includes(value))));
    this.onSearchComplete(filteredData);
  }
  Search.prototype.addEvents = function(){
    const parentId = this.parent.id;
    this.refs.form = document.querySelector(`#${parentId} form.searchForm`);
    this.refs.form.addEventListener('submit', this.handleSubmit);
  }
  function Search(parent, data, onSearchComplete){
    this.parent = parent;
    this.data = data;
    this.onSearchComplete = onSearchComplete.bind(this);
    this.refs = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  };
  return Search;
}();
