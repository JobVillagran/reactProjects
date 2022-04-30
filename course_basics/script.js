// Using the babel script and render, you can print on the index page

ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("main-container"))

ReactDOM.render(<h2>Test with H2</h2>, document.getElementById("main-container"))

ReactDOM.render(<h3>Using H3 with lowercase</h3>, document.getElementById("main-container"))

ReactDOM.render(<h4>H3 Didn't print with lowercase. this is H4</h4>, document.getElementById("root"))

ReactDOM.render(<h5>This is H5</h5>, document.getElementById("main-container"))

ReactDOM.render(<h1>This H1 is replacing the H5</h1>, document.getElementById("main-container"))

ReactDOM.render(<h1>This H1 is with the<br/>querySelector method</h1>, document.querySelector("#main-container"))

// ReactDOM.render(

//     <div class="container">
//        <h1 style={{backgroundColor: "lightblue", margin: "20px"}}>This is an image</h1>
//        <img src="https://fslightbox.com/img/environments/react.png" width="200px" style={{margin: "20px"}} ></img>
//        <h2 style={{margin: "20px"}} >This is an H2 text</h2>
//    </div>

// ,document.getElementById("max"))