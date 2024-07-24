
// Convert JSON on CVSS to Turtle for Css property namespace
import cssData from '../ed/css/CSS.json' with { type: 'json' };

// console.log(JSON.stringify(cssData).slice(0,100))

function camelCasify (str) {
  var result = str[0]
  for (let i=1; i < str.length; i++) {
     result += str[i-1] === '-' ? str[i].toUpperCase() : str[i]
  }
  return result.replace('-','')
}

console.log(`@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.
@prefix css: <http://www.w3.org/ns/css#> .

<> rdfs:comment """This ontology allows CSS properties to be expressed in RDF.
The same camelcase convention is used as is used by the subproperties of the
 style property in browser JS implementations.

 """ .
  `)
for (const dfn of cssData.properties) {
  const camel = dfn.styleDeclaration.pop()
  console.log(`css:${camel} a rdf:Property; rdfs:label "${dfn.name}"; spec:values`)
}
