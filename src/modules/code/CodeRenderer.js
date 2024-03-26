import HelpDetails from '../help/HelpDetails';

const topicDetail = {
    id: 0,
    question: 'write an example for javascript promise',
    answer: `Certainly! Here is an example of using a JavaScript promise to load an image from a URL and display it on a web page:

// Define a function that returns a promise
function loadImage(url) {
    return new Promise(function(resolve, reject) {
        var img = new Image();
        img.onload = function() {
            resolve(img);
        };
        img.onerror = function() {
            reject(new Error('Could not load image at ' + url));
        };
        img.src = url;
    });
}

// Call the function and use the promise to display the image
loadImage('https://example.com/image.jpg')
.then(function(img) {
    document.body.appendChild(img);
})
.catch(function(error) {
    console.error(error);
});
        
        In this example, loadImage() is a function that takes a URL as an argument and returns a promise. The promise represents the asynchronous loading of the image from the URL. If the image loads successfully, the promise is resolved with the img object. If there is an error loading the image, the promise is rejected with an error object.
        The then() method is used to handle the successful resolution of the promise. In this case, it adds the img object to the body of the web page.
        The catch() method is used to handle any errors that occur during the loading of the image. In this case, it logs the error to the console.`,
};

const CodeRenderer = () => {
    return (
        <div className="codeRenderer">
            <HelpDetails topicData={topicDetail} />
        </div>
    );
};

export default CodeRenderer;
