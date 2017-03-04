


## Usage

    var parser = require("studentlife-parser/studentlife-parser.js");
    var attributeList = require("attribute.js");
    
    var callback = (data) => console.log(data);
    
    parser(attributeList, callback)

The parser will parse data in accordance to attributes given.
For each parsed record, the callback will be called given one record.

## Attribute Configuration
You should create an attribute file (example provided).
This can be a module that exports an array of objects.
Each object will contains information on a data source.

The format of the attributes should be:

    {
      /* required */
      "file": "path/to/file",
  
      /* optional
       * this is the list of possible responses
       * for example, "always" or "sometimes"
       * if a choice is not in this array, original value will be used
       * if not specified, original value will be used
       */
      "choice": "Array of possible choices"
    }



