# Magic 8 Ball Plan

## what html elements do I need?
* text area for the question (static)
* button (static)
* paragraph to hold answer (dynamic)

## what state do I need?
* answer
* randomIdx

## what events am I listening for? what happens when those events are fired?
* Button click
    * generate a random index
    * get the value of the answer
    * display the answer on the page

## random number example
    Math.floor(Math.random()*20 + 1)
    OR
    math.ceil(Math.random()*20)

    const colors = ['red', 'white', 'blue']
    Math.floor(Math.random()*3)
    Math.ceil(Math.random()*3 - 1)
        Math.floor(Math.random()*colors.length)
