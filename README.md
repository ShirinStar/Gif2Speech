# Gif to Speech 

### Project description 
An audio-visual instrument using Giphy and text to speech APIs.

![screenshots](https://i.imgur.com/XYaE5bH.png)(https://i.imgur.com/1RbLOC3.jpg)

### Goals
I hope that throughout this project to gain a better understanding on the ins and out of react, mainly looked to explore- Form (user input), router, props, conditional functions, connections between two APIs and front-end skills. 

### Libraries and technologies in use:
[React-Key Handler](https://www.npmjs.com/package/react-key-handler), [react-voice-components](https://github.com/grvcoelho/react-voice-components/), React-Router-Dom, Axios and Giphy API. 

### Code Snippet

```
  <Header />
          <div className='btnDiv'>
            {this.state.keyboards.length===15 ? <Again refreshPage={this.refreshPage}/> :
            <div className='btnWarp'>
            <Link className='addLink' to='/search-text'> Add Gifs </Link>
            <main className='search'>
            <Route path='/search-text' render={() => (
              <div>
              <SearchText searchText={this.searchText}/>
              </div>
              )}
            />
          </main>
          </div>
          }
        </div>
```

### Time frames
Component | Priority | Estimated Time | Time Invetsted 
--- | --- | --- | ---
Adding Gif by {search word} | H | 2.5 |
Random Gif to each search word | H | 2.5 |
Adding form (submit+add+text) | H | 3.5 |
Link form to Gif search | H | 2 |
Maybe moving to IBM API | M | 2.5 |
Link form to text 2 speech | H | 3 |
Full screen input text animation transperant | M | 2
Done button | H | 2
Delete Button | M | 1.5
Debbuging collisions | H | 3
Design | H | 13

### wireframres
![initial wireframes](https://i.imgur.com/40MRckk.png)

### Component Hierarchy
![Hierarchy sketch](https://i.imgur.com/wiiLKik.jpg)

### Giphy API documentation
- [link](https://developers.giphy.com/docs/)

### post MVP
maybe to add to lyrics API and play songs that way.. :)

### acknowledgements
This project was made possible thanks to Jason Karlin, David Whitlatch, Drake Talley and  Brian Flynn from General Assembley.



