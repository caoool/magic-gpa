# Magic GPA

## Resources

> [Meteor](https://www.meteor.com/) is a full stack NodeJS framework that handles both back-end and front-end.  
> [synaptic](https://github.com/cazala/synaptic) is a javascript library that handles nerual network that works inside a browser.

### Useful guides

> * https://github.com/cazala/synaptic/wiki/Neural-Networks-101
> * https://github.com/cazala/synaptic/wiki/Normalization-101
> * http://blog.webkid.io/neural-networks-in-javascript/

## Synaptic usage

I have been playing around with this library, found it to be extremely simple yet powerful.  
Here is some simple sample code in coffeescript that we can extense and make it in use for the real data set.  
Explainations and plans can be found below the code block.

```coffeescript
# npm install synaptic --save
synaptic = require 'synaptic'

Neuron = synaptic.Neuron
Layer = synaptic.Layer
Network = synaptic.Network
Trainer = synaptic.Trainer
Architect = synaptic.Architect

# because order of features does not matter in out situation
# we will simply use perceptron instead of LSTM
perceptron = new Architect.Perceptron 2, 3, 1
trainer = new Trainer perceptron

# training dataset we will either fake or collect
# here is an extreme simple dataset that can mimic our application
# explainations and plans below code block
trainingSet = [
  {
    input: [1, 0]
    output: [1]
  },
  {
    input: [0, 1]
    output: [0]
  }
]

# don't know what's happending and how to tweak yet
# will dip more into this later
trainingOptions = 
  rate: .1
  iterations: 20000
  error: .005

# train the model with dataset and options
perceptron.trainer.train trainingSet, trainingOptions

# apply the model and print results
console.log perceptron.activate [0, 0]
console.log perceptron.activate [0, 1]
console.log perceptron.activate [1, 0]
console.log perceptron.activate [1, 1]
```

### Explainations

Dataset explainations:

* Input
  * how often do you **study** scale from 1 - 10
  * how often do you **party** scale from 1 - 10
* Output
  * normalized gpa

Data input and output has to be normalized which means values need to be within [0, 1]  
On the features survay we choose a scale for students to fill range from 0 - 10  

Calculation of output is gpa / 4, again normalized so it will range from [0, 1]  
When we predict new gpas, we will get a value from [0, 1] we simple multiply by 4 to get the actual number

### Why this work?

```
[0, 0] -> [ 0.47401167857516235 ]
[0, 1] -> [ 0.0578785392393465 ]
[1, 0] -> [ 0.9197380312871678 ]
[1, 1] -> [ 0.5285685503604668 ]
```

Above is the output generate by the code.  

Lets first assume [1, 0] - [study, party] will have a perfect ouput 1 = 4.0 GPA  
Above result explains perfectly this model, for example first case [0, 1], will generate a really low GPA if student party a lot and doesn't study

### TODOs

* Get dataset
* Expand input features
* Find weights
* Tweak input features
* Tweak train options
* Wrap with web server
