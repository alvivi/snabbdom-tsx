This library can be used to use Snabbdom with TSX files

# How to use

Example file: 

```
import * as Snabbdom from "snabbdom-tsx";

var i = 5;
<h1>{i.toString()} seconds elapsed</h1>
```

Add this to compiler options

```
"compilerOptions": {
    "jsx": "react",
    "reactNamespace": "Snabbdom"
}
```

Also add snabbdom-tsx as a npm package


