


## Usage

    var parser = require("studentlife-parser/studentlife-parser.js");
    var attributeList = require("attribute.js");
    
    var callback = (values, keys, uid) => console.log(values, keys, uid);
    
    parser(attributeList, callback)

The parser will parse data in accordance to attributes given.
For each parsed record, the callback will be called given one record.

The variables `values` and `keys` are arrays that map one-to-one.
The variable `uid` is the identifier of the user associated with that record.


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
       * this should be in order from least to most
       */
      "choice": ["never", "sometimes", "always"], 

      /* optional
       * this is a list of keys to ignore
       * for example, "type" can be ignored
       */
       "ignore":  ["type"]
    }



