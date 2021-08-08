# test IED

## Table of contents
* [General infos](#general-infos)
* [Technologies](#technologies)
* [Setup](#setup)

## General infos
This project is a small app with a login page and a home page.
I managed errors for email and password forms, and if the user is already
an In Extenso Digital Collaborator, the homepage is a bit different. I
created 2 custom components called IEDFormInput and IEDFormButton. 

## Technologies
This project was created with:

* Formik (https://formik.org/): Formik is a React Library. I used it to
                                to create a form for the email and password
                                on Login page. It has its own errors management.
                                
* Yup (https://www.npmjs.com/package/yup): Yup is a package for React-native and 
                                           a must have for Formik. Its use in a app
                                           is to validate a form with its own schemas. 
                                           You can manage if some input are required before
                                           submit your email and password.
                                           
## Setup

To run this project, you need to run it with this command:

* npm install or npm i
* npx react-native run-android
