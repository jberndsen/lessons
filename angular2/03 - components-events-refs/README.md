Angular 2 lesson pack - lesson 3
==============================================

## Installation

* Install gulp globally by running `npm install -g gulp`
* Install local project dependencies by running `npm install`

## Running the project

* Simply call `gulp` to build the project and start a local web server running it. When you make a code change, it automatically re-transpiles and reloads.

## Lesson content

This lesson code shows how to use events and refs, see the notTodoInput component in the `src/app` folder.

 - events
    - put between parentheses, e.g. (click)= on a component
 	- works for both native and custom events
	- no more directives per event required (ng-click, and so on)
	- you can pass $event to get the event itself 
 
 - refs:
    - used to make components referencable
    - declare with a '#'-sign, see #log-me