## What is this Repository?

I'm learning to code nodejs using the atom editor. The following notes are little reminders of all the cool features I discover along the way.

## My Notes

g:\nodejs
  > learnyounode


Atom
  ALT + R           -> Run script
  CTRL + SHFT + C   -> Kill running script

  CTRL + SHFT       -> cycle tabs
  CTRL + SHFT + P   -> open keyboard shortcuts

  CTRL + SHFT + D   -> duplicate line
  CTRL + SHFT + K   -> delete line

  CTRL + /          -> toggle comments

  CTRL + ALT + M    -> run mocha tests

  CTRL + ALT + R    -> refactor variable


Debug
  F5 start debugging
  SHFT + F5 stop debugging
  F9 add breakpoint
  F10 step next
  F11 step-in
  SHFT + F11 step-out

  https://github.com/node-inspector/node-inspector
    node-debug myapp.js


Packages
  Emmet
    When HTML editing syntax

  advanced-open-file
    CTRL + ALT + O

  mocha for TDD
    npm install -g mocha
    npm install chai

  mocha-test-runner

  highlight-selected

  refactor
  js-refactor
  
  javascript linter
    npm install -g eslint


Create New App for TDD
------------------
> mkdir myproject
> npm init
  # creates package.json
> mkdir main
> mkdir test
> npm install mocha --save
  # updates package.json
> npm install chai --save
> vi package.json
  "scripts": {
    "test": "./node_modules/.bin/mocha --reporter spec"
  # spec is more verbose reporting for newbies
> npm test
> touch index.js
> touch main/foo.js
> touch test/foo-test.js


Web Client App
---
> npm install request --save


Web Server App
---
> npm install express --save


Mocks & Spies
---
http://sinonjs.org/
