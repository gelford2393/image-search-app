import React, {useState} from 'react';
import {Api} from './components/api/Api'
import Img from './components/img/Img';
import Scroll from './components/scroll/sroll';
import { Search } from './components/api/Search';

function App() {
  const [query, setQuery] = useState()
  const [search, setSearch] = useState()
  const data = Api();
  const handleChange = (e) => {
    setQuery(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setSearch(query)
  }
  const searchData = Search(search);
  return (
    <div>
      <h1 className="tc">10 Images</h1>
      <div  className="tc ma2 pa2">
        <form onSubmit={handleSubmit}>
          <input
            className="pa3 ba b--green bg-lightest-blue"
            type="text"
            name="query"
            placeholder="search"
            value={query}
            onChange={handleChange}
            />
        <button  className="f6 link ml3 dim ph3 pv2 mb2
            dib white bg-dark-green">
              Enter
        </button>
        </form>
      </div>
      <div className="pa2 tc ma1">
        <Scroll>
          <div className="contain">
          {
            search ? searchData.map((img, i) => (
              <>
              <Img key={i} src={img.urls.thumb} alt={img.urls.name}/>
              </>
            ))
             :
            data.map((img, i) => (  
              <>
                <Img key={i} src={img.urls.thumb} alt={img.urls.name}/>
              </>
            ))
          }
          </div> 
        </Scroll>
       
      </div>
    </div>
    
  );
}

export default App;
